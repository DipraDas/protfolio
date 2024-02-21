import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import './App.css';

import MainComponent from './Component/MainComponent';
import AnimatedCursor from 'react-animated-cursor';
import Cloudone from './Component/Cloudone';
import Dyfuso from './Component/Dyfuso';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cloudone" element={<Cloudone />} />
        <Route path="/dyfuso" element={<Dyfuso />} />
        <Route path="/" element={<MainComponent />} />
      </Routes>
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
    </Router>
  );
}

export default App;
