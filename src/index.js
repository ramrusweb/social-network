import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// profile
let myPosts = [
  {id: 1, message: "Hi, how are you?", likes: 15},
  {id: 2, message: "It's my first post", likes: 20}
];

// dialogs
let dialogs = [
    {id: 1, name: 'Ruslan'},
    {id: 2, name: 'Kamila'},
    {id: 3, name: 'Evgeniy'},
    {id: 4, name: 'Alexander'},
    {id: 5, name: 'Said'},
    {id: 6, name: 'Alexandra'},
    {id: 7, name: 'Andrey'},
];
let messages = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'What are you doing?'},
    {id: 3, message: 'You study React?'}
];

ReactDOM.render(
  <React.StrictMode>
    <App myPosts={myPosts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
