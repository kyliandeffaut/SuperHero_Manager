import { FormEvent, useState } from "react";

type Values = {
  nom: string;
  alias?: string;
  univers: "Marvel" | "DC" | "Autre";
  pouvoirs: string;
  description?: string;
  origine?: string;
  premiereApparition?: string;
  image?: File | null;
};

export default function HeroForm({ onSubmit, initial }:{
  onSubmit: (data: FormData) => void,
  initial?: Partial<Values>
}) {
  const [v, setV] = useState<Values>({
    nom: initial?.nom || "",
    alias: initial?.alias || "",
    univers: (initial?.univers as any) || "Marvel",
    pouvoirs: (initial as any)?.pouvoirs?.join(", ") || "",
    description: initial?.description || "",
    origine: initial?.origine || "",
    premiereApparition: initial?.premiereApparition || "",
    image: null
  });
  const [preview, setPreview] = useState<string>("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const fd = new FormData();
    fd.append("nom", v.nom);
    if (v.alias) fd.append("alias", v.alias);
    fd.append("univers", v.univers);
    fd.append("pouvoirs", v.pouvoirs.split(",").map(s=>s.trim()).filter(Boolean).join("|"));
    if (v.description) fd.append("description", v.description);
    if (v.origine) fd.append("origine", v.origine);
    if (v.premiereApparition) fd.append("premiereApparition", v.premiereApparition);
    if (v.image) fd.append("image", v.image);
    onSubmit(fd);
  }

  return (
    <form onSubmit={submit} style={{ display:"grid", gap:8 }}>
      <input placeholder="Nom" value={v.nom} onChange={e=>setV({...v, nom:e.target.value})} required />
      <input placeholder="Alias" value={v.alias} onChange={e=>setV({...v, alias:e.target.value})} />
      <select value={v.univers} onChange={e=>setV({...v, univers:e.target.value as any})}>
        <option>Marvel</option><option>DC</option><option>Autre</option>
      </select>
      <input placeholder="Pouvoirs (séparés par des virgules)" value={v.pouvoirs} onChange={e=>setV({...v, pouvoirs:e.target.value})} />
      <textarea placeholder="Description" value={v.description} onChange={e=>setV({...v, description:e.target.value})} />
      <input placeholder="Origine" value={v.origine} onChange={e=>setV({...v, origine:e.target.value})} />
      <input placeholder="Première apparition" value={v.premiereApparition} onChange={e=>setV({...v, premiereApparition:e.target.value})} />
      <input type="file" accept="image/*" onChange={e=>{
        const f = e.target.files?.[0] || null;
        setV({...v, image:f});
        if (f) setPreview(URL.createObjectURL(f));
      }} />
      {preview && <img src={preview} style={{ width:200, height:120, objectFit:"cover" }} />}
      <button type="submit">Enregistrer</button>
    </form>
  );
}
