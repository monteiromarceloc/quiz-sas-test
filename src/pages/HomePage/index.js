import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './style.css'
import { QuizService } from '../../services/api'
import CategoryButton from '../../components/CategoryButton';

function HomePage() {
  useState(()=>{
    QuizService.getCategories()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <CategoryButton />
      </header>
    </div>
  );
}

export default HomePage;
