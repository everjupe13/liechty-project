<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const isEN = computed(() => locale.value === 'en')
</script>

<template>
  <div>
    <div class="mb-35">
      <h2 class="mb-35 font-bold leading-none text-36 md:text-24">
        {{ isEN ? 'Pre-order registration' : 'Anmeldung vorbestellen' }}
      </h2>
    </div>
    <div class="max-w-[650px] text-[#838383] text-16 md:text-14">
      <p class="mb-14">
        {{
          isEN
            ? 'Dear customers of our humidification systems! We inform you that orders are shipped within 21 business days after payment.'
            : 'Liebe Kunden unserer Befeuchtungssysteme! Wir informieren Sie darüber, dass Bestellungen innerhalb von 21 Werktagen nach Zahlungseingang versandt werden.'
        }}
      </p>
      <p>
        {{
          isEN
            ? 'After placing your order, our managers will contact you to control your application, make the final payment and answer your questions.'
            : 'Nachdem Sie Ihre Bestellung aufgegeben haben, werden sich unsere Manager mit Ihnen in Verbindung setzen, um Ihren Antrag zu prüfen, die Abschlusszahlung vorzunehmen und Ihre Fragen zu beantworten.'
        }}
      </p>
    </div>
  </div>
</template>
