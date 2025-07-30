import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Create() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [ultimate, setUltimate] = useState('')
  const [trait, setTrait] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
  e.preventDefault()

  const { error } = await supabase
    .from('crewmates')
    .insert([{ name, type, ultimate, trait }])

  if (error) {
    console.error("Supabase Error:", error)
    alert(`Error creating crewmate: ${error.message}`)
  } else {
    navigate('/')
  }
}

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">🌀 Add Naruto Crewmate</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="border w-full p-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="border w-full p-2" placeholder="Type (Fire, Wind...)" value={type} onChange={e => setType(e.target.value)} />
        <input className="border w-full p-2" placeholder="Ultimate Move" value={ultimate} onChange={e => setUltimate(e.target.value)} />
        <input className="border w-full p-2" placeholder="Special Trait (Jinchuriki...)" value={trait} onChange={e => setTrait(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  )
}
