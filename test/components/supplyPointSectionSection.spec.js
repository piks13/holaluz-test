import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import supplyPointSection from '@/components/supplyPointSection.vue'
Vue.use(Vuex)
Vue.use(Vuetify)
const store = new Vuex.Store({
  getters: {
    supplyPoint: () => null,
  },
})
describe('supplyPointSection', () => {
  let wrapper
  const vuetify = new Vuetify()
  beforeEach(() => {
    wrapper = mount(supplyPointSection, {
      vuetify,
      store,
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('card component is not render when supply point is null', () => {
    const componentCard = wrapper.find('.c-card')
    expect(componentCard.exists()).toBe(false)
  })
})
