<script lang="ts" setup>
import { Languages, useLanguage } from '@/composables/useLanguage'

const { activeLanguageId, handleActiveLanguage } = useLanguage()
</script>

<template>
  <div
    class="flex items-center gap-x-4 rounded-[9px] border-[2px] border-dark/70"
  >
    <button
      v-for="lang in Languages"
      :key="lang.id"
      type="button"
      :class="[
        'm-[-2px] flex cursor-pointer select-none items-center justify-center rounded-[9px] border-[2px] border-transparent bg-transparent px-10 py-3  transition-all',
        { '!border-blue ': activeLanguageId === lang.id }
      ]"
      @click="handleActiveLanguage(lang.id)"
    >
      <span
        :class="[
          'uppercase leading-none text-dark-text/70 transition-all text-16',
          { '!text-dark-text': activeLanguageId === lang.id }
        ]"
        :title="lang.title"
      >
        {{ lang.title }}
      </span>
    </button>
  </div>
</template>
