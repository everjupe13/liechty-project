<script setup lang="ts">
import { AppLogo } from '@/components/shared/logo'
import { NavMenu } from '@/components/shared/nav-menu'
</script>

<template>
  <header
    id="header"
    class="group flex h-85 items-center border-b border-dark/20"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <NavMenu class="flex-grow" />
        <AppLogo class="flex-shrink-0" />
      </div>
    </div>
  </header>
</template>
