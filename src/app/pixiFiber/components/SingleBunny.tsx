import * as React from "react";
import { Sprite } from "react-pixi-fiber/index.js";
import * as PIXI from "pixi.js";

const singleBunny = "https://i.imgur.com/IaUrttj.png";
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny({ ...props }) {
  return (
    <Sprite
      anchor={centerAnchor}
      texture={PIXI.Texture.from(singleBunny)}
      {...props}
    />
  );
}

export default Bunny;
