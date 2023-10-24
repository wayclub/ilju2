import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import LoadingScreen from './components/LoadingScreen';
import ResultPage from './components/ResultPage';
import { getIljuString } from './utils/DateLogic';
import { imagesAndDescriptions } from './utils/Data';
import './App.css';

function App() {
  const [page, setPage] = useState('form'); // 'form', 'loading', 'result'
  const [userData, setUserData] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false); // NEW state

  const handleSubmit = (name, birthday) => {
    setPage('loading');
    
    // Start loading the image
    const image = new Image();
    const iljuString = getIljuString(birthday); 
    const matchedDescription = imagesAndDescriptions.find(desc => desc.iljuString === iljuString);
    image.src = matchedDescription?.image;

    image.onload = () => {
      setImageLoaded(true);
    }

    // Simulate some delay
    setTimeout(() => {
      setUserData({ name, birthday });
      setPage('result');
    }, 5000);
  };

  if (page === 'form') {
    return (
      <div className="app-container">
        <Header />
        <div className="content-container">
          <InputForm onSubmit={handleSubmit} />
        </div>
        <Footer />
      </div>
    );
  } else if (page === 'loading') {
    return (
      <div className="app-container">
        <Header />
        <div className="content-container">
          <LoadingScreen />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="app-container">
        <Header />
        <div className="content-container">
          <ResultPage data={userData} imageLoaded={imageLoaded} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;