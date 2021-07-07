<template>
  <v-card grey width="1000" height="200" class="ma-4 pa-2">
    <v-card-title class="headline">
      {{ Title }}
    </v-card-title>

    <v-card-text>
      {{ userName }}
    </v-card-text>

    <v-card-actions>
      <v-btn @click="goForDetails">查看详情</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "PostItem",
  props: {
    Title: {
      type: String,
      default: "无标题"
    },
    userName: {
      type: String,
      default: ""
    },
    userId: {
      type: Number,
      default: 0
    },
    postId: {
      type: Number,
      default: 0
    },
    courseId: {
      type: Number,
      default: 0
    },
    courseName: {
      type: String,
      default: ""
    }
  },
  methods: {
    goForDetails() {
      this.$router.push(
        `/student/course/${this.courseId}/discussionArea/post/${this.postId}`
      );
    }
  }
});
</script>

<style scoped></style>
