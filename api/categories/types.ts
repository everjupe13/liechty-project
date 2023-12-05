export type CategoryType = {
  id: number
  products: {
    id: number
    features: {
      id: number
      label: string
      label_alt: string | null
      value: string
      value_alt: string | null
      product: number
    }[]
    image: string
    vendor_code: string
    name: string
    name_alt: string | null
    slug: string
    description: string
    description_alt: string | null
    category: number
    model: number[]
  }[]
  name: string
  name_alt: string | null
  slug: string
  old_id: number
}
