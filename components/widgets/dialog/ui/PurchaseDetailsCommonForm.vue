<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'back-nav'): void
}>()

const formData = reactive({
  typePlace: '',
  roomsNumber: '',
  floorsNumber: '',
  totalArea: '',
  humidity: '',
  winterHumidity: '',
  winterTemperature: '',
  summerHumidity: '',
  summerTemperature: '',

  comment: ''
})

const rules = {
  typePlace: {},
  roomsNumber: {},
  floorsNumber: {},
  totalArea: {},
  humidity: {},
  winterHumidity: {},
  winterTemperature: {},
  summerHumidity: {},
  summerTemperature: {},

  comment: {}
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
  if (isValid) {
    emit('submit')
  }
}
</script>

<template>
  <div>
    <div class="mb-70 md:mb-40">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        Humidification area information
      </h3>
      <div class="mb-55 grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.typePlace.$model"
            v-bind="inputPropsMapper(v$.typePlace)"
            class="mb-15"
            placeholder="Type of place for humidification*"
          />
          <AppInput
            v-model="v$.roomsNumber.$model"
            v-bind="inputPropsMapper(v$.roomsNumber)"
            class="mb-15"
            placeholder="Number of Rooms"
          />
          <AppInput
            v-model="v$.floorsNumber.$model"
            v-bind="inputPropsMapper(v$.floorsNumber)"
            class="mb-15"
            placeholder="Number of floors"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.totalArea.$model"
            v-bind="inputPropsMapper(v$.totalArea)"
            class="mb-15"
            placeholder="Total area, m2"
          />
          <AppInput
            v-model="v$.humidity.$model"
            v-bind="inputPropsMapper(v$.humidity)"
            class="mb-15"
            placeholder="Average humidity outside"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-20 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.winterHumidity.$model"
            v-bind="inputPropsMapper(v$.winterHumidity)"
            class="mb-15"
            placeholder="Average outdoor humidity in winter"
          />
          <AppInput
            v-model="v$.winterTemperature.$model"
            v-bind="inputPropsMapper(v$.winterTemperature)"
            class="mb-15"
            placeholder="Average temperature in winter"
          />
        </div>

        <div>
          <AppInput
            v-model="v$.summerHumidity.$model"
            v-bind="inputPropsMapper(v$.summerHumidity)"
            class="mb-15"
            placeholder="Average outdoor humidity in summer"
          />
          <AppInput
            v-model="v$.summerTemperature.$model"
            v-bind="inputPropsMapper(v$.summerTemperature)"
            class="mb-15"
            placeholder="Average temperature in summer"
          />
        </div>
      </div>
    </div>
    <div class="mb-[120px] md:mb-60">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        Additional information
      </h3>
      <div>
        <AppInput
          v-model="v$.comment.$model"
          v-bind="inputPropsMapper(v$.comment)"
          class="mb-15"
          placeholder="Your comment or questions"
        />
      </div>
    </div>

    <div class="flex items-center justify-center">
      <AppButton
        type="submit"
        outlined
        class="w-full max-w-[415px]"
        theme="blue"
        @click="handleFormSubmit"
      >
        Submit
      </AppButton>
    </div>
  </div>
</template>
