import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "Java", progress: 100, className: "java-progress", years: 5 },
    { name: "HTML/CSS", progress: 80, className: "web-progress", years: 4 },
    { name: "SQL", progress:80, className: "sql-progress", years: 4 },
    { name: "JS", progress: 40, className: "c-progress", years: 2},
    { name: "Python", progress: 20, className: "c-progress", years: 1},
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;
