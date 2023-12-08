import { USERS } from "./users";
import { POSTS } from "./posts";

export const NOTIFICATIONS = [
  {
    user: USERS[0].users,
    userImage: USERS[0].image,
    postUrl: POSTS[0].imageUrl,
    postTime: POSTS[0].time,
    action: "Liked your post",
    type: "notification",
  },
  {
    user: "Password Changed",
    postTime: POSTS[2].time,
    action: "Your password has been changed",
    type: "confirm",
  },
  {
    user: USERS[1].users,
    userImage: USERS[1].image,
    postUrl: POSTS[1].imageUrl,
    postTime: POSTS[1].time,
    action: "Liked your post",
    type: "notification",
  },
  {
    user: USERS[2].users,
    userImage: USERS[2].image,
    postUrl: POSTS[2].imageUrl,
    postTime: POSTS[2].time,
    action: "Liked your post",
    type: "notification",
  },
  {
    user: "Post Banned",
    postTime: POSTS[2].time,
    action: "Your post violates our rules",
    type: "warning",
  },
];
