let state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likes: 15},
      {id: 2, message: "It's my first post", likes: 20}
    ]
  },

  sidebar: {
    friends: [
      {id: 1, name: "Alex", imgUrl: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"},
      {id: 2, name: "John", imgUrl: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"},
      {id: 1, name: "Alexa", imgUrl: "https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"}
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
