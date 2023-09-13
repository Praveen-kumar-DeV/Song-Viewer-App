import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

function App() {
  return (
    <div className="ui  ">
      <div className=" ui container grid">
        <div className="ui row">
          <div
            className=" column eight wide "
            style={{ margin: "100px 0 0 0" }}>
            <SongList />
          </div>
          <div className="column eight wide" style={{ margin: "10px 0 0 0" }}>
            <SongDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
