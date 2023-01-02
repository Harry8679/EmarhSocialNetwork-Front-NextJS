import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../context/index.context';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [state, setState] = useContext(UserContext);

    const router = useRouter();

    const logout = () => {
        window.localStorage.removeItem('auth');
        setState(null);
        router.push('/connexion');
    }

    return (
        <>
            <nav className="nav bg-dark justify-content-center">
                <Link href="/" className="nav-link text-light">
                    EmarhSocNet
                </Link>
                <Link href="/connexion" className="nav-link text-light">
                    Connexion
                </Link>
                <Link href="/inscription" className="nav-link text-light">
                    Inscription
                </Link>
                <Link href="/connexion" onClick={logout} className="nav-link text-light">
                    Déconnexion
                </Link>
            </nav>
        </>
    );
}

export default Navbar;