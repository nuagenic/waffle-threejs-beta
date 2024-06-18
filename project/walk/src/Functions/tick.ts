import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import update from "./update.ts";
import resize from "./resize.ts";
import { animation } from "../World/setFoxWalk.ts";

export default function tick(
  controls: OrbitControls,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  sizes: { width: number; height: number; pixelRatio: number },
) {
  update(controls, renderer, scene, camera);
  resize(camera, renderer, sizes);

  const delta = clock.getDelta();
  if (animation.mixer) animation.mixer.update(delta);

  window.requestAnimationFrame(() =>
    tick(controls, renderer, scene, camera, sizes),
  );
}

const clock = new THREE.Clock();
