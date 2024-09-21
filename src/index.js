import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const posts = [
  { id: "1", message: "Hello!! how are you guys doing?", likesCount: 10 },
  { id: "2", message: "Just created my new post here!", likesCount: 23 }
];

const dialogs = [
  { id: "1", name: "Xander Ivanov" },
  { id: "2", name: "Darya Petrova" },
  { id: "3", name: "Bryan Tiller" },
  { id: "4", name: "Dave Ringer" }
];

const messages = [
  { id: "1", text: "Hello! How are you?" },
  { id: "2", text: "I miss you, bro <3" },
  { id: "3", text: "Gonna programming now! Bye." }
];

export { posts, messages, dialogs }
