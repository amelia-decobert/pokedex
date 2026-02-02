import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

// Centralize max stats
const maxStats = {
    hp: 250,
    atk: 134,
    def: 180,
    atk_spe: 154,
    def_spe: 125,
    speed: 140
}

function Pokemon() {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(true);
    const [pageError, setPageError] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/pokemon/${id}`)

                if (!response.ok) {
                    throw new Error("Erreur")
                }

                const data = await response.json()
                setPokemon(data)
            } catch (err) {
                if (err instanceof Error) {
                    setPageError(err.message)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [id])

    if (loading) {
        return <p>Chargement en cours...</p>
    }

    if (pageError) {
        return <p>{pageError}</p>
    }

    // Create helper function (percent)
    // Convert rax stat to percent width
    const statPercent = (value, max) => {
        return Math.round((value / max) * 100)
    }

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <h2>{pokemon.name}</h2>
                <div className="main">
                    <article className="card">
                        <img src={`/images/pokemon/${pokemon.name.toLowerCase()}.png`} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>

                        {/* STATS PROGRESS BAR */}
                        <div className="stats">
                            <div className="stat">
                                <span>HP</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.hp, maxStats.hp)}%` }}></div>
                                <span>{pokemon.hp}/{maxStats.hp}</span>
                            </div>

                            <div className="stat">
                                <span>ATK</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.atk, maxStats.atk)}%` }}></div>
                                <span>{pokemon.atk}/{maxStats.atk}</span>
                            </div>

                            <div className="stat">
                                <span>DEF</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.def, maxStats.def)}%` }}></div>
                                <span>{pokemon.def}/{maxStats.def}</span>
                            </div>

                            <div className="stat">
                                <span>ATK SPE</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.atk_spe, maxStats.atk_spe)}%` }}></div>
                                <span>{pokemon.atk_spe}/{maxStats.atk_spe}</span>
                            </div>

                            <div className="stat">
                                <span>DEF SPE</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.def_spe, maxStats.def_spe)}%` }}></div>
                                <span>{pokemon.def_spe}/{maxStats.def_spe}</span>
                            </div>

                            <div className="stat">
                                <span>SPEED</span>
                                <div className="bar-fill" style={{ width: `${statPercent(pokemon.speed, maxStats.speed)}%` }}></div>
                                <span>{pokemon.speed}/{maxStats.speed}</span>
                            </div>

                        </div>
                    </article>
                </div>
            </main>
        </>
    )
}

export default Pokemon;