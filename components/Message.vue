<template>
  <v-card flat tile outlined>
    <v-card-text>
      <v-layout justify-center align-center>
        <v-row>
          <v-col cols="1">
            <v-avatar>
              <img src="/duck_yellow.png" />
            </v-avatar>
          </v-col>
          <v-col cols="11">
            <v-card flat tile>
              <v-card-title class="py-1 text-subtitle-2">
                田中太郎
                <v-spacer />
                2020年7月1日
              </v-card-title>
              <v-card-text class="text-left">
                こんにちは
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
  data() {
    return {};
  }
};
</script>

<style scoped>
.btn {
  text-transform: none; /** Disable conversion to upper cases  */
}
</style>
