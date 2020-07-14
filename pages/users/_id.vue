<template>
  <v-layout>
    <v-flex class="text-center pa-0">
      <Message
        v-for="(msg, index) in msgs"
        :key="index"
        :roomId="roomId"
        :msgId="msg.id"
      />
    </v-flex>
    <v-footer absolute class="pa-0">
      <Editor />
    </v-footer>
  </v-layout>
</template>
<script>
export default {
  computed: {
    // Get the list of the messages for this room
    msgs() {
      return this.$store.state.msgs.filter(
        msg => msg.roomId == this.roomId
      );
    },
    // Get the ID of this room
    roomId() {
      // Note that this returns the params of Nuxt dynamic routing
      return this.$route.params.id;
    }
  }
};
</script>
