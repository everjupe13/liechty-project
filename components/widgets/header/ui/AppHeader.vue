<script setup lang="ts">
import { AppLogo } from '@/components/shared/logo'
import { NavMenu } from '@/components/shared/nav-menu'
import { useModalMenu } from '@/components/widgets/dialog'

const { openModalMenu } = useModalMenu()
</script>

<template>
  <header
    id="header"
    class="group flex h-85 items-center border-b border-dark/20 xl:h-60 md:h-50"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <NavMenu class="flex-grow md:hidden" />
        <AppLogo class="flex-shrink-0" />
        <button class="hidden items-center justify-center p-5 md:flex">
          <img
            src="@/assets/img/burger-icon.svg"
            alt=""
            @click="openModalMenu"
          />
        </button>
      </div>
    </div>
  </header>
</template>
