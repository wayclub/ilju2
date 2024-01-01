import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import LoadingScreen from './components/LoadingScreen';
import ResultPage from './components/ResultPage';
import { getIljuString } from './utils/DateLogic';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (name, birthday) => {
    setLoading(true);

    // Start loading the image and other data processing
    // Once done, set loading to false and navigate to the results page
    setTimeout(() => {
        setLoading(false);
        navigate(`/results/${getIljuString(birthday)}`);
    }, 5000);
  };

  return (
    <div className="app-container">
      <Helmet>
        <title>일주 찾기</title>
        <meta name="description" content="
        내 일주를 확인하세요. 생년월일을 입력하면, 내 일주를 확인할 수 있습니다. 
        현현일주에서는 일주 별로 특색있는 이미지와 함께 당신의 성격, 재능, 운명, 건강, 직업, 재물, 운세 등을 확인할 수 있습니다. 
        일주는 생년월일을 60일 단위로 나눈 것으로, 60일마다 같은 일주가 반복됩니다. 
        
        Discover your unique ilju and explore personalized insights based on your birthdate.
        Ilju is part of an Eastern version astrology, Saju, and traditional way of dividing one's life into 60-day cycles.
        Each of these period is associated with a unique image and personality traits.
        Find out your ilju, and explore your personality, talents, destiny, health, career, wealth, and fortune." />
      </Helmet>
      <Header />
      <div className="content-container">
        {loading ? ( 
          <LoadingScreen /> 
        ) : (
          <Routes>
            <Route path="/" element={<InputForm onSubmit={handleSubmit} />} />
            <Route path="/results/:iljuString" element={<ResultPage />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;