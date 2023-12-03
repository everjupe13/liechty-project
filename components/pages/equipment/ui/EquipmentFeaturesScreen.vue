<script setup lang="ts"></script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('equipment.features.title') }}</h2>
      </div>
      <div
        class="grid grid-cols-6 gap-x-20 xl:gap-x-10 md:grid-cols-2 md:gap-10"
      >
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[0]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/1.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[0]') }}
            </h3>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[1]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/2.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[1]') }}
            </h3>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[2]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/3.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[2]') }}
            </h3>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[3]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/4.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[3]') }}
            </h3>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[4]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/5.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[4]') }}
            </h3>
          </div>
        </article>
        <article
          class="group relative overflow-hidden rounded-[20px] p-20 xl:p-15"
          :title="$t('equipment.features.cards[5]')"
        >
          <div
            class="transiton-all mx-auto mb-15 flex aspect-square w-full max-w-[180px] items-center justify-center rounded-full border border-dark/20 bg-white duration-300 hover:border-blue xl:mb-25 md:w-full"
          >
            <img
              src="/images/equipment/6.svg"
              alt=""
              class="block object-cover"
            />
          </div>
          <div>
            <h3
              class="text-center leading-tight text-dark/80 transition-all duration-300 text-16 group-hover:text-blue"
            >
              {{ $t('equipment.features.cards[5]') }}
            </h3>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
