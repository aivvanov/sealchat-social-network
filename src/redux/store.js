let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 2,
          message: "Hello!! how are you guys doing?",
          likesCount: 10
        },
        {
          id: 1,
          message: "Just created my new post here!",
          likesCount: 23
        }
      ],
      newPostText: ""
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
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
            isCurrentUser: false
          },
          createdAt: 1694860800000
        },
        {
          id: "2",
          text: "Miss you, babz <3",
          user: {
            id: "1",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSId_pIi48v4SnNz81LkwY8hqViBBw73_hy_w&s",
            isCurrentUser: false
          },
          createdAt: 1694860800000
        },
        {
          id: "3",
          text: "Gonna programming now! Bye.",
          user: {
            id: "2",
            icon: "https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1",
            isCurrentUser: true
          },
          createdAt: 1694860800000
        }
      ],
      newMessageText: ""
    }
  },
  _callSubscriber() { },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {

      const postId = ++(this._state.profilePage.posts[0].id);

      const message = {
        id: postId,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.posts.unshift(message);
      this._state.profilePage.newPostText = '';
      console.log(`Post with id ${message.id} was successfully created.`);
      this._callSubscriber();
    } else if (action.type === 'UPDATE-POST-TEXT') {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber();
    } else if (action.type === 'SEND-MESSAGE') {

      const messageId = ++(this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id);

      const message = {
        id: messageId,
        text: this._state.dialogsPage.newMessageText,
        user: {
          id: "2",
          icon: "https://i0.wp.com/tanhananews.com/wp-content/uploads/2021/07/Ratu-Felisha-Hak-Cipta-Instagramallaboutfelishagtr.jpg?fit=800%2C677&ssl=1",
          isCurrentUser: true
        },
        createdAt: Date.now()
      }

      this._state.dialogsPage.messages.push(message);
      this._state.dialogsPage.newMessageText = '';
      console.log(`Message with id ${message.id} was successfully created.`);
      this._callSubscriber();
    } else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber();
    }
  }
};

window.store = store;

export default store