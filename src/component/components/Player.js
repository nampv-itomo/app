import "./Player.css";
import { useEffect, useRef, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { forwardsSvg, backwardsSvg, shuffleSvg, playSvg, pauseSvg } from "../svg";
import { setPlayerState, selectSongById } from "../actions";
import Progress from "./ProgressBar";
import SongTime from "./SongTime";

const Player = ({ selectedSongId, defaultSong, playerState, songs, selectSongById, volume }) => {
  const dispatch = useDispatch();
  const [shuffled, setShuffled] = useState(false);
  const audioRef = useRef();
  const intervalRef = useRef(null);
  let clicked = false;

  // const spaceDownFunc = (event) => {
  //   if (event.keyCode === 32 && !clicked && audioRef.current) {
  //     clicked = true;
  //     document.getElementsByClassName("main-control")[0].click();
  //   }
  // };

  // const spaceUpFunc = (event) => {
  //   if (event.keyCode === 32 && clicked) {
  //     clicked = false;
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("keydown", spaceDownFunc);
  //   document.addEventListener("keyup", spaceUpFunc);
  // }, []);

  if (selectedSongId < 0 || selectedSongId > songs.length - 1) {
    selectSongById(0);
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 500;
    }
  }, [volume]);

  const onMusicPlay = (e) => {
    e.preventDefault();
    if (!playerState) {
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
      audioRef.current.play();
    } else {
      dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
      audioRef.current.pause();
    }
  };

  const onBackwardClick = () => {
    if (selectedSongId > 0) {
      selectSongById(selectedSongId - 1);
    }
  };

  const onForwardClick = () => {
    if (selectedSongId < songs.length - 1) {
      selectSongById(selectedSongId + 1);
    }
  };

  const timerWrapperRef = useRef(null);

  const onTimeSeek = (e) => {
    if (timerWrapperRef.current) {
      const rect = timerWrapperRef.current.getBoundingClientRect();
      const skipToPercent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = audioRef.current.duration * skipToPercent;
      dispatch({
        type: "SET_CURRENT_LOCATION",
        payload: audioRef.current.currentTime,
      });
    }
  };

  console.log("selectedSongId", selectedSongId);
  console.log("playerState", playerState);

  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 }); // Đặt trạng thái ngừng phát
    const audio = audioRef.current;
    audio.oncanplaythrough = () => {
      console.log("Audio is ready to play, but playback is paused.");
      if (selectSongById !== null && playerState === 1) {
        audio.play();
      }
    };
  }, [selectedSongId, dispatch]);

  // useEffect(() => {
  //   dispatch({ type: "PLAYER_STATE_SELECTED", payload: 1 });
  //   const audio = audioRef.current;
  //   audio.oncanplaythrough = (event) => {
  //     var playedPromise = audio.play();
  //     if (playedPromise) {
  //       playedPromise
  //         .catch((e) => {
  //           console.log(e);
  //           if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
  //             console.log(e.name);
  //           }
  //         })
  //         .then(() => {
  //           console.log("playing sound !!!");
  //         });
  //     }
  //   };
  //   // eslint-disable-next-line
  // }, [selectedSongId, dispatch]);

  useEffect(() => {
    dispatch({ type: "PLAYER_STATE_SELECTED", payload: 0 });
    audioRef.current.pause();
  }, [dispatch]);

  return (
    <div id="player">
      <div className="music-timer-wrapper" ref={timerWrapperRef} onClick={onTimeSeek}>
        <SongTime />
      </div>

      <div
        className="control"
        id={shuffled ? `active` : null}
        onClick={() => {
          setShuffled(!shuffled);
        }}
      >
        {shuffleSvg}
      </div>
      <div className="control" onClick={onBackwardClick}>
        {backwardsSvg}
      </div>
      <div className="main-control control" onClick={onMusicPlay}>
        {playerState ? playSvg : pauseSvg}
      </div>
      <div className="control" onClick={onForwardClick}>
        {forwardsSvg}
      </div>
      <Progress />

      <audio
        id="main-track"
        controls
        src={songs[selectedSongId].url}
        preload="true"
        onEnded={() => {
          selectSongById(shuffled ? Math.round(Math.random() * songs.length) : selectedSongId + 1);
        }}
        onLoadedMetadata={() => {
          dispatch({
            type: "SET_DURATION",
            payload: audioRef.current.duration,
          });

          if (audioRef.current) {
            intervalRef.current = setInterval(() => {
              if (audioRef.current) {
                dispatch({
                  type: "SET_CURRENT_LOCATION",
                  payload: audioRef.current.currentTime,
                });
              }
            }, 1000);

            return () => {
              clearInterval(intervalRef.current);
              console.log("Interval cleared");
            };
          }
        }}
        onError={() => {
          alert("Error loading audio file.");
        }}
        ref={audioRef}
        hidden
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    defaultSong: state.songs[0],
    playerState: state.playerState,
    songs: state.songs,
    volume: state.volume,
  };
};

export default connect(mapStateToProps, { setPlayerState, selectSongById })(Player);
