import { mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import OfferSection from '@/components/OfferSection.vue'
Vue.use(Vuex)
Vue.use(Vuetify)
const store = new Vuex.Store({
  getters: {
    client: () => [
      {
        full_name: 'Terry Evans',
      },
    ],
    isEnrolled: () => true,
    offerType: () => 'special',
  },
})
describe('OfferSection', () => {
  let wrapper
  const vuetify = new Vuetify()
  beforeEach(() => {
    wrapper = mount(OfferSection, {
      vuetify,
      store,
    })
  })
  it('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  it('card component is render when client exists', () => {
    const componentCard = wrapper.find('.c-card')
    expect(componentCard.exists()).toBe(true)
  })
  it('if isEnrolled true show icon check bold', () => {
    const iconCheckBold = wrapper.find('.mdi-check-bold')
    expect(iconCheckBold.exists()).toBe(true)
  })
  it('if isEnrolled true doesn´t show icon close thick', () => {
    const iconCloseThick = wrapper.find('.mdi-close-thick')
    expect(iconCloseThick.exists()).toBe(false)
  })
  it('if isEnrolled true show the offer type', () => {
    const offerTypeText = wrapper.find('.offer-type')
    expect(offerTypeText.exists()).toBe(true)
  })
})
