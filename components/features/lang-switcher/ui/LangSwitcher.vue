<script lang="ts" setup>
import { computed, onMounted, type Ref, ref } from 'vue'

type LanguageState = 'en-US' | 'de-DE' | null

const LOCAL_STORAGE_LANG_KEY = 'selected-language'

const Languages = [
  {
    id: 0,
    title: 'English',
    value: 'en-US'
  },
  {
    id: 1,
    title: 'Deutsch',
    value: 'de-DE'
  }
]

const savedLanguage: Ref<LanguageState> = ref()
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

  activeLanguageId.value = nextActiveIndex

  if (window && window instanceof Object) {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, activeLanguage.value.value)
    window.location.reload()
  }
}

onMounted(() => {
  if (window && window instanceof Object) {
    const langFromState: LanguageState = localStorage.getItem(
      LOCAL_STORAGE_LANG_KEY
    )

    if (langFromState) {
      savedLanguage.value = langFromState

      activeLanguageId.value = Languages.find(
        lang => savedLanguage.value === lang.value
      ).id
    }
  }
})
</script>

<template>
  <div>
    <button
      type="button"
      class="flex cursor-pointer select-none items-center justify-center rounded-[5px] bg-gray px-5 py-3"
      @click="handleActiveLanguageId"
    >
      <span class="leading-none text-16" :title="activeLanguage.title">
        {{ activeLanguage.title }}
      </span>
    </button>
  </div>
</template>
