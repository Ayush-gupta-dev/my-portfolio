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
      <section id="contact" className='bg-gray-900 '>
      <Contact/>
      </section>
    </div>
  );
}

export default App;
