import { useContext } from 'react';
import { UserContext } from '../context/index.context';

const Home = () => {
    const [state, setState] = useContext(UserContext);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1 className='display-1 text-center py-5'>Accueil Page</h1>
                    {JSON.stringify(state)}
                    <img src="/img/pedestrians.jpg" alt="image d'accueil" />
                </div>
            </div>
        </div>
    );
}

export default Home;