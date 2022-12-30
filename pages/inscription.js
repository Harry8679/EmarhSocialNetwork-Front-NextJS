import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(name, email, password, secret);
        axios
            .post('http://localhost:5000/api/register', {
                name,
                email,
                password,
                secret
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    return (
        <div className="container-fluid">
            <div className='row py-5 bg-secondary text-light'>
                <div className='col text-center'>
                    <h1>Page d'inscription</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
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
                            <button className="btn btn-primary col-12">Valider</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;