<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { email as emailValidator, required } from '@vuelidate/validators'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const formData = reactive({
  name: '',
  secondName: '',
  surname: '',
  phone: '',
  email: '',

  companyName: '',
  companyPosition: '',
  fax: '',

  country: '',
  city: '',
  address: '',
  zipCode: '',

  shippingCounty: '',
  shippingCity: '',
  shippingAddress: '',
  shippingZipCode: ''
})

const rules = {
  name: { required },
  secondName: {},
  surname: { required },
  phone: { required },
  email: { required, emailValidator },

  companyName: {},
  companyPosition: {},
  fax: {},

  country: { required },
  city: { required },
  address: { required },
  zipCode: { required },

  shippingCounty: { required },
  shippingCity: { required },
  shippingAddress: { required },
  shippingZipCode: { required }
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
        General Information
      </h3>
      <div class="mb-55 grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.name.$model"
            v-bind="inputPropsMapper(v$.name)"
            class="mb-15"
            placeholder="Name*"
          />
          <AppInput
            v-model="v$.surname.$model"
            v-bind="inputPropsMapper(v$.surname)"
            class="mb-15"
            placeholder="Surname*"
          />
          <AppInput
            v-model="v$.email.$model"
            v-bind="inputPropsMapper(v$.email)"
            class="mb-15"
            placeholder="Email"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.secondName.$model"
            v-bind="inputPropsMapper(v$.secondName)"
            class="mb-15"
            placeholder="Last Name"
          />
          <AppInput
            v-model="v$.phone.$model"
            v-bind="inputPropsMapper(v$.phone)"
            class="mb-15"
            placeholder="Mobile Number*"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-20 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.companyName.$model"
            v-bind="inputPropsMapper(v$.companyName)"
            class="mb-15"
            placeholder="Company Name"
          />
          <AppInput
            v-model="v$.fax.$model"
            v-bind="inputPropsMapper(v$.fax)"
            class="mb-15"
            placeholder="Fax"
          />
        </div>

        <div>
          <AppInput
            v-model="v$.companyPosition.$model"
            v-bind="inputPropsMapper(v$.companyPosition)"
            class="mb-15"
            placeholder="Company Position"
          />
        </div>
      </div>
    </div>
    <div class="mb-70 md:mb-40">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        Mailing address
      </h3>
      <div class="grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.country.$model"
            v-bind="inputPropsMapper(v$.country)"
            class="mb-15"
            placeholder="Country*"
          />
          <AppInput
            v-model="v$.address.$model"
            v-bind="inputPropsMapper(v$.address)"
            class="mb-15"
            placeholder="Address*"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.city.$model"
            v-bind="inputPropsMapper(v$.city)"
            class="mb-15"
            placeholder="City*"
          />
          <AppInput
            v-model="v$.zipCode.$model"
            v-bind="inputPropsMapper(v$.zipCode)"
            class="mb-15"
            placeholder="ZIP/Postal Code*"
          />
        </div>
      </div>
    </div>
    <div class="mb-[120px] md:mb-60">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        Shipping address
      </h3>
      <div class="grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.shippingCounty.$model"
            v-bind="inputPropsMapper(v$.shippingCounty)"
            class="mb-15"
            placeholder="Country*"
          />
          <AppInput
            v-model="v$.shippingAddress.$model"
            v-bind="inputPropsMapper(v$.shippingAddress)"
            class="mb-15"
            placeholder="Address*"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.shippingCity.$model"
            v-bind="inputPropsMapper(v$.city)"
            class="mb-15"
            placeholder="City*"
          />
          <AppInput
            v-model="v$.shippingZipCode.$model"
            v-bind="inputPropsMapper(v$.shippingZipCode)"
            class="mb-15"
            placeholder="ZIP/Postal Code*"
          />
        </div>
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
        Next step
      </AppButton>
    </div>
  </div>
</template>
