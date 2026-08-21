import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
