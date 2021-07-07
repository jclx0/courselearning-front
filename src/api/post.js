import axios from "axios";
import { POST_MODULE } from "./_prefix";
/**
 * 创建一个帖子 POST post/create
 * @param {*} payload
 * @returns
 */
export const createPost = payload => {
  const { title, content, userId, courseId, userName } = payload;
  return axios
    .post(`${POST_MODULE}/create`, {
      title,
      content,
      userId,
      courseId,
      userName
    })
    .then(res => {
      return res.data;
    });
};

/**
 * 按发布时间倒叙获得列表
 * @param {*} payload
 * @returns
 */
export const getPostsByPostTime = payload => {
  const { page, userId, courseId } = payload;
  return axios
    .get(
      `${POST_MODULE}/timePostList/${page}?userId=${userId}&courseId=${courseId}`
    )
    .then(res => {
      return res.data;
    });
};

/**
 * 按回复时间倒叙获得列表
 * @param {*} payload
 * @returns
 */
export const getPostsByReplyTime = payload => {
  const { page, userId, courseId } = payload;
  return axios
    .get(
      `${POST_MODULE}/replyPostList/${page}?userId=${userId}&courseId=${courseId}`
    )
    .then(res => {
      return res.data;
    });
};

/**查询单个帖子详细信息
 *
 */
export const getPostInfo = payload => {
  const { postId, uid } = payload;
  return axios.get(`${POST_MODULE}/${postId}?uid=${uid}`).then(res => {
    return res.data;
  });
};

/**获取访问权限
 *
 */
export const getPriority = payload => {
  const { uid, courseId } = payload;
  return axios
    .get(`${POST_MODULE}/priority?uid=${uid}&courseId=${courseId}`)
    .then(res => {
      return res.data;
    });
};
