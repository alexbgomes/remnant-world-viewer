<template>
    <div :class="div_class">
        <div v-if="filters['side_dungeons']" :class="card_class">
            <q-card v-for="(side_dungeons, idx) in sav['side_dungeons']" :key="'side_dungeons'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">Side Dungeon</h6>
                    <p class="world-card-desc">{{side_dungeons['subregion']}} - {{side_dungeons['dungeon']}}</p>
                </q-card-section>
            </q-card>
        </div>
        <div v-if="filters['sieges']" :class="card_class">
            <q-card v-for="(sieges, idx) in sav['sieges']" :key="'sieges'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">Siege</h6>
                    <p class="world-card-desc">{{sieges['subregion']}} - Objective: {{sieges['siege']}}</p>
                </q-card-section>
            </q-card>
        </div>
        <div v-if="filters['pois']" :class="card_class">
            <q-card v-for="(pois, idx) in sav['pois']" :key="'pois'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">Point of Interest</h6>
                    <p class="world-card-desc">{{pois['poi']}}</p>
                </q-card-section>
            </q-card>
        </div>
        <div v-if="filters['items']" :class="card_class">
            <q-card v-for="(items, idx) in sav['items']" :key="'items'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">Item Drop</h6>
                    <p class="world-card-desc">{{items['overworld']}} - Item: {{items['item']}}</p>
                </q-card-section>
            </q-card>
        </div>
        <div v-if="filters['minibosses']" :class="card_class">
            <q-card v-for="(minibosses, idx) in sav['minibosses']" :key="'minibosses'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">Miniboss</h6>
                    <p class="world-card-desc">{{minibosses['subregion']}} - Miniboss: {{minibosses['miniboss']}}</p>
                </q-card-section>
            </q-card>
        </div>
        <div v-if="filters['world_bosses']" :class="card_class">
            <q-card v-for="(world_bosses, idx) in sav['world_bosses']" :key="'world_bosses'+idx" :class="card_class">
                <q-card-section>
                    <h6 class="world-card-title">World Boss</h6>
                    <p class="world-card-desc">{{world_bosses['subregion']}} - Boss: {{world_bosses['boss']}}</p>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<script>

export default {
  name: 'World',
  props: {
        name: {
            type: String,
            required: true
        },
        sav: {
            type: Object,
            required: true
        },
        filters: {
            type: Object,
            required: true
        }
    },
  data () {
      return {
      }
  },
  computed: {
      card_class: function() {
          return 'card-' + this.name.toLowerCase() + ' world-card';
      },
      div_class: function() {
          return 'world-' + this.name.toLowerCase() + ' world-div';
      }
  },
  created() {
      console.log(this.sav);
  }
}
</script>

<style>
    .world-div {
        padding-top: 1rem;
    }
    .q-card.world-card {
        background-color: black !important;
        color: white;
        border-top: 1px solid #BD2A23;
        border-right: 1px solid #BD2A23;
        border-bottom: 1px solid #BD2A23;
        border-radius: 0;
    }
    .world-card-title {
        margin-top: 0;
        margin-bottom: 0.5rem;
        text-decoration: underline;
    }
    .world-card-desc {
        margin-top: 0;
    }
    .world-card-desc > a {
        color: #BD2A23;
    }
    .card-earth {
        border-left: 1rem solid #558B2F;
    }
    .card-rhom {
        border-left: 1rem solid #FF8F00;
    }
    .card-corsus {
        border-left: 1rem solid #939D24;
    }
    .card-yaesha {
        border-left: 1rem solid #00695C;
    }
    .card-reisum {
        border-left: 1rem solid #0277BD;
    }
</style>