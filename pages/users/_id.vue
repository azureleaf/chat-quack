<template>
  <v-layout>
    <v-flex class="text-center pa-0">
      Viewer
      {{ this.$route.params.id }}
      <Message msgId="2" />
    </v-flex>
    <v-footer absolute class="pa-0">
      <Editor />
    </v-footer>
  </v-layout>
</template>
<script>
export default {};
</script>
