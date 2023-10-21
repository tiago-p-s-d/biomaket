import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';



let scene = null;
let camera = null;
let renderer = null;
let cube = null;
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





// Crie um cubo
const geometry2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff33 });
cube = new THREE.Mesh(geometry2, material2);
scene.add(cube);
let y = document.querySelector('.content-box2');

// Redimensione o modelo com base no tamanho do contêiner
resizeModel();

// Adicione um ouvinte de redimensionamento para manter o tamanho correto
window.addEventListener('resize', resizeModel);

// Inicie a animação
animate();
y.style.display = 'none';

 window.createScene2 = function () {
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
    const containerWidth = canvasContainer2.clientWidth;
    const containerHeight = canvasContainer2.clientHeight;

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



