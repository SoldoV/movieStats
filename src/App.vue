<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click=""
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            @click=""
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          @click=""
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Movie-Stats</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-content>
      <v-container class="pa-0">
            <v-parallax
              dark
              height="500"
              class="home-page-parallax"
              src="https://image.galaxymacau.com/cinema_02.jpg?x-oss-process=image/resize,m_fill,w_1920,h_933/format,webp">
              <div class="paralax-overlay"></div>
              <div class="paralax-gradient"></div>
              <v-row
                align="center"
                justify="center"
                class="paralax-header-title">
                <h1 class="header-title mb-2">Movie statistics</h1>
                <h4 class="subheading">Your most important movie statistics in one place!</h4>
              </v-row>
            </v-parallax>
            <div style="height: 100vh">dsa</div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'trending_up', text: 'Most Popular' },
      { icon: 'subscriptions', text: 'Subscriptions' },
      { icon: 'history', text: 'History' },
      { icon: 'featured_play_list', text: 'Playlists' },
      { icon: 'watch_later', text: 'Watch Later' }
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' }
    ]
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style>
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
  background: -webkit-linear-gradient(top, rgba(3,3,3,0) 0%, rgba(35,35,35,0) 71%, rgba(48,48,48,1) 100%);  opacity: 1;
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

</style>
