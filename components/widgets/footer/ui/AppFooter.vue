<script lang="ts" setup>
import { AppLogoExpanded } from '@/components/shared/logo'
import { NavMenu } from '@/components/shared/nav-menu'
</script>

<template>
  <footer id="footer">
    <div class="border-t border-dark/20 pb-60 pt-40 md:pb-40 md:pt-30">
      <div class="container">
        <div class="flex justify-between md:flex-col">
          <AppLogoExpanded icon-classes="md:w-[100px] md:h-auto" />
          <NavMenu class="md:flex-col md:gap-y-10" />
        </div>
      </div>
    </div>

    <div class="border-t border-dark/20 py-40 md:py-20">
      <div class="container">
        <div class="flex items-center justify-between md:flex-col md:gap-y-5">
          <p class="leading-none text-dark/60 text-14">
            {{ $t('footer.copyright') }}
          </p>
          <NuxtLink
            href="/privacy-policy"
            class="leading-none text-dark/60 text-14"
          >
            {{ $t('footer.privacyPolicy') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
