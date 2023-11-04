import { useHttpRequest } from '@/api/shared/http'

import { FaqItemType } from './types'

export const useFaq = () => {
  const faq = ref<FaqItemType[]>([])

  const fetchFaq = async () => {
    try {
      const { data, error } =
        await useHttpRequest<FaqItemType[]>(`/api/data/faq`)

      if (!error.value) {
        faq.value = data.value || []
        return { data, error, status: true }
      }

      return { data: ref([]), error, status: true }
    } catch (error) {
      console.log(error)
      return { status: false, error, data: ref([]) }
    }
  }

  fetchFaq()

  return {
    faq,
    fetchFaq
  }
}
