<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AboutEmployeesCard from './AboutEmployeesCard.vue'

const { locale, t } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const EmployeesData = computed(() => [
  {
    id: 0,
    image: '/images/about/employees/2.jpg',
    name: 'Aaron Stirling',
    position: t('about.position.ceo')
  },
  {
    id: 1,
    image: '/images/about/employees/3.jpg',
    name: 'Elizabeth StoneJeff',
    position: t('about.position.cfo')
  },
  {
    id: 2,
    image: '/images/about/employees/4.jpg',
    name: 'Jeff Part',
    position: t('about.position.ctd')
  },
  {
    id: 3,
    image: '/images/about/employees/1.jpg',
    name: 'George Gilbert',
    position: t('about.position.cdo')
  }
])

const LiechtensteinEmployeesData = computed(() => [
  {
    id: 0,
    image: '/images/about/employees/liechtenstein/AlexanderGutman.jpg',
    name: 'Alexander Gutman',
    position: t('about.position.ceo_lb')
  },
  {
    id: 1,
    image: '/images/about/employees/liechtenstein/Arnold-Becker.jpg',
    name: 'Arnold Becker',
    position: t('about.position.head_rd_depart')
  },
  {
    id: 2,
    image: '/images/about/employees/liechtenstein/Erik-Sprenger.jpg',
    name: 'Erik Sprenger',
    position: t('about.position.head_md_depart')
  }
])
</script>

<template>
  <section
    class="pb-40 pt-[140px] xl:py-80 xl:pb-30 lg:py-60 lg:pb-20 md:py-40"
  >
    <div class="container">
      <div class="mb-40 md:mb-30">
        <h2 class="section-title text-blue">
          {{ isEN ? 'Board of directors' : 'Verwaltungsrat' }}
        </h2>
      </div>
      <div class="grid grid-cols-4 gap-20 md:grid-cols-1 md:gap-40">
        <AboutEmployeesCard
          v-for="employee in EmployeesData"
          :key="employee.id"
          :image="employee.image"
          :name="employee.name"
          :position="employee.position"
        />
      </div>
    </div>
  </section>
  <section class="pb-[80px] pt-40 xl:py-80 xl:pt-30 lg:py-60 lg:pt-20 md:py-40">
    <div class="container">
      <div class="mb-40 md:mb-30">
        <h2 class="section-title text-blue">
          {{ isEN ? 'Liechtenstein branch' : 'R&D Büro' }}
        </h2>
      </div>
      <div class="grid grid-cols-4 gap-20 md:grid-cols-1 md:gap-40">
        <AboutEmployeesCard
          v-for="employee in LiechtensteinEmployeesData"
          :key="employee.id"
          :image="employee.image"
          :name="employee.name"
          :position="employee.position"
        />
      </div>
    </div>
  </section>
</template>
