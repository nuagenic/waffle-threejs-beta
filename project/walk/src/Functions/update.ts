import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function update(
  controls: OrbitControls,
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
) {
  // Update Controls
  controls.update();

  // Update Renderer
  renderer.render(scene, camera);
}
