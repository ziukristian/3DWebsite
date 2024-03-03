import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(0);
camera.position.setX(100);
camera.position.setY(0);

//Light
const light = new THREE.AmbientLight(0xffffff, 3);
light.position.set(1, 1, 1).normalize();
scene.add(light);

//Geometries
const cube = new THREE.Mesh(new THREE.BoxGeometry(15, 15, 15), new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
//const cube2 = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));
//const cube3 = new THREE.Mesh(new THREE.BoxGeometry(25, 25, 25), new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }));

cube.position.set(0, 0, 0);
// cube2.position.set(25, 35, 0);
// cube3.position.set(12, 90, 0);

camera.lookAt(cube.position);

scene.add(cube);
// scene.add(cube2);
// scene.add(cube3);

//Renderer
var renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

//Camera Controls
var controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
// controls.autoRotateSpeed = [10];

function animate() {
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    // cube.rotation.y += 0.005;
    // cube.rotation.z += 0.005;

    // cube2.rotation.x += 0.003;
    // cube2.rotation.z += 0.003;

    // cube3.rotation.x += 0.001;
    // cube3.rotation.z += 0.001;
    // cube3.rotation.z += 0.001;

    // controls.update();
}
animate();
