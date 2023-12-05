<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { DropdownLinkedList } from '@/components/shared/dropdown'

import { useFaq } from '../model/index'
import { FaqItemType } from '../model/types'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const { faq } = useFaq()
const mappedFaq = computed(() =>
  faq.value && faq.value.length > 0
    ? faq.value.map((faqItem: FaqItemType) => ({
        opened: false,
        label: isEN.value ? faqItem.title : faqItem.title_alt || '',
        body: isEN.value ? faqItem.description : faqItem.description_alt || ''
      }))
    : []
)
</script>

<template>
  <section class="py-[140px] will-change-[height] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">FAQ</h2>
      </div>
      <div v-if="faq && faq.length > 0">
        <DropdownLinkedList :dropdown-data="mappedFaq" />
      </div>
    </div>
  </section>
</template>
