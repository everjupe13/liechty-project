<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
import { AppLogo } from '@/components/shared/logo'
</script>

<template>
  <section>
    <div class="container">
      <div class="grid grid-cols-2 gap-x-80 pb-85 md:grid-cols-1 md:pb-40">
        <div class="pr-20 lg:pr-40 md:pr-30">
          <AppLogo icon-classes="w-full h-auto" link-classes="w-full" />
        </div>
        <div class="pt-50 lg:pt-30">
          <h1 class="mb-20 leading-tight text-40 xl:text-32 md:text-24">
            “We improve air quality, making it fresher and healthier”
          </h1>
          <AppButton outlined @click="$router.push('/equipment')">
            Discover
          </AppButton>
        </div>
      </div>
      <div
        class="grid grid-cols-4 gap-x-30 pb-60 lg:grid-cols-2 lg:gap-30 md:grid-cols-1 md:pb-40"
      >
        <div><h2 class="section-title">Our Brand</h2></div>
        <div class="col-span-3">
          <div>
            <p class="mb-18 leading-snug text-16 md:mb-14 md:text-14">
              Our brand represents innovative humidification systems for homes,
              apartments, offices, and other commercial spaces.
            </p>
            <p class="mb-18 leading-snug text-16 md:mb-14 md:text-14">
              The mission of Liechty brand is to supply, install, and maintain
              high-quality, efficient, and safe humidification systems for
              residential and commercial applications.
            </p>
            <p class="leading-snug text-16 md:mb-14 md:text-14">
              Liechty equipment meets the highest hygiene standards, with a
              strong emphasis on the cleanliness of the water atomized during
              the humidification process.
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/about/index.jpg" alt="" class="block w-full" />
      </div>
    </div>
  </section>
</template>
