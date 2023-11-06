import { CategoryType } from '@/api/categories/types'

export type ProductType = {
  id: number
  features: {
    id: number
    label: string
    value: string
    product: number
  }[]
  image: string
  vendor_code: string
  name: string
  slug: string
  description: string
  category: number
  model: number[]
}

export type ModelType = {
  id: number
  tabs: {
    id: number
    label: string
    text: string
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
  slug: string
  description: string
  short_description: string
  scheme: number
  technical_data: {
    id: number
    label: string
    value: string
  }[]
}
