import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function PokemonList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pokemon");

        if (!response.ok) {
          throw new Error("Erreur")
        }

        const data = await response.json();
        setAllPokemon(data);
      } catch (err) {
        if (err instanceof Error) {
          setPageError(err.message);
        }
      } finally {
        setLoading(false)
      }
    }
    fetchAllPokemon();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (pageError) {
    return <p>{pageError}</p>
  }

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <h2>POKÉMON</h2>
        <div className="main">
          <div className="cards">
            {allPokemon.map(pokemon => (
              <article className="card" key={pokemon.id}>
                <img
                  src={`/images/pokemon/${pokemon.name.toLowerCase()}.png`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
                <Link className="button" to={`/pokemon/${pokemon.id}`}>
                  Détails
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PokemonList;
