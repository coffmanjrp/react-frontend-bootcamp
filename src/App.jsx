import {
  Boxes,
  Contact,
  FAQ,
  Footer,
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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
