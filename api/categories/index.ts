import { CategoryType } from '@/api/categories/types'
import { useHttpRequest } from '@/api/shared/http'

export const useCategories = () => {
  const categories = ref<CategoryType[]>([])

  const fetchCategories = () => {
    try {
      const { data, error } =
        useHttpRequest<CategoryType[]>(`/api/data/categories`)

      if (!error.value) {
        categories.value = data.value || []
        return { data, error, status: true }
      }

      return { data: ref([]), error, status: true }
    } catch (error) {
      console.log(error)
      return { status: false, error, data: ref([]) }
    }
  }

  fetchCategories()

  return {
    categories,
    fetchCategories
  }
}
