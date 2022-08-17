import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

//podemos destructurar directamente en el argumento
// function Componente(props) {
// //   console.log(props);
// //   //Destructuring
// //   const { title, content, children } = props;

//   return (
//     <div className="contenedor">
//       <h1>{title}</h1>
//       <div>{content}</div>
//       <div>{children}</div>
//     </div>
//   );
// }

root.render(<App />);
