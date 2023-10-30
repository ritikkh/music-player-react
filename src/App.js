import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "This is Music1",
      artist: "Artist 1",
      img_src: "./images/im1.jfif",
      src: "./songs/m1.mp3"
    },
    {
      title: "This is Music2",
      artist: "Artist 2",
      img_src: "./images/im1.jfif",
      src: "./songs/m2.mp3"
    },
    {
      title: "This is Music3",
      artist: "Artist 3",
      img_src: "./images/im1.jfif",
      src: "./songs/m3.mp3"
    },
    {
      title: "This is Music4",
      artist: "Artist 4",
      img_src: "./images/im1.jfif",
      src: "./songs/m4.mp3"
    },
    {
      title: "This is Music5",
      artist: "Artist 5",
      img_src: "./images/im1.jfif",
      src: "./songs/m5.mp3"
    },
    {
      title: "This is Music6",
      artist: "Artist 6",
      img_src: "./images/im1.jfif",
      src: "./songs/m6.mp3"
    }
  ])
  const [currentSongIndex,setCurrentSongIndex] = useState(0)
  const [nextSongIndex,setNextSongIndex] = useState(1)
  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex+1>=songs.length){return 0}
      else{return currentSongIndex+1}
    })
  },[currentSongIndex,songs.length])
  return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      />
    </div>
  );
}

export default App;
