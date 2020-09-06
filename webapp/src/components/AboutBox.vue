<template>
    <section>
        <div class="about-div">
            <q-card class="about-card">
                <q-card-section>
                    <h6 class="card-title">How to Use:</h6>
                    <p class="title-desc">If you rerolled or just started a new Campaign/Adventure Mode, make sure you teleport to the world so the save file updates.
                    <br /><br />
                    Navigate to <strong>C:\Users\YOUR NAME\AppData\Local\Remant\Saved\SaveGames</strong> and locate your save file which is named <strong>save_x.sav</strong>. The number x is what character
                    your save relates to and it starts from 0.
                    <br /><br />
                    Once your file is uploaded, you will see what bosses, dungeons, and items your current save rolled with. It will automatically detect which Campaign
                    you've selected as well as what world your Adventure Mode is in.</p>
                    <h6 class="card-title">Possible Plans (lots of work):</h6>
                    <ul>
                        <li>Direct links to the Wiki for dungeons, bosses, items, and events.</li>
                        <li>Images and tooltip descriptions of items and bosses.</li>
                    </ul>
                    <h6 class="card-title">Issues and Suggestions:</h6>
                    <p class="title-desc">If there are any issues with this tool or any changes that you feel would be nice, please feel free to
                    <a href="http://freesuggestionbox.com/pub/cgcapnm" target="_blank">let me know</a>.
                    </p>
                </q-card-section>
            </q-card>
        </div>
    </section>
</template>

<script>

export default {
  name: 'AboutBox',
  data () {
      return {
      }
  }
}
</script>

<style>
    .about-div {
        padding-top: 2rem;
        width: 80%;
        margin: auto;
    }
    .about-card {
        background-color: black !important;
        color: white;
        border: 1px solid #BD2A23;
    }
    .card-title {
        margin-top: 0;
        margin-bottom: 0.5rem;
        text-decoration: underline;
    }
    .title-desc {
        margin-top: 0;
    }
    .title-desc > a {
        color: #BD2A23;
    }
    strong {
        color: #BD2A23;
    }
</style>