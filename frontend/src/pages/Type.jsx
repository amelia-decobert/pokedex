import { useEffect, useState } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom"

function Type() {
    const [type, setType] = useState(null)
    const [loading, setLoading] = useState(true);
    const [pageError, setPageError] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        const fetchType = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/types/${id}`)

                if (!response.ok) {
                    throw new Error("Erreur")
                }

                const data = await response.json()

                setType(data)
            } catch (err) {
                if (err instanceof Error) {
                    setPageError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchType()
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
                <h2>{type.name}</h2>
                <div className="main">
                    <div className="cards">
                        {type.pokemons.length === 0 ? (
                            <p>Pas de Pokémon pour le moment...</p>
                        ) : (
                            type.pokemons?.map((pokemon) => (
                                <article className="card" key={pokemon.id}>
                                    <img src={`/images/pokemon/${pokemon.name.toLowerCase()}.png`} alt={pokemon.name} />
                                    <h3>{pokemon.name}</h3>
                                </article>
                            )))
                        }
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}

export default Type;