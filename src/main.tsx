import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import KeycloakService from "./keycloakService.ts";


const root = document.getElementById('root');
const render = () => ReactDOM.createRoot(root!).render(<App />);

const keycloakService = new KeycloakService();
keycloakService.init(render);


// const root = ReactDOM.createRoot(document.getElementById('root')!);
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
