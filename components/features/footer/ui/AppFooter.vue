<script lang="ts" setup>
import { AppLogoExpanded } from '@/components/shared/logo'
import { NavMenu } from '@/components/shared/nav-menu'
</script>

<template>
  <footer id="footer">
    <div class="border-t border-dark/20 pb-60 pt-40">
      <div class="container">
        <div class="flex justify-between">
          <AppLogoExpanded />
          <NavMenu />
        </div>
      </div>
    </div>

    <div class="border-t border-dark/20 py-40">
      <div class="container">
        <div class="flex items-center justify-between">
          <p class="leading-none text-dark/60 text-14">
            © Liechty 2023. All rights reserved
          </p>
          <p class="leading-none text-dark/60 text-14">Privacy policy</p>
        </div>
      </div>
    </div>
  </footer>
</template>
