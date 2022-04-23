<template>
  <v-col cols="12">
    <v-card v-if="client" class="c-card pa-3">
      <v-card-title class="pa-0 headline secondary--text"> Oferta</v-card-title>
      <div class="c-card__divider"></div>
      <v-card-text class="px-0">
        <v-row>
          <v-col>
            <span class="font-weight-bold"
              >¿Puede inscribirse en la rebolución de los tejados?:
            </span>
            <v-icon v-if="isEnrolled" color="secondary">mdi-check-bold</v-icon>
            <v-icon v-else color="error">mdi-close-thick</v-icon>
          </v-col>
          <v-col v-if="isEnrolled">
            <span class="font-weight-bold"
              >Tipo de oferta:
              <span class="secondary--text"> {{ offerType }}</span>
            </span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OfferSection',

  computed: {
    ...mapGetters(['client', 'isEnrolled', 'offerType']),
  },
}
</script>
