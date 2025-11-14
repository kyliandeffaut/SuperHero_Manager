import { Link } from "react-router-dom";
import { Hero } from "../types/Hero";

export default function HeroCard({ hero }: { hero: Hero }) {
  return (
    <div className="border rounded p-3 shadow-lg hover:shadow-xl">
      {hero.image && <img src={`http://localhost:5000${hero.image}`} alt={hero.nom} className="mb-2 rounded" />}
      <h3 className="font-bold">{hero.nom}</h3>
      <p>{hero.alias}</p>
      <p className="text-sm text-gray-500">{hero.univers}</p>
      <Link to={`/hero/${hero._id}`} className="text-blue-600 hover:underline">Détails</Link>
    </div>
  );
}
