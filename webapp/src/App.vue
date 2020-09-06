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

  components: {
    TopBanner,
    MainPage,
    BottomFooter
  },

  data () {
    return {
    }
  },

  created () {
    document.title = "World Viewer";
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
