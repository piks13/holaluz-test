import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import ClientSection from '@/components/ClientSection.vue'
Vue.use(Vuex)
Vue.use(Vuetify)
const store = new Vuex.Store({
  getters: {
    client: () => null,
  },
})
describe('ClientSection', () => {
  let wrapper
  const vuetify = new Vuetify()
  beforeEach(() => {
    wrapper = mount(ClientSection, {
      vuetify,
      store,
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('card component is not render when client is null', () => {
    const componentCard = wrapper.find('.c-card')
    expect(componentCard.exists()).toBe(false)
  })
})
