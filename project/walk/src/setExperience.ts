import * as THREE from "three";
import tick from "./Functions/tick.ts";
import { camera, controls } from "./camera.ts";
import { renderer } from "./renderer.ts";
import { scene } from "./scene.ts";
import { sizes } from "./Utils/sizes.ts";
import { sunLight } from "./World/environment.ts";
import loadResources from "./World/loadResources.ts";
import loadFloor from "./World/loadFloor.ts";

export default async function SetExperience() {
  try {
    const items = await loadResources();
    const fox = items.foxModel.scene;
    fox.scale.set(0.02, 0.02, 0.02);
    console.log(items);
    console.log(items.foxModel);
    const mesh = loadFloor(items.grassColorTexture, items.grassNormalTexture);

    scene.add(sunLight);
    scene.add(mesh);
    scene.add(camera);
    scene.add(fox);
    console.log(scene.children);

    tick(controls, renderer, scene, camera, sizes);
  } catch (error) {
    console.error("Error loading resources:", error);
  }
}
