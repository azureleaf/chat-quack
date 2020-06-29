<template>
  <v-layout>
    <v-flex class="text-center">
      Viewer
      {{ this.$route.params.id }}
      <Message />
    </v-flex>
    <v-footer absolute class="pa-0">
      <Editor />
    </v-footer>
  </v-layout>
</template>
<script>
export default {};
</script>
