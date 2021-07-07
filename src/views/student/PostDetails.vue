<template>
  <div>
    <v-col>
      <form
        class="pa-12 grey lighten-5 mt-8"
        style="position: sticky;top: 0"
      >
        <v-text-field
          label="主题"
          readonly
        ></v-text-field>
        <v-text-field
          label="发帖人"
          readonly
        ></v-text-field>
        <v-text-field
          label="发布时间"
          readonly
        ></v-text-field>
        <v-textarea
          label="内容"
          readonly
        ></v-textarea>
      </form>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "PostDetails"
};
</script>

<style scoped></style>
