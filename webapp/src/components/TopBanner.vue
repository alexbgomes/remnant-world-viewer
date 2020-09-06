<template>
    <section>
        <div class="top-banner">
            <q-header class="bg-black">
                <q-img
                    class="banner-img"
                    :src="img"
                    alt="players fighting off the root"
                    />
            </q-header>
        </div>
        <div class="title">
            <h1 class="title text-white">Remnant: From the Ashes World Viewer</h1>
        </div>
    </section>
</template>

<script>
import wide_img from "../assets/wide-banner.jpg"

export default {
  name: 'TopBanner',
  data () {
      return {
          img: wide_img
      }
  }
}
</script>

<style>
    div.title {
        margin: 0;
        padding-top: 14%;
        padding-bottom: 2%;
        background-color: #424242;
    }
    h1.title {
        font-family: Impact, Charcoal, sans-serif;
        font-size: 2em;
        line-height: 3rem;
        text-align: center;
        margin: 0;
    }
</style>