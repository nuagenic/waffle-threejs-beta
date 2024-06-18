import * as THREE from "three";
import sources from "../sources.ts";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { setFoxWalk, updateAnimation } from "./setFoxWalk.ts";

export default function loadResources() {
  const items = {};
  const toLoad = sources.length;
  let loaded = 0;

  return new Promise((resolve, reject) => {
    const gltfLoader = new GLTFLoader();
    const textureLoader = new THREE.TextureLoader();

    sources.forEach((source) => {
      (source.type === "gltfModel" ? gltfLoader : textureLoader).load(
        source.path,
        (file) => {
          items[source.name] = file;
          if (source.name === "foxModel") {
            setFoxWalk(file);

            const keysPressed = {};

            document.addEventListener("keydown", (event) => {
              keysPressed[event.key] = true;
              updateAnimation(file, keysPressed);
              console.log(keysPressed);
            });

            document.addEventListener("keyup", (event) => {
              keysPressed[event.key] = false;
              updateAnimation(file, keysPressed);
              console.log(keysPressed);
            });
          }
          loaded++;
          if (loaded === toLoad) {
            console.log("Resources loaded:", items);
            resolve(items);
          }
        },
        undefined,
        (error) => {
          reject(error);
        },
      );
    });
  });
}
