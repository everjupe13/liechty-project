<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
import { ChevronRightArrowIcon } from '@/components/shared/icons'

type Props = {
  image?: string
  name?: string
  slug?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  slug: '',
  image: '',
  description: ''
})

const handleClick = () => {
  navigateTo(`/equipment/${props.slug}`)
}
</script>

<template>
  <article
    class="relative flex h-[410px] items-center justify-center bg-[#F5F6F8]"
  >
    <div class="grid grid-cols-2 gap-x-40 p-20">
      <div></div>
      <div>
        <div class="mb-24">
          <h3 class="mb-14 font-medium leading-tight text-24">
            {{ props.name }}
          </h3>
          <div class="prose text-18" v-html="props.description" />
        </div>
        <AppButton outlined class="gap-x-4" @click="handleClick">
          <span>Discover</span>
          <ChevronRightArrowIcon class="group-hover:" />
        </AppButton>
      </div>
    </div>
  </article>
</template>
