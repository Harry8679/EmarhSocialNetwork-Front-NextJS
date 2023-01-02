import { SyncOutlined } from '@ant-design/icons';

const AuthForm = ({
    handleSubmit,
    name, setName,
    email, setEmail,
    password, setPassword,
    secret, setSecret,
    loading
}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group p-2">
            <small>
                <label className="text-muted">Votre Nom</label>
            </small>
            <input 
            value={name} onChange={(e) => setName(e.target.value)}
            type='text' className='form-control' 
            placeholder='Entrez votre nom' />
        </div>

        <div className="form-group p-2">
            <small>
                <label className="text-muted">Email</label>
            </small>
            <input 
                value={email} onChange={(e) => setEmail(e.target.value)}
                type='email' className='form-control' 
                placeholder='Entrez votre email' />
        </div>

        <div className="form-group p-2">
            <small>
                <label className="text-muted">Mot de passe</label>
            </small>
            <input 
                value={password} onChange={(e) => setPassword(e.target.value)}
                type='password' className='form-control' 
                placeholder='Entrez votre mot de passe' />
        </div>

        <div className="form-group p-2">
            <small>
                <label className="text-muted">Choisis une question</label>
            </small>
            <select className="form-control">
                <option>Quelle est ton animal préféré ?</option>
                <option>Quelle est ta couleur préférée ?</option>
                <option>Quelle est ta ville préférée ?</option>
            </select>
            
            <small className="form-text text-muted">
                You can use this to reset your password if forgotten.
            </small>
        </div>

        <div className="form-group p-2">
            <input 
                value={secret} onChange={(e) => setSecret(e.target.value)}
                type='text' className='form-control' 
                placeholder='Ecrivez-votre réponse' />
        </div>

        <div className="form-group p-2">
            <button disabled={!name || !email || !password || !secret} 
                className="btn btn-primary col-12">
                    {loading ? <SyncOutlined spin className='py-1' /> : "Valider"}
                </button>
        </div>
    </form>
);

export default AuthForm;