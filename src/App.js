import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityTable from './components/CityTable';
import WeatherPage from './components/WeatherPage';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  background-color: #007BFF;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
`;

const MainContent = styled.main`
  width: 90%;
  max-width: 1200px;
  margin: 1rem 0;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Header>
          Weather Forecast Application
        </Header>
        <MainContent>
          <Routes>
            <Route path="/" element={<CityTable />} />
            <Route path="/weather/:cityName" element={<WeatherPage />} />
          </Routes>
        </MainContent>
      </Router>
    </AppWrapper>
  );
}

export default App;
