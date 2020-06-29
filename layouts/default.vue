<template>
  <v-app dark>
    <v-navigation-drawer clipped fixed app>
      <v-list>
        <v-list-item
          v-for="(channel, i) in channels"
          :key="i"
          :to="channel.to"
          router
          exact
          class="px-0"
        >
          <v-list-item-avatar class="ml-4">
            <img :src="channel.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ channel.title }}</v-list-item-title>
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
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer clipped fixed right app>
      <v-card>
        <v-card-title>概要</v-card-title>
        <v-card-text>概要はありません</v-card-text>
      </v-card>
      <v-card>
        <v-card-title>タスク</v-card-title>
        <v-card-text>概要はありません</v-card-text>
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
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-col cols="3">
        <v-text-field
          label="チャット名、メッセージ内容を検索"
          single-line
          outlined
          dense
          prepend-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-spacer />
      <v-btn color="blue-grey darken-4" depressed>
        <v-icon>mdi-checkbox-marked-outline</v-icon>
      </v-btn>
      <v-col cols="2">
        <v-select
          v-model="accountId"
          :items="channels.filter(channel => channel.isPerson)"
          label="アカウント名"
          outlined
          item-color="grey"
          dense
          :width="50"
          item-value="id"
          item-text="title"
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
      channels: [
        {
          id: 1,
          isPinned: false,
          isPerson: false,
          avatar: "/home.png",
          title: "鴨川家雑談",
          to: "/group"
        },
        {
          id: 2,
          isPinned: false,
          isPerson: true,
          avatar: "/duck_yellow.png",
          title: "鴨川檸檬",
          to: "/lemon"
        },
        {
          id: 3,
          isPinned: false,
          isPerson: true,
          avatar: "/duck_purple.png",
          title: "鴨川紫苑",
          to: "/shion"
        },
        {
          id: 4,
          isPinned: false,
          isPerson: true,
          avatar: "/duck_green.png",
          title: "鴨川若菜",
          to: "/wakana"
        },
        {
          id: 5,
          isPinned: false,
          isPerson: true,
          avatar: "/duck_pink.png",
          title: "鴨川桜",
          to: "/sakura"
        }
      ],
      title: "Chatquack",
      accountId: 2
    };
  }
};
</script>
