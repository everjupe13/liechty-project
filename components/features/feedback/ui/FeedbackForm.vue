<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'
import { useSuccessModal } from '@/components/widgets/dialog'
import { emailValidator, requiredValidator } from '@/utils/validators'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const formData = reactive({
  name: '',
  phone: '',
  email: ''
})

const rules = {
  name: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  phone: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  email: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    ),
    customEmailValidator: helpers.withMessage(
      emailValidator.message.bind(null, isEN.value),
      emailValidator.validator
    )
  }
}

const v$ = useVuelidate(rules, formData)
const inputPropsMapper = (props: { [x: string]: any }) => {
  return {
    isValid: props.$dirty ? !props.$invalid : true,
    isDirty: props.$dirty,
    validationMessage: unref(props.$silentErrors[0]?.$message)
  }
}

const { open: openSuccessModal } = useSuccessModal()

const checkClientValidation = () => {
  if (v$.value.$invalid) {
    v$.value.$validate()
    return false
  }

  return true
}

const handleSubmitForm = () => {
  const isValid = checkClientValidation()
  if (isValid) {
    formData.email = ''
    formData.name = ''
    formData.phone = ''

    v$.value.$reset()

    openSuccessModal()
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmitForm">
    <AppInput
      v-model="v$.name.$model"
      v-bind="inputPropsMapper(v$.name)"
      class="mb-15"
      :placeholder="$t('feedbackForm.placeholder.name')"
    />
    <AppInput
      v-model="v$.phone.$model"
      v-bind="inputPropsMapper(v$.phone)"
      class="mb-15"
      :placeholder="$t('feedbackForm.placeholder.phone')"
    />
    <AppInput
      v-model="v$.email.$model"
      v-bind="inputPropsMapper(v$.email)"
      class="mb-15"
      :placeholder="$t('feedbackForm.placeholder.email')"
    />

    <AppButton theme="blue" outlined>{{ $t('feedbackForm.button') }}</AppButton>
  </form>
</template>
