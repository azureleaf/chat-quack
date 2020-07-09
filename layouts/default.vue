<template>
  <v-app dark v-if="channels">
    <v-navigation-drawer clipped fixed permanent app>
      <v-list>
        <v-list-item
          v-for="(channel, i) in channels"
          :key="i"
          :to="`/users/${channel.id}`"
          router
          exact
          class="px-0"
        >
          <v-list-item-avatar class="ml-4">
            <img :src="channel.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span v-if="viewerId == channel.id">マイチャット</span>
              <span v-else>{{ channel.title }}</span></v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              icon
              @click.prevent="channel.isPinned = !channel.isPinned"
              title="このチャットをピン留めしてチャット一覧の上に固定できます"
            >
              <v-icon v-if="channel.isPinned" color="indigo darken-3"
                >mdi-pin</v-icon
              >
              <v-icon v-else color="blue-grey lighten-4">mdi-pin</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer clipped fixed right app permanent>
      <v-card color="grey lighten-2" flat outlined tile>
        <v-card-title class="text-subtitle-1 pa-2"
          ><span>概要</span><v-spacer /><v-btn icon
            ><v-icon>mdi-pencil</v-icon></v-btn
          ></v-card-title
        >
      </v-card>
      <v-card flat outlined tile>
        <v-card-text class="px-2">概要はありません</v-card-text>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      clipped-right
      fixed
      app
      dark
      dense
      color="blue-grey darken-4"
      align="center"
    >
      <img class="mr-3" src="/applogo.png" height="45" />
      <v-col cols="4">
        <v-text-field
          label="チャット名、メッセージ内容を検索"
          single-line
          outlined
          dense
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-spacer />
      <v-col cols="2">
        <v-select
          v-model="viewerId"
          :items="channels.filter(channel => channel.isPerson)"
          label="アカウント名"
          outlined
          item-color="grey"
          dense
          :width="50"
          item-value="id"
          item-text="title"
          @change="updateViewerId"
        ></v-select>
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      title: "Chatquack",
      viewerId: null
    };
  },
  computed: {
    channels() {
      return this.$store.state.channels;
    }
  },
  methods: {
    // Switch the viewer on selected
    updateViewerId() {
      this.$store.commit("setViewerId", { viewerId: this.viewerId });
    }
  },
  mounted() {
    // Set the initial viewer
    this.viewerId = this.$store.state.viewerId;
  }
};
</script>
