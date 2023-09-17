import React, {ReactNode, useCallback, useEffect, useState} from 'react';

import bunnies from '../assets/bunnies.png';
import {PixiComponent, TilingSprite} from '@pixi/react';
import {useApp, Stage} from '@pixi/react'
import {Texture, Graphics as GraphicsType} from "pixi.js";
// import { Stage } from 'react-pixi-fiber/index.js';
import {Container, Graphics, Sprite} from '@pixi/react-animated';
import {Transition, Spring, easings} from "@react-spring/core";
import RingPNG from '@/app/pixiFiber/assets/ring.png'
import {Graphics as PixiGraphics} from '@pixi/graphics'

const width = 768;
const height = 768;
const GRID_SIZE = 24;
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


interface ringProps {
    x: number;
    y: number;
    borderWidth: number;
    radius: number;
    alpha: number;
    color: number;
}

const Box = (props: { x: number, y: number }) => (

    <Sprite
        texture={Texture.WHITE}
        tint={0xaddb67}
        anchor={0.5}
        {...props}
    />
);

// const HoverEffect = () => {
//     const app = useApp()
//
//     const [pos, setPos] = useState({x:app.screen.width / 2, y:app.screen.height / 2});
//
//     app.stage.interactive = true;
//     app.stage.hitArea = app.screen;
//
//
//     app.stage.addEventListener('onmousemove ', (e) => {
//         console.log(e)
//         // setPos({x: e.global.x, y: e.global.y})
//     });
//
//
//     return (<Spring to={pos} config={{ mass:8, tension: 400, friction: 100 }}>
//         {(pos:any) => (
//             <Sprite image={RingPNG} anchor={0.5} {...pos} />
//         )}
//     </Spring>)
// }


const MovementPlayer = () => {
    const app = useApp()

    const [pos, setPos] = useState({x: app.screen.width / 2, y: app.screen.height / 2});
    const [posBox, setPosBox] = useState({x: app.screen.width / 2, y: app.screen.height / 2});
    const [hoverEffect, setHoverEffect] = useState(false);

    const widthUnit = width / GRID_SIZE   // pixel width of grid column
    const heightUnit = height / GRID_SIZE // pixel height of grid line

    app.stage.interactive = true;
    app.stage.hitArea = app.screen;


    // On click, trigger movement
    app.stage.addEventListener('pointertap', (e) => {
        setPos({
            x: Math.floor((e.global.x / widthUnit)) * widthUnit + widthUnit / 2,
            y: Math.floor((e.global.y / heightUnit)) * heightUnit + widthUnit / 2
        })
    });

    // On move, update cursor position
    app.stage.addEventListener('pointermove', (e) => {
        setPosBox({
            x: Math.floor((e.global.x / widthUnit)) * widthUnit + widthUnit / 2,
            y: Math.floor((e.global.y / heightUnit)) * heightUnit + widthUnit / 2
        })

        // console.log('x ' + Math.ceil(e.global.x / widthUnit))
        // console.log('y ' + Math.ceil(e.global.y / heightUnit))
        // setPos({x: e.global.x, y: e.global.y})
    });

    // Leave the canvas, lose the effect
    app.stage.addEventListener('pointerleave', (e) => {
        setHoverEffect(false)
    });

    app.stage.addEventListener('pointerenter', (e) => {
        setHoverEffect(true)
    });

    return (<>
        <Spring from={null} to={pos} config={{mass: 8, tension: 400, friction: 100}}>
        {(pos: any) => (
            <Sprite width={widthUnit} height={heightUnit} image={RingPNG.src} anchor={0.5} {...pos} />
        )}
        </Spring>
        { hoverEffect ? <Box {...posBox}/> : null }
    </>)
}


export const MovementExample = () => {

    return (
        <Stage width={width} height={height} options={{backgroundColor: 0x56789a}}>
            {/*<Box {...transform} />*/}
            <TilingSprite
                image={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/p2.jpeg'}
                width={width}
                height={height}
                tilePosition={{x: 64, y: 128}}
                tileScale={{x: 0.25, y: 0.25}}
            />
            <MovementPlayer/>
        </Stage>
    )
};

