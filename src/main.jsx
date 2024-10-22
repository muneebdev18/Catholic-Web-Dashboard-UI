import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import { Provider } from 'react-redux'
import store from './global/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/catholicgrapevine'>
      <Provider store={store}>
        <App />
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
