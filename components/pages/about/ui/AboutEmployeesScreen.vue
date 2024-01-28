<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import AboutEmployeesCard from './AboutEmployeesCard.vue'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const EmployeesData = [
  {
    id: 0,
    image: '/images/about/employees/1.jpg',
    name: 'George Gilbert',
    position: 'Chief Development Officer'
  },
  {
    id: 1,
    image: '/images/about/employees/2.jpg',
    name: 'Aaron Stirling',
    position: 'Chief Executive Officer'
  },
  {
    id: 2,
    image: '/images/about/employees/3.jpg',
    name: 'Elizabeth StoneJeff',
    position: 'Chief Financial Officer'
  },
  {
    id: 3,
    image: '/images/about/employees/4.jpg',
    name: 'Jeff Part',
    position: 'Chief Technical Director'
  }
]

const LiechtensteinEmployeesData = [
  {
    id: 0,
    image: '/images/about/employees/liechtenstein/AlexanderGutman.jpg',
    name: 'Alexander Gutman',
    position: 'CEO of Liechtenstein branch'
  },
  {
    id: 1,
    image: '/images/about/employees/liechtenstein/Arnold-Becker.jpg',
    name: 'Arnold Becker',
    position: 'Head of R&D department'
  },
  {
    id: 2,
    image: '/images/about/employees/liechtenstein/Erik-Sprenger.jpg',
    name: 'Erik Sprenger',
    position: 'Head of Manufacturing department'
  }
]
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
      <div class="grid grid-cols-3 gap-20 md:grid-cols-1 md:gap-40">
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
