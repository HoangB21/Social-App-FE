import "./rightBar.scss";

const RightBar = () => {
  const avatar = [
    "https://static.vecteezy.com/system/resources/previews/024/183/525/non_2x/avatar-of-a-man-portrait-of-a-young-guy-illustration-of-male-character-in-modern-color-style-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    "https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg",
    "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
    "https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg",
  ]
  const suggestions = [
    { id: 1, name: "Linh Tran", img: avatar[2] },
    { id: 2, name: "Minh Nguyen", img: avatar[3] },
    { id: 3, name: "Hannah Lee", img: avatar[1] },
  ];

  const activities = [
    { id: 1, name: "An Hoang", action: "changed their cover picture", time: "1 min ago", img: avatar[0] },
    { id: 2, name: "Bao Pham", action: "posted a new photo", time: "5 mins ago", img: avatar[1] },
    { id: 3, name: "Camila Rossi", action: "updated their status", time: "10 mins ago", img: avatar[2] },
    { id: 4, name: "Diego Silva", action: "liked a post", time: "15 mins ago", img: avatar[3] },
  ];

  const onlineFriends = [
    "Trang Vu",
    "Khanh Do",
    "Sophia Kim",
    "Oliver Park",
    "Tuan Le",
    "Emily Clark",
    "Quynh Nguyen",
    "Lucas Martin",
    "Mai Pham",
    "Noah Brown",
    "Hue Tran",
    "Ethan Wilson",
  ];

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {suggestions.map((s) => (
            <div className="user" key={s.id}>
              <div className="userInfo">
                <img src={s.img} alt={s.name} />
                <span>{s.name}</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Latest Activities</span>
          {activities.map((a) => (
            <div className="user" key={a.id}>
              <div className="userInfo">
                <img src={a.img} alt={a.name} />
                <p>
                  <span>{a.name}</span> {a.action}
                </p>
              </div>
              <span>{a.time}</span>
            </div>
          ))}
        </div>

        <div className="item">
          <span>Online Friends</span>
          {onlineFriends.map((name, idx) => (
            <div className="user" key={idx}>
              <div className="userInfo">
                <img src={avatar[idx % avatar.length]} alt={name} />
                <div className="online" />
                <span>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
