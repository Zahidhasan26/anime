import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './supabaseClient'

export default function App() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    fetchCrewmates()
  }, [])

  async function fetchCrewmates() {
    const { data, error } = await supabase
      .from('crewmates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setCrewmates(data)
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🌌 Naruto Crewmates</h1>

      <div className="flex justify-center space-x-4 mb-6 text-lg font-semibold">
        <Link to="/" className="text-blue-700">Home</Link> <br />
        <Link to="/create" className="text-green-700">Add New Crewmate</Link>
      </div>

      {crewmates.length === 0 ? (
        <p className="text-center text-gray-500">No crewmates yet. Add one!</p>
      ) : (
        <div className="space-y-4">
          {crewmates.map(cm => (
            <div key={cm.id} className="border p-4 rounded-lg shadow hover:shadow-md transition duration-200">
              <h2 className="text-xl font-semibold">{cm.name}</h2>
              <p><strong>Type:</strong> {cm.type}</p>
              <p><strong>Trait:</strong> {cm.trait}</p>
              <p><strong>Ultimate Move:</strong> {cm.ultimate}</p>
              <div className="mt-2 space-x-4 text-sm">
                <Link to={`/details/${cm.id}`} className="text-blue-600 hover:underline">Details</Link>
                <Link to={`/edit/${cm.id}`} className="text-green-600 hover:underline">Edit</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
