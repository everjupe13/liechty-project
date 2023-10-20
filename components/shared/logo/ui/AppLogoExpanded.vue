<script setup lang="ts">
import AppLogoBase from './AppLogoBase.vue'

defineProps({
  iconClasses: { type: String, default: '' },
  linkClasses: { type: String, default: '' }
})
</script>

<template>
  <AppLogoBase :link-classes="linkClasses">
    <img
      src="@/assets/img/logo-expanded.svg"
      alt="liechty"
      :class="['pointer-events-none h-[115px] w-[200px]', iconClasses]"
    />
  </AppLogoBase>
</template>
