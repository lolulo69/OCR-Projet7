import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/main.scss';

import App from './App';

/**
 * @module index
 * @desc Ce fichier est le point d'entrée de l'application. Il importe les composants nécessaires,
 * configure React DOM et affiche l'application dans l'élément HTML avec l'ID "root"
 */

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

