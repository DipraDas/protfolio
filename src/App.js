import './App.css';
import MainComponent from './Component/MainComponent';
import AnimatedCursor from 'react-animated-cursor';
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <div className='bg-gradient-to-r from-[#10172A] to-[#1a284d]'>
      <ProgressBar bgcolor="#5EEAD3" />
      <MainComponent />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='255, 255, 255'
        outerAlpha={0.2}
        innerScale={0.3}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  );
}

export default App;
