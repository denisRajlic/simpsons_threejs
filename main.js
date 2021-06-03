import './style.css';

import * as THREE from 'three';

// Scene is like a container that holds all of our objects, cameras and lights
const scene = new THREE.Scene();

// In order to look at things inside the scene we need a camera
// PerspectiveCamera mimicks what the human eyes see

// The first parameter is field of view
// That's the ammount of the world that is visible based on a full 360 degrees

// Second argument is aspect ratio, which is based off of the users browser window

// The last two arguments are for the view frustum to control which objects are visible relative to the camera itself
// Since we have from 0.1 to a 1000, we can see pretty much everything from the camera lens
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Render the actual graphics to the scene
// It needs to know which dom element to use
// We'll use the canvas with the id of bg
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
// Make ti a full-screen canvas
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// Until now we created a black empty canvas, so we need to add an object to it
// There are 3 basic steps to create an object

// 1. First we need a geometry - a set of vectors that define the object itself
// Three.js has a lot of built-in geometries like box, sphere, ...
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// 2. Material - like wrapping paper for an object
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});

// 3. Mesh - combine geometry with material
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();
