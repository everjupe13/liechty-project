<script lang="ts" setup>
import { ContactsArticle, ContactsMap } from '@/components/widgets/contacts'
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
    </div>
  </section>
</template>
