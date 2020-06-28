<template>
  <v-layout justify-center align-center>
    <v-row>
      <v-col>
        <v-card flat tile>
          <v-card-title>
            <v-btn>
              <v-icon>mdi-emoticon-outline</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
            </v-btn>
            <v-btn>
              <v-icon>mdi-paperclip</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn color="primary" class="btn" :disabled="msg.length == 0"
              >Send</v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              no-resize
              v-model="msg"
              label="Enter your message here (press Shift + Enter for send)"
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
  }
};
</script>

<style scoped>
.btn {
  text-transform: none; /** Disable conversion to upper cases  */
}
</style>
