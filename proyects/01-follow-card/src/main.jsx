import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx';
import './index.css'
// import App from './App.jsx'
// const Card = ({title}) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//     </div>
//   )
// }


// createRoot(document.getElementById('root')).render(
//   // <React.Fragment>
//   <StrictMode>

//     <Card title="Hello World 1"/>
//     <Card title="Hello World 2"/>
//     <Card title="Hello World 3"/>

//   </StrictMode>
//   // </React.Fragment>
// )

createRoot(document.getElementById('root')).render(
  <App />
)