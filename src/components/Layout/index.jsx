import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

/**
 * Ce composant Layout affiche le layout commun à toutes les pages,
 * il inclue un header, un footer, et le contenu principal de la page.
 */
function Layout() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Contenu principal de la page */}
            <Outlet />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Layout;
