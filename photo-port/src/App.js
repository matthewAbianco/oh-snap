import './App.css';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Nav from './components/nav/Nav';
import React, { useState } from 'react';

function App() {


const [categories] = useState([
  { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects'},
  { name: 'portraits', description: 'Portraits of people in my life' },
  { name: 'food', description: 'Delicious delicacies' },
  { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
]);
const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="app">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        <Gallery/>
        <About/>
        </main>
    </div>
  );
}

export default App;
