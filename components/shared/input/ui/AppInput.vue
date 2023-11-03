<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { AppCollapsable } from '@/components/shared/dropdown'

function useEvents(context: (e: any, value: any) => void) {
  const handleChange = (e: Event) => {
    context('update:modelValue', (e.target as HTMLTextAreaElement).value)
  }
  const handleInput = (e: Event) => {
    context('update:modelValue', (e.target as HTMLTextAreaElement).value)
  }

  return {
    handleChange,
    handleInput
  }
}

function randomID() {
  return `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`
}

interface Props {
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  state?: any
  modelValue?: any
  inputWrapperClasses?: string
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'url'
    | 'tel'
    | 'date'
    | 'time'
    | 'range'
    | 'color'
    | 'search'
  validationMessage?: string
  validatable?: boolean
  isValid?: boolean
  isDirty?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: undefined,
  inputWrapperClasses: '',
  placeholder: '',
  state: '',
  validationMessage: '',
  isValid: undefined,
  isDirty: undefined
})
const emits = defineEmits(['change', 'input', 'update:modelValue'])
const { handleChange, handleInput } = useEvents(emits)

const uuid = ref(randomID())
const validationFn = computed(() => props.modelValue.length > 0)
const isValidationMessageShown = computed(() => {
  return props.isValid === undefined ? validationFn.value : !props.isValid
})
</script>

<template>
  <div>
    <div
      class="group relative border-b border-dark/20 focus-within:border-dark/60 hover:border-dark/60"
      :class="[props.inputWrapperClasses]"
    >
      <div class="relative w-full flex-grow">
        <input
          :id="uuid"
          class="input peer"
          :value="props.modelValue"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          :readonly="props.readonly"
          :type="props.type"
          @input="handleInput"
          @change="handleChange"
        />
        <label class="label" :for="uuid">
          {{ placeholder }}
        </label>
      </div>
    </div>
    <AppCollapsable
      v-if="props.isValid !== undefined"
      v-model="isValidationMessageShown"
    >
      <div class="validation-message py-7 pb-0 text-red/70">
        {{ validationMessage }}
      </div>
    </AppCollapsable>
  </div>
</template>

<style lang="scss" scoped>
.label {
  @apply absolute left-0 top-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-0;
  @apply leading-none text-dark/50 text-14 peer-placeholder-shown:text-18 peer-hover:text-dark peer-focus:text-14 md:text-12 md:peer-placeholder-shown:text-14 md:peer-focus:text-12;
  @apply pointer-events-none transition-all;
}

.input {
  @apply block w-full pb-18 pt-18;
  @apply bg-transparent;
  @apply leading-none outline-none text-18 placeholder:opacity-0 md:text-14;
  @apply transition-all;
}
</style>
