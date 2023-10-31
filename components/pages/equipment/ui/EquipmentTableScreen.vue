<script lang="ts" setup>
import { watch } from 'vue'

import { useCategories } from '@/api/categories'

const { categories } = useCategories()
watch(
  categories,
  newValue => {
    console.log(categories, newValue)
  },
  { deep: true }
)
</script>

<template>
  <section class="pb-[140px] pt-[120px]">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Models</h2>
      </div>

      <div class="mb-80 grid grid-cols-2 gap-x-20">
        <div class="h-[410px] bg-[#F5F6F8]"></div>
        <div class="h-[410px] bg-[#F5F6F8]"></div>
      </div>

      <div class="rounded-[20px] border border-gray px-40 py-20">
        <table
          class="w-full table-fixed border-collapse overflow-hidden rounded-[20px] text-left text-18"
        >
          <thead class="border-b border-gray font-bold">
            <tr>
              <th scope="col" class="border-r border-gray px-24 py-18 pl-0">
                Classic line Series
              </th>
              <th scope="col" class="border-r border-gray px-24 py-18">
                CL Manitoba 12
              </th>
              <th scope="col" class="px-24 py-18">CL Playgreen 6</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Areas of application
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                house / apartment / office
              </td>
              <td class="px-24 py-18 text-dark/70">
                house / apartment / office
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Maximum service area, sq.ft
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                6.500
              </td>
              <td class="px-24 py-18 text-dark/70">3.250</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Number of high pressure hoselines
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                1 active or passive
              </td>
              <td class="px-24 py-18 text-dark/70">2 passive</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Number of independent humidification zones
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">12</td>
              <td class="px-24 py-18 text-dark/70">2</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Capacity, l/h
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">12</td>
              <td class="px-24 py-18 text-dark/70">6</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Maximum number of nozzles (65 µm)
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">12</td>
              <td class="px-24 py-18 text-dark/70">6</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Reverse osmosis
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                double-stage
              </td>
              <td class="px-24 py-18 text-dark/70">double-stage</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                LCD diagonal, inches
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                4,3”
              </td>
              <td class="px-24 py-18 text-dark/70">4,3”</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Housing
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                blue metal
              </td>
              <td class="px-24 py-18 text-dark/70">silver metal</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Power consumption, W
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">330</td>
              <td class="px-24 py-18 text-dark/70">240</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Maximum length of high pressure line, m
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">400</td>
              <td class="px-24 py-18 text-dark/70">2 x 200</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                Leak protection
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                auto-pressurization and flow
              </td>
              <td class="px-24 py-18 text-dark/70">
                auto-pressurization and flow
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
