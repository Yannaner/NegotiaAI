import { useState } from 'react'

const Dashboard = () => {
  const [formData, setFormData] = useState({
    carModel: '',
    year: '',
    mileage: '',
    desiredBudget: '',
    maxBudget: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">NegotiaAI Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-neon">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-cyan-400 mb-2">Car Model</label>
            <input
              type="text"
              className="w-full bg-gray-700 border border-cyan-500 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.carModel}
              onChange={(e) => setFormData({...formData, carModel: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-cyan-400 mb-2">Year</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-cyan-500 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.year}
              onChange={(e) => setFormData({...formData, year: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-cyan-400 mb-2">Mileage</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-cyan-500 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.mileage}
              onChange={(e) => setFormData({...formData, mileage: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-cyan-400 mb-2">Desired Budget</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-cyan-500 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.desiredBudget}
              onChange={(e) => setFormData({...formData, desiredBudget: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-cyan-400 mb-2">Maximum Budget</label>
            <input
              type="number"
              className="w-full bg-gray-700 border border-cyan-500 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={formData.maxBudget}
              onChange={(e) => setFormData({...formData, maxBudget: e.target.value})}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-neon-sm hover:shadow-neon-lg"
        >
          Start Negotiation
        </button>
      </form>
    </div>
  )
}

export default Dashboard
