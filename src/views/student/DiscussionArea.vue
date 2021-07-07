<template>
  <div>
    <v-btn @click="createPost">发帖</v-btn>
    <v-row class="ma-12">
      <v-divider></v-divider>
    </v-row>
    <v-row>
      <v-btn @click="handleSearchByPostTime">按发布时间时间排序</v-btn>
      <v-btn @click="handleSearchByReplyTime">按回复时间排序</v-btn>
    </v-row>
    <v-col>
      <post-item
        v-for="post in list"
        :key="post.postId"
        :title="post.title"
        :user-id="post.userId"
      >
      </post-item>
    </v-col>
  </div>
</template>

<script>
import { getPostsByPostTime } from "@/api/post";
import { getPostsByReplyTime } from "@/api/post";
import PostItem from "@/components/PostItem";
export default {
  name: "DiscussionArea",
  data() {
    return {
      userId: 0,
      courseId: 0,
      totalPage: 1,
      list: []
    };
  },
  components: { PostItem },
  methods: {
    createPost() {
      this.$router.push(
        `/student/course/${this.courseId}/discussionArea/createPost`
      );
    },
    handleSearchByPostTime(page) {
      const { uid } = window.localStorage.getItem("userId");
      const { cid } = this.$route.params;
      getPostsByPostTime({ page, uid, cid }).then(res => {
        console.log(res);
        this.totalPage = res.pages;
        this.list = res.list;
      });
    },
    handleSearchByReplyTime(page) {
      const { uid } = window.localStorage.getItem("userId");
      const { cid } = this.$route.params;
      getPostsByReplyTime({ page, uid, cid }).then(res => {
        console.log(res);
        this.totalPage = res.pages;
        this.list = res.list;
      });
    }
  },
  mounted() {
    this.handleSearchByPostTime();
  }
};
</script>

<style scoped></style>
