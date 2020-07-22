<template>
  <v-app dark v-if="rooms">
    <!-- Left side bar -->
    <v-navigation-drawer clipped fixed permanent app>
      <v-list v-if="viewerId">
        <v-list-item
          v-for="(room, i) in myRooms"
          :key="i"
          :to="`/users/${room.id}`"
          router
          exact
          class="px-0"
        >
          <v-list-item-avatar class="ml-4">
            <img :src="getRoomSignboard(room).avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span>{{ getRoomSignboard(room).name }}</span></v-list-item-title
            >
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              icon
              @click.prevent="room.isPinned = !room.isPinned"
              title="このチャットをピン留めしてチャット一覧の上に固定できます"
            >
              <v-icon v-if="room.isPinned" color="indigo darken-3"
                >mdi-pin</v-icon
              >
              <v-icon v-else color="blue-grey lighten-4">mdi-pin</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- Right side bar -->
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
    <!-- Top bar -->
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
      <v-container fill-height fluid>
        <v-row justify="center">
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
              :items="users"
              label="アカウント名"
              outlined
              item-color="grey"
              dense
              :width="50"
              item-value="id"
              item-text="name"
              @change="updateViewerId"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "~/plugins/firebase";
var db = firebase.firestore();

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
    rooms() {
      return this.$store.state.rooms;
    },
    myRooms() {
      // Filter out the rooms which the viewer doesn't belong to
      return this.rooms.filter(room =>
        room.users.map(user => user.id).includes(this.viewerId)
      );
    },
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    // Switch the viewer on selected
    updateViewerId() {
      this.$store.commit("setViewerId", { viewerId: this.viewerId });
    },
    // Return the room name & avatar URI
    getRoomSignboard(room) {
      // for the room of group chat
      if (room.type == "multilateral")
        return { name: room.name, avatar: room.avatar };

      // for the room of two-person chat
      if (room.type == "bilateral") {
        // Get the user ID of the opponent
        const opponentId = room.users.filter(
          user => user.id != this.viewerId
        )[0].id;

        // Get the details of the opponent user
        const opponent = this.users.filter(user => user.id == opponentId)[0];

        // Return the name of the opponent user
        return {
          name: opponent.name,
          avatar: opponent.avatar
        };
      }

      // for the room of personal notes
      if (room.type == "unilateral")
        return {
          name: "マイチャット",
          avatar: this.users.filter(user => user.id == this.viewerId)[0].avatar
        };
    }
  },
  async mounted() {
    // Set the initial viewer
    this.viewerId = this.$store.state.viewerId;

    // Test: try to add new document
    await db
      .collection("countries")
      .add({
        country: "UK",
        code: 44,
        is_island: true,
        capital: "London"
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    // Test: load Firestore data
    db.collection("countries")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(`Document ID: ${doc.id}`);
          console.log("Document Data:", doc.data());
        });
      });
  }
};
</script>
