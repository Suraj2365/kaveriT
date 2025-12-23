export function initHero() {
    const container = document.getElementById('hero-container');
    container.innerHTML = `
        <div id="canvas-container"></div>
        <div class="z-10 max-w-2xl pt-32 px-6 md:px-20 relative h-full flex flex-col justify-center pointer-events-none">
            <h2 class="text-[var(--primary)] font-bold tracking-widest uppercase mb-4 text-sm">Future Living</h2>
            <h1 class="text-6xl md:text-8xl font-bold leading-tight mb-6 text-white">
                Redefine <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Excellence.</span>
            </h1>
            <div class="pointer-events-auto">
                <button onclick="document.getElementById('product-container').scrollIntoView({behavior:'smooth'})" class="bg-[var(--primary)] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Start Order
                </button>
            </div>
        </div>
    `;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.002);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(2, 0, 5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const geo = new THREE.CapsuleGeometry(1.2, 2.5, 4, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.8 });
    const body = new THREE.Mesh(geo, mat);
    scene.add(body);
    
    // Get color from CSS variable for the ring
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColor = rootStyles.getPropertyValue('--primary').trim(); 
    
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.05, 16, 100), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 }));
    ring.rotation.x = Math.PI/2;
    scene.add(ring);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    const animate = () => {
        requestAnimationFrame(animate);
        body.rotation.y += 0.005;
        renderer.render(scene, camera);
    };
    animate();
}