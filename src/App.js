import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';
import Form from './components/form/form';
import FormRef from './components/formRef/formRef';
import ShowData from './components/showData/showData';
import './App.css';

function App() {
  const [clock, setClock] = useState();

  // the returned callback will be called at component will unmount
  useEffect(() => {
      const tickId = setInterval(() => {
          setClock(new Date().toLocaleString())
      }, 1000);

      return () => clearInterval(tickId);
  }, [])

  return (
    <div className="App">
      <header>
        <Header title="Header1" btnLabel="Login" showButton={true} showClock={true} clock={clock}/>
      </header>
      <main>
        <Counter />
        <FormRef/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
