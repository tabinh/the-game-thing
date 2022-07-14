import React, { useState, useEffect } from 'react'
import Player from './Player'

export default function CharLayer({_gridW, _gridH, _tileSize, _keyDown}) {
  const tileSize = _tileSize;
  const mapSize = [_gridW * tileSize, _gridH * tileSize]; 

  const [playerLoc, setPlayerLoc] = useState([0,0]);

  const movePlayer = (_move) => {
    switch(_move) {
      case 37:
        if(playerLoc[1] > 0) {
          setPlayerLoc([playerLoc[0],playerLoc[1] - 1]);
        }
      break;
      case 38:
        if(playerLoc[0] > 0) {
          setPlayerLoc([playerLoc[0] - 1,playerLoc[1]]);
        }
      break;
      case 39:
        if(playerLoc[1] < 500) {
          setPlayerLoc([playerLoc[0],playerLoc[1] + 1]);
        }
      break;
      case 40:
        if(playerLoc[0] < 500) {
          setPlayerLoc([playerLoc[0] + 1,playerLoc[1]]);
        }
      break;
      case "":
      break;
      default:
    }
  }
  

  useEffect(() => {
    movePlayer(_keyDown)

  }, [_keyDown]);

  return (
    <div style={{position: 'absolute', top: '0px', zIndex: '2'}}>
      <Player _tileSize={tileSize} _moveChar={playerLoc}>  </Player>
    </div>
  )  
}
