import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Types() {
    const [allTypes, setAllTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageError, setPageError] = useState(null);

    useEffect(() => {
        const fetchAllTypes = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/types");

                if (!response.ok) {
                    throw new Error("Erreur");
                }

                const data = await response.json();
                setAllTypes(data);

            } catch (err) {
                if (err instanceof Error) {
                    setPageError(err.message);
                }
            } finally {
                setLoading(false)
            }
        }
        fetchAllTypes();
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
                <h2>TYPES!</h2>
                <div className="main">
                    {allTypes.map(type => (
                        <article key={type.id}>
                            <div className="type-card" style={{"--type-color": `#${type.color}`}}>
                                <Link to={`/types/${type.id}`}>
                                    <h3>{type.name}</h3>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Types;