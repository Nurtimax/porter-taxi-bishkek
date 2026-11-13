import { ActionBar } from './components/ActionBar';
import { Conditions } from './components/Conditions';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { TopBar } from './components/TopBar';
import './styles/fonts.css';
import './styles/app.css';

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Conditions />
        <Contact />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
