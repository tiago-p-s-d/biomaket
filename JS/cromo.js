import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';



let scene = null;
let camera = null;
let renderer = null;
let cube = null;
let canvasContainer = null; // Mova a declaração para o escopo global
let x = 0;

scene = new THREE.Scene();

// Crie uma câmera
camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 2;

// Crie um renderizador e adicione-o ao DOM
canvasContainer = document.getElementById('canvas-container'); // Defina a variável aqui
renderer = new THREE.WebGLRenderer();
canvasContainer.appendChild(renderer.domElement);





// Crie um cubo
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff33 });
cube = new THREE.Mesh(geometry, material);
scene.add(cube);
let y = document.querySelector('.content-box');

// Redimensione o modelo com base no tamanho do contêiner
resizeModel();

// Adicione um ouvinte de redimensionamento para manter o tamanho correto
window.addEventListener('resize', resizeModel);

// Inicie a animação
animate();
y.style.display = 'none';

 window.createScene = function () {
    // Crie uma cena Three.js

    if (x == 0) {
        showCanvas()

        y.style.display = 'block';
        x++;
    } else {
        hideCanvas();

        y.style.display = 'none';
        x = 0;
    }

}


function hideCanvas() {
    const canvas = document.querySelector('canvas'); // Encontra a tag canvas
    canvas.style.display = 'none'; // Define a propriedade display como 'none'
}

function showCanvas() {
    const canvas = document.querySelector('canvas'); // Encontra a tag canvas
    canvas.style.display = 'block'; // Define a propriedade display de volta para 'block'
}

function resizeModel() {
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;

    renderer.setSize(containerWidth, containerHeight);
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}





// Chame a função para aplicar o tamanho de fonte inicial



