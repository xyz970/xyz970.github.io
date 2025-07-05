import * as THREE from 'three';
import {LineMaterial} from 'three/addons/lines/LineMaterial.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineGeometry  } from 'three/addons/lines/LineGeometry.js';

let scene, camera, renderer, line; // 'sphereMesh' declaration removed
let lineLength = 0; // Total number of vertices in the line
let curvedPoints = []; // To store the generated points for the line

let lineMaterial; 

function init() {
    // 1. Scene
    scene = new THREE.Scene();

    // 2. Camera (Orthographic for 2D-like view)
    camera = new THREE.OrthographicCamera(
        window.innerWidth / -2,  // left
        window.innerWidth / 2,   // right
        window.innerHeight / 2,  // top
        window.innerHeight / -2, // bottom
        1,                       // near
        1000                     // far
    );
    camera.position.z = 10; // Position camera back to view scene

    // 3. Renderer
    const canvas = document.getElementById('canvas');
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 4. Define Control Points for the Curved Line
    const controlPoints = [];
    
    // Start at middle-left: X is negative (left), Y is 0 (center vertical)
    controlPoints.push(new THREE.Vector3(-window.innerWidth / 2 , 50, 0));

    // Define more control points to shape your desired curve.
    // controlPoints.push(new THREE.Vector3(-100, -100, 0)); // Curves down
    controlPoints.push(new THREE.Vector3(100, 100, 0)); // Curves down
    controlPoints.push(new THREE.Vector3(150, -300, 0)); 
    // controlPoints.push(new THREE.Vector3(200, -100, 0)); 
    controlPoints.push(new THREE.Vector3(300, -100, 0));  // Curves up slightly
    controlPoints.push(new THREE.Vector3(window.innerWidth / 2, 200, 0)); // Ends near top-right (example)

    // Create a CatmullRomCurve3 passing through the control points
    const curve = new THREE.CatmullRomCurve3(controlPoints);

    // Get a large number of points along this smooth curve to form the line geometry
    const numberOfCurveSegments = 500;
    curvedPoints = curve.getPoints(numberOfCurveSegments); // Store in global variable
    lineLength = curvedPoints.length; 

    // Create LineGeometry for Line2
    const positions = [];
    for (let i = 0; i < curvedPoints.length; i++) {
        positions.push(curvedPoints[i].x, curvedPoints[i].y, curvedPoints[i].z);
    }
    const lineGeometry = new LineGeometry();
    lineGeometry.setPositions(positions);

    // Create LineMaterial for Line2
    lineMaterial = new LineMaterial({ 
        color: 0xff6900, // Blue color
        linewidth: 60,    // Line width in pixels (this will now work consistently)
        resolution: new THREE.Vector2(window.innerWidth, window.innerHeight), // REQUIRED for LineMaterial
        // linecap: 'round', // Optional: for rounded ends of the line itself
    });
    
    // Create the Line2 Object
    line = new Line2(lineGeometry, lineMaterial);
    scene.add(line);
    line.geometry.attributes.position.needsUpdate = true
    // Initial state: hide the line segment (draw nothing)
    // line.geometry.setDrawRange(0, 0);
    // line.geometry.setDrawRange(0, 0);
    line.geometry.instanceCount = 0;


    // --- REMOVED: Sphere (Circle) creation and addition to scene ---

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);

    // Handle scroll
    window.addEventListener('scroll', onScroll, false);
}

function onWindowResize() {
    camera.left = window.innerWidth / -2;
    camera.right = window.innerWidth / 2;
    camera.top = window.innerHeight / 2;
    camera.bottom = window.innerHeight / -2;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    // Update resolution for LineMaterial on resize
    lineMaterial.resolution.set(window.innerWidth, window.innerHeight); 
}

function onScroll() {
    // Calculate scroll percentage
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) /
                             (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    // console.log(scrollPercentage);
    // Calculate how many vertices should be drawn
    let drawCount = Math.ceil(lineLength * scrollPercentage);

    // Use Line2's setDrawRange
    // line.geometry.setDrawRange(0, drawCount); 
    // line.geometry.maxInstancedCount = drawCount
    line.geometry.instanceCount = drawCount;
    // --- REMOVED: Traveling Sphere update logic ---

    // Re-render the scene
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    // renderer.render(scene, camera); // Called in onScroll, not continuously needed for this specific effect
}

// Initialize and start animation
init();
animate();

// Initial render call to show line if already scrolled
onScroll();