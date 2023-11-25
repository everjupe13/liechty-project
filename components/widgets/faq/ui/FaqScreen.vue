<script setup lang="ts">
import { computed } from 'vue'

import { DropdownLinkedList } from '@/components/shared/dropdown'

import { useFaq } from '../model/index'
import { FaqItemType } from '../model/types'

// const FAQList = [
//   {
//     opened: false,
//     label: 'What is adiabatic humidification?',
//     body: 'Adiabatic humidification involves adding humidity to the air in liquid form and then converting it to a gaseous state. This requires energy, which is extracted from the surrounding air. This process also results in the temperature decrease and is therefore known as adiabatic cooling.'
//   },
//   {
//     opened: false,
//     label: 'What are the main advantages of Liechty systems?',
//     body: `<p>Here are the main advantages of our systems:</p>
//       <ul>
//         <li>unique purification formula (preliminary filtration + double RO)</li>
//         <li>volumetric UV sterilization with circulation & re-sterilization</li>
//         <li>noiseless operation</li>
//         <li>uservice at POU</li>
//         <li>adiabatic cooling & dust suppression</li>
//       </ul>`
//   },
//   {
//     opened: false,
//     label: 'How does your system operate?',
//     body: `<p>Firstly, the inlet water is purified by our unique multi-stage purification system. Next, it is pressurized by a quiet high-pressure pump into the hoseline. Finally, it is atomized by miniature nozzles directly into the premises, rapidly increasing the RH level and providing freshness.</p>
//       <p>The system is controlled by control units, which can be either wired or wireless, and features built-in humidity sensors with high accuracy.</p>`
//   },
//   {
//     opened: false,
//     label: 'How it is possible to recieve an individual specification?',
//     body: 'We offer individual solutions for each object. For selection and calculation we need the following information: your facility’s plan, HVAC project (.pdf or .dwg), as well as your specific requirements.'
//   }
// ]

const { faq } = useFaq()
const mappedFaq = computed(() =>
  faq.value && faq.value.length > 0
    ? faq.value.map((faqItem: FaqItemType) => ({
        opened: false,
        label: faqItem.title,
        body: faqItem.description
      }))
    : []
)
</script>

<template>
  <section class="py-[140px] will-change-[height] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">FAQ</h2>
      </div>
      <div v-if="faq && faq.length > 0">
        <DropdownLinkedList :dropdown-data="mappedFaq" />
      </div>
    </div>
  </section>
</template>
