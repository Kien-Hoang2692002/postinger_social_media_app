import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://vcdn-dulich.vnecdn.net/2020/01/08/sac-mau-cua-bien-vnexpress-1-6641-1578454676.jpg",
    user: USERS[0].users,
    likes: 7870,
    caption: "Test caption",
    profile_picture: USERS[0].image,
    job: USERS[0].job,
    comments: [
      {
        user: USERS[1].users,
        image: USERS[1].image,
        comment: "Wow",
      },
      {
        user: USERS[2].users,
        image: USERS[2].image,
        comment: "Đắng cấp đấy",
      },
      {
        user: USERS[3].users,
        image: USERS[3].image,
        comment: "Đắng cấp đấy",
      },
      {
        user: USERS[4].users,
        image: USERS[4].image,
        comment: "Thật tuyệt vời",
      },
    ],
    time: "2h ago",
  },
  {
    imageUrl:
      "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/7/10/hinh-anh-cac-loai-hinh-du-lich-3-1657423025597-1657423027180128362217.jpeg",
    user: USERS[1].users,
    likes: 0,
    job: USERS[0].job,
    caption:
      "Đi tới đâu không quan trọng mà quan trọng là chúng ta sẽ đi cùng nhau.Điều đáng tiếc của cuộc đời là trước năm 25 tuổi mà chưa từng đặt chân đi du lịch.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: USERS[1].users,
        image: USERS[1].image,
        comment: "Quá tuyệt vời",
      },
    ],
    time: "30m ago",
  },
  {
    imageUrl:
      "https://noithathoaphat.info.vn/wp-content/uploads/2020/02/caption-hay-dang-facebook-hp5info-08.jpg",
    user: USERS[2].users,
    likes: 10,
    caption: "Tặng em bộ dụng cụ may vá.Để tất cả chỉ dành hết cho em.",
    profile_picture: USERS[2].image,
    job: USERS[0].job,
    comments: [
      {
        user: "thequzman",
        image: USERS[3].image,
        comment: "Dị ứng với hải sản, cụ thể là trai.",
      },
      {
        user: USERS[3].users,
        image: USERS[4].image,
        comment:
          "Nói về anh có khi không phải là tài và giỏi.Nhưng bài toán khó như em, anh vẫn tìm tòi và giải.",
      },
    ],
    time: "Yesterday",
  },
];
