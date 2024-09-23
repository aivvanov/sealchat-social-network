const state = {
  profilePage: {
    posts: [
      {
        id: "1",
        message: "Hello!! how are you guys doing?",
        likesCount: 10
      },
      {
        id: "2",
        message: "Just created my new post here!",
        likesCount: 23
      }
    ],
  },
  dialogsPage: {
    dialogs: [
      {
        id: "1",
        name: "Xander Ivanov",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s"
      },
      {
        id: "2",
        name: "Tara Basro",
        icon: "https://cdn1-production-images-kly.akamaized.net/xO8KZWeoffVVctm4WuQL6eoFt20=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1948948/original/042673800_1519880576-FOTO_1.jpg"
      },
      {
        id: "3",
        name: "Daniel Adnan",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvongFeVghuPM8EkKOenRpSDxn8ffL48Xkg&s"
      },
      {
        id: "4",
        name: "Mia Goth",
        icon: "https://ntvb.tmsimg.com/assets/assets/754303_v9_bc.jpg"
      },
      {
        id: "5",
        name: "Lily Collins",
        icon: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/552822_v9_bc.jpg"
      }
    ],
    messages: [
      {
        id: "1",
        text: "Hello! How are you?",
        user: {
          id: "1",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s"
        },
        createdAt: 1694860800000
      },
      {
        id: "2",
        text: "I miss you, bro <3",
        user: {
          id: "1",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s"
        },
        createdAt: 1694860800000
      },
      {
        id: "1",
        text: "Gonna programming now! Bye.",
        user: {
          id: "3",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s"
        },
        createdAt: 1694860800000
      }
    ]
  }
}

export default state