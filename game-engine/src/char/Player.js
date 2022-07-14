import React, { useState, useEffect } from 'react'
import { Image } from 'react-bootstrap';

export default function Player({_tileSize, _moveChar}) {
  const [playerX, setPlayerX] = useState([]);
  const [playerY, setPlayerY] = useState([]);

  useEffect(() => {
    setPlayerX(_moveChar[1] * _tileSize);
    setPlayerY(_moveChar[0] * _tileSize);
  }, [_moveChar]);

  return (
    <Image src={window.location.origin + `/assets/player/player-0.png`} style={{position: 'absolute', width:`${_tileSize}px`, height:`${_tileSize}px`, left:`${playerX}px`, top:`${playerY}px`, transition: 'left 0.2s, top 0.2s'}}></Image>
  )
}
