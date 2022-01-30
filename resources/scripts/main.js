import '../sass/crater.scss'
import 'v-tooltip/dist/v-tooltip.css'
require('@inspector-apm/inspector-nodejs')({
    ingestionKey: '307c84fad0cabcce68c0a62eefc053ddb575995f'
})
import '@/scripts/plugins/axios.js'
import * as VueRouter from 'vue-router'
import router from '@/scripts/router/index'
import * as pinia from 'pinia'
import * as Vue from 'vue'
import * as Vuelidate from '@vuelidate/core'

window.pinia = pinia
window.Vuelidate = Vuelidate

import Crater from './Crater'

window.Vue = Vue
window.router = router
window.VueRouter = VueRouter

window.Crater = new Crater()