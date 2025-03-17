import { Navbar } from './components/Navbar';
import Dashboard from './components/Dashboard';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <Background />
      <Navbar />
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
