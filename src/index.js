import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App/App';
import './index.css';
// import OldApp from 'components/App/OldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById('app2')).render(
//   <React.StrictMode>
//     <OldApp />
//   </React.StrictMode>
// );