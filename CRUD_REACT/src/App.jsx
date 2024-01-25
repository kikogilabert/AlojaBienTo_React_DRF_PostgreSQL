import AppRouter from './Router/AppRouter'
import './App.css'
import Header from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header/>
      <AppRouter/>
    </>
  );
}

export default App