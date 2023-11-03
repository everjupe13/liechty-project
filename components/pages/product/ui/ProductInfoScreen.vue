<script lang="ts" setup>
import { useModal } from 'vue-final-modal'

import { ModelType } from '@/api/models/types'
import { AppButton } from '@/components/shared/button'
import { PurchaseDetails } from '@/components/widgets/dialog'

import ProductGalleryView from './ProductGalleryView.vue'
import ProductInfoTabs from './ProductInfoTabs.vue'
// import { formatToCost } from '@/utils/cost'

type Props = {
  data: ModelType | null
}
const props = defineProps<Props>()

const { open: openFeedbackModal, close: closeFeedbackModal } = useModal({
  component: PurchaseDetails,
  attrs: {
    onConfirm() {
      closeFeedbackModal()
    }
  }
})
</script>

<template>
  <section
    class="border-b border-dark/20 pb-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <template v-if="props.data">
        <div class="mb-40 grid grid-cols-2 gap-x-40 lg:grid-cols-1 lg:gap-y-20">
          <div class="h-[640px] w-full rounded-[14px] bg-gray md:h-[420px]">
            <ProductGalleryView :gallery="props.data.images" />
          </div>
          <div>
            <div class="mb-75 flex h-full flex-col">
              <div class="flex-grow-0">
                <h2 class="mb-20 font-bold leading-tight text-48 lg:text-28">
                  {{ props.data.name }}
                </h2>
                <div class="mb-20 flex items-center gap-x-15">
                  <p class="leading-none text-24">$ 12 000,00</p>
                  <span
                    class="min-h-30 flex cursor-default items-center justify-center rounded-full bg-blue/20 px-14 py-6 pb-8 font-medium leading-none text-blue"
                  >
                    available
                  </span>
                </div>
                <div class="mb-40 flex gap-x-10 md:mb-20">
                  <AppButton theme="blue" outlined @click="openFeedbackModal">
                    Pre-order
                  </AppButton>
                </div>
              </div>
              <div
                class="flex-grow rounded-[14px] border border-dark/20 p-24 md:p-15"
              >
                <div
                  class="prosed leading-normal text-16 md:text-14"
                  v-html="props.data.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-[14px] border border-dark/20 p-40 md:p-15">
          <ProductInfoTabs
            :tabs="
              props.data.tabs.map(tab => ({
                id: tab.id,
                label: tab.label,
                description: tab.text
              }))
            "
          />
        </div>
      </template>
    </div>
  </section>
</template>
