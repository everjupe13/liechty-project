<template>
  <section class="pb-60 pt-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div
        class="grid grid-cols-3 gap-x-60 lg:grid-cols-2 lg:gap-30 md:grid-cols-1"
      >
        <div class="lg:col-span-2 md:col-span-1 md:mb-10">
          <h2 class="section-title">{{ $t('home.humidification.title') }}</h2>
        </div>
        <div>
          <ul class="unordered-list text-18">
            <li
              v-for="(item, index) in $tm('home.humidification.list')"
              :key="index"
            >
              {{ $rt(item) }}
            </li>
          </ul>
        </div>
        <div>
          <p
            class="mb-40 leading-snug text-18"
            v-html="$t('home.humidification.info')"
          ></p>
        </div>
      </div>
    </div>
  </section>
</template>
