<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
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
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: undefined,
  inputWrapperClasses: '',
  placeholder: '',
  state: ''
})
const emits = defineEmits(['change', 'input', 'update:modelValue'])
const { handleChange, handleInput } = useEvents(emits)

const uuid = ref(randomID())
</script>

<template>
  <div>
    <div
      class="group relative border-b border-dark/20 focus-within:border-dark/60 hover:border-dark/60"
      :class="[props.inputWrapperClasses]"
    >
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
</template>

<style lang="scss" scoped>
.label {
  @apply absolute left-0 top-0 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:-translate-y-0;
  @apply leading-none text-dark/50 text-14 peer-placeholder-shown:text-20 peer-hover:text-dark peer-focus:text-14;
  @apply transition-all;
}

.input {
  @apply block w-full pb-18 pt-18;
  @apply bg-transparent;
  @apply leading-none outline-none text-20 placeholder:opacity-0;
  @apply transition-all;
}
</style>
