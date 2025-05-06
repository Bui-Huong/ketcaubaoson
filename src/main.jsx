import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const Root = () => (
  <>
    <h1>KCTBS tuyển dụng</h1>
    <p>Tham gia đội ngũ của chúng tôi để phát triển sự nghiệp!</p>
    <App />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
