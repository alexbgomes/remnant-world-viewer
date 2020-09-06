<template>
    <section>
        <q-footer class="bottom-footer">
            <div class="bottom-footer">
                <p>Massive thank-you and credits to hzla for the original <a href="https://hzla.github.io/Remnant-World-Analyzer/" target="_blank">World Analyzer</a>.</p>
                <p>Credits to Auryn on Steam for an up-to-date <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2092594669" target="_blank">Collector's Guide</a>.</p>
                <p>Credits to u/FAOAB on Reddit for the <a href="https://docs.google.com/spreadsheets/d/1VzmDx0ZXQWN5N_9_zP0gEqToyuB9ZjlxgZOEGdiuA6A/edit#gid=1555303394" target="_blank">Convenience Guide</a>.</p>
                <p>Credits to the <a href="https://remnantfromtheashes.wiki.fextralife.com/Remnant+From+The+Ashes+Wiki" target="_blank">Remnant Wiki</a> and community for locations, event names, boss names, dungeon structures, etc.</p>
            </div>
        </q-footer>
    </section>
</template>

<script>

export default {
  name: 'BottomFooter',
  data () {
      return {
      }
  }
}
</script>

<style>
    .bottom-footer {
        background-color: black !important;
        border-top: 1px solid #BD2A23;
    }
    div.bottom-footer {
        padding: 0.5rem 1rem;
    }
    div.bottom-footer > p {
        margin: 0;
    }
    div.bottom-footer > p > a {
        color: #BD2A23;
    }
    div.bottom-footer > p > a:hover {
        color: #C10015;
    }
</style>