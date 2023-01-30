import React from 'react'
import { scoreList } from '../../features/counter/counterAPI'
import './ScoreBoardListRow.css';

function rankBackgroundColor(rank: number) {
  switch (rank) {
    case 1:
      return "#F53B3E";
    case 2:
      return "#FC7A3C";
    case 3:
      return "#FFA22E";
    default:
      return "blue";
  }
}

const ScoreBoardListRow: React.FC<scoreList> = ({ flipKey ,userID, displayName, picture, score, rank}) => {
  return (
    <li className='styleList' data-flip-id={`flip-id-${flipKey}`}>
        <div className='leftContainer'>
            <span className='rank' style={{backgroundColor: rankBackgroundColor(rank || 4)}}>{rank}</span>
            <img className='icon' src={picture} />
            <span className='name'>{displayName}</span>
        </div>
        <div>
            <span className='score'>{score}</span>
            <span className='point'>{score}</span>
        </div>
    </li>
  )
}

export default ScoreBoardListRow