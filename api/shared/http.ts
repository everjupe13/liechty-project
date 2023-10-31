export const useHttpRequest = <T>(url: string, options?: {}) => {
  const config = useRuntimeConfig()

  return useAsyncData<T>(url, () =>
    $fetch(url, {
      ...options,
      timeout: 5000,
      baseURL: config.public.baseUrl as string,
      headers: {
        Accept: 'application/json'
      }
    })
  )
}
