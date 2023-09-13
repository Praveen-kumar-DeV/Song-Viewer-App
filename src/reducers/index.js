import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "King", duration: "3:35", img: "king" },
    { title: "Blank Space", duration: "6:05", img: "blank" },
    { title: "Chasing Highs", duration: "3:15", img: "Chasing" },
    { title: "Save the Tears", duration: "4:39", img: "save" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
