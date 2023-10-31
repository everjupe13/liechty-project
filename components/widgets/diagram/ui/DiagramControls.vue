<script setup lang="ts">
type Props = {
  items: { id: number; name: string }[]
  activeId: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', id: number): void
}>()

const isThisTabActive = (id: number) => id === props.activeId
const handleTabClick = (id: number) => {
  if (props.activeId !== id) {
    emit('change', id)
  }
}
</script>

<template>
  <div class="scroll-x-hidden lg:overflow-scroll lg:px-16">
    <ul class="flex flex-col gap-10 lg:flex-row">
      <template v-for="(tab, idx) in props.items" :key="tab.id">
        <li
          :class="[
            'flex h-50 cursor-pointer items-center gap-x-8 rounded-[14px] border p-16 transition-all lg:flex-shrink-0',
            isThisTabActive(tab.id)
              ? 'border-blue'
              : 'border-gray-light bg-gray-light'
          ]"
          @click="handleTabClick(tab.id)"
        >
          <span
            :class="[
              'flex h-18 w-18 select-none items-center justify-center rounded-full font-bold leading-none transition-all text-12',
              isThisTabActive(tab.id)
                ? 'bg-[#E7F1F9] text-blue'
                : 'bg-[#DBDDE3]'
            ]"
          >
            {{ idx + 1 }}
          </span>
          <span class="flex select-none items-center leading-none text-14">
            {{ tab.name }}
          </span>
        </li>
      </template>
      <span
        class="hidden lg:pointer-events-none lg:block lg:h-full lg:w-16"
      ></span>
    </ul>
  </div>
</template>
