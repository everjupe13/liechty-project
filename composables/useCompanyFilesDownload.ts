import { useI18n } from 'vue-i18n'

const FILE_URLS = {
  en: {
    booklet: {
      url: '/liechty-booklet-EN.pdf',
      size: '4.9 MB'
    },
    configs: {
      url: '/liechty-catalogue-EN.pdf',
      size: '17.2 MB'
    }
  },
  de: {
    booklet: {
      url: '/liechty-booklet-DE.pdf',
      size: '4.3 MB'
    },
    configs: {
      url: '/liechty-catalogue-DE.pdf',
      size: '17.4 MB'
    }
  }
}

export const useCompanyFilesDownload = () => {
  const { locale } = useI18n({ useScope: 'global' })

  const files = computed(
    () => FILE_URLS[locale.value as keyof typeof FILE_URLS]
  )

  return { files }
}
