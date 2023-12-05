import { CategoryType } from '@/api/categories/types'

export type ModelType = {
  id: number
  tabs: {
    id: number
    label: string
    label_alt: string | null
    text: string
    text_alt: string | null
    model: number
  }[]
  images: {
    id: number
    image: string
    imageThumb: string
    is_main: boolean
    model: number
  }[]
  categories: CategoryType[]
  is_active: true
  name: string
  name_alt: string | null
  slug: string
  description: string
  description_alt: string | null
  short_description: string
  short_description_alt?: string | null
  scheme: number
  price: string
  price_alt: string | null
  technical_data: {
    id: number
    label: string
    label_alt: string | null
    value: string
    value_alt: string | null
  }[]
}
