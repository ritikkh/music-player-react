import React, { useEffect, useRef, useState } from 'react'
import Details from './Details'
import Controls from './Controls'

const Player = (props) => {
    const audioEl = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false)

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play()
        }
        else{
            audioEl.current.pause()

        }
    },[isPlaying,props.currentSongIndex])

    const skipSong=(forwards=true)=>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                if(props.currentSongIndex+1>=props.songs.length){return 0;}
                else{return props.currentSongIndex+1}
            })
        }
        else{
            props.setCurrentSongIndex(()=>{
                if(props.currentSongIndex-1<0){return props.songs.length-1;}
                else{return props.currentSongIndex-1}
            })
        }
    }
    console.log(props.songs[props.currentSongIndex],props.currentSongIndex)
  return (
    <div className='player'>
        <h4>Playing Now</h4>
        <Details songs={props.songs[props.currentSongIndex]}/>
        <Controls 
         isPlaying={isPlaying}
         setIsPlaying={setIsPlaying}
         skipSong={skipSong}
        />
        <audio className='player__audio' src={props.songs[props.currentSongIndex].src} ref={audioEl} controls></audio>
        <p>
            Next Up: {" "}
            <span>{props.songs[props.nextSongIndex].title} by {" "}
            {props.songs[props.nextSongIndex].artist}
            </span>
        </p>
    </div>
  )
}

export default Player