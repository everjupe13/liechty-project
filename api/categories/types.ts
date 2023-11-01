export type CategoryType = {
  id: number
  products: {
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
  }[]
  name: string
  slug: string
  old_id: number
}
