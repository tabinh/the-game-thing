import React, { useState } from 'react'
import { Image } from 'react-bootstrap';
import { RandRender } from '../classes/RandRender.js';

export default function Tile({_tileName, _tileSize, _tileProb}) {
  const tileRand = new RandRender(_tileName, _tileProb);

  const tileIMG = _tileName;
  const tileIMGSize = _tileSize;
  const tileID = tileRand.getRand();
  

  return (
    <Image fluid src={window.location.origin + `/assets/tiles/${tileIMG}-${tileID}.png`} style={{width:`${tileIMGSize}px`, height:`${tileIMGSize}px`}}></Image>
  )
}