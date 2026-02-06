import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <header>
        <h1>
          Pokédex <span>ポケモン図鑑</span>
        </h1>

        <div className="logo">
          <img src="/images/logo.png" alt="Pokédex logo" />
        </div>
      </header>

      <main>
        <h2>BIENVENUE!</h2>

        <div className="main">
          <div className="cards">
            <article className="card">
              <img src="/images/pokemon-group.avif" alt="" />
              <div>
                <h3>Visiteur</h3>
                <Link className="button" to="/pokemon">
                  Voir tous les Pokémon
                </Link>
              </div>
            </article>

            <article className="card">
              <img src="/images/team2.webp" alt="" />
              <div>
                <h3>Dresseur</h3>
                <Link className="button" to="/auth">
                  Connexion
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />

    </>
  );
}

export default Home;
