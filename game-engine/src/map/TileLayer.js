import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

import Tile from './Tile';


export default function TileLayer({_gridW, _gridH, _tileSize}) {
  const tileSize = _tileSize;
  const mapSize = [_gridW * tileSize, _gridH * tileSize]; 
  let map = Array(_gridH).fill(Array(_gridW).fill(null));

  //TEMP CODE generate grass everywhere.. Replace with code that reads map data from pre-existing source
  const buildMap = () => {
    let newMap = [];

    for(let j = 0; j < _gridH; j++) {
      newMap[j] = [];
      for(let i = 0; i < _gridW; i++) {
        newMap[j][i] = <Tile id={'tile-' + j + '-' + i} _tileName={'grass'} _tileSize={tileSize} _tileProb={[0.9, 0.025, 0.025, 0.025, 0.025]}/>;
      }
    }

    map = newMap;
  }

  buildMap();

  return (
    <div style={{width: `${mapSize[0]}px`, height:`${mapSize[1]}px`, position: 'absolute', top: '0px', zIndex: '0'}}>    
      <Container fluid key={uuidv4()}>
    
        {/* Rows with gridH */}
        {Array.from({ length:_gridH }).map((_, idx) => (
          <Row key={uuidv4()}>

            {/* Cols with gridW */}
            {Array.from({ length:_gridW }).map((_, jdx) => (
              <Col key={uuidv4()} className='p-0 m-0 w-50'>
                {map[idx][jdx]}
              </Col>
            ))}


          </Row>
        ))}

      </Container>
    </div>
  )
}


