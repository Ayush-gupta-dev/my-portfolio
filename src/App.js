import 'tailwindcss/tailwind.css';
import Navbar  from './screens/navbar';
import About from './screens/About';
import Contact from './screens/Contact';
function App() {
  return (
    
 <div className="h-screen relative">
      <Navbar/>
      <section id="about">
      <About/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
    </div>
  );
}

export default App;
