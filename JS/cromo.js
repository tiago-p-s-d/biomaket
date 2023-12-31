import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

import { OBJLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js";

import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";


let scene = null;
let camera = null;
let renderer = null;

let canvasContainer2 = null; // Mova a declaração para o escopo global
let x = 0;

scene = new THREE.Scene();

// Crie uma câmera
camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 2;

// Crie um renderizador e adicione-o ao DOM
canvasContainer2 = document.getElementById('canvas-container2'); // Defina a variável aqui
renderer = new THREE.WebGLRenderer();
canvasContainer2.appendChild(renderer.domElement);





const loader = new OBJLoader();

var obj;
loader.load('../models/cromo.obj', function (object){
scene.add(object);
obj = object;
})

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(light)
camera.position.set(0,2.5,7.5);
camera.lookAt(new THREE.Vector3(2, 2, 2));

let y = document.querySelector('.content-box2');

// Redimensione o modelo com base no tamanho do contêiner
resizeModel();

// Adicione um ouvinte de redimensionamento para manter o tamanho correto
window.addEventListener('resize', resizeModel);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

let contentbox = document.querySelector('.content-box');
let contentbox3 = document.querySelector('.content-box3');
let verdade = false;


// Inicie a animação
animate();
y.style.display = 'none';

 window.createScene2 = function () {
    if (contentbox.style.display != 'none' || contentbox3.style.display != 'none'){
        verdade = false;
    
    }else{
        verdade = true;
    }
    // Crie uma cena Three.js

    if (x == 0 && verdade == true) {
        showCanvas()
        x++;
    } 
    else if(x == 0 && verdade == false){
        window.alert('um de cada vez!')
    }else {
        
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
    const containerWidth = canvasContainer2.clientWidth;
    const containerHeight = canvasContainer2.clientHeight;

    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Adicione esta linha
    renderer.render(scene, camera);
}