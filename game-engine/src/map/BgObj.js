import React, { useState } from 'react'
import { Image } from 'react-bootstrap';
import { RandRender } from '../classes/RandRender.js';

export default function BgObj({_bgOBJName, _bgOBJWidth, _tileSize, _bgOBJProb, _bgOBJCol, _bgOBJPos}) {
  const bgOBJRand = new RandRender(_bgOBJName, _bgOBJProb);

  const bgOBJIMG = _bgOBJName;
  const tileSize = _tileSize;
  const bgOBJWidth = _bgOBJWidth;
  const bgOBJID = bgOBJRand.getRand();

  const [x, makeX] = useState(_bgOBJPos[0]);
  const [y, makeY] = useState(_bgOBJPos[1]);

  const setX = (_x) => makeX(_x);
  const setY = (_y) => makeY(_y);

  return (
    <Image fluid src={window.location.origin + `/assets/bg-obj/${bgOBJIMG}-${bgOBJID}.png`} 
      style={{
        position: 'absolute',
        width:`calc(${bgOBJWidth}px * ${tileSize}`, 
        height:'auto', 
        left:`calc(${tileSize} * ${x}px)`, 
        top: `calc(${tileSize} * ${y}px)`
      }}/>
  )
}
