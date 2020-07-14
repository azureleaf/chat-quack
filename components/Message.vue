<template>
  <v-card flat tile outlined>
    <v-card-text>
      <v-layout justify-center align-center>
        <v-row>
          <v-col cols="1">
            <v-avatar>
              <img :src="avatarUri" />
            </v-avatar>
          </v-col>
          <v-col cols="11">
            <v-card flat tile>
              <v-card-title class="py-1">
                <span
                  class="text-subtitle-2 font-weight-bold indigo--text text--darken-1"
                  >{{ sender }}</span
                >
                <v-spacer />
                <span class="text-caption grey--text text--darken-1"
                  >{{ timestamp }}
                </span>
              </v-card-title>
              <v-card-text class="text-left">
                {{ msg.text }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["msgId", "roomId"],
  data() {
    return { viewerId: null };
  },
  computed: {
    // Get the URI of the avatar image of this message sender
    avatarUri() {
      return this.$store.state.users.filter(
        user => user.id == this.msg.senderId
      )[0].avatar;
    },
    // Return a single message object for the message ID specified by the prop
    msg() {
      return this.$store.state.msgs.filter(msg => msg.id == this.msgId)[0];
    },
    // Map the sender ID in the msg object to the readable name
    sender() {
      return this.$store.state.users.filter(
        user => user.id == this.msg.senderId
      )[0].name;
    },
    // Format the timestamp notation into readable string
    timestamp() {
      const ts = new Date(this.msg.timestamp);
      return `${ts.getMonth() +
        1}月${ts.getDate()}日 ${ts.getHours()}:${ts.getMinutes()}`;
    }
  },
  mounted() {
    this.viewerId = this.$store.state.viewerId;
  }
};
</script>

<style scoped>
.btn {
  text-transform: none; /** Disable conversion to upper cases  */
}
</style>
