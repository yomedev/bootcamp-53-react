import React from "react";
import ReactDOM from "react-dom/client";
import {App} from './App'

// const link = React.createElement(
//   "a",
//   { href: "/", title: "title" },
//   React.createElement("p", null, "My link")
// );

// const link = (
//   <a href="/" title="title">
//     <p>My link</p>
//   </a>
// );

// const link2 = (
//   <a href="/contacts" title="contacts">
//     <p>Contacts</p>
//   </a>
// );

// const FuncLink = ({ href, children, title }) => (
//   <a href={href} title="title">
//     <p>{children}</p>
//   </a>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
// FuncLink({ href: "/", title: "title", children: "My link" });

// ReactDOM.render(link, document.getElementById('root'))

// console.log(link);

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//   </React.StrictMode>
// );
