<template>
  <q-page-container>
    <q-page class="main-display">
      <q-file class="file-box" outlined label="Select or Drop .sav File Here" counter accept=".sav" @input="handle_update" v-model="file">
        <template v-slot:prepend>
          <q-icon name="fas fa-file-upload" />
        </template>

        <template v-slot:hint>
          File size
        </template>
      </q-file>
      <display v-if="file !== null" :save_file="file" :key="key"/>
      <about-box v-if="file == null" />
    </q-page>
  </q-page-container>
</template>

<script>
import logo from '../assets/logo.png'
import Display from './Display'
import AboutBox from './AboutBox'

export default {
  name: 'MainPage',
  data () {
    return {
      img: logo,
      file: null,
      key: 0
    }
  },
  components: {
    Display,
    AboutBox
  },
  methods: {
    handle_update() {
      this.key++;
    }
  }
}
</script>

<style>
  .main-display {
    background-color: #424242;
  }
  .file-box {
    width: 20em !important;
    margin: auto;
    background-color: black;
    box-shadow: 0px 0px 12px 4px #BD2A23;
  }
  .file-box:hover {
    box-shadow: 0px 0px 12px 4px #ffffff;
  }
  .q-field__control {
    background-color: black;
  }
  .q-field__bottom {
    background-color: white;
  }
  .q-field__messages {
    color: black;
  }
  .q-field__counter {
    color: black;
  }
  .ellipsis {
    color: white !important;
  }
  .fas {
    color: white;
  }
  .q-field__native > div {
    color: #BD2A23;
  }
</style>