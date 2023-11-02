import { ComponentPublicInstance } from 'vue'

export type ProductGalleryExpose = {
  swiperActiveIndex: Ref<number>
}

export type ProductGalleryComponent = ComponentPublicInstance &
  ProductGalleryExpose
