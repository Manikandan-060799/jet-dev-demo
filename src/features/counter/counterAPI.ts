import scores from '../../data/score.json';
export interface scoreList {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
  flipKey?: string;
  rank?: number
}

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}


export function fetchScoreList() {
  return new Promise<scoreList[]>((resolve) =>
    setTimeout(() => resolve(scores), 500)
  );
}
