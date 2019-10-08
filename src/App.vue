<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense class="side-list">
        <v-list-item>
          <router-link to="/allTime">
            <v-list-item-action>
              <v-icon>local_movies</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Best movies of all time
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-list-item>
          <router-link to="/byYear">
            <v-list-item-action>
              <v-icon>equalizer</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Best movies by year
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-icon>portrait</v-icon>
                  Best movies by actors
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list class="avatar-list">
                    <v-list-item v-for="actor in actors" :key="actor.name" class="my-3">
                      <router-link :to="{ name: 'actor', params: { name: actor.params }}">
                        <div class="avatar-div mr-2">
                          <div class="avatar" :style="{ backgroundImage: `url(${getImgUrl(actor.picture)})` }"></div>
                        </div>
                        <v-list-item-title v-text="actor.name"></v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-icon>movie</v-icon>
                  Best movies by directors
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-list>
                    <v-list-item v-for="director in directors" :key="director.name" class="my-3">
                      <router-link :to="{ name: 'director', params: { name: director.params }}">
                        <div class="avatar-div mr-2">
                          <div class="avatar" :style="{ backgroundImage: `url(${getImgUrl(director.picture)})` }"></div>
                        </div>
                        <v-list-item-title v-text="director.name"></v-list-item-title>
                      </router-link>
                    </v-list-item>
                  </v-list>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">local_movies</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <router-link to="/">
          <span class="title">Movie-Stats</span>
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container class="pa-0">
        <v-parallax dark height="500" class="home-page-parallax"
          src="https://image.galaxymacau.com/cinema_02.jpg?x-oss-process=image/resize,m_fill,w_1920,h_933/format,webp">
          <div class="paralax-overlay"></div>
          <div class="paralax-gradient"></div>
          <v-row align="center" justify="center" class="paralax-header-title">
            <h1 class="header-title mb-2">Movie statistics</h1>
            <h4 class="subheading">Your most important movie statistics in one place!</h4>
          </v-row>
        </v-parallax>
      </v-container>
    </v-content>
    <div class="charts mt-10">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <my-footer></my-footer>
  </v-app>
</template>

<script>
import sal from 'sal.js'
import myFooter from './components/footer.vue'

export default {
  components: {
    myFooter
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    actors: [{
      name: 'Leonardo DiCaprio',
      picture: 'dicaprio.jpg',
      params: 'dicaprio'
    },
    {
      name: 'Jack Nicholson',
      picture: 'nicholson.jpg',
      params: 'nicholson'
    },
    {
      name: 'Robert De Niro',
      picture: 'deniro.jpg',
      params: 'deniro'
    },
    {
      name: 'Christian Bale',
      picture: 'bale.jpg',
      params: 'bale'
    },
    {
      name: 'Matthew Mcconaughey',
      picture: 'matthew.jpg',
      params: 'matthew'
    },
    {
      name: 'All together',
      picture: null,
      params: 'all'
    }
    ],
    directors: [{
      name: 'Christopher Nolan',
      picture: 'nolan.jpg',
      params: 'nolan'
    },
    {
      name: 'David Fincher',
      picture: 'fincher.jpg',
      params: 'fincher'
    },
    {
      name: 'Martin Scorsese',
      picture: 'scorsese.jpg',
      params: 'scorsese'
    },
    {
      name: 'Quentin Tarantino',
      picture: 'tarantino.jpg',
      params: 'tarantino'
    },
    {
      name: 'Stanley Kubrick',
      picture: 'kubrick.jpg',
      params: 'kubrick'
    },
    {
      name: 'All together',
      picture: null,
      params: 'all'
    }
    ],
    years: [2019, 2018, 2017, 2016, 2015]

  }),
  methods: {
    getImgUrl (pic) {
      return pic ? require('./assets/' + pic) : ''
    }
  },
  created () {
    this.$vuetify.theme.dark = true
  },
  mounted () {
    sal()
  }
}

</script>

<style>
  @import '../node_modules/sal.js/dist/sal.css';

  .theme--dark.v-application {
    background: #202020 !important;
  }

  .home-page-parallax {
    width: 100vw;
  }

  .paralax-header-title {
    flex-direction: column;
    z-index: 2;
  }

  .container {
    margin: 0px !important;
  }

  .v-parallax__content {
    padding: 0px !important;
  }

  .paralax-gradient {
    background: rgb(32, 32, 32);
    background: linear-gradient(0deg, rgba(32, 32, 32, 1) 0%, rgba(32, 32, 32, 0) 24%);
    width: 100vw;
    height: 100%;
    position: absolute;
  }

  .paralax-overlay {
    background: black;
    opacity: 0.3;
    width: 100vw;
    height: 100%;
    position: absolute;
  }

  .header-title {
    font-size: 80px;
    font-weight: 300;
  }

  .v-parallax__image {
    bottom: -50px !important;
  }

  .charts {
    padding: 0px 10em 0px 10em;
  }

  .v-list-item__title {
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  .side-list a {
    display: flex;
    font-size: 16px !important;
  }

  .side-list .v-icon {
    max-width: 25px;
  }

  a {
    text-decoration: none;
    color: inherit !important;
  }

  .v-expansion-panel .v-icon {
    margin-right: 1em;
  }

  .v-expansion-panel-header {
    padding: 0px !important;
    font-size: 16px !important;
  }

  .v-expansion-panel-header__icon .v-icon {
    margin-right: 0px;
    margin-left: 10px;
  }

  .v-expansion-panel::before {
    box-shadow: none !important;
  }

  .avatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .avatar-list .v-list-item {
    padding: 0px !important;
  }

  .v-expansion-panel-content__wrap {
    padding: 0 10px 16px !important;
  }

</style>
