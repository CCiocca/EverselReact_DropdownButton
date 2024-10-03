import { registerSW } from 'virtual:pwa-register';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductProvider.jsx';
import { LanguageProvider } from './contexts/LanguageProvider.jsx';
import Cookies from 'js-cookie'; 
import packageJson from '../package.json';
import { expireOptions } from './utils/constants/expireOptions.js';

registerSW({immediate: true}); 
function checkAppVersionAndReload(){
  if(Cookies.get('app-version') != packageJson.version){
    Cookies.set('app-version', packageJson.version, {expires: expireOptions });
    window.location.reload(true);
  }
}
window.addEventListener('load', checkAppVersionAndReload);

// config({ licenseKey });   

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageProvider>
        <ProductProvider>  
          <App />
        </ProductProvider>
    </LanguageProvider>
  </BrowserRouter>
)
