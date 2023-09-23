import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './09-Mobx/App'
// import 'antd/dist/antd.css'
// import { Provider } from 'react-redux';
// import store from './07-antd/01-antdImport';


// ReactDOM.render(<div>
//     <ul>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//         <li>111</li>
//     </ul>
// </div>,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App></App>
    // <Provider store={store}>
    //     <App></App>
    // </Provider>
);