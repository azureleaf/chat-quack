<template>
  <v-layout justify-center align-center>
    <v-row>
      <v-col>
        <v-card flat tile>
          <v-card-title>
            <v-btn text tile>
              <v-icon>mdi-emoticon-outline</v-icon>
            </v-btn>
            <v-btn text tile>
              <v-icon>mdi-at</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn
              color="primary"
              class="btn"
              :disabled="msg.length == 0"
              @click="sendMsg"
              >送信</v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              no-resize
              v-model="msg"
              label="ここにメッセージを入力"
            ></v-textarea>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    sendMsg() {
      // Emit the new message
      this.$emit("sendMsg", {text: this.msg})

      // Clear the text area
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.btn {
  text-transform: none; /** Disable conversion to upper cases  */
}
</style>
