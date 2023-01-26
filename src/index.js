import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/main.scss';

import Router from './Router';

/**
 * @module index
 * @desc Ce fichier est le point d'entrée de l'application. Il importe les composants nécessaires,
 * configure React DOM et affiche l'application dans l'élément HTML avec l'ID "root"
 */

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const htmlLang = "fr";

document.documentElement.lang = htmlLang; // Passage du paramètre lang de la balise HTML au français

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
);

