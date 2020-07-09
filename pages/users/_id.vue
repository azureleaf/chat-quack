<template>
  <v-layout>
    <v-flex class="text-center pa-0">
      Channel
      {{ this.$route.params.id }}
      <Message
        v-for="(msg, index) in msgs"
        :key="index"
        :channelId="channelId"
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
    msgs() {
      // Filter the messages which belong to this particular channel
      return this.$store.state.msgs.filter(
        msg => msg.channelId == this.channelId
      );
    },
    channelId() {
      return this.$route.params.id;
    }
  }
};
</script>
