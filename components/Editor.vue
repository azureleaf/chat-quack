<template>
  <v-layout column justify-center align-center>
    <v-card>
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
        <v-checkbox
          v-model="enableEnterToSend"
          label="Press Enter to send"
        ></v-checkbox>
        <v-btn color="primary" class="btn">Send</v-btn>
      </v-card-title>
      <v-card-text>
        <v-textarea outlined no-resize></v-textarea>
      </v-card-text>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      enableEnterToSend: false
    };
  }
};
</script>

<style scoped>
.btn {
  text-transform: none; /** Disable conversion to upper cases  */
}
</style>
