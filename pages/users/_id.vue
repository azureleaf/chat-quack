<template>
  <v-layout>
    <v-flex class="text-center pa-0">
      Room
      {{ this.$route.params.id }}
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
    // List the messages for this room
    msgs() {
      return this.$store.state.msgs.filter(
        msg => msg.roomId == this.roomId
      );
    },
    roomId() {
      return this.$route.params.id;
    }
  }
};
</script>
