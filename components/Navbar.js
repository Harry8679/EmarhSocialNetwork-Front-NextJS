import Link from 'next/link';

const Navbar = () => {
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
            </nav>
        </>
    );
}

export default Navbar;