let state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likes: 15},
      {id: 2, message: "It's my first post", likes: 20}
    ]
  },

  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Ruslan'},
      {id: 2, name: 'Kamila'},
      {id: 3, name: 'Evgeniy'},
      {id: 4, name: 'Alexander'},
      {id: 5, name: 'Said'},
      {id: 6, name: 'Alexandra'},
      {id: 7, name: 'Andrey'},
    ],
    messages: [
      {id: 1, message: 'Hi, how are you?'},
      {id: 2, message: 'What are you doing?'},
      {id: 3, message: 'You study React?'}
    ]
  }
}

export default state;
