import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
import HighchartsVue from 'highcharts-vue'
import '../node_modules/nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

stockInit(Highcharts)
app.use(HighchartsVue)

app.component('EasyDataTable', Vue3EasyDataTable)

app.use(createPinia())
app.mount('#app')
