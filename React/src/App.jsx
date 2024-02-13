import AppRouter from './Router/AppRouter'
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <AppRouter/>
      <br /><br />
      <Footer/>
    </>
  );
}

export default App