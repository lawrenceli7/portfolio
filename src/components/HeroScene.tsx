import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.IcosahedronGeometry(2.1, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      roughness: 0.35,
      metalness: 0.2,
      transparent: true,
      opacity: 0.82,
      emissive: 0x042f2e,
      emissiveIntensity: 0.35,
    });
    const core = new THREE.Mesh(geometry, material);
    group.add(core);

    const wireframe = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: 0xc4b5fd,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
      })
    );
    wireframe.scale.setScalar(1.018);
    group.add(wireframe);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 3.2 + Math.random() * 1.7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.035,
        transparent: true,
        opacity: 0.72,
      })
    );
    group.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 1.4));
    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);
    const accentLight = new THREE.PointLight(0xa78bfa, 5, 12);
    accentLight.position.set(-3, -2, 4);
    scene.add(accentLight);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    let frameId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.12;
      group.rotation.x = Math.sin(elapsed * 0.35) * 0.12;
      core.rotation.z = elapsed * 0.06;
      wireframe.rotation.y = -elapsed * 0.08;
      particles.rotation.y = elapsed * 0.05;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      wireframe.geometry.dispose();
      (wireframe.material as THREE.Material).dispose();
      particleGeometry.dispose();
      (particles.material as THREE.Material).dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};

export default HeroScene;
