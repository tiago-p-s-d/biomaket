/*import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

let canvasContainer4 = null;
canvasContainer4 = document.getElementById('canvas-container4');

renderer.setSize(window.innerWidth, window.innerHeight);
canvasContainer4.appendChild(renderer.domElement);

const loader = new OBJLoader();

var obj;
loader.load('../models/cat.obj', function (object){
scene.add(object);
obj = object;
})


let y = document.querySelector('.content-box4');
let x = 0;
y.style.display = 'block';

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);

scene.add(light)
camera.position.set(0,20,60);
camera.lookAt(new THREE.Vector3(0, 10, 0));

function animate(){
  requestAnimationFrame(animate);
  obj.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();


*/