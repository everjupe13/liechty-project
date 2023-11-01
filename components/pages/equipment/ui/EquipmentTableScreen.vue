<script lang="ts" setup>
import { useModels } from '@/api/models'

import EquipmentCategoryCard from './EquipmentCategoryCard.vue'

const { models } = useModels()
</script>

<template>
  <section class="pb-[140px] pt-[120px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Models</h2>
      </div>

      <div class="mb-80 grid grid-cols-2 gap-20 lg:grid-cols-1 md:mb-40">
        <EquipmentCategoryCard
          v-for="model in models"
          :key="model?.id"
          :image="
            model?.images.find(image => image.is_main)?.image ||
            model?.images[0]?.image
          "
          :name="model?.name"
          :slug="model?.slug"
          :description="model?.short_description"
        />
      </div>

      <div
        class="scroll-x-hidden rounded-[20px] border border-gray px-40 py-20 md:overflow-x-scroll md:px-10 md:py-5"
      >
        <table
          class="w-full table-fixed border-collapse overflow-hidden rounded-[20px] text-left text-18 md:w-[200%]"
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
