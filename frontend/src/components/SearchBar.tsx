import { useState } from "react";
type Props = { onSearch: (q: string) => void; onFilter: (u: string) => void; onSort: (s: "alpha"|"date") => void };
export default function SearchBar({ onSearch, onFilter, onSort }: Props) {
  const [q, setQ] = useState("");
  return (
    <div style={{ display: "flex", gap: 8, margin: "12px 0" }}>
      <input placeholder="Rechercher..." value={q} onChange={e=>setQ(e.target.value)} />
      <button onClick={()=>onSearch(q)}>OK</button>
      <select onChange={e=>onFilter(e.target.value)}>
        <option value="">Tous</option>
        <option value="Marvel">Marvel</option>
        <option value="DC">DC</option>
        <option value="Autre">Autre</option>
      </select>
      <select onChange={e=>onSort(e.target.value as any)}>
        <option value="date">Plus récent</option>
        <option value="alpha">Alphabetique</option>
      </select>
    </div>
  );
}
