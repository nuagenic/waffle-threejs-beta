import * as THREE from "three";

export default function loadFloor(
  colorTexture: THREE.Texture,
  normalTexture: THREE.Texture,
) {
  // Set Geometry
  const geometry = new THREE.CircleGeometry(5, 64);

  // Set Textures
  const textures = {
    color: colorTexture,
    normal: normalTexture,
  };
  textures.color.colorSpace = THREE.SRGBColorSpace;
  textures.color.repeat.set(1.5, 1.5);
  textures.color.wrapS = THREE.RepeatWrapping;
  textures.color.wrapT = THREE.RepeatWrapping;

  textures.normal.repeat.set(1.5, 1.5);
  textures.normal.wrapS = THREE.RepeatWrapping;
  textures.normal.wrapT = THREE.RepeatWrapping;

  // Set Material
  const material = new THREE.MeshStandardMaterial({
    map: textures.color,
    normalMap: textures.normal,
  });

  // Set Mesh
  const mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;

  return mesh;
}
