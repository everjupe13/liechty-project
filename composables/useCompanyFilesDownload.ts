import { useI18n } from 'vue-i18n'

const FILE_URLS = {
  en: '/Liechty_EN_Catalogue.pdf',
  de: '/Liechty_DE_Catalogue.pdf'
}

export const useCompanyFilesDownload = () => {
  const { locale } = useI18n({ useScope: 'global' })

  const fileUrl = computed(
    () => FILE_URLS[locale.value as keyof typeof FILE_URLS]
  )

  return { fileUrl }
}
