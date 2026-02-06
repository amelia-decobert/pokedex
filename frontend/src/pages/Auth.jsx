import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Auth() {
    return (
        <>
            <header>
                <h1><Link to="/">Pokédex</Link> <span>ポケモン図鑑</span></h1>

                <div className="logo">
                    <img src="/images/logo.png" alt="Pokédex logo" />
                </div>
            </header>

            <main>
                <h2>CONNEXION</h2>

                <div className="main">
                    <article className="card">
                        <img src="/images/nectar_de_saison_1.jpg" alt="" />
                        <div>
                            <h3>S'inscrire</h3>

                            <RegisterForm />
                        </div>
                    </article>

                    <article className="card">
                        <img src="/images/nectar_de_saison_2.jpg" alt="" />
                        <div>
                            <h3>Se connecter</h3>

                            <LoginForm />
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Auth;