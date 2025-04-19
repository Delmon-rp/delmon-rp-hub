
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// تأكد من أن عنصر الجذر موجود وانشاء جذر React عليه
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("عنصر الجذر 'root' غير موجود في HTML");

createRoot(rootElement).render(<App />);
