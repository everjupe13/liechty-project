<script lang="ts" setup></script>

<template>
  <section class="pb-[80px] pt-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="flex justify-between gap-x-30 pb-40 md:flex-col md:gap-y-20">
        <h2 class="section-title">In numbers</h2>

        <div class="grid grid-cols-3 gap-x-40 md:grid-cols-1 md:gap-y-20">
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
            >
              >15
              <span class="text-34 md:text-20">years</span>
            </div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">
              of experience in air humidification
            </div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info[0].desc') }}
            </div>
          </div>
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
            >
              2
              <span class="text-34 md:text-20">continents</span>
            </div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">of presence</div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info[1].desc') }}
            </div>
          </div>
          <div class="max-w-[350px]">
            <div
              class="mb-25 leading-none text-blue text-100 xl:text-80 md:mb-10 md:text-60"
            >
              >20
              <span class="text-34 md:text-20">partners</span>
            </div>
            <div class="mb-5 text-20 lg:text-18 md:text-16">
              all over the world
            </div>
            <div class="text-dark/60 text-16 md:text-14">
              {{ $t('about.info[2].desc') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
