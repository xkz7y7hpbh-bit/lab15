import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Article.css';

function Article() {
  return (
    <article className="article">
      <Routes>
        <Route path="/" element={
          <>
            <h1>Новости</h1>
            <p>Здесь будут последние новости университета.</p>
          </>
        } />
        <Route path="/about" element={
          <>
            <h1>Южный федеральный университет</h1>
          </>
        } />
        <Route path="/contacts" element={
          <>
            <h1>Контакты</h1>
            <p>+7 (999) 123-45-67</p>
          </>
        } />
        <Route path="*" element={
          <>
            <h1>404</h1>
            <p>Страница не найдена.</p>
          </>
        } />
      </Routes>
    </article>
  );
}
export default Article;