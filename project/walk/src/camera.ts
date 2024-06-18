import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { sizes } from "./Utils/sizes.ts";

const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

export const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  35,
  sizes.width / sizes.height,
  0.1,
  100,
);

camera.position.set(6, 4, 8);

export const controls: OrbitControls = new OrbitControls(
  camera,
  canvas as HTMLCanvasElement,
);
