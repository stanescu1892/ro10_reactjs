import { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';
import Form from './components/form/form';
import ShowData from './components/showData/showData';
import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <Header title="Header1" btnLabel="Login" showButton={true} showClock={true} />
      </header>
      <main>
        <Counter />
        <Form/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
