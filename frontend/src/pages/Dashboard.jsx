import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthNavbar from "../components/AuthNavbar";
import { Link } from "react-router-dom";

function Dashboard() {
    const [myTeams, setMyTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageError, setPageError] = useState(null);

    useEffect(() => {
        const fetchMyTeams = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch("http://localhost:3000/api/dashboard", {
                    // credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    throw new Error("Utilisateur non authentifié")
                }

                const data = await response.json()
                setMyTeams(data)
            } catch (err) {
                if (err instanceof Error) {
                    setPageError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchMyTeams()
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    if (pageError) {
        return <p>{pageError}</p>
    }

    return (
        <>
            < Header />
            <AuthNavbar />
            <main>
                <h2>MES ÉQUIPES</h2>
                <div className="main">
                    {myTeams.map(team => (
                        <article className="card" key={team.id}>
                            <img src="/images/mini-pokeball.png" alt="mini-pokeball" />
                            <h3>{team.name}</h3>
                            <p>{team.description}</p>
                            <Link className="button" to={`/teams/${team.id}`}>Modifier</Link>
                        </article>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Dashboard;