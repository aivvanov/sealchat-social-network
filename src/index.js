import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { subscribe, sendMessage, addPost, updateMessageText, updatePostText } from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updatePostText={updatePostText} sendMessage={sendMessage} updateMessageText={updateMessageText} />
      </React.StrictMode>
    </BrowserRouter>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
