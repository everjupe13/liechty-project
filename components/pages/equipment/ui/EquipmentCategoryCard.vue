<script lang="ts" setup>
import { AppButton } from '@/components/shared/button'
import { ChevronRightArrowIcon } from '@/components/shared/icons'

type Props = {
  image?: string
  name?: string | null
  slug?: string
  description?: string | null
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
    class="relative flex h-[410px] items-center justify-center bg-[#F5F6F8] md:h-auto md:min-h-[220px]"
  >
    <div class="flex h-full w-full gap-x-40 p-20 md:gap-x-15 md:p-13">
      <div
        class="flex h-full basis-1/2 items-center justify-center md:basis-1/3"
      >
        <img
          :src="props.image"
          alt=""
          class="block h-full w-full object-cover"
        />
      </div>
      <div class="flex basis-1/2 flex-col justify-center md:basis-2/3">
        <div class="mb-24 md:mb-10">
          <h3
            class="mb-14 font-medium leading-tight text-24 md:mb-10 md:text-18"
          >
            {{ props.name }}
          </h3>
          <div class="prose text-16 md:text-14" v-html="props.description" />
        </div>
        <div>
          <AppButton outlined class="gap-x-4 md:text-16" @click="handleClick">
            <span>{{ $t('home.applications.banner.button') }}</span>
            <ChevronRightArrowIcon />
          </AppButton>
        </div>
      </div>
    </div>
  </article>
</template>
