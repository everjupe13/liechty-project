<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'back-nav'): void
}>()

const formData = reactive({
  roomArea: '',
  numberZone: '',
  averageTemperatureInside: '',
  averageTemperatureOutside: '',
  climatType: ''
})

const rules = {
  roomArea: { required },
  numberZone: { required },
  averageTemperatureInside: { required },
  averageTemperatureOutside: { required },
  climatType: { required }
}

const v$ = useVuelidate(rules, formData)
const inputPropsMapper = (props: { [x: string]: any }) => {
  return {
    isValid: props.$dirty ? !props.$invalid : true,
    isDirty: props.$dirty,
    validationMessage: unref(props.$silentErrors[0]?.$message)
  }
}

const checkClientValidation = () => {
  if (v$.value.$invalid) {
    v$.value.$validate()
    return false
  }

  return true
}

const handleFormSubmit = () => {
  const isValid = checkClientValidation()
  if (!isValid) {
    emit('submit')
  }
}

const handleFormBack = () => {
  emit('back-nav')
}
</script>

<template>
  <div class="flex h-full flex-col items-center p-10">
    <div class="flex h-full w-full flex-col">
      <h3 class="mb-20 text-26">Common info</h3>
      <div class="mb-40 max-w-[550px]">
        <AppInput
          v-model="v$.roomArea.$model"
          v-bind="inputPropsMapper(v$.roomArea)"
          class="mb-15"
          placeholder="Room Area"
        />
        <AppInput
          v-model="v$.numberZone.$model"
          v-bind="inputPropsMapper(v$.numberZone)"
          class="mb-15"
          placeholder="Number of Zones"
        />
        <AppInput
          v-model="v$.averageTemperatureInside.$model"
          v-bind="inputPropsMapper(v$.averageTemperatureInside)"
          class="mb-15"
          placeholder="Average Temperature Inside"
        />
        <AppInput
          v-model="v$.averageTemperatureOutside.$model"
          v-bind="inputPropsMapper(v$.averageTemperatureOutside)"
          class="mb-15"
          placeholder="Average Temperature Outside"
        />
        <AppInput
          v-model="v$.climatType.$model"
          v-bind="inputPropsMapper(v$.climatType)"
          class="mb-15"
          placeholder="Climate Type"
        />
      </div>
      <div class="mt-auto flex items-center justify-between">
        <AppButton type="button" @click="handleFormBack">Back</AppButton>
        <AppButton type="submit" theme="blue" @click="handleFormSubmit">
          Submit
        </AppButton>
      </div>
    </div>
  </div>
</template>
