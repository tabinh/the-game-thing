import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import BgObj from './BgObj';

export default function BgObgLayer({_gridW, _gridH, _tileSize}) {
  const tileSize = _tileSize;
  const mapSize = [_gridW * tileSize, _gridH * tileSize]; 
  let bgOBJArray = []; 
  let tempArr = [];

  const placeItem = (_bgOBGName, _bgOBJWidth, _x, _y, _colX, _colY) => {
    bgOBJArray.push(<BgObj key={uuidv4()} _bgOBJName={_bgOBGName} _bgOBJWidth={_bgOBJWidth} _tileSize={tileSize} _bgOBJCol={[_colX, _colY]} _bgOBJProb={[0.5, 0.5]} _bgOBJPos={[_x, _y]}/>)
  }

  for(let i = 0; i < 10; i++){
    let randX = Math.floor(Math.random()*_gridW);
    let randY = Math.floor(Math.random()*_gridH);

    bgOBJArray.push(<BgObj key={uuidv4()} _bgOBJName={'pool'} _bgOBJWidth={4} _tileSize={tileSize} _bgOBJCol={[4, 4]} _bgOBJProb={[0.5, 0.5]} _bgOBJPos={[randX, randY]}/>)
  }


  //TEMP CODE GENERATE RANDOM TREES
  for(let i = 0; i < 40; i++) {
    let randX = Math.floor(Math.random()*_gridW);
    let randY = Math.floor(Math.random()*_gridH);

    tempArr.push([randX, randY]);

  }

  tempArr.sort((a, b) => {
    return a[1] - b[1];
  });  

  for(const i in tempArr) {
    console.log(tempArr[i])


    placeItem('tree', 1, tempArr[i][0], tempArr[i][1], 1, 2);
  }



  return (
    <div style={{width: `${mapSize[0]}px`, height:`${mapSize[1]}px`, position: 'absolute', top: '0px', zIndex: '1'}}>
      {Array.from({ length:bgOBJArray.length }).map((_, idx) => (

        [bgOBJArray[idx]]
      ))}
    </div>
  )

  
}
