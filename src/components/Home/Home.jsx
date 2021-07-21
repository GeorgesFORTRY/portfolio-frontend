import Introduction from '../Introduction/Introduction';
import Definition from '../Definition/Definition';
import Slider from '../Slider/Slider';
import About from '../About/About';
import Contact from '../Contact/Contact';
import SHome from './Style';

export default function Home() {
  return (
    <SHome>
      <Introduction />
      <Definition />
      <Slider />
      <About />
      <Contact />
    </SHome>
  );
}
