import ScoreBoardListRow from './ScoreBoardListRow';
import { useFlip } from "react-easy-flip";


const ScoreBoardList  = ({ scores }: any) => {
    const flipContainerId = "flip-todo-items";
    useFlip(flipContainerId, {
      duration: 900,
    });
  return (
    <div>
        <ul data-flip-root-id={flipContainerId}>
            {scores.map((x: any, index: any) => (
                <ScoreBoardListRow flipKey={x.userID} key={x.userID} userID={x.userID} displayName={x.displayName} picture={x.picture} score={x.score} rank={index+1}/>
            ))}
        </ul>
    </div>
  )
}

export default ScoreBoardList