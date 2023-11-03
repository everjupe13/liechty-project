<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

import PurchaseDetailsCloseButton from './PurchaseDetailsCloseButton.vue'
import PurchaseDetailsCommonForm from './PurchaseDetailsCommonForm.vue'
import PurchaseDetailsPersonalForm from './PurchaseDetailsPersonalForm.vue'
import PurchaseDetailsPreorderHeader from './PurchaseDetailsPreorderHeader.vue'
import PurchaseDetailsSuccess from './PurchaseDetailsSuccess.vue'

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

const currentFormId = ref(0)
const handleFormSubmit = () => {
  if (currentFormId.value > 1) {
    emit('confirm')
  }

  currentFormId.value += 1
}

const handleBackForm = () => {
  currentFormId.value =
    currentFormId.value > 0 ? currentFormId.value - 1 : currentFormId.value
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
        <template v-if="currentFormId !== 2">
          <PurchaseDetailsCloseButton
            class="absolute right-25 top-25"
            @click="emit('confirm')"
          />
          <PurchaseDetailsPreorderHeader class="mb-50" />

          <div class="h-full w-full">
            <KeepAlive v-if="currentFormId === 0">
              <PurchaseDetailsPersonalForm @submit="handleFormSubmit" />
            </KeepAlive>

            <KeepAlive v-else-if="currentFormId === 1">
              <PurchaseDetailsCommonForm
                @submit="handleFormSubmit"
                @back-nav="handleBackForm"
              />
            </KeepAlive>
          </div>
        </template>

        <template v-else>
          <PurchaseDetailsCloseButton
            class="absolute right-25 top-25"
            @click="$router.push('/')"
          />
          <PurchaseDetailsSuccess
            @submit="handleFormSubmit"
            @back-nav="handleBackForm"
          />
        </template>
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
