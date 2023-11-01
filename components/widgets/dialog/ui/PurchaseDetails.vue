<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

import PurchaseDetailsCommonForm from './PurchaseDetailsCommonForm.vue'
import PurchaseDetailsPersonalForm from './PurchaseDetailsPersonalForm.vue'
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
    class="flex items-center justify-center"
    content-class="px-40 py-50 bg-white rounded-[14px] h-[80vh] max-w-[60vw] w-full md:px-20 md:py-50 md:rounded-[12px] md:mx-10"
  >
    <form
      class="flex h-full flex-col items-center overflow-y-scroll p-10"
      @submit.prevent
    >
      <div class="h-full w-full">
        <template v-if="currentFormId === 0">
          <KeepAlive>
            <PurchaseDetailsPersonalForm @submit="handleFormSubmit" />
          </KeepAlive>
        </template>

        <template v-else-if="currentFormId === 1">
          <KeepAlive>
            <PurchaseDetailsCommonForm
              @submit="handleFormSubmit"
              @back-nav="handleBackForm"
            />
          </KeepAlive>
        </template>

        <template v-else>
          <KeepAlive>
            <PurchaseDetailsSuccess
              @submit="handleFormSubmit"
              @back-nav="handleBackForm"
            />
          </KeepAlive>
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
