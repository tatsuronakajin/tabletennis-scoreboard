import React, { useState } from 'react';
import './App.css';

function App() {
  // チームの点数を管理する状態
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  // 点数を増やす関数
  const incrementScore = (team) => {
    if (team === 'team1') setTeam1Score(team1Score + 1);
    if (team === 'team2') setTeam2Score(team2Score + 1);
  };

  // 点数を減らす関数
  const decrementScore = (team) => {
    if (team === 'team1') {
      if (team1Score > 0) setTeam1Score(team1Score - 1);
    }
    if (team === 'team2') {
      if (team2Score > 0) setTeam2Score(team2Score - 1);
    }
  };

  // 点数をリセットする関数
  const resetScores = () => {
    setTeam1Score(0);
    setTeam2Score(0);
  };

  return (
    <div className="App">
      <h1>卓球得点板</h1>
      <div>
        <h2>選手A: {team1Score}</h2>
        <h2>選手B: {team2Score}</h2>
      </div>
      <div className="button-group">
        <div className="team-buttons">
          <button onClick={() => incrementScore('team1')}>A 1点先取</button>
          <button
            className="small-gray-button"
            onClick={() => decrementScore('team1')}
          >
            A 戻す
          </button>
        </div>
        <div className="team-buttons">
          <button onClick={() => incrementScore('team2')}>B 1点先取</button>
          <button
            className="small-gray-button"
            onClick={() => decrementScore('team2')}
          >
            B 戻す
          </button>
        </div>
      </div>
      <div>
        <button onClick={resetScores}>リセット</button>
      </div>
    </div>
  );
}

export default App;
