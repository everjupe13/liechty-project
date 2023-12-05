<script lang="ts" setup></script>

<template>
  <section class="pb-[80px] pt-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="flex justify-between gap-x-30 pb-40 md:flex-col md:gap-y-20">
        <h2 class="section-title">{{ $t('about.info.title') }}</h2>

        <div class="grid grid-cols-3 gap-x-40 md:grid-cols-1 md:gap-y-20">
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
              v-html="$t('about.info.content[0].title')"
            ></div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">
              {{ $t('about.info.content[0].subtitle') }}
            </div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info.content[0].desc') }}
            </div>
          </div>
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
              v-html="$t('about.info.content[1].title')"
            ></div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">
              {{ $t('about.info.content[1].subtitle') }}
            </div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info.content[1].desc') }}
            </div>
          </div>
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
              v-html="$t('about.info.content[2].title')"
            ></div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">
              all over the world
            </div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info.content[2].desc') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
