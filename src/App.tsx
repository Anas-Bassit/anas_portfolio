import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
