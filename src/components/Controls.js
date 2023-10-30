import { faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Controls = (props) => {
  return (
    <div className='control'>
        <button className='control__SkipBtn' onClick={()=>{props.skipSong(false)}}>
            <FontAwesomeIcon icon={faBackward}/>
        </button>
        <button className='control__PlayButton' onClick={()=>{props.setIsPlaying(!props.isPlaying)}}>
            <FontAwesomeIcon icon={props.isPlaying?faPause:faPlay}/>
        </button>
        <button className='control__SkipBtn' onClick={()=>{props.skipSong(true)}}>
            <FontAwesomeIcon icon={faForward}/>
        </button>
    </div>
  )
}

export default Controls