<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { ContactsArticle, ContactsMap } from '@/components/widgets/contacts'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40 ">
    <div class="container">
      <div
        class="mb-85 grid grid-cols-3 gap-x-60 lg:grid-cols-2 lg:gap-30 md:mb-40 md:grid-cols-1 md:gap-0"
      >
        <div class="lg:col-span-2 md:col-span-1 md:mb-10">
          <h2 class="section-title md:mb-30">
            {{ isEN ? 'Contacts' : 'Kontakte' }}
          </h2>
        </div>
        <div class="flex flex-col gap-y-40 md:mb-20 md:gap-y-20">
          <ContactsArticle>
            <template #title>Telephone</template>
            <template #content>+ 1 204-800-1014</template>
          </ContactsArticle>
          <ContactsArticle>
            <template #title>Contact e-mail</template>
            <template #content>info@liechty.li</template>
          </ContactsArticle>
        </div>
        <div class="flex flex-col gap-y-40 md:gap-y-20">
          <ContactsArticle>
            <template #title>Office</template>
            <template #content>
              1260 Clarence Avenue, Winnipeg, Manitoba R3T 1T2
            </template>
          </ContactsArticle>
          <ContactsArticle>
            <template #title>Work schedule</template>
            <template #content>9am to 5pm</template>
          </ContactsArticle>
        </div>
      </div>

      <ContactsMap />
    </div>
  </section>
</template>
