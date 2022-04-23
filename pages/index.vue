<template>
  <div>
    <SearchSection />
    <v-row>
      <ClientSection />
      <SupplyPointSection />
      <OfferSection />
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'HolaLuzLanding',

  async fetch() {
    await this.fetchClients()
    await this.fetchSupplyPoints()
  },
  computed: {},
  methods: {
    ...mapActions(['fetchClients', 'fetchSupplyPoints']),
  },
}
</script>
