<script lang="ts" setup>
import AboutEmployeesCard from './AboutEmployeesCard.vue'

const EmployeesData = [
  {
    id: 0,
    image: '/images/about/employees/1.jpg',
    name: 'George Gilbert',
    position: 'Chief Development Officer '
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
</script>

<template>
  <section class="pb-[80px] pt-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40 md:mb-30">
        <h2 class="section-title text-blue">Board of directors</h2>
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
</template>
