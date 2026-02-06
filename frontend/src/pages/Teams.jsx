import { useEffect, useState } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

function Teams() {
  const [allTeams, setAllTeams] = useState([])
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(null);

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/teams")

        if (!response.ok) {
          throw new Error("Erreur")
        }

        const data = await response.json()
        setAllTeams(data)
      } catch (err) {
        if (err instanceof Error) {
          setPageError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }
    fetchAllTeams()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  if (pageError) {
    return <p>{pageError}</p>
  }

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <h2>ÉQUIPES</h2>
        <div className="main">
          <div className="cards">
            {allTeams.map(team => (
              <article className="card" key={team.id}>
                <img src="/images/mini-pokeball.png" alt="mini-pokeball" />
                <h3>{team.name}</h3>
                <p>{team.description}</p>
                <Link className="button" to={`/teams/${team.id}`}>Details</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Teams;