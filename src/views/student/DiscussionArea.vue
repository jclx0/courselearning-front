<template>
  <v-col>
    <post-item
      title="this is a post"
      user-name="张三"
    >
    </post-item>
  </v-col>
</template>

<script>
import PostItem from "@/components/PostItem";
export default {
  name: "DiscussionArea",
  components: { PostItem }
};
</script>

<style scoped>

</style>