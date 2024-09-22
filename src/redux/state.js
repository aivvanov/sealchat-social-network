const state = {
  profilePage: {
    posts: [
      { id: "1", message: "Hello!! how are you guys doing?", likesCount: 10 },
      { id: "2", message: "Just created my new post here!", likesCount: 23 }
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: "1", name: "Xander Ivanov", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s" },
      { id: "2", name: "Tara Basro", icon: "https://www.wowkeren.com/display/images/photo/2021/07/30/00377736s2.jpg" },
      { id: "3", name: "Daniel Adnan", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvongFeVghuPM8EkKOenRpSDxn8ffL48Xkg&s" }
    ],
    messages: [
      { id: "1", text: "Hello! How are you?" },
      { id: "2", text: "I miss you, bro <3" },
      { id: "3", text: "Gonna programming now! Bye." }
    ]
  }
}

export default state