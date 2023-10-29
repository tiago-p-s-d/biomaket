import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";


let scene = null;
let camera = null;
let renderer = null;

let canvasContainer3 = null; // Mova a declaração para o escopo global
let x = 0;

scene = new THREE.Scene();

// Crie uma câmera
camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 2;

// Crie um renderizador e adicione-o ao DOM
canvasContainer3 = document.getElementById('canvas-container3'); // Defina a variável aqui
renderer = new THREE.WebGLRenderer();
canvasContainer3.appendChild(renderer.domElement);





const loader = new OBJLoader();

var obj;
loader.load('../models/Doguinho.obj', function (object){
scene.add(object);
obj = object;
})

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(light)
camera.position.set(10,20,0);
camera.lookAt(new THREE.Vector3(0, 10, 0));

let y = document.querySelector('.content-box3');

// Redimensione o modelo com base no tamanho do contêiner
resizeModel();

// Adicione um ouvinte de redimensionamento para manter o tamanho correto
window.addEventListener('resize', resizeModel);


const controls = new OrbitControls(camera, renderer.domElement);
controls.update();


let contentbox = document.querySelector('.content-box');
let contentbox3 = document.querySelector('.content-box2');


// Inicie a animação
animate();
y.style.display = 'none';

 window.createScene3 = function () {
    // Crie uma cena Three.js

    if (x == 0 && contentbox.style.display == 'none' && contentbox3.style.display == 'none') {
        showCanvas()
        x++;
    } else {
        window.alert('visualize apenas um de cada vez!')
        hideCanvas();
        x = 0;
    }

}

function hideCanvas() {
    y.style.display = 'none';
}

function showCanvas() {
    y.style.display = 'block';
}

function resizeModel() {
    const containerWidth = canvasContainer3.clientWidth;
    const containerHeight = canvasContainer3.clientHeight;

    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Adicione esta linha
    renderer.render(scene, camera);
}
