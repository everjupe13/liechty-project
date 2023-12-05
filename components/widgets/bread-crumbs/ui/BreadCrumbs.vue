<script lang="ts" setup>
import { defineNuxtLink } from 'nuxt/app'
import { computed, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteLocationRaw } from 'vue-router'

interface IAppBreadcrumbLink {
  label: string
  toLink?: RouteLocationRaw
}

interface IAppBreadcrumbsComponent {
  crumbs?: IAppBreadcrumbLink[]
}

const { t } = useI18n({ useScope: 'global' })
const baseBreadcrumb: Ref<IAppBreadcrumbLink> = computed(() => ({
  label: t('header.nav.main'),
  toLink: '/'
}))

const props = withDefaults(defineProps<IAppBreadcrumbsComponent>(), {
  crumbs: () => []
})

const breads = computed<IAppBreadcrumbLink[]>(() => {
  return [baseBreadcrumb.value, ...props.crumbs]
})

const isLastCrumb = (index: number) => {
  return index === breads.value.length - 1
}

const determineCrumbsComponent = (index: number) => {
  return !isLastCrumb(index) && breads.value.length !== 1
    ? defineNuxtLink({})
    : 'span'
}
</script>

<template>
  <div class="flex">
    <span class="text-[16px] leading-none">
      <span v-for="(crumb, index) in breads" :key="crumb.label">
        <component
          :is="determineCrumbsComponent(index)"
          :to="!isLastCrumb(index) ? crumb?.toLink : ''"
          :class="[!isLastCrumb(index) ? 'text-dark/60' : 'cursor-default']"
        >
          {{ crumb.label }}
        </component>
        <span v-if="!isLastCrumb(index)" class="cursor-default px-3 text-dark">
          {{ ' – ' }}
        </span>
      </span>
    </span>
  </div>
</template>
