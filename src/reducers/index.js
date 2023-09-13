import { combineReducers } from "redux";
const songReducer = () => {
  return [
    { title: "All Star", duration: "4:15" },
    { title: "Blank Space", duration: "6:05" },
    { title: "We Go So Far", duration: "3:59" },
    { title: "Save the Tears", duration: "4:39" },
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
