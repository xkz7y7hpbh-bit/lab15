import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Section />
      <Article />
      <Aside />
    </main>
  );
}
export default Main;