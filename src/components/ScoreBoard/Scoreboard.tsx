import { useState, useEffect } from 'react';
import scoreData from '../../data/score.json';
import { scoreList } from '../../features/counter/counterAPI';
import ScoreBoardList from '../ScoreBoardList/ScoreBoardList';
import { FlipProvider } from "react-easy-flip";
import './Scoreboard.css'

const Scoreboard = () => {
    const [scores, setScores] = useState<scoreList[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
          const updatedScores = scoreData.map((item, index) => {
            if ((index + 1) % 2 === 0) {
                return { ...item, score: item.score + Math.floor(Math.random() * 5000) };
            }
            return { ...item, score: item.score + Math.floor(Math.random() * 100) };
          });
          updatedScores.sort((a, b) => b.score - a.score);
          setScores(updatedScores);
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }, []);

  return (
    <div className='score' >
      <FlipProvider>
        <ScoreBoardList scores={scores} />
      </FlipProvider>
    </div>
  )
}

export default Scoreboard