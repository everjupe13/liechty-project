<script setup lang="ts">
import { DropdownLinkedList } from '@/components/shared/dropdown'

const FAQList = [
  {
    opened: false,
    label: 'What is adiabatic humidification?',
    body: 'Inlet water goes through multi-stage filtration, including double-stage RO system and volume UV sterilization. We exclude 99,9% hardness salts.'
  },
  {
    opened: false,
    label: 'What are the main advantages of Liechty systems?',
    body: 'Our equipment is designed to operate in residential premises, that’s why our pumps and valves operate without any noise. Moreover, modules can be maintained at place of use.'
  },
  {
    opened: false,
    label: 'How does your system operate?',
    body: 'Our hoses’ inner layer made of PTFE with stainless steel braiding. Our hoseline is looped especially for high hygiene & safety standards.'
  },
  {
    opened: false,
    label: 'How it is possible to receive individual specification?',
    body: 'Miniature nozzles usually installed in vent diffusers, walls, or ceilings and spray purified water directly in premises.'
  }
]
</script>

<template>
  <section class="border-b border-dark/20 py-[140px]">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">FAQ</h2>
      </div>
      <div>
        <DropdownLinkedList :dropdown-data="FAQList" />
      </div>
    </div>
  </section>
</template>
