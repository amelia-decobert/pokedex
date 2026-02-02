import { useEffect, useState } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"

function Team() {
    const [team, setTeam] = useState(null)
    const [loading, setLoading] = useState(true);
    const [pageError, setPageError] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/teams/${id}`)

                if (!response.ok) {
                    throw new Error("Erreur")
                }

                const data = await response.json()
                setTeam(data)
            } catch (err) {
                if (err instanceof Error) {
                    setPageError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchTeam()
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }

    if (pageError) {
        return <p>{pageError}</p>
    }

    return (
        <>
            < Header />
            <Navbar />
            < main >
                <h2>{team.name}</h2>
                <p>{team.description}</p>
                <div className="main">
                    {team.pokemons.length === 0 ? (
                        <p>Pas de Pokémon pour le moment...</p>
                    ) : (
                        team.pokemons?.map((pokemon) => (
                            <article className="card" key={pokemon.id}>
                                <img src={`/images/pokemon/${pokemon.name.toLowerCase()}.png`} alt={pokemon.name} />
                                <h3>{pokemon.name}</h3>
                            </article>
                        )))
                    }
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Team;