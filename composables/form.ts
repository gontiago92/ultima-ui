// useForm.js
import { reactive, toRefs } from 'vue';


export function useForm({ validationSchema }) {
  const form = reactive({});
  const errors = ref({})
  let validator = null
  const setupValidator = (_validator) => {
    validator = isRef(_validator) ? _validator.value : _validator;
  }
  const initialize = (obj, schema) => {
    for (const key in schema) {
      if ('schema' in schema[key]) {
        if (!(key in obj)) {
          obj[key] = {};
        }
        initialize(obj[key], schema[key]);
      } else if (schema[key].validate) {
        if (!(key in obj)) {
          obj[key] = validator.getDefault(schema[key].type);
        }
      }
    }
  };

  watch(validationSchema, () => {
    setupValidator(validationSchema)
    initialize(form, validator.schema)
    //console.log('validationSchema changed', form)
  }, { immediate: true })


  const validateField = (key, value) => {
    if (validator) {
      const _validator = validator.schema[key];
      console.log('validator schema', validator, key, value)
      const error = _validator.validate(value);
      errors.value[key] = error;
      console.log('Validate field', error)

    }

    console.log('Errors', errors.value)
  };

  const isValid = computed(() => {
    for (const key in form) {
      console.log('IS VALID : ', key, form[key])
      validateField(key, form[key]);
    }
    return Object.values(errors.value).every(error => !error);
  });

  const validateForm = () => {
    const validation = validator.validate(form);
    errors.value = validation.errors
    return validation.isValid;
  };

  const handleSubmit = (callback) => {
    return () => {
      if (validateForm()) {
        callback(form);
      }
    };
  };
  return {
    form,
    errors,
    isValid,
    handleSubmit,
    validate: validateForm,
  };
}
