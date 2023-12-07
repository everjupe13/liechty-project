<script lang="ts" setup>
import { onMounted, type Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'

type LanguageState = 'en' | 'de' | null

const LOCAL_STORAGE_LANG_KEY = 'selected-language'
const i18n = useI18n({ useScope: 'global' })

const Languages = [
  {
    id: 0,
    title: 'en',
    value: 'en'
  },
  {
    id: 1,
    title: 'de',
    value: 'de'
  }
]

const savedLanguage: Ref<LanguageState | null> = ref(null)
const activeLanguageId = ref(Languages[0].id)

const handleActiveLanguage = (id: number) => {
  const clickedLanguage = Languages.find(lang => lang.id === id)

  if (
    window &&
    window instanceof Object &&
    activeLanguageId.value !== clickedLanguage?.id &&
    clickedLanguage
  ) {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, clickedLanguage.value)
    activeLanguageId.value = clickedLanguage.id
    i18n.locale.value = clickedLanguage.value
  }
}

onMounted(() => {
  if (window && window instanceof Object) {
    const langFromState: LanguageState | null = localStorage.getItem(
      LOCAL_STORAGE_LANG_KEY
    ) as LanguageState | null

    if (langFromState) {
      savedLanguage.value = langFromState

      activeLanguageId.value =
        Languages.find(lang => savedLanguage.value === lang.value)?.id ??
        Languages[0].id

      i18n.locale.value = savedLanguage.value
    }
  }
})
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
