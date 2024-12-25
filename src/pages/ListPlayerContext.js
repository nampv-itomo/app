import { createContext, useState } from "react";

const ListPlayerContext = createContext();

const DataProvider = ({ children }) => {
  const [selectedTrack, setSelectedTrack] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <ListPlayerContext.Provider
      value={{ selectedTrack, isPlaying, isMuted, setSelectedTrack, setIsPlaying, setIsMuted }}
    >
      {children}
    </ListPlayerContext.Provider>
  );
};

export { ListPlayerContext, DataProvider };
