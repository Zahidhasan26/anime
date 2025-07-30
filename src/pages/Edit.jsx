import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    supabase.from('crewmates').select('*').eq('id', id).single()
      .then(({ data }) => setCrewmate(data))
  }, [id])

  function handleChange(field, value) {
    setCrewmate({ ...crewmate, [field]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    await supabase.from('crewmates').update(crewmate).eq('id', id)
    navigate('/')
  }

  async function handleDelete() {
    await supabase.from('crewmates').delete().eq('id', id)
    navigate('/')
  }

  if (!crewmate) return <div className="p-4">Loading...</div>

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🛠️ Edit Crewmate</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border w-full p-2" value={crewmate.name} onChange={e => handleChange('name', e.target.value)} />
        <input className="border w-full p-2" value={crewmate.type} onChange={e => handleChange('type', e.target.value)} />
        <input className="border w-full p-2" value={crewmate.ultimate} onChange={e => handleChange('ultimate', e.target.value)} />
        <input className="border w-full p-2" value={crewmate.trait} onChange={e => handleChange('trait', e.target.value)} />
        <div className="space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
          <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </form>
    </div>
  )
}
