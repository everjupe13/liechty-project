import { onMounted, type Ref, ref } from 'vue'
import { useI18n } from 'vue-i18n'

export type LanguageState = 'en' | 'de' | null
export const LOCAL_STORAGE_LANG_KEY = 'selected-language'

export const Languages = [
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

export const useLanguage = () => {
  const i18n = useI18n({ useScope: 'global' })
  const router = useRouter()

  const savedLanguage: Ref<LanguageState | null> = ref(null)
  const activeLanguageId = ref(Languages[0].id)

  const handleActiveLanguage = (id: number) => {
    const choosedLanguage = Languages.find(lang => lang.id === id)

    if (activeLanguageId.value !== choosedLanguage?.id && choosedLanguage) {
      localStorage.setItem(LOCAL_STORAGE_LANG_KEY, choosedLanguage.value)
      activeLanguageId.value = choosedLanguage.id
      i18n.locale.value = choosedLanguage.value
      router.push({ params: { lang: choosedLanguage.value } })
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

  return {
    activeLanguageId,
    handleActiveLanguage
  }
}
