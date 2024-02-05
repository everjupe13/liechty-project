<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { useModels } from '@/api/models'

import EquipmentCategoryCard from './EquipmentCategoryCard.vue'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')

const { models } = useModels()
</script>

<template>
  <section class="pb-[140px] pt-[120px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">{{ $t('equipment.models.title') }}</h2>
      </div>

      <div class="mb-80 grid grid-cols-2 gap-20 lg:grid-cols-1 md:mb-40">
        <EquipmentCategoryCard
          v-for="model in models"
          :key="model?.id"
          :image="
            model?.images.find(image => image.is_main)?.image ||
            model?.images[0]?.image
          "
          :name="isEN ? model?.name : model?.name_alt"
          :slug="model?.slug"
          :description="
            isEN ? model?.short_description : model?.short_description_alt
          "
        />
      </div>

      <div
        class="scroll-x-hidden rounded-[20px] border border-gray px-40 py-20 md:overflow-x-scroll md:px-10 md:py-5"
      >
        <table
          class="w-full table-fixed border-collapse overflow-hidden rounded-[20px] text-left text-16 md:w-[200%]"
        >
          <thead class="border-b border-gray font-bold">
            <tr>
              <th scope="col" class="border-r border-gray px-24 py-18 pl-0">
                {{ isEN ? 'Classic line Series' : 'Classic Line Serien' }}
              </th>
              <th scope="col" class="border-r border-gray px-24 py-18">
                CL Manitoba 6 / 12
              </th>
              <th scope="col" class="px-24 py-18">CL Playgreen 6 / 18</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'Areas of application' : 'Anwendungsbereiche' }}
              </th>
              <td
                colspan="2"
                class="border-gray px-24 py-18 text-center text-dark/70"
              >
                {{
                  isEN ? 'house / apartment / office' : 'haus / wohnung / büro'
                }}
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{
                  isEN
                    ? 'Maximum service area, sq.ft'
                    : 'Maximale Bedienungsfläche, Quadrameter'
                }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                {{ isEN ? '3.000 / 6.000' : '300 / 600' }}
              </td>
              <td class="px-24 py-18 text-dark/70">
                {{ isEN ? '3.000 / 10.000' : '300 / 900' }}
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{
                  isEN
                    ? 'Number of high pressure hoselines'
                    : 'Anzahl der Hochdruck-Schlauchleitungen'
                }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                {{ isEN ? '1 active or passive' : '1 aktiv oder passiv' }}
              </td>
              <td class="px-24 py-18 text-dark/70">
                {{ isEN ? '2 passive' : '2 passive' }}
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{
                  isEN
                    ? 'Number of independent humidification zones'
                    : 'Anzahl der unabhängigen Befeuchtungszonen'
                }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                6 / 12
              </td>
              <td class="px-24 py-18 text-dark/70">2</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'Capacity, GPH' : 'Kapazität, GPH' }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                1.6 / 3.2
              </td>
              <td class="px-24 py-18 text-dark/70">1.6 / 4.8</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{
                  isEN
                    ? 'Maximum number of nozzles (65 µm)'
                    : 'Maximale Anzahl der Düsen (65 µm)'
                }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                6 / 12
              </td>
              <td class="px-24 py-18 text-dark/70">6 / 18</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'Reverse osmosis' : 'Umkehrosmose' }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                {{ isEN ? 'double-stage' : 'zweistufig' }}
              </td>
              <td class="px-24 py-18 text-dark/70">
                {{ isEN ? 'double-stage' : 'zweistufig' }}
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'LCD diagonal, inches' : 'LCD-Diagonale, Zoll' }}
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
                {{ isEN ? 'Housing' : 'Gehäuse' }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                {{ isEN ? 'dark indigo (dark violet)' : 'Dunkles Indigo' }}
              </td>
              <td class="px-24 py-18 text-dark/70">
                {{ isEN ? 'silver' : 'Silbermetall' }}
              </td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'Power consumption, W' : 'Stromverbrauch, W' }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                270 / 330
              </td>
              <td class="px-24 py-18 text-dark/70">240 / 300</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{
                  isEN
                    ? 'Maximum length of high pressure line, ft'
                    : 'Maximale Länge der Hochdruckleitung, ft'
                }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                1200
              </td>
              <td class="px-24 py-18 text-dark/70">2 x 600</td>
            </tr>
            <tr class="border-b border-gray last:border-transparent">
              <th
                scope="row"
                class="border-r border-gray px-24 py-18 pl-0 font-normal text-dark/50"
              >
                {{ isEN ? 'Leak protection' : 'Schutz vor Leckagen' }}
              </th>
              <td class="border-r border-gray px-24 py-18 text-dark/70">
                {{
                  isEN
                    ? 'auto-pressurization and flow'
                    : 'automatische Druckbeaufschlagung und Durchfluss'
                }}
              </td>
              <td class="px-24 py-18 text-dark/70">
                {{
                  isEN
                    ? 'auto-pressurization and flow'
                    : 'automatische Druckbeaufschlagung und Durchfluss'
                }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
