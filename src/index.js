import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/reset.css';
import './assets/style/common.scss';
import 'element-theme-default';
// import { Provider } from 'react-redux';
// import store from './practise/store/store';
// ReactDOM.render(
//     <Provider store={store()}>
//         <App />
//     </Provider>,
//     document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
