import 'tailwindcss/tailwind.css';
import nightImage from './imgNight.jpg';
import TypingAnimation from './TypingAnimation';
function App() {
  return (
    
 <div className="h-screen relative">
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div
        className="h-full bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${nightImage})`,
          filter: 'brightness(55%)', // Adjust the brightness value for darkness
        }}
      >
        {/* Your content here */}
          <TypingAnimation />
      </div>
    </div>
  );
}

export default App;
