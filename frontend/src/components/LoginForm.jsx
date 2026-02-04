import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("LOGIN", { email, password })
        setError("");

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur de connexion");
            }

            localStorage.setItem("token", data.token);

            navigate("/teams");

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />

            {error && <p>{error}</p>}

            <button type="submit">Se connecter</button>
        </form>
    )
}

export default LoginForm;