<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

import FeedbackSuccessDocument from './FeedbackSuccessDocument.vue'
import PurchaseDetailsCloseButton from './PurchaseDetailsCloseButton.vue'

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const handleFormSubmit = () => {
  emit('confirm')
}

const handleCloseForm = () => {
  emit('confirm')
}
</script>

<template>
  <VueFinalModal
    class="flex"
    content-class="overflow-y-scroll h-full w-full flex justify-center pointer-events-none"
  >
    <form
      class="overflow-y-scrollmd:mx-16 md:my-00 pointer-events-auto my-40 flex w-[1000px] flex-col items-center"
      @submit.prevent
    >
      <div
        class="relative w-full rounded-[20px] bg-white px-100 py-100 md:rounded-[14px] md:px-20 md:py-50"
      >
        <PurchaseDetailsCloseButton
          class="absolute right-25 top-25"
          @click="handleCloseForm"
        />
        <FeedbackSuccessDocument @submit="handleFormSubmit" />
      </div>
    </form>
  </VueFinalModal>
</template>

<style lang="scss" scoped>
.title {
  color: #000;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 1.6px;

  @media (max-width: 767px) {
    font-size: 30px;
  }
}
</style>
