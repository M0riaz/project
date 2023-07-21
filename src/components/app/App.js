import React from "react";
import style from './App.module.css'
import AppHeader from "../appHeader/AppHeader";
import {MainPage, LoginPage, ProfilePage, RegistrationPage,AboutPage,NewsPage, CalendarPage} from "../../pages/pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className={style.app}>
      <AppHeader/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/registration' element={<RegistrationPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/news' element={<NewsPage/>}/>
            <Route path='/calendar' element={<CalendarPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
