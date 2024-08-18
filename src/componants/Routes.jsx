import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Result from './result';
import ResultPage from './ResultPage';
import Home from './home';

function AppRoutes() {
  return (
    <div className=' '>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/websearch" element={<ResultPage />} />
        <Route path="/imagesearch" element={<ResultPage />} />
        <Route path="/videosearch" element={<ResultPage />} />
        <Route path="/news" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
