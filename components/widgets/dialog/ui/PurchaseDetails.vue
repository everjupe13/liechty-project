<script lang="ts" setup>
// import { useVuelidate } from '@vuelidate/core'
// import { email, required } from '@vuelidate/validators'
import { VueFinalModal } from 'vue-final-modal'

// import { AppButton } from '@/components/shared/button'
// import { AppInput } from '@/components/shared/input'
import PurchaseDetailsUserInfo from './PurchaseDetailsUserInfo.vue'

// const emit = defineEmits<{
//   (e: 'confirm'): void
// }>()

// const formData = reactive({
//   email: '',
//   phone: '',
//   userName: '',
//   orderComment: ''
// })
// const rules = {
//   email: { required, email },
//   phone: { required },
//   userName: { required },
//   orderComment: {}
// }
// const v$ = useVuelidate(rules, formData)
// const inputPropsMapper = (props: { [x: string]: any }) => {
//   return {
//     isValid: props.$dirty ? !props.$invalid : true,
//     isDirty: props.$dirty,
//     validationMessage: unref(props.$silentErrors[0]?.$message)
//   }
// }

// const isLoading = ref(false)
// const isSuccess = ref(false)
// const successScreen = ref(false)

// const onSubmitForm = async () => {
// if (v$.value.$invalid) {
//   v$.value.$validate()
//   isLoading.value = false
//   return
// }

// isLoading.value = true
// isSuccess.value = false
// const { status, error: _error } = await feedbackStore.feedback({
//   phone: formData.phone,
//   email: formData.email,
//   userName: formData.userName,
//   orderComment: formData.orderComment
// })

// isLoading.value = false
// isSuccess.value = true

// if (status) {
//   formData.email = ''
//   formData.userName = ''
//   formData.phone = ''
//   formData.orderComment = ''
//   v$.value.$reset()

// setTimeout(() => {
//   successScreen.value = true
// }, 200)
// }
// }

// const closeModal = () => {
//   emit('confirm')
// }
</script>

<template>
  <VueFinalModal
    class="flex items-center justify-center"
    content-class="px-40 py-50 bg-white rounded-[14px] h-[80vh] max-w-[60vw] w-full md:px-20 md:py-50 md:rounded-[12px] md:mx-10"
  >
    <form class="flex h-full flex-col items-center overflow-y-scroll p-10">
      <div class="w-full">
        <PurchaseDetailsUserInfo />
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
