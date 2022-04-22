<template>
  <v-col cols="12" md="6">
    <v-card v-if="supplyPoint" class="c-card mt-8 pa-3">
      <v-card-title class="pa-0 headline secondary--text">
        Punto de suministro</v-card-title
      >
      <div class="c-card__divider"></div>
      <v-card-text class="pa-0 pb-4">
        <p>
          <span class="font-weight-bold">Importe factura:</span>
          {{ supplyPoint.invoiced_amount }}
        </p>
        <p>
          <span class="font-weight-bold">Vecinos:</span>
          <span v-for="(neighbor, i) in supplyPoint.neighbors" :key="i">
            {{ neighbor }},
          </span>
        </p>
        <p>
          <span class="font-weight-bold">Tarifa:</span> {{ supplyPoint.tariff }}
        </p>
        <p>
          <span class="font-weight-bold">Potencia:</span>
          <br />
          <span v-for="(value, key) in supplyPoint.power" :key="key">
            <span class="font-weight-bold text-uppercase ml-2">{{ key }}:</span>
            {{ value }}
          </span>
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SupplyPointSection',

  computed: {
    ...mapGetters(['supplyPoint']),
  },
}
</script>
