<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { helpers } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'

import { AppButton } from '@/components/shared/button'
import { AppInput } from '@/components/shared/input'
import { emailValidator, requiredValidator } from '@/utils/validators'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

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
  name: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  secondName: {},
  surname: {
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
  },

  companyName: {},
  companyPosition: {},
  fax: {},

  country: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  city: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  address: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  zipCode: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },

  shippingCounty: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  shippingCity: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  shippingAddress: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
    )
  },
  shippingZipCode: {
    customRequired: helpers.withMessage(
      requiredValidator.message.bind(null, isEN.value),
      requiredValidator.validator
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
        {{ isEN ? 'General Information' : 'Allgemeine Informationen' }}
      </h3>
      <div class="mb-55 grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.name.$model"
            v-bind="inputPropsMapper(v$.name)"
            class="mb-15"
            :placeholder="isEN ? 'Name*' : 'Name*'"
          />
          <AppInput
            v-model="v$.surname.$model"
            v-bind="inputPropsMapper(v$.surname)"
            class="mb-15"
            :placeholder="isEN ? 'Surname*' : 'Nachname*'"
          />
          <AppInput
            v-model="v$.email.$model"
            v-bind="inputPropsMapper(v$.email)"
            class="mb-15"
            :placeholder="isEN ? 'Email*' : 'Email*'"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.secondName.$model"
            v-bind="inputPropsMapper(v$.secondName)"
            class="mb-15"
            :placeholder="isEN ? 'Last Name' : 'Familienname'"
          />
          <AppInput
            v-model="v$.phone.$model"
            v-bind="inputPropsMapper(v$.phone)"
            class="mb-15"
            :placeholder="isEN ? 'Mobile Number*' : 'Handynummer*'"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-20 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.companyName.$model"
            v-bind="inputPropsMapper(v$.companyName)"
            class="mb-15"
            :placeholder="isEN ? 'Company Name' : 'Name der Firma'"
          />
          <AppInput
            v-model="v$.fax.$model"
            v-bind="inputPropsMapper(v$.fax)"
            class="mb-15"
            :placeholder="isEN ? 'Fax' : 'Fax'"
          />
        </div>

        <div>
          <AppInput
            v-model="v$.companyPosition.$model"
            v-bind="inputPropsMapper(v$.companyPosition)"
            class="mb-15"
            :placeholder="isEN ? 'Company Position' : 'Firmenposition'"
          />
        </div>
      </div>
    </div>
    <div class="mb-70 md:mb-40">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        {{ isEN ? 'Mailing address' : 'Postanschrift' }}
      </h3>
      <div class="grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.country.$model"
            v-bind="inputPropsMapper(v$.country)"
            class="mb-15"
            :placeholder="isEN ? 'Country*' : 'Land*'"
          />
          <AppInput
            v-model="v$.address.$model"
            v-bind="inputPropsMapper(v$.address)"
            class="mb-15"
            :placeholder="isEN ? 'Address*' : 'Adresse*'"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.city.$model"
            v-bind="inputPropsMapper(v$.city)"
            class="mb-15"
            :placeholder="isEN ? 'City*' : 'Stadt*'"
          />
          <AppInput
            v-model="v$.zipCode.$model"
            v-bind="inputPropsMapper(v$.zipCode)"
            class="mb-15"
            :placeholder="isEN ? 'ZIP/Postal Code*' : 'Postleitzahl*'"
          />
        </div>
      </div>
    </div>
    <div class="mb-[120px] md:mb-60">
      <h3 class="mb-25 font-bold text-24 md:mb-15 md:text-18">
        {{ isEN ? 'Shipping address' : 'Lieferanschrift' }}
      </h3>
      <div class="grid grid-cols-2 gap-x-20 md:mb-0 md:grid-cols-1">
        <div>
          <AppInput
            v-model="v$.shippingCounty.$model"
            v-bind="inputPropsMapper(v$.shippingCounty)"
            class="mb-15"
            :placeholder="isEN ? 'Country*' : 'Land*'"
          />
          <AppInput
            v-model="v$.shippingAddress.$model"
            v-bind="inputPropsMapper(v$.shippingAddress)"
            class="mb-15"
            :placeholder="isEN ? 'Address*' : 'Adresse*'"
          />
        </div>
        <div>
          <AppInput
            v-model="v$.shippingCity.$model"
            v-bind="inputPropsMapper(v$.shippingCity)"
            class="mb-15"
            :placeholder="isEN ? 'City*' : 'Stadt*'"
          />
          <AppInput
            v-model="v$.shippingZipCode.$model"
            v-bind="inputPropsMapper(v$.shippingZipCode)"
            class="mb-15"
            :placeholder="isEN ? 'ZIP/Postal Code*' : 'Postleitzahl*'"
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
        {{ isEN ? 'Next step' : 'Nächster Schritt' }}
      </AppButton>
    </div>
  </div>
</template>
