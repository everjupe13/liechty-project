<script lang="ts" setup>
import { ref } from 'vue'
import { useModal } from 'vue-final-modal'

import { AppButton } from '@/components/shared/button'
import { PurchaseDetails } from '@/components/widgets/dialog'

import ProductGalleryView from './ProductGalleryView.vue'
// import { formatToCost } from '@/utils/cost'

const activeDescriptionTabId = ref(0)
const handleActiveDescriptionIdChange = (id: number) => {
  activeDescriptionTabId.value = id
}

const { open: openFeedbackModal, close: closeFeedbackModal } = useModal({
  component: PurchaseDetails,
  attrs: {
    onConfirm() {
      closeFeedbackModal()
    }
  }
})
</script>

<template>
  <section
    class="border-b border-dark/20 pb-[140px] xl:py-80 lg:py-60 md:py-40"
  >
    <div class="container">
      <div class="mb-40 grid grid-cols-2 gap-x-40 lg:grid-cols-1 lg:gap-y-20">
        <div class="h-[640px] w-full rounded-[14px] bg-gray">
          <ProductGalleryView />
        </div>
        <div>
          <div class="mb-75 flex h-full flex-col">
            <div class="flex-grow-0">
              <h2 class="mb-20 font-bold leading-tight text-48 lg:text-28">
                Central block
              </h2>
              <div class="mb-20 flex items-center gap-x-15">
                <p class="leading-none text-24">$ 12 000,00</p>
                <span
                  class="min-h-30 flex cursor-default items-center justify-center rounded-full bg-blue/20 px-14 py-6 pb-8 font-medium leading-none text-blue"
                >
                  available
                </span>
              </div>
              <div class="mb-40 flex gap-x-10">
                <AppButton outlined @click="openFeedbackModal">
                  Add to bag
                </AppButton>
                <AppButton theme="blue" @click="openFeedbackModal">
                  Buy now
                </AppButton>
              </div>
            </div>
            <div class="flex-grow rounded-[14px] border border-dark/20 p-24">
              <div class="mb-24 text-dark/70 text-16">
                Ullamcorper semper metus donec sapien tortor et. In sem sit
                sagittis placerat quam interdum netus egestas. Sit eu arcu
                tristique augue.
                <br />
                <br />
                Lacus nulla ac a eget. Posuere praesent netus mus turpis
                imperdiet fringilla aliquam donec nisi. Ullamcorper commodo
                senectus ac erat.
              </div>
              <div class="mb-12 font-bold leading-none text-16">Features</div>
              <div>
                <ul class="unordered-list-small">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Diam sit vel iaculis vitae sit augue</li>
                  <li>Vu augue venenatis ut natoque nascetur.</li>
                  <li>Eget tincidunt massa duis morbi.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rounded-[14px] border border-dark/20 p-40">
        <div
          class="mb-40 flex max-w-max items-center rounded-full border border-dark"
        >
          <AppButton
            outlined
            :theme="activeDescriptionTabId === 0 ? 'blue' : 'default'"
            :class="activeDescriptionTabId !== 0 ? '!border-transparent' : ''"
            class="m-[-1px]"
            @click="handleActiveDescriptionIdChange(0)"
          >
            Description
          </AppButton>
          <AppButton
            outlined
            :theme="activeDescriptionTabId === 1 ? 'blue' : 'default'"
            :class="activeDescriptionTabId !== 1 ? '!border-transparent' : ''"
            class="m-[-1px]"
            @click="handleActiveDescriptionIdChange(1)"
          >
            Features
          </AppButton>
        </div>
        <div class="max-w-[880px]">
          <div class="mb-28">
            <div class="mb-10 font-bold text-16">
              Elit leo luctus pellentesque cursus.
            </div>
            <div class="text-dark/80 text-16">
              Lorem ipsum dolor sit amet consectetur. Viverra et vitae porttitor
              eu ornare mauris arcu ultricies integer. Eget congue ac enim
              consequat dignissim sit sit. Urna egestas tristique etiam semper
              varius et convallis. Eu pellentesque praesent tortor pellentesque
              rhoncus pulvinar. Elit leo luctus pellentesque cursus vitae amet
              eget pharetra.
            </div>
          </div>
          <div class="mb-28">
            <div class="mb-10 font-bold text-16">
              Urna dignissim cras gravida dictum risus.
            </div>
            <div class="text-dark/80 text-16">
              Volutpat sagittis egestas bibendum tincidunt enim. Eget tristique
              morbi massa posuere. Viverra pretium eu enim fusce sem. Suscipit
              accumsan risus diam duis sit eget id. Pellentesque enim viverra
              dignissim donec sit id risus pulvinar. Lectus sagittis convallis
              fusce mi sagittis augue sed morbi volutpat. Vel elit velit leo
              fermentum elementum.
            </div>
          </div>
          <div class="mb-28">
            <div class="mb-10 font-bold text-16">Tellus sodales tortor.</div>
            <div class="text-dark/80 text-16">
              Urna dignissim cras gravida dictum risus. Urna ac nec faucibus
              nulla mauris. Ullamcorper urna duis ultrices metus porta malesuada
              gravida volutpat et. Congue felis pellentesque consectetur viverra
              accumsan. Lorem ultricies eu in purus risus accumsan. Orci
              hendrerit dictum rutrum eros porttitor porta. Tellus sodales
              tortor vitae amet vulputate lectus nisl feugiat lobortis. Egestas
              nunc ac ut suspendisse commodo volutpat enim tincidunt.
            </div>
          </div>
          <div class="mb-28">
            <div class="mb-10 font-bold text-16">Ultricies eu in purus.</div>
            <div class="text-dark/80 text-16">
              Dui odio pellentesque mi at elit faucibus ultrices faucibus. Orci
              nullam vitae etiam morbi porta egestas ut enim. Amet senectus
              bibendum donec egestas dolor suspendisse aliquam sit sapien.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
