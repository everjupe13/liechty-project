<template>
  <section class="pb-80 pt-[140px] xl:py-80 lg:py-60 lg:pt-[100px] md:py-40">
    <div class="container">
      <div
        class="grid grid-cols-3 gap-x-60 lg:grid-cols-2 lg:gap-30 md:grid-cols-1"
      >
        <div class="lg:col-span-2 md:col-span-1 md:mb-10">
          <h2 class="section-title">{{ $t('equipment.about.title') }}</h2>
        </div>
        <div>
          <p
            class="leading-snug text-16"
            v-html="$t('equipment.about.leftArticle')"
          ></p>
        </div>
        <div>
          <p
            class="leading-snug text-16"
            v-html="$t('equipment.about.rightArticle')"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>
