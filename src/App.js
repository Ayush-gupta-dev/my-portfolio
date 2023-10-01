import 'tailwindcss/tailwind.css';
import Navbar  from './screens/navbar';
import About from './screens/About';
import Contact from './screens/Contact';
function App() {
  return (
    
 <div className="h-screen relative">
      <Navbar/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
