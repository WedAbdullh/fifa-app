// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameSelectionPage from './GameSelectionPage';
import LeagueSelectionPage from './LeagueSelectionPage';
import WhoAmI from './WhoAmI';
import TeamsAndMatches from './TeamsAndMatches';
import NewsDetails from './pages/NewsDetails';
import Layout from './Layout';
import CitiesPage from "./pages/CitiesPage";
import HostCities from "./pages/HostCities";
import CityStadiums from "./pages/CityStadiums";
import StadiumDetail from "./pages/StadiumDetail";
import AdditionalCityInfo from "./pages/AdditionalCityInfo";
import Login from './Signup/Login';
import Signup from './Signup/Signup';

function App() {
  return (
 
    <Routes>
      <Route element={<Layout />}>
        <Route path="/play-zone" element={<GameSelectionPage />} />
        <Route path="/leagues" element={<LeagueSelectionPage />} />
        <Route path="/quiz/:leagueName" element={<WhoAmI />} />
        <Route path="/teams-and-matches" element={<TeamsAndMatches />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/cities" element={<HostCities />} />                        
        <Route path="/stadiums/:cityName" element={<CityStadiums />} />
        <Route path="/stadiums/:cityName/:stadiumId" element={<StadiumDetail />} />
        <Route path="/additionalcities/:cityName" element={<AdditionalCityInfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Route>
    </Routes>
 
  );
}

export default App;