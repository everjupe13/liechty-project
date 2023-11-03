<script setup lang="ts">
import { DropdownLinkedList } from '@/components/shared/dropdown'

const FAQList = [
  {
    opened: false,
    label: 'What is adiabatic humidification?',
    body: 'Adiabatic humidification involves adding humidity to the air in liquid form and then converting it to a gaseous state. This requires energy, which is extracted from the surrounding air. This process also results in the temperature decrease and is therefore known as adiabatic cooling.'
  },
  {
    opened: false,
    label: 'What are the main advantages of Liechty systems?',
    body: `<p>Here are the main advantages of our systems:</p>
      <ul>
        <li>unique purification formula (preliminary filtration + double RO)</li>  
        <li>volumetric UV sterilization with circulation & re-sterilization</li>  
        <li>noiseless operation</li>  
        <li>uservice at POU</li>  
        <li>adiabatic cooling & dust suppression</li>  
      </ul>`
  },
  {
    opened: false,
    label: 'How does your system operate?',
    body: `<p>Firstly, the inlet water is purified by our unique multi-stage purification system. Next, it is pressurized by a quiet high-pressure pump into the hoseline. Finally, it is atomized by miniature nozzles directly into the premises, rapidly increasing the RH level and providing freshness.</p>
      <p>The system is controlled by control units, which can be either wired or wireless, and features built-in humidity sensors with high accuracy.</p>`
  },
  {
    opened: false,
    label: 'How it is possible to recieve an individual specification?',
    body: 'We offer individual solutions for each object. For selection and calculation we need the following information: your facility’s plan, HVAC project (.pdf or .dwg), as well as your specific requirements.'
  }
]
</script>

<template>
  <section
    class="border-b border-dark/20 py-[140px] xl:py-80 lg:py-60 md:py-40"
  >
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
