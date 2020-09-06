<template>
  <q-layout>
    <top-banner />
    <main-page />
    <bottom-footer />
  </q-layout>
</template>

<script>
import TopBanner from './components/TopBanner'
import MainPage from './components/MainPage'
import BottomFooter from './components/BottomFooter'

export default {
  name: 'LayoutDefault',

  metaInfo: {
    title: 'Remnant World Viewer',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'A tool for Remnant: From the Ashes to determine your campaign and adventure mode rolls.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  components: {
    TopBanner,
    MainPage,
    BottomFooter
  },

  data () {
    return {
    }
  }
}
</script>

<style>
  .q-page-container {
    padding-top: 0 !important;
  }
  .text-remred {
    color: #BD2A23;
  }
  .bg-remred {
    background: #BD2A23;
  }
</style>
