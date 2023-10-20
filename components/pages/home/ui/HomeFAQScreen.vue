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
    body: `<p>First of all, inlet water is purified by unique multi-stage purification system. Secondly it is pressurized by silent HP pump to the hoseline.<p>
      <p>Finally, it is atomized by miniature nozzles directly into premises, instantly incresing RH level and providing freshness.</p> 
      <p>The systems is controlled by control units (either wired or wireless) with built-in humidity sensors of high accuracy.</p> `
  },
  {
    opened: false,
    label: 'How it is possible to recieve an individual specification?',
    body: 'We offer individual solutions for each object. For selection and calculation we need the following information: your facility’s plan, HVAC project (.pdf or .dwg), as well as your specific requirements.'
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
