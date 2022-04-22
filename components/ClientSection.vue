<template>
  <v-col cols="12" md="6">
    <v-card v-if="client" class="c-card mt-8 pa-3">
      <v-card-title class="pa-0 headline secondary--text">
        Datos del cliente</v-card-title
      >
      <div class="c-card__divider"></div>
      <v-card-text class="pa-0">
        <p>
          <span class="font-weight-bold">Nombre completo:</span>
          {{ client.full_name }}
        </p>
        <p>
          <span class="font-weight-bold">Dirección:</span> {{ client.address }}
        </p>
        <p><span class="font-weight-bold">Rol:</span> {{ client.role }}</p>
        <p>
          <span class="font-weight-bold">Vivienda:</span>
          {{ client.building_type }}
        </p>
        <p><span class="font-weight-bold">CUPS:</span> {{ client.cups }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ClientSection',

  computed: {
    ...mapGetters(['client']),
  },
}
</script>
