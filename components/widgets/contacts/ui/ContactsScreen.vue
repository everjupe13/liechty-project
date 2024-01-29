<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { ContactsArticle, ContactsMap } from '@/components/widgets/contacts'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <section class="pb-[140px] pt-0 xl:pb-80 lg:pb-60 md:pb-40">
    <div class="container">
      <ContactsMap class="mb-85 md:mb-40" />

      <div
        class="grid grid-cols-3 gap-x-60 lg:grid-cols-2 lg:gap-30 md:grid-cols-1 md:gap-0"
      >
        <div class="lg:col-span-2 md:col-span-1 md:mb-10">
          <h2 class="section-title md:mb-30">Contacts</h2>
        </div>
        <div class="flex flex-col gap-y-40 md:mb-20 md:gap-y-20">
          <ContactsArticle v-if="isEN">
            <template #title>Telephone</template>
            <template #content>
              <a href="tel:+12048001014">+ 1 204-800-1014</a>
            </template>
          </ContactsArticle>
          <ContactsArticle>
            <template #title>
              {{ isEN ? 'Contact e-mail' : 'Kontakt E-mail:' }}
            </template>
            <template #content>
              <template v-if="isEN">
                <a href="mailto:info@liechty-humidity.com">
                  info@liechty-humidity.com
                </a>
              </template>
              <template v-else>
                <a href="mailto:info@liechty.li">info@liechty.li</a>
              </template>
            </template>
          </ContactsArticle>
        </div>
        <div class="flex flex-col gap-y-40 md:gap-y-20">
          <ContactsArticle>
            <template #title>
              {{ isEN ? 'Office' : 'Forschung & Entwicklung Büro:' }}
            </template>
            <template #content>
              {{
                isEN
                  ? '1260 Clarence Avenue, Winnipeg, Manitoba R3T 1T2'
                  : 'Im alten Riet 153, 9494 Schaan, Liechtenstein'
              }}
            </template>
          </ContactsArticle>
          <ContactsArticle>
            <template #title>
              {{ isEN ? 'Work schedule' : 'Öffnungszeit:' }}
            </template>
            <template #content>
              {{ isEN ? '9am to 5pm' : 'Montag - Freitag 9.00-17.00 Uhr' }}
            </template>
          </ContactsArticle>
        </div>
      </div>
    </div>
  </section>
</template>
