// components/About.js
'use client'
import React, { useState } from 'react';
import CodeforcesLink from '../components/Codeforces';
import CodechefLink from '../components/Codechef';
import Navbar2 from '../components/Navbar2';
const About = () => {
  const codeforcesHandle = 'Vandaro';
  const codechefHandle = 'amanshah123';

  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!isDetailsVisible);
  };

  return (
    <>
    <Navbar2/>
    <div className="container mx-auto p-8 bg-gray-900 text-white">
      <h1
        className="text-4xl font-bold mb-6 text-center cursor-pointer"
        onClick={toggleDetails}
      >
        About Me
      </h1>

      {isDetailsVisible && (
        <>
          <div className="text-lg mb-4 flex items-center justify-center">
            <p>
              Hello, I'm Aman Shah, a final year student from Nirma University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-lg mb-4">
              <p>
                <strong>Codeforces Achievements:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>Expert in Codeforces with a highest rating of 1705.</li>
                <li>Secured 183th rank in Educational Round #150 (Div 2) among 30k+ participants.</li>
                <li>Secured 45th rank in Round #849 (Div 4) among 38k+ participants.</li>
                <li>Secured 154th rank in Round #850 (Div 1) among 15k+ participants.</li>
                <li>Solved 1400+ questions in Codeforces.</li>
              </ul>
            </div>
            <div className="text-lg mb-4">
              <p>
                <strong>Codechef Achievements:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>5★ in Codechef with a highest rating of 2119.</li>
                <li>Secured 95th rank in Starters #74 (Div 2) among 2k+ participants.</li>
                <li>Secured 17th rank in Starters #69 (Div 2) among 1.7k+ participants.</li>
                <li>Solved 740+ questions in Codechef.</li>
                <li>Solved 1400+ questions in Codeforces.</li>
              </ul>
            </div>
            <div className="text-lg mb-4">
              <p>
                <strong>Other Achievements:</strong>
              </p>
              <ul className="list-disc ml-4">
                <li>Secured 621th rank in Google Kick-Start 2022 Round D among 35k+ participants.</li>
                <li>Secured 67th rank in ICPC Kanpur-Mathura 2023 among 950+ teams.</li>
                <li>Secured 55th rank in Newton School Coding Contest among 12k+ participants.</li>
                <li>Secured 1741 rank in Meta Hacker Cup Round-2 2023 among 7k participants.</li>
                <li>Solved 400+ questions in all other platforms.</li>
              </ul>
            </div>
          </div>

          <div className="text-lg mb-4 flex items-center justify-center">
            Check out my Codeforces profile: <CodeforcesLink handle={codeforcesHandle} />
          </div>
          <div className="text-lg mb-4 flex items-center justify-center">
            Check out my CodeChef profile: <CodechefLink handle={codechefHandle} />
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default About;
