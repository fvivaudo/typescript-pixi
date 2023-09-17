import * as PIXI from 'pixi.js';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { Sprite } from 'react-pixi-fiber/index.js';

import bunnies from '../assets/bunnies.png';
import {TilingSprite, Stage} from '@pixi/react';
// import { Stage } from 'react-pixi-fiber/index.js';

const width = 800;
const height = 600;
const options = {
  backgroundColor: 0x56789a,
  resolution: window.devicePixelRatio,
  width: width,
  height: height
};
const style = {
  width: width,
  height: height
};

export const TilingExample = () => (
    <Stage width={width} height={height}>
      <TilingSprite
          image={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/p2.jpeg'}
          width={width}
          height={height}
          tilePosition={{ x: 100, y: 150 }}
          tileScale={{ x: 1, y: 1 }}
      />
    </Stage>
);

