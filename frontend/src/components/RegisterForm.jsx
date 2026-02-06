import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("REGISTER", { email, password })
        setError("");

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas");
            return
        }

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
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
                throw new Error(data.message || "Erreur d'inscription")
            }

            localStorage.setItem("token", data.token);

            navigate("/dashboard");

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Confirmation de mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            {error && <p>{error}</p>}

            <button type="submit">S'inscrire</button>
        </form>
    )
}

export default RegisterForm;