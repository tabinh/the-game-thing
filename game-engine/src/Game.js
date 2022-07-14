import React, { useState } from 'react'
import TileLayer from './map/TileLayer';
import BgObjLayer from './map/BgObgLayer';
import CharLayer from './char/CharLayer';

import { v4 as uuidv4 } from 'uuid';


export default function Game() {
  const mapSize = [50,50];
  const tileSize = 50;

  const [keyDown, setKeyDown] = useState();

  const [tileLayer, setTileLayer] = useState(<TileLayer key={uuidv4()} _gridW={mapSize[0]} _gridH={mapSize[1]} _tileSize={tileSize}/>);
  const [bgObgLayer, setBGObgLayer] = useState(<BgObjLayer key={uuidv4()} _gridW={mapSize[0]} _gridH={mapSize[1]} _tileSize={tileSize}/>);


  const keyDownHandler = (_key) => {
    setKeyDown(_key);

  }

  return (
    <div style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'auto'}} tabIndex={0} onKeyDown={(e) => keyDownHandler(e.keyCode)} onKeyUp={(e) => keyDownHandler("")}>
      <CharLayer _gridW={mapSize[0]} _gridH={mapSize[1]} _tileSize={tileSize} _keyDown={keyDown}/>
      {bgObgLayer}
      {tileLayer}
    </div>
  )
}
