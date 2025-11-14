import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeroForm from "../components/HeroForm";
import { getHero, updateHero } from "../api/heroApi";

export default function EditHero() {
  const { id } = useParams();
  const nav = useNavigate();
  const [h, setH] = useState<any>(null);
  useEffect(()=>{ (async()=> setH(await getHero(id!)))(); }, [id]);
  if (!h) return <div style={{ padding:16 }}>Chargement...</div>;
  const initial = { ...h, pouvoirs: h.pouvoirs };
  return (
    <div style={{ padding:16 }}>
      <h2>Modifier {h.nom}</h2>
      <HeroForm initial={initial as any} onSubmit={async (fd)=>{ await updateHero(id!, fd); nav("/"); }} />
    </div>
  );
}
