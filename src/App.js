import React, { useEffect, useState } from 'react';
import './style.css';
import { data } from './data';

export default function App() {
  console.log('data', data);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const scroll = window.scrollY + window.innerHeight / 3;
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
      if (
        section.offsetTop <= scroll &&
        section.offsetTop + section.clientHeight > scroll
      ) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="bg"></div>
      {data.map((a, index) => {
        return (
          <div
            className={`section ${activeSection === index ? 'active' : ''}`}
            id={a.path}
          >
            <div className="section-img">
              <div
                className="section-img-inner"
                style={{ backgroundImage: `url(${a.url})` }}
              ></div>
            </div>
            <div className="section-body">
              <div className="section-text">
                <h2>{a.title}</h2>
                <p>{a.discription}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
