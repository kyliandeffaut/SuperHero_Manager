import { useState } from "react";
import { createHero } from "../api/heroApi";
import { useNavigate } from "react-router-dom";

export default function AddHero() {
  const [nom, setNom] = useState("");
  const [alias, setAlias] = useState("");
  const [univers, setUnivers] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const data = new FormData();
    data.append("nom", nom);
    data.append("alias", alias);
    data.append("univers", univers);
    if (image) data.append("image", image);
    await createHero(data);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-3">
      <h2 className="text-xl font-bold">Ajouter un héros</h2>
      <input placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)} className="border p-2 w-full" />
      <input placeholder="Univers" value={univers} onChange={(e) => setUnivers(e.target.value)} className="border p-2 w-full" />
      <input type="file" onChange={(e) => setImage(e.target.files?.[0] || null)} className="w-full" />
      <button type="submit" className="bg-green-600 text-white p-2 w-full">Créer</button>
    </form>
  );
}
