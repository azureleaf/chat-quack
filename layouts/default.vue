<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      dark
      dense
      color="blue-grey darken-4"
      align="center"
    >
      <img class="mr-3" src="/applogo.png" height="45" />
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-text-field
        label="Type to search for chat / message"
        single-line
        outlined
        dense
        prepend-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer />
      <v-btn>
        <v-icon>mdi-checkbox-marked-outline</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-folder-outline</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn>
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
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
      clipped: true,
      drawer: true,
      fixed: true,
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Chatquack"
    };
  }
};
</script>
