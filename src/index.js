import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './02-advanced/01-childtofather'


// ReactDOM.render(<div>
//     <ul>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//     </ul>
// </div>,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App></App>);