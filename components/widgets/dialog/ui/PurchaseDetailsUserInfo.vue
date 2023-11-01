<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core'
import { email as emailValidator, required } from '@vuelidate/validators'

import { AppInput } from '@/components/shared/input'

type Props = {
  name?: string
  secondName?: string
  surname?: string
  country?: string
  region?: string
  address?: string
  zipCode?: string
  phone?: string
  email?: string
}
const props = defineProps<Props>()

const formData = reactive({
  name: props.name,
  secondName: props.secondName,
  surname: props.surname,
  country: props.country,
  region: props.region,
  address: props.address,
  zipCode: props.zipCode,
  phone: props.phone,
  email: props.email
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
  email: { required, emailValidator }
}

const v$ = useVuelidate(rules, formData)
const inputPropsMapper = (props: { [x: string]: any }) => {
  return {
    isValid: props.$dirty ? !props.$invalid : true,
    isDirty: props.$dirty,
    validationMessage: unref(props.$silentErrors[0]?.$message)
  }
}
</script>

<template>
  <div class="flex flex-col items-center p-10">
    <div class="w-full">
      <h3 class="mb-20 text-26">Personal Info</h3>
      <div>
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
      </div>
    </div>
  </div>
</template>
