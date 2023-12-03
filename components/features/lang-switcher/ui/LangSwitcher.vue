<script lang="ts" setup>
import { computed, onMounted, type Ref, ref } from 'vue'
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
const activeLanguage = computed(() =>
  Languages.find(lang => lang.id === activeLanguageId.value)
)
const handleActiveLanguageId = () => {
  const currentIndex = Languages.findIndex(
    lang => lang.id === activeLanguageId.value
  )
  const nextActiveIndex =
    currentIndex < Languages.length - 1 ? currentIndex + 1 : 0
  const _activeLanguage = Languages.find(lang => lang.id === nextActiveIndex)

  if (window && window instanceof Object && _activeLanguage) {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, _activeLanguage.value)
    activeLanguageId.value = _activeLanguage.id
    i18n.locale.value = _activeLanguage.value
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
  <div>
    <button
      v-if="activeLanguage"
      type="button"
      class="flex cursor-pointer select-none items-center justify-center rounded-[9px] border-[2px] border-blue bg-transparent px-10 py-3"
      @click="handleActiveLanguageId"
    >
      <span
        class="uppercase leading-none text-16"
        :title="activeLanguage.title"
      >
        {{ activeLanguage.title }}
      </span>
    </button>
  </div>
</template>
