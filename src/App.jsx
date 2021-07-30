import {
  Boxes,
  FAQ,
  Instructors,
  Learn,
  Navbar,
  Newsletter,
  Showcase,
} from './components';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <FAQ />
      <Instructors />
    </>
  );
}

export default App;
