import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for :</h3>
      <p>
        Title :
        <br />
      </p>
      <div className="ui card">
        <div className="image">
          <img src={`/images/${song.img}.jpeg`} />
        </div>
        <div className="content">
          <a className="header">{song.title}</a>

          <div className="description">Duration : {song.duration}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
