import { useI18n } from 'vue-i18n'

const FILE_URLS = {
  en: {
    booklet: {
      url: '/Liechty_EN_Booklet.pdf',
      size: '5.1 MB'
    },
    catalog: {
      url: '/Liechty_EN_Catalogue.pdf',
      size: '4.2 MB'
    },
    configs: {
      url: '/Liechty_EN_Nozzles_configs.pdf',
      size: '18.0 MB'
    }
  },
  de: {
    booklet: {
      url: '/Liechty_DE_Booklet.pdf',
      size: '4.2 MB'
    },
    catalog: {
      url: '/Liechty_DE_Katalog.pdf',
      size: '4.2 MB'
    },
    configs: {
      url: '/Liechty_DE_Nozzles_configs.pdf',
      size: '18.2 MB'
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
