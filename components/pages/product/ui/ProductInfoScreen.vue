<script lang="ts" setup>
// import { formatToCost } from '@/utils/cost'
import { useI18n } from 'vue-i18n'

import { ModelType } from '@/api/models/types'
import { AppButton } from '@/components/shared/button'
import { usePurchaseDetailsModal } from '@/components/widgets/dialog'

import ProductGalleryView from './ProductGalleryView.vue'
import ProductInfoTabs from './ProductInfoTabs.vue'

type Props = {
  data: ModelType | null
}
const props = defineProps<Props>()

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const { open: openFeedbackModal } = usePurchaseDetailsModal()
</script>

<template>
  <section
    class="border-b border-dark/20 pb-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div class="mb-40 grid grid-cols-2 gap-x-40 lg:grid-cols-1 lg:gap-y-20">
        <div
          class="h-[640px] w-full rounded-[14px] bg-gray md:h-[420px]"
          :class="{ 'animate-pulse': !props.data }"
        >
          <ProductGalleryView v-if="props.data" :gallery="props.data.images" />
        </div>
        <div>
          <div class="flex h-full flex-col">
            <div class="flex-grow-0">
              <h2
                class="mb-20 font-bold leading-tight text-48 lg:text-28"
                :class="{
                  'h-52 animate-pulse rounded-[5px] bg-gray-light': !props.data
                }"
              >
                <template v-if="props.data">
                  {{ isEN ? props.data.name : props.data.name_alt }}
                </template>
              </h2>
              <div class="mb-20 flex items-center gap-x-15">
                <p
                  class="leading-none text-24"
                  :class="{ 'h-26 animate-pulse bg-gray-light': !props.data }"
                >
                  <template v-if="props.data">
                    {{
                      `$ ${
                        isEN ? props.data.price : props.data.price_alt || ''
                      }`
                    }}
                  </template>
                </p>
                <template v-if="props.data">
                  <span
                    class="min-h-30 flex cursor-default items-center justify-center rounded-full bg-blue/20 px-14 py-6 pb-8 font-medium leading-none text-blue"
                  >
                    available
                  </span>
                </template>
              </div>
              <div class="mb-40 flex gap-x-10 md:mb-20">
                <template v-if="props.data">
                  <AppButton theme="blue" outlined @click="openFeedbackModal">
                    {{ isEN ? 'Pre-order' : 'Vorbestellung' }}
                  </AppButton>
                </template>
              </div>
            </div>
            <div class="rounded-[14px] border border-dark/20 p-24 md:p-15">
              <div
                v-if="props.data"
                class="prosed leading-normal text-16 md:text-14"
                v-html="
                  isEN ? props.data.description : props.data.description_alt
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rounded-[14px] border border-dark/20 p-40 md:p-15"
        :class="{ 'h-[400px] animate-pulse bg-gray-light': !props.data }"
      >
        <template v-if="props.data">
          <ProductInfoTabs
            :tabs="
              props.data.tabs.map(tab => ({
                id: tab.id,
                label: isEN ? tab.label : tab.label_alt,
                description: isEN ? tab.text : tab.text_alt
              }))
            "
            :technical-data="
              props.data.technical_data.map(data => ({
                id: data.id,
                label: isEN ? data.label : data.label_alt,
                value: isEN ? data.value : data.value_alt
              }))
            "
            :scheme="props.data.scheme"
          />
        </template>
      </div>
    </div>
  </section>
</template>
