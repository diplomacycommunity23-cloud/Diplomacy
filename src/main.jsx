import { createRoot } from 'react-dom/client'
import { ConfigProvider } from "antd";
import App from './App.jsx'
import "./index.css";

createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode>, */}
  </ConfigProvider>
)
