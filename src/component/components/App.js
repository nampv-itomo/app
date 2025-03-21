import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Player from "./Player";
import SongList from "./SongList";
import songs from "../data/songs.json";
import SongDetail from "./SongDetail";
import SongListHeader from "./SongListHeader";

for (let index = 0; index < songs.length; index++) {
  const song = songs[index];
  song.id = index;
}

const SongApp = () => {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      {/* <SongListHeader /> */}
      {/* <SongDetail /> */}
      <SongList songs={songs} />
      <Player />
    </React.Fragment>
  );
};
export default SongApp;
