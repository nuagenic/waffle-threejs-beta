import * as THREE from "three";
import { sizes } from "./Utils/sizes.ts";

const canvas: HTMLCanvasElement | null = document.querySelector("canvas");

export const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  canvas: canvas as HTMLCanvasElement,
  antialias: true,
});

renderer.toneMapping = THREE.CineonToneMapping;
renderer.toneMappingExposure = 1.75;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(sizes.pixelRatio);
