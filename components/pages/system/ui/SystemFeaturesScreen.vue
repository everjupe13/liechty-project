<script lang="ts" setup>
import SystemFeaturesCard from './SystemFeaturesCard.vue'
</script>

<template>
  <section class="py-[140px] xl:py-80 lg:py-60 md:py-40">
    <div class="container">
      <div class="mb-40">
        <h2 class="section-title">Features</h2>
      </div>
      <div
        class="grid grid-cols-3 gap-80 xl:gap-50 lg:gap-40 md:grid-cols-1 md:gap-30"
      >
        <SystemFeaturesCard
          title="100% hygiene"
          description="The unique purification system reduces salt content in spray water by 99.5%, and the volumetric UV sterilization with circulation kills up to 99.99% of microbes."
        />
        <SystemFeaturesCard
          title="From one room to whole house"
          description="Flexible capacity of Liechty systems allows to humidify premises from 10 to 900 sq. meters. One nozzle may effectively operate in a room from 10 to 50 sq. meters."
        />
        <SystemFeaturesCard
          title="Energy efficiency"
          description="One of the main advantages of Liechty system is it’s low power comsumption. The main power consumer is the high-pressure pump, with a total power consumption of less than 330 watts at full load."
        />
        <SystemFeaturesCard
          title="Long service lifetime"
          description="Due to modern technological solutions, our equipment has an extremely long service interval - only once every two years. The equipment may be maintained at place of use."
        />
        <SystemFeaturesCard
          title="Installation in a finished interior"
          description="Technological solutions allow to install Liechty systems in a finished interior thanks to flexible high-pressure hoses & wireless control units."
        />
        <SystemFeaturesCard
          title="Alternative air conditioning"
          description="The air is cooled by the evaporation of water droplets in it. On average, the temperature is lowered by 2 to 3 degrees, which allows the system to be used for pleasant cooling in summer."
        />
        <SystemFeaturesCard
          title="Dust suppression"
          description="The optimum microdroplet size is specifically selected for localized dust suppression at the point of atomization."
        />
        <SystemFeaturesCard
          title="High capacity"
          description="Capacity of one nozzle ranges between 0.6 to 1.2 l/h and can humidify the room of max. 50 sq. meters. Just imagine, that capacity of most whole house humidifiers is under 0.3 l/h."
        />
      </div>
    </div>
  </section>
</template>
