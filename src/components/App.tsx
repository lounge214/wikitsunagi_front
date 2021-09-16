import React, { useState } from "react";
import "./CSS/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./Game";
import Title from "./Title";
import Result from "./Result";

//ここのinitialの時点でAPIからデータ取ってきても良いと思う
const initialQuestWord: string[] = ["京都大学", "レッドブル"];
function App() {
  const [questWord, setQuestWord] = useState(initialQuestWord);
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Title} />
          <Route
            exact
            path="/Main"
            render={() => <Game questWords={questWord} maxWord={5} />}
          />
          <Route exact path="/Result" component={Result} />
        </div>
      </Router>
    </div>
  );
}

export default App;
