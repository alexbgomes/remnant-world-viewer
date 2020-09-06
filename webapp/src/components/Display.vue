<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-white"
          active-color="negative"
          indicator-color="remred"
          align="justify"
          narrow-indicator
        >
          <q-tab v-if="!has_clementine" name="main_campaign" label="From the Ashes Campaign" />
          <q-tab v-if="has_clementine" name="clementine_campaign" label="Subject 2923 Campaign" />
          <q-tab v-if="has_adventure" name="adventure_mode" label="Adventure Mode" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="main_campaign"  class="q-pa-none">
            <q-splitter v-model="splitter_model">
              <template v-slot:before>
                <q-tabs
                  v-model="inner_tab"
                  vertical
                >
                  <q-tab name="all" label="All" />
                  <q-tab class="text-light-green-9" name="earth" label="Earth" />
                  <q-tab class="text-amber-9" name="rhom" label="Rhom" />
                  <q-tab class="text-lime-9" name="corsus" label="Corsus" />
                  <q-tab class="text-teal-9" name="yaesha" label="Yaesha" />
                </q-tabs>
              </template>
              <template v-slot:after>
                <q-tab-panels
                  v-model="inner_tab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="all">
                    <div class="text-h4 q-mb-md">All</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="main_all_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="main_all_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="main_all_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="main_all_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="main_all_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="main_all_filters['world_bosses']" />
                    </div>
                    <world name="Earth" :sav="earth_sav" :filters="main_all_filters" />
                    <world name="Rhom" :sav="rhom_sav" :filters="main_all_filters" />
                    <world name="Corsus" :sav="corsus_sav" :filters="main_all_filters" />
                    <world name="Yaesha" :sav="yaesha_sav" :filters="main_all_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="earth">
                    <div class="text-h4 q-mb-md">Earth</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="main_earth_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="main_earth_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="main_earth_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="main_earth_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="main_earth_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="main_earth_filters['world_bosses']" />
                    </div>
                    <world name="Earth" :sav="earth_sav" :filters="main_earth_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="rhom">
                    <div class="text-h4 q-mb-md">Rhom</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="main_rhom_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="main_rhom_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="main_rhom_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="main_rhom_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="main_rhom_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="main_rhom_filters['world_bosses']" />
                    </div>
                    <world name="Rhom" :sav="rhom_sav" :filters="main_rhom_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="corsus">
                    <div class="text-h4 q-mb-md">Corsus</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="main_corsus_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="main_corsus_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="main_corsus_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="main_corsus_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="main_corsus_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="main_corsus_filters['world_bosses']" />
                    </div>
                    <world name="Corsus" :sav="corsus_sav" :filters="main_corsus_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="yaesha">
                    <div class="text-h4 q-mb-md">Yaesha</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="main_yaesha_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="main_yaesha_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="main_yaesha_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="main_yaesha_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="main_yaesha_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="main_yaesha_filters['world_bosses']" />
                    </div>
                    <world name="Yaesha" :sav="yaesha_sav" :filters="main_yaesha_filters" />
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="clementine_campaign">
            <q-splitter v-model="splitter_model">
              <template v-slot:before>
                <q-tabs
                  v-model="inner_tab"
                  vertical
                >
                  <q-tab name="all" label="All" />
                  <q-tab class="text-light-green-9" name="earth" label="Earth" />
                  <q-tab class="text-light-blue-9" name="reisum" label="Reisum" />
                </q-tabs>
              </template>
              <template v-slot:after>
                <q-tab-panels
                  v-model="inner_tab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="all">
                    <div class="text-h4 q-mb-md">All</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="clementine_all_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="clementine_all_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="clementine_all_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="clementine_all_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="clementine_all_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="clementine_all_filters['world_bosses']" />
                    </div>
                    <world name="Earth" :sav="earth_revisit_sav" :filters="clementine_all_filters" />
                    <world name="Reisum" :sav="reisum_sav" :filters="clementine_all_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="earth">
                    <div class="text-h4 q-mb-md">Earth</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="clementine_earth_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="clementine_earth_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="clementine_earth_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="clementine_earth_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="clementine_earth_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="clementine_earth_filters['world_bosses']" />
                    </div>
                    <world name="Earth" :sav="earth_revisit_sav" :filters="clementine_earth_filters" />
                  </q-tab-panel>
                  <q-tab-panel name="reisum">
                    <div class="text-h4 q-mb-md">Reisum</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="clementine_reisum_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="clementine_all_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="clementine_reisum_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="clementine_reisum_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="clementine_reisum_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="clementine_reisum_filters['world_bosses']" />
                    </div>
                    <world name="Reisum" :sav="reisum_sav" :filters="clementine_reisum_filters" />
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="adventure_mode">
            <q-splitter v-model="splitter_model">
              <template v-slot:before>
                <q-tabs
                  v-model="adv_tab"
                  vertical
                >
                  <q-tab :class="adv_tab_class" name="adventure" :label="adventure_world" />
                </q-tabs>
              </template>
              <template v-slot:after>
                <q-tab-panels
                  v-model="adv_tab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="adventure">
                    <div class="text-h4 q-mb-md">{{adventure_world}}</div>
                    <div class="q-pa-md text-white filters">
                      <p class="filters">Filters</p>
                      <q-toggle color="negative" label="Side Dungeons" dark v-model="adv_filters['side_dungeons']" />
                      <q-toggle color="negative" label="Sieges" dark v-model="adv_filters['sieges']" />
                      <q-toggle color="negative" label="Points of Interest" dark v-model="adv_filters['poi']" />
                      <q-toggle color="negative" label="Items" dark v-model="adv_filters['items']" />
                      <q-toggle color="negative" label="Minibosses" dark v-model="adv_filters['minibosses']" />
                      <q-toggle color="negative" label="World Bosses" dark v-model="adv_filters['world_bosses']" />
                    </div>
                    <world :name="adventure_world" :sav="adv_sav" :filters="adv_filters" />
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import World from './World'

export default {
    name: 'Display',
    props: {
        save_file: {
            type: File,
            required: true
        }
    },
    computed: {
      adv_tab_class: function() {
        let res = "";
        if (this.adventure_world == "Earth")
          res = "text-light-green-9";
        if (this.adventure_world == "Rhom")
          res = "text-amber-9";
        if (this.adventure_world == "Corsus")
          res = "text-lime-9";
        if (this.adventure_world == "Yaesha")
          res = "text-teal-9";
        if (this.adventure_world == "Reisum")
          res =  "text-light-blue-9";
        return res;
      }
    },
    data () {
        return {
            tab: 'main_campaign',
            inner_tab: 'all',
            adv_tab: 'adventure',
            splitter_model: 20,
            main_all_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            main_earth_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            main_rhom_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            main_corsus_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            main_yaesha_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            clementine_all_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            clementine_earth_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            clementine_reisum_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            adv_filters: {
              side_dungeons: true,
              poi: true,
              minibosses: true,
              world_bosses: true,
              sieges: true,
              items: true
            },
            has_clementine: false,
            has_adventure: false,
            adventure_world: "Unknown",
            earth_data: {
              boss_dungeons: {
                "RootWraith": "The Hidden Sanctum",
                "RootBrute": "Sunken Passage",
                "Brabus": "Cutthroat Channel",
                "RootTumbleweed": "The Tangled Pass",
                "RootEnt": "The Choking Hallow",
                "RootDragon": "The Ash Yard",
                "LizAndLiz": "Land's End",
                "Splitter": "Leto's Lab (Research Station Alpha)"
              },
              side_dungeons: {
                "HuntersHideout": "Hidden Grotto",
                "MadMerchant": "Junk Town",
                "LizAndLiz": "The Warren",
                "RootShrine": "The Gallows",
                "RootCultist": "Marrow Pass",
                "LastWill": "Sorrow's Field"
              },
              dungeon_bosses: {
                "RootBrute": "Gorefist",
                "RootWraith": "Shroud",
                "RootTumbleweed": "The Mangler",
                "Brabus": "Brabus",
                "Splitter": "Riphide"
              },
              world_bosses: {
                "RootEnt": "The Ent",
                "RootDragon": "Singe"
              }
            },
            rhom_data: {
              boss_dungeons: {
                "SwarmMaster": "The Iron Rift",
                "TheHarrow": "The Burrows",
                "HoundMaster": "The Burrows",
                "Sentinel": "Shackled Canyon",
                "Vyr": "The Ardent Temple",
                "WastelandGuardian": "Loom of the Black Sun"
              },
              side_dungeons: {
                "TheLostGantry": "Concourse of the Sun",
                "ArmorVault": "Vault of Heralds",
                "TheCleanRoom": "The Purge Hall"
              },
              dungeon_bosses: {
                "Sentinel": "Raze",
                "SwarmMaster": "Scourge",
                "HoundMaster": "Maul",
                "OldManAndConstruct": "Ancient Construct",
                "Vyr": "Shade and Shatter"
              },
              world_bosses: {
                "WastelandGuardian": "Claviger",
                "TheHarrow": "The Harrow"
              }
            },
            corsus_data: {
              boss_dungeons: {
                "Fatty": "The Shack",
                "SlimeHulk": "The Drowned Trench",
                "Tyrant": "The Capillary",
                "FlickeringHorror": "Hall of Whispers",
                "BarbTerror": "Needle Lair",
                "SwampGuardian": "The Grotto",
                "IskalTemple": "Queen's Temple"
              },
              side_dungeons: {
                "Wisp": "Circlet Hatchery",
                "FetidPool": "Fetid Pools",
                "BrainBug": "The Strange Pass" //Mar'Gosh's Lair
              },
              dungeon_bosses: {
                "Tyrant": "The Thrall",
                "SlimeHulk": "Canker",
                "FlickeringHorror": "Dream Eater",
                "BarbTerror": "Barbed Terror",
                "IskalTemple": "Iskal Queen" //needs testing
              },
              world_bosses: {
                "Fatty": "The Unclean One",
                "SwampGuardian": "Ixillis"
              }
            },
            yaesha_data: {
              boss_dungeons: {
                "KinCaller": "The Halls of Judgement",
                "BlinkFiend": "Widow's Pass",
                "RootHorror": "Guardian Shrine",
                "BlinkThief": "Forgotten Undercroft", //technically is a boss in a side dungeon, not a boss dungeon
                "StormCaller": "Heretic's Nest",
                "ImmolatorAndZephyr": "Withering Village",
                "Wolf": "The Ravager's Haunt",
                "TotemFather": "The Tempest Court"
              },
              side_dungeons: {
                "SlaveRevolt": "Shrine of the Immortals", //needs testing
                "TheRisen": "Ahanae's Lament",
                "DoeShrine": "Widow's Vestry",
                "WolfShrine": "Temple of the Ravager",
                "BlinkThief": "Forgotten Undercroft"
              },
              dungeon_bosses: {
                "KinCaller": "The Warden",
                "StormCaller": "Stormcaller",
                "ImmolatorAndZephyr": "Sear and Scald",
                "BlinkFiend": "Onslaught",
                "RootHorror": "Root Horror",
                "BlinkThief": "Blink Thief"
              },
              world_bosses: {
                "TotemFather": "Totem Father",
                "Wolf": "The Ravager"
              }
            },
            earth_rural_data: {
              boss_dungeons: {
                
              },
              side_dungeons: {
                //nothing needed mostly
                //POIs discovered: "Homestead", unknown, found from: file
                //Known Siege: "Barn Siege", Did this on first campaign run, found from: Wiki
              },
              dungeon_bosses: {
                
              },
              world_bosses: {
                
              }
            },
            reisum_data: {
              boss_dungeons: {
                "TheJackal": "The Wild Reach",
                "UrikkiBlademasters": "Valenhaag Mines",
                "BlizzardMage": "Wuthering Keep",
                "ShieldWarden": "Exile's Trench",
                "RatRider": "The Crimson Hold"
              },
              side_dungeons: {
                "FrozenLords": "Judgement's Spear",
                //Felmourn Burrow (FROM WIKI, where the Frostborne Axe spawns, not sure if this can be found on Adv Mode)
                "WarningTotems": "Magir's Dirge",
                "CreepersPeeper": "Watcher's Hollow",
                "ShamanFlames": "Grave of the Elders",
                "IceSkimmer": "The Frieran Sea"
              },
              dungeon_bosses: {
                "UrikkiBlademasters": "Tian, the Assassin",
                "ShieldWarden": "Obryk, the Shield Warden",
                "BlizzardMage": "Ikro, the Ice Conjurer",
                "TheJackal": "Erfor, the Jackal"
              },
              world_bosses: {
                "RatRider": "Brudvaak, the Rider and Vargr, the Warg"
              }
            },
            worlds: {
              EARTH: "World_City",
              RHOM: "World_Wasteland",
              CORSUS: "World_Swamp",
              YAESHA: "World_Jungle",
              EARTH_REVISIT: "World_Rural",
              REISUM: "World_Snow"
            },
            event_types: {
              SIDE_DUNGEON: "Quest_SmallD",
              POI: "Quest_OverworldPOI",
              WORLD_BOSS: "Quest_Boss",
              MINIBOSS: "Quest_Mini",
              SIEGE: "Quest_Siege",
              ITEM_DROP: "Quest_Event"
              },
            overworlds: {
              FAIRVIEW: "City_Overworld_Zone1",
              WESTCOURT: "City_Overworld_Zone2",
              EASTERN_WIND: "Wasteland_Overworld_Zone1",
              SCOURING_WASTE: "Wasteland_Overworld_Zone2",
              FETID_GLADE: "Swamp_Overworld_Zone1",
              MIST_FEN: "Swamp_Overworld_Zone2",
              VERDANT_STRAND: "Jungle_Overworld_Zone1",
              SCALDING_GLADE: "Jungle_Overworld_Zone2",
              DROLNIR_WOODS: "Snow_Overworld_Zone1",
              WARRENS: "Snow_Overworld_Zone2"
            },
            earth_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          rhom_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          corsus_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          yaesha_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          earth_revisit_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          reisum_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
          adv_sav: {
            side_dungeons: [],
            sieges: [],
            pois: [],
            items: [],
            minibosses: [],
            world_bosses: []
          },
        }
    },
    methods: {
        extract_data() {
            let file_reader = new FileReader();
            file_reader.onload = (evt) => {
                this.process_data(evt);
            };
            file_reader.readAsText(this.save_file);
        },
        process_data(evt) {
          let DEBUG = false;
          let LOG = false;
          let all_data = evt.target.result;

          this.has_clementine = all_data.indexOf('/Game/World_Rural/Templates/Template_Rural_Overworld_01.Template_Rural_Overworld_01') !== -1;
          if (this.has_clementine) this.tab = "clementine_campaign";
          this.has_adventure = all_data.indexOf('Adventure') !== -1; //fresh characters have no instances of adventure mode content

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *               Clear Savs              *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */

          let event_type_indicess = ["side_dungeons", "sieges", "pois", "items", "minibosses", "world_bosses"]
          let reset_sav = (sav) => {
            event_type_indicess.forEach((event_type) => {
              sav[event_type] = [];
            });
            return sav;
          }
          let reset_all_sav = () => {
            this.earth_sav = reset_sav(this.earth_sav);
            this.rhom_sav = reset_sav(this.rhom_sav);
            this.corsus_sav = reset_sav(this.corsus_sav);
            this.yaesha_sav = reset_sav(this.yaesha_sav);
            this.earth_revisit_sav = reset_sav(this.earth_revisit_sav);
            this.reisum_sav = reset_sav(this.reisum_sav);
            this.adv_sav = reset_sav(this.adv_sav);
          }

          reset_all_sav();

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *                Helpers                *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */

          let lint_dupes = (data_block) => {
            let dupe_indices = [];
            for (let idx = 0; idx < data_block.length - 1; idx++) {
              let next_sample = data_block[idx+1].split("/").slice(0, 4).join("/");
              let cur_sample = data_block[idx].split("/").slice(0, 4).join("/");
              if (next_sample == cur_sample)
                dupe_indices.push(idx+1);
            }

            let shift = 0;
            dupe_indices.forEach((idx) => {
              data_block.splice(idx - shift, 1);
              shift++;
            });

            return data_block;
          }

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *             From the Ashes            *
          *               Campaigne               *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */
              
          let main_campaign_data_block = lint_dupes(all_data.substring(all_data.indexOf("/Game/Campaign_Main/Quest_Campaign_City.Quest_Campaign_City") + 60,
                                                                       all_data.indexOf("/Game/Campaign_Main/Quest_Campaign_Ward13.Quest_Campaign_Ward13")
                                                                      ).split("Game"
                                                                      ).filter(data => data.startsWith("/World_")));

          if (DEBUG) console.log(main_campaign_data_block);

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *              Subject 2923             *
          *               Campaigne               *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */
         let clementine_campaign_data_block;

          if (this.has_clementine) {
            clementine_campaign_data_block = lint_dupes(all_data.substring(all_data.indexOf("/Game/World_Rural/Templates/Template_Rural_Overworld_01.Template_Rural_Overworld_01") + 84,
                                                                        all_data.indexOf("/Game/Campaign_Clementine/Quests/WardPrime/Quest_WardPrime_Template.Quest_WardPrime")
                                                                        ).split("Game"
                                                                        ).filter(data => data.startsWith("/World_") && data.indexOf("Template_Snow_Dungeon") == -1));

            if (DEBUG) console.log(clementine_campaign_data_block);
          }

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *             From the Ashes            *
          *             + Subject 2923            *
          *             Adventure Mode            *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */
          let adventure_data_block;
          let adventure_world;

          if (this.has_adventure) {
            adventure_data_block = lint_dupes(all_data.split("\n"
                                                                    ).filter(data => data.indexOf("Adventure") !== -1
                                                                    )[1
                                                                    ].split("Game"
                                                                    ).filter(data => data.startsWith("/World_") && data.indexOf("Template_Snow_Dungeon") == -1));

            adventure_world = lint_dupes(all_data.substring(all_data.lastIndexOf("UsageCount"),
                                                    all_data.lastIndexOf("/Game/World_Base/Quests/Quest_Ward13/")
                                                    ).split("Game"
                                                    ).filter(data => data.startsWith("/World_")
                                                    )[1].split("/")[1]);

            if (adventure_world == "World_City" || adventure_world == "World_Rural")
              this.adventure_world = "Earth";

            if (adventure_world == "World_Wasteland")
              this.adventure_world = "Rhom";

            if (adventure_world == "World_Swamp")
              this.adventure_world = "Corsus";

            if (adventure_world == "World_Jungle")
              this.adventure_world = "Yaesha";

            if (adventure_world == "World_Snow")
              this.adventure_world = "Reisum";

            if (DEBUG) {
              console.log("ADVENTURE MODE WORLD: " + this.adventure_world);
              console.log(adventure_data_block);
            }
          }

          /*
          * * * * * * * * * * * * * * * * * * * * *
          *                                       *
          *                  ETL                  *
          *                                       *
          * * * * * * * * * * * * * * * * * * * * *
          * 
          * 
          * 
          * 
          */

          let overworld;

          let process_data_chunk = (data) => {
            let data_parts = data.split("/")

            let world;
            let world_pointer;
            let sav_pointer;

            if (data_parts[1] == this.worlds.EARTH) {
              world = "Earth";
              world_pointer = this.earth_data;
              sav_pointer = this.earth_sav;
            }

            if (data_parts[1] == this.worlds.RHOM) {
              world = "Rhom";
              world_pointer = this.rhom_data;
              sav_pointer = this.rhom_sav;
            }

            if (data_parts[1] == this.worlds.CORSUS) {
              world = "Corsus";
              world_pointer = this.corsus_data;
              sav_pointer = this.corsus_sav;
            }

            if (data_parts[1] == this.worlds.YAESHA) {
              world = "Yaesha";
              world_pointer = this.yaesha_data;
              sav_pointer = this.yaesha_sav;
            }

            if (data_parts[1] == this.worlds.EARTH_REVISIT) {
              world = "Earth";
              world_pointer = this.earth_rural_data;
              sav_pointer = this.earth_revisit_sav;
            }

            if (data_parts[1] == this.worlds.REISUM) {
              world = "Reisum";
              world_pointer = this.reisum_data;
              sav_pointer = this.reisum_sav;
            }

            if (data_parts[2] == "Templates") {
              if (DEBUG) console.log("DETERMINING ZONE FROM: " + data_parts)
              let zone = data_parts[3].split("_").slice(1, 4).join("_");

              if (zone == this.overworlds.FAIRVIEW)
                overworld = "Fairview";

              else if (zone == this.overworlds.WESTCOURT)
                overworld = "Westcourt";

              else if (zone == this.overworlds.EASTERN_WIND)
                overworld = "The Eastern Wind";

              else if (zone == this.overworlds.SCOURING_WASTE)
                overworld = "The Scouring Waste";

              else if (zone == this.overworlds.FETID_GLADE)
                overworld = "The Fetid Glade";

              else if (zone == this.overworlds.MIST_FEN)
                overworld = "The Mist Fen";

              else if (zone == this.overworlds.VERDANT_STRAND)
                overworld = "The Verdant Strand";

              else if (zone == this.overworlds.SCALDING_GLADE)
                overworld = "The Scalding Glade";

              else if (zone == this.overworlds.DROLNIR_WOODS)
                overworld = "Drolnir Woods";

              else if (zone == this.overworlds.WARRENS)
                overworld = "The Warrens";

              else 
                overworld = "Unimplemented";

              if (DEBUG) console.log("ZONE: " + zone);
              if (DEBUG) console.log("OVERWORLD: " + overworld);
            }

            if (overworld == "Adventure")
              sav_pointer = this.adv_sav;
            
            if (data_parts[2] == "Quests") {

              let event = data_parts[3].split("_")[2];
              let event_type;

              if (data.indexOf(this.event_types.SIDE_DUNGEON) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "Side Dungeon";
                let subregion = world_pointer.side_dungeons[event];
                let dungeon = event.replace(/([A-Z])/g, ' $1').trim()
                //renames
                if (dungeon == "Last Will")
                  dungeon = "Supply Run";
                if (dungeon == "Doe Shrine")
                  dungeon = "The Doe Shrine";
                if (dungeon == "Frozen Lords")
                  dungeon = "Magir Test";
                if (dungeon == "Ice Skimmer")
                  dungeon = "Sebum";
                if (LOG) console.log(world + " " + event_type + ": " + subregion  + " - " + dungeon);
                sav_pointer["side_dungeons"].push({
                  "world": world,
                  "event_type": event_type,
                  "subregion": subregion,
                  "dungeon": dungeon
                });
              }

              if (data.indexOf(this.event_types.POI) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "Point of Interest";
                let poi = event.replace(/([A-Z])/g, ' $1').trim()
                if (poi == "Old Man And Construct")
                  poi = "Ancient Construct";
                if (poi == "Wailing Wood")
                  poi = "Wailing Tree";
                if (poi == "Afterbirth")
                  poi = "Krall Mother";
                if (LOG) console.log(world + " " + event_type + ": " + poi);
                sav_pointer["pois"].push({
                  "world": world,
                  "event_type": event_type,
                  "poi": poi
                });
              }

              if (data.indexOf(this.event_types.WORLD_BOSS) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "World Boss";
                let subregion = world_pointer.boss_dungeons[event];
                let world_boss = world_pointer.world_bosses[event];
                if (LOG) console.log(world + " " + event_type + ": " + subregion + ", Boss: " + world_boss);
                sav_pointer["world_bosses"].push({
                  "world": world,
                  "event_type": event_type,
                  "subregion": subregion,
                  "boss": world_boss
                });
              }

              if (data.indexOf(this.event_types.MINIBOSS) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "Boss Dungeon";
                let subregion = world_pointer.boss_dungeons[event];
                let miniboss = world_pointer.dungeon_bosses[event];
                if (LOG) console.log(world + " " + event_type + ": " + subregion + ", Miniboss: " + miniboss);
                sav_pointer["minibosses"].push({
                  "world": world,
                  "event_type": event_type,
                  "subregion": subregion,
                  "miniboss": miniboss
                });
              }

              if (data.indexOf(this.event_types.SIEGE) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "Siege";
                let subregion = world_pointer.side_dungeons[event];
                let siege = event.replace(/([A-Z])/g, ' $1').trim();
                if (siege == "Wolf Shrine")
                  siege = "The Ravager Shrine";
                if (siege == "Shaman Flames")
                  siege = "Grave Siege";
                if (LOG) console.log(world + " " + event_type + ": " + subregion + ", Objective: " + siege);
                sav_pointer["sieges"].push({
                  "world": world,
                  "event_type": event_type,
                  "subregion": subregion,
                  "siege": siege
                });
              }

              if (data.indexOf(this.event_types.ITEM_DROP) !== -1) {
                if (DEBUG) console.log("From: " + data);
                event_type = "Item Drop";
                let item = event.replace(/([A-Z])/g, ' $1').trim()
                //renames
                if (item == "Penitent")
                  item = "Letos Amulet";
                if (item == "Trait Book")
                  item = "Tome of Knowledge";
                if (LOG) console.log(world + " " + event_type + ": " + overworld + ", Item: " + item);
                sav_pointer["items"].push({
                  "world": world,
                  "event_type": event_type,
                  "overworld": overworld,
                  "item": item
                });
              }

            }

          //need to test LizAndLiz
          //need to add/figure out sublocation to side dungeons, item drops, etc maybe
          //may need to add POI to earth_data and others, e.g. WailingWood -> Wailing Tree, currently doing specific replacements
          //If Krall Mother and Ikro are on the same save, a rare quest occurs: "Rescue the Krall Baby", this is hidden
          //There are 2/3 POI that I'm not sure about: Vargyl Bones and Snow Ruins
          }

          //maybe have the process_data_chunk function return a data structure containing the results

          if (!this.has_clementine) {
            if (LOG) console.log("----------FROM THE ASHES----------");
            main_campaign_data_block.forEach((data) => {
              process_data_chunk(data);
            });
            if (DEBUG) {
              console.log(this.earth_sav);
              console.log(this.rhom_sav);
              console.log(this.corsus_sav);
              console.log(this.yaesha_sav);
            }
          } else {
            if (LOG) console.log("----------SUBJECT 2923----------");
            overworld = "Farmlands";
            if (this.has_clementine)
              clementine_campaign_data_block.forEach((data) => {
                process_data_chunk(data);
              });
            if (DEBUG) {
              console.log(this.earth_revisit_sav);
              console.log(this.reisum_sav);
            }
          }

          if (this.has_adventure) {
            if (LOG) console.log("----------ADVENTURE MODE----------");
            overworld = "Adventure";
            if (this.has_adventure)
              adventure_data_block.forEach((data) => {
                process_data_chunk(data);
              });
            if (DEBUG)
              console.log(this.adv_sav);
          }

        }
    },
    components: {
      World
    },
    created() {
        this.extract_data();
        console.log("HAS CLEM: " + this.has_clementine);
    }
}
</script>

<style>
  .q-card {
    border: 1px solid #BD2A23;
  }
  .q-tabs {
    color: white;
    background-color: black;
  }
  .q-tab-panel {
    color: white;
    background-color: black;
  }
  p.filters {
    margin-bottom: 0;
  }
  div.filters {
    border: 1px solid white;
  }
</style>