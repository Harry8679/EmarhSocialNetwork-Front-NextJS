import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/link';
import AuthForm from '../components/Forms/AuthForm';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secret, setSecret] = useState("");
    const [notification, setNotification] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // console.log(name, email, password, secret);
            const { data } = await axios
            .post(`${process.env.NEXT_PUBLIC_API}/register`, {
                name,
                email,
                password,
                secret
            })
            setNotification(true);
            setName('');
            setEmail('');
            setPassword('');
            setSecret('');
            setLoading(false);
            // setNotification(data.notification);
            /* .then((res) => setNotification(res.data.ok))
            .catch((err) => toast.error(err.response.data))*/
        } catch (err) {
            toast.error(err.response.data)
            setLoading(false);
        }
    }
    return (
        <div className="container-fluid">
            <div className='row py-5 image-bg bg-default-image text-light'>
                <div className='col text-center'>
                    <h1>Page d'inscription</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <Modal 
                        title="Félicitation"
                        open={notification}
                        footer={null}
                        onCancel={() => setNotification(false)}>
                            <p>Votre inscription a bien été prise en compte</p>
                            <Link href='/connexion'>
                                <span className='btn btn-primary btn-sm'>Connexion</span>
                            </Link>
                    </Modal>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='text-center'>
                        Avez-vous déjà un <Link href='/connexion'>compte</Link> ?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;