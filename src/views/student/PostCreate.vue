<template>
  <div>
    <v-alert
      class="alert"
      outlined
      type="success"
      text
      v-show="showSuccessDialog"
      transition="scroll-y-transition"
    >
      帖子创建成功！
    </v-alert>
    <!-- alert -->
    <v-alert
      class="alert"
      outlined
      type="warning"
      text
      v-show="showFailDialog"
      transition="scroll-y-transition"
    >
      {{ msg }}
    </v-alert>
    <v-container class="pl-16 pr-16">
      <form class="pa-12 grey lighten-5 mt-8">
        <v-text-field v-model="postInfo.title" label="主题"></v-text-field>
        <v-textarea v-model="postInfo.content" label="内容"></v-textarea>
        <v-btn class="ml-0 mt-8 info" @click="submit">
          确认
        </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import { createPost } from "@/api/post";

export default {
  name: "PostCreate",
  data() {
    return {
      postInfo: {
        title: "",
        content: ""
      },
      showSuccessDialog: false,
      showFailDialog: false,
      msg: ""
    };
  },
  methods: {
    submit() {
      const uid = window.localStorage.getItem("userId");
      const uname = window.localStorage.getItem("username");
      const cid = this.$route.params.courseId;
      const payload = {
        ...this.postInfo,
        userId: uid,
        courseId: cid,
        userName: uname
      };
      console.log(payload);
      createPost(payload).then(res => {
        console.log(res);
        if (res.code === 1) {
          this.showSuccessDialog = true;
          setTimeout(() => {
            this.showSuccessDialog = false;
          }, 1000);
        } else {
          this.showFailDialog = true;
          this.msg = res.msg;
          setTimeout(() => {
            this.showFailDialog = false;
          }, 1000);
        }
      });
    }
  }
};
</script>

<style scoped>
.alert {
  position: fixed;
  left: 50%;
  top: 100px;
  z-index: 999;
}
</style>
