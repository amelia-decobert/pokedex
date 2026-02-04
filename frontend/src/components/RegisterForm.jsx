import { useState } from "react";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("REGISTER", { email, password })
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="confirmPassword" placeholder="Confirmation de mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

            <button type="submit">S'inscrire</button>
        </form>
    )
}

export default RegisterForm;