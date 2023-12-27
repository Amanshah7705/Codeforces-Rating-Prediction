// pages/index.js
'use client'
import { useState } from 'react';
import Navbar from './components/Navbar';
import axios from 'axios';

const Home = () => {
  const [rank1, setRank] = useState(0);
  const [participant1, setParticipant] = useState(0);
  const [oldRating1, setOldRating] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [answer, setAnswer] = useState('');

  async function datafor(postData) {
    const data = JSON.stringify({
      rank: parseInt(postData.rank, 10),
      participant: parseInt(postData.participant, 10),
      oldRating: parseInt(postData.oldRating, 10),
    });

    const response = await axios.post('https://9f1d-34-127-86-240.ngrok-free.app/', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  }

  async function checker2() {
    if (rank1 < 1 || participant1 < 1 || oldRating1 < 1 || rank1 > participant1) {
      setIsValid(false);
      alert('Please enter valid details.');
    } else {
      try {
        const postData = {
          rank: rank1,
          participant: participant1,
          oldRating: oldRating1,
        };

        const response = await datafor(postData);
        
        const op = response.data
        let done = false;
        let sp=""
        for (let i=0;i<op.length ;i++){
           if(i>0){
             if(op[i] == '[' && op[i-1] == '['){
                 done = true
             }
             else{
                 if(op[i] == '.'){
                  break;
                 }
                 else{
                  if(done){
                     sp+=op[i]
                  }
                 }
             }
           }
        }

        setAnswer(parseInt(sp, 10));
        setIsValid(true);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 text-center">
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Rank"
            onChange={(e) => setRank(e.target.value)}
            className={`border rounded p-2 focus:outline-none ${isValid ? '' : 'border-red-500'}`}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Participants"
            onChange={(e) => setParticipant(e.target.value)}
            className={`border rounded p-2 focus:outline-none ${isValid ? '' : 'border-red-500'}`}
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter Old Rating"
            onChange={(e) => setOldRating(e.target.value)}
            className={`border rounded p-2 focus:outline-none ${isValid ? '' : 'border-red-500'}`}
          />
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          onClick={checker2}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Predict
        </button>
        {!isValid && <p className="text-red-500 mt-2">Please enter valid details.</p>}
        {answer && <p className="text-green-500 mt-2">Prediction: {answer}</p>}
      </div>
    </div>
  );
};

export default Home;
