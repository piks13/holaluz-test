import axios from 'axios'
export const state = () => ({
  clients: [],
  client: null,
  supplyPoints: [],
})

export const mutations = {
  SET_CLIENTS(state, data) {
    state.clients = data
  },
  SET_CLIENT(state, data) {
    state.client = data
  },
  SET_SUPPLY_POINTS(state, data) {
    state.supplyPoints = data
  },
}

export const actions = {
  async fetchClients({ commit }) {
    try {
      const urlApi = `${this.$config.baseUrl}api/clients`
      const res = await axios.get(urlApi)
      if (res.status === 200) {
        commit('SET_CLIENTS', res.data)
        return res.data
      }
    } catch (e) {
      return e
    }
  },
  async fetchSupplyPoints({ commit }) {
    try {
      const urlApi = `${this.$config.baseUrl}api/supply-points`
      const res = await axios.get(urlApi)
      if (res.status === 200) {
        commit('SET_SUPPLY_POINTS', res.data)
        return res.data
      }
    } catch (e) {
      return e
    }
  },
}
export const getters = {
  clients: (state) => state.clients,
  client: (state) => state.client,
  supplyPoints: (state) => state.supplyPoints,
  supplyPoint(state) {
    return state.supplyPoints.find(
      (supply) => state.client?.cups === supply.cups
    )
  },
  supplyPointByCups: (state) => (cups) => {
    return state.supplyPoints.find((supply) => supply.cups === cups)
  },
  isEnrolled(state, getters) {
    const isHouse = state.client && state.client.building_type === 'house'
    const hasNeighbors =
      getters.supplyPoint && getters.supplyPoint.neighbors?.length > 0

    return isHouse && hasNeighbors
  },
  offerType(state, getters) {
    let invoicedAmountNeighbors = 0
    const p1Powers = []
    const p2Powers = []
    const neighborsCups = getters.supplyPoint?.neighbors
    if (neighborsCups) {
      neighborsCups.forEach((neighborCups) => {
        const dataNeighbor = getters.supplyPointByCups(neighborCups)
        invoicedAmountNeighbors += parseFloat(dataNeighbor.invoiced_amount)
        p1Powers.push(parseInt(dataNeighbor.power.p1))
        p2Powers.push(parseInt(dataNeighbor.power.p2))
      })
      if (invoicedAmountNeighbors > 100) {
        return '**Special discount**: 12% discount.'
      }
      return parseInt(getters.supplyPoint.power.p1) > Math.max(...p1Powers) &&
        parseInt(getters.supplyPoint.power.p2) > Math.max(...p2Powers)
        ? '**Basic discount**: 5% discount. '
        : '**Standard offer**'
    }
    return '**Standard offer**'
  },
}
