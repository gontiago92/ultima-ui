// validator.js
class Validator {
  constructor(type) {
    this.rules = [];
    this.requiredRule = null;
    this.isOptional = false;
    this.type = type
  }

  required(options = {message: 'This field is required'}) {
    this.requiredRule = value => {
      if (value == null || value === '') {
        return options.message;
      }
    };
    return this;
  }

  optional() {
    this.isOptional = true;
    return this;
  }

  string(options = {message: 'Must be a string'}) {
    this.type = 'string';
    this.rules.push(value => {
      if (typeof value !== 'string') {
        return options.message;
      }
    });
    return this;
  }

  email(options = {message: 'Invalid email format'}) {
    this.type = 'string';
    this.rules.push(value => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return options.message;
      }
    });
    return this;
  }

  number(options = {message: 'Must be a number'}) {
    this.type = 'number';
    this.rules.push(value => {
      if (typeof value !== 'number') {
        return options.message;
      }
    });
    return this;
  }

  array(options = {message: 'Must be an array'}) {
    this.type = 'array';
    this.rules.push(value => {
      if (!Array.isArray(value)) {
        return options.message;
      }
    });
    return this;
  }

  minLength(min, options = {message: 'Must be at least {min} characters'}) {
    this.rules.push(value => {
      if (value.length < min) {
        return options.message.replace('{min}', min);
      }
    });
    return this;
  }

  pattern(regex, options = {message: 'Invalid format'}) {
    this.rules.push(value => {
      if (!regex.test(value)) {
        return options.message;
      }
    });
    return this;
  }

  min(minValue, options = {message: 'Must be at least {min}'}) {
    this.rules.push(value => {
      if (value < minValue) {
        return options.message.replace('{min}', minValue);
      }
    });
    return this;
  }

  validate(value) {

    if (this.isOptional && (value == null || value === '')) {
      return null;
    }


    if (this.requiredRule) {
      const error = this.requiredRule(value);
      if (error) return error;
    }

    for (let rule of this.rules) {
      const error = rule(value);
      if (error) return error
    }

    return null;
  }

  static object(schema) {
    return {
      validate(formData) {
        const errors = {};
        let isValid = true;

        for (const field in schema) {
          const validator = schema[field];
          const fieldValue = formData ? formData[field] : undefined;
          if (!(validator instanceof Validator)) {

            const nestedValidation = validator.validate(fieldValue);
            if(Object.keys(nestedValidation.errors).length > 0) {
              errors[field] = nestedValidation.errors;

            }
            if (!nestedValidation.isValid) {
              isValid = false;
            }
          } else if (validator.validate) {
            const error = validator.validate(fieldValue);
            if (error) {
              if(error.includes('{field}')) {
                errors[field] = error.replace('{field}', field.charAt(0).toUpperCase() + field.slice(1));
              } else {
                errors[field] = error;
              }

              isValid = false;
            }
          }
        }
        return { errors, isValid };
      },
      schema,
      getDefault(type: any) {
        return Validator.getDefault(type);
      }
    };
  }

  static getDefault(type) {
    switch (type) {
      case 'string':
        return '';
      case 'number':
        return 0;
      case 'array':
        return [];
      default:
        return '';
    }
  }
}

export const validator = {
  string: () => new Validator('string').string(),
  number: () => new Validator('number').number(),
  array: () => new Validator('array').array(),
  object: (schema) => Validator.object(schema),
};
