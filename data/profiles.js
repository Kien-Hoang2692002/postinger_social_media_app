import { USERS } from "./users";

export const PROFILES = [
  {
    user_id: USERS[0].id,
    cover_photo_url:
      "https://www.autotrader.com/wp-content/uploads/2022/02/2021-Ferrari-SF90-Stradale.jpg",
    avatar_photo_url: USERS[0].image,
    name: "Benny Mozzaik",
    job: "Rapper",
    posting: 213,
    followers: 241,
    following: 123,
    posts: [
      {
        post_id: 1,
        post_image: USERS[0].image,
      },
      {
        post_id: 2,
        post_image: USERS[5].image,
      },
      {
        post_id: 3,
        post_image: USERS[4].image,
      },
      {
        post_id: 4,
        post_image: USERS[5].image,
      },
      {
        post_id: 5,
        post_image: USERS[6].image,
      },
      {
        post_id: 6,
        post_image: USERS[7].image,
      },
      {
        post_id: 7,
        post_image: USERS[7].image,
      },
    ],
  },
];
