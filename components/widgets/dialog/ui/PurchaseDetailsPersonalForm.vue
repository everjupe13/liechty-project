<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import {
  email as emailValidator,
  helpers,
  required
} from '@vuelidate/validators'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const formData = reactive({
  name: '',
  secondName: '',
  surname: '',
  country: '',
  region: '',
  address: '',
  zipCode: '',
  phone: '',
  email: '',

  companyName: '',
  inn: '',
  bank: '',
  placeRegistration: '',
  typeTaxation: ''
})

const rules = {
  name: { required },
  secondName: { required },
  surname: { required },
  country: { required },
  region: { required },
  address: { required },
  zipCode: { required },
  phone: { required },
  email: { required, emailValidator },

  companyName: {
    requiredIf: helpers.withMessage('Value is required', value =>
      customerType.value === 1 ? !!value : false
    )
  },
  inn: {
    requiredIf: helpers.withMessage('Value is required', value =>
      customerType.value === 1 ? !!value : false
    )
  },
  bank: {
    requiredIf: helpers.withMessage('Value is required', value =>
      customerType.value === 1 ? !!value : false
    )
  },
  placeRegistration: {
    requiredIf: helpers.withMessage('Value is required', value =>
      customerType.value === 1 ? !!value : false
    )
  },
  typeTaxation: {
    requiredIf: helpers.withMessage('Value is required', value =>
      customerType.value === 1 ? !!value : false
    )
  }
}

const customerType = ref(0)
const handleCustomerTypeChange = (id: number) => {
  customerType.value = id
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
  <div class="flex flex-col items-center p-10">
    <div class="w-full">
      <h3 class="mb-20 text-26">Personal Info</h3>
      <div class="mb-20 flex gap-x-10">
        <div
          class="flex cursor-pointer items-center justify-center rounded-full border px-20 py-13 font-medium transition-all text-16"
          :class="
            customerType === 0
              ? 'border-blue bg-blue text-white'
              : 'border-dark bg-transparent text-black'
          "
          @click="handleCustomerTypeChange(0)"
        >
          Individual
        </div>
        <div
          class="flex cursor-pointer items-center justify-center rounded-full border px-20 py-13 font-medium transition-all text-16"
          :class="
            customerType === 1
              ? 'border-blue bg-blue text-white'
              : 'border-dark bg-transparent text-black'
          "
          @click="handleCustomerTypeChange(1)"
        >
          Legal Entity
        </div>
      </div>
      <div class="mb-40 max-w-[550px]">
        <AppInput
          v-model="v$.name.$model"
          v-bind="inputPropsMapper(v$.name)"
          class="mb-15"
          placeholder="Name"
        />
        <AppInput
          v-model="v$.secondName.$model"
          v-bind="inputPropsMapper(v$.secondName)"
          class="mb-15"
          placeholder="Second Name"
        />
        <AppInput
          v-model="v$.surname.$model"
          v-bind="inputPropsMapper(v$.surname)"
          class="mb-15"
          placeholder="Surname"
        />
        <AppInput
          v-model="v$.country.$model"
          v-bind="inputPropsMapper(v$.country)"
          class="mb-15"
          placeholder="Country"
        />
        <AppInput
          v-model="v$.region.$model"
          v-bind="inputPropsMapper(v$.region)"
          class="mb-15"
          placeholder="Region"
        />
        <AppInput
          v-model="v$.address.$model"
          v-bind="inputPropsMapper(v$.address)"
          class="mb-15"
          placeholder="Address"
        />
        <AppInput
          v-model="v$.zipCode.$model"
          v-bind="inputPropsMapper(v$.zipCode)"
          class="mb-15"
          placeholder="Zip code"
        />
        <AppInput
          v-model="v$.phone.$model"
          v-bind="inputPropsMapper(v$.phone)"
          class="mb-15"
          placeholder="Phone"
        />
        <AppInput
          v-model="v$.email.$model"
          v-bind="inputPropsMapper(v$.email)"
          class="mb-15"
          placeholder="Email"
        />
        <KeepAlive>
          <template v-if="customerType === 1">
            <AppInput
              v-model="v$.companyName.$model"
              v-bind="inputPropsMapper(v$.companyName)"
              class="mb-15"
              placeholder="Company Name"
            />
            <AppInput
              v-model="v$.inn.$model"
              v-bind="inputPropsMapper(v$.inn)"
              class="mb-15"
              placeholder="INN"
            />
            <AppInput
              v-model="v$.bank.$model"
              v-bind="inputPropsMapper(v$.bank)"
              class="mb-15"
              placeholder="Bank Info"
            />
            <AppInput
              v-model="v$.placeRegistration.$model"
              v-bind="inputPropsMapper(v$.placeRegistration)"
              class="mb-15"
              placeholder="Place of Registration"
            />
            <AppInput
              v-model="v$.typeTaxation.$model"
              v-bind="inputPropsMapper(v$.typeTaxation)"
              class="mb-15"
              placeholder="Type of Taxation"
            />
          </template>
        </KeepAlive>
      </div>
      <div>
        <AppButton
          type="submit"
          class="ml-auto"
          theme="blue"
          @click="handleFormSubmit"
        >
          Next
        </AppButton>
      </div>
    </div>
  </div>
</template>
