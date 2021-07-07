<template>
  <div>
    <v-btn @click="createPost">发帖</v-btn>
    <v-col>
      <post-item title="this is a post" user-name="张三"> </post-item>
    </v-col>
  </div>

</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "DiscussionArea",
  components: { PostItem },
  methods: {
    createPost() {
      this.$router.push(`/student/course/${this.courseId}/discussionArea/createPost`);
    }
  }
};
</script>

<style scoped></style>
