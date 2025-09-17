import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: 0, fontFamily: 'Arial, sans-serif' }}>
      <h1>Welcome to Understanding Fake News Simulator!</h1>
        <p>This Simulator was coded by MA Igor Carnaúba to teach Disinformation in EU Politics through AI to bachelor students at Eötvös Loránd University in Budapest</p>
        <p>By choosing a country, topic, technique and writing a text, students simulate their disinformation/tacking disinformation technique through a post, and and everybody will be able to see the way they are working with their countries.</p>
        <p>In order to post, click on UPLOAD YOUR POST.</p>
         <p>It will open a public file on Google Docs. Drag your text with title into Posts folder.</p>
         <p>After the text, open Dashboard spreadsheet and complete the line of your text with the other information: Country, topic, technique.</p> 
    </div>
  );
};

export default Home;
