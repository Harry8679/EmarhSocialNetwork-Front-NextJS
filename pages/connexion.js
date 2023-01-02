import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Modal } from 'antd';
import Link from 'next/link';
import AuthForm from '../components/Forms/AuthForm';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            // console.log(name, email, password, secret);
            const { data } = await axios
            .post(`${process.env.NEXT_PUBLIC_API}/login`, {
                email,
                password,
            });
            router.push('/');
            
        } catch (err) {
            toast.error(err.response.data)
            setLoading(false);
        }
    }
    return (
        <div className="container-fluid">
            <div className='row py-5 image-bg bg-bridge text-light'>
                <div className='col text-center'>
                    <h1>Page de connexion</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <AuthForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page="login"
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='text-center'>
                        Vous n'avez pas encore de <Link href='/inscription'>compte</Link> ?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;