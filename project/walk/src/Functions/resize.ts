import * as THREE from "three";

export default function resize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  sizes: { width: number; height: number; pixelRatio: number },
) {
  // Resize Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Resize Renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(sizes.pixelRatio);
}
