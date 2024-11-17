import {type NitroFetchOptions} from "nitropack";
import type { NitroFetchRequest } from "nitropack";

export function api <T>(url: string, options: NitroFetchOptions<NitroFetchRequest> = {}): Promise<T> {
    const { $api } = useNuxtApp()
    return $api(url, options)
}
