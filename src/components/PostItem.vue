<template>
  <v-card>
    <v-card-title class="headline">
      {{postName}}
    </v-card-title>

    <v-card-text>
      {{userName}}
    </v-card-text>

    <v-card-actions>
      <v-btn @click="goForDetails">查看详情</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    postName:{
      type: String,
      default: "无标题"
    },
    userName: {
      type: String,
      default: ""
    }
  },
  methods: {
    goForDetails(){
      this.$router,push(``)
    }
  }
};
</script>

<style scoped>

</style>