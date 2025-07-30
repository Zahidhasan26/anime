import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Details() {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from("crewmates")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error("Error loading crewmate", error);
      else setCrewmate(data);
    }

    fetchData();
  }, [id]);

  if (!crewmate) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔍 {crewmate.name} Details</h1>
      <p><strong>Type:</strong> {crewmate.type}</p>
      <p><strong>Trait:</strong> {crewmate.trait}</p>
      <p><strong>Ultimate Move:</strong> {crewmate.ultimate}</p>

      <div className="mt-6 space-x-4">
        <Link to={`/edit/${crewmate.id}`} className="text-green-600 underline">Edit</Link>
        <Link to="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
    </div>
  );
}
