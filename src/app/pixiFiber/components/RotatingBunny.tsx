import PropTypes from 'prop-types';

import React, { useCallback, useState, useContext } from 'react';
import {AppContext, Sprite, usePixiTicker} from "react-pixi-fiber/index.js";
import Bunny from "./Bunny";


type BunnyProps = Sprite & {
    step: number,
    textureIndex: number
}

// http://pixijs.io/examples/#/basics/basic.js
export const RotatingBunny = ({step, ...props }:BunnyProps) => {
  const [rotation, setRotation] = useState(0);

  const animate = useCallback(
      (delta:number) => {
        // just for fun, let's rotate mr rabbit a little
        // delta is 1 if running at 100% performance
        // creates frame-independent transformation
        setRotation((rotation) => rotation + step * delta);
      },
      [step]
  );

  usePixiTicker(animate);

  return <Bunny {...props} rotation={rotation} />;
}

RotatingBunny.defaultProps = {
  step: 0.1,
};



// import PropTypes from 'prop-types';
// import React, { useCallback, useState } from 'react';
// import { usePixiTicker, withApp } from 'react-pixi-fiber/index.js';
//
// import Bunny from './Bunny';
//
// // http://pixijs.io/examples/#/basics/basic.js
// // we don't want to pass app prop further down, it will trigger dev warning
// export const RotatingBunny = withApp(({ app, step, ...passedProps }) => {
//   const [rotation, setRotation] = useState(0);
//
//   const animate = useCallback(
//     (delta) => {
//       // just for fun, let's rotate mr rabbit a little
//       // delta is 1 if running at 100% performance
//       // creates frame-independent transformation
//       setRotation((rotation) => rotation + step * delta);
//     },
//     [step]
//   );
//
//   usePixiTicker(animate);
//
//   return <Bunny {...passedProps} rotation={rotation} />;
// });
//
// RotatingBunny.propTypes = {
//   app: PropTypes.object.isRequired,
//   step: PropTypes.number,
// };
// RotatingBunny.defaultProps = {
//   step: 0.1,
// };
