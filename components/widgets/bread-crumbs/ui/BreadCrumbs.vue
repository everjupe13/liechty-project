<script lang="ts" setup>
import { defineNuxtLink } from 'nuxt/app'
import { computed } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface IAppBreadcrumbLink {
  label: string
  toLink?: RouteLocationRaw
}

interface IAppBreadcrumbsComponent {
  crumbs?: IAppBreadcrumbLink[]
}

const baseBreadcrumb: IAppBreadcrumbLink = {
  label: 'Main',
  toLink: '/'
}

const props = withDefaults(defineProps<IAppBreadcrumbsComponent>(), {
  crumbs: () => []
})

const breads = computed<IAppBreadcrumbLink[]>(() => {
  return [baseBreadcrumb, ...props.crumbs]
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
