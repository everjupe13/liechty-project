import { ModelType } from '@/api/models/types'
import { useHttpRequest } from '@/api/shared/http'

export const useModels = () => {
  const models = ref<ModelType[]>([])

  const fetchModels = async () => {
    try {
      const { data, error } =
        await useHttpRequest<ModelType[]>(`/api/data/models`)

      if (!error.value) {
        models.value = data.value || []
        return { data, error, status: true }
      }

      return { data: ref([]), error, status: true }
    } catch (error) {
      console.log(error)
      return { status: false, error, data: ref([]) }
    }
  }

  const fetchModelBySlug = (slug: string) => {
    try {
      const { data, error } = useHttpRequest<ModelType>(
        `/api/data/models/${slug}`
      )

      if (!error.value) {
        // models.value = data.value || []
        return { data, error, status: true }
      }

      return { data: ref(null), error, status: true }
    } catch (error) {
      console.log(error)
      return { status: false, error, data: ref(null) }
    }
  }

  fetchModels()

  return {
    models,
    fetchModels,
    fetchModelBySlug
  }
}
