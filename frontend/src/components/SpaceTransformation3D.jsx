import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// Empty Warehouse Component
function EmptyWarehouse({ opacity }) {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          transparent 
          opacity={opacity}
        />
      </mesh>
      
      {/* Walls */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          transparent 
          opacity={opacity}
        />
      </mesh>
      
      <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          transparent 
          opacity={opacity}
        />
      </mesh>
      
      <mesh position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 8]} />
        <meshStandardMaterial 
          color="#3a3a3a" 
          transparent 
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

// Drift Kart Track Component
function DriftTrack({ opacity }) {
  const trackRef = useRef();
  
  useFrame((state) => {
    if (trackRef.current) {
      trackRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={trackRef}>
      {/* Main track outline */}
      <mesh position={[0, -1.9, 0]}>
        <torusGeometry args={[6, 0.3, 16, 100]} />
        <meshStandardMaterial 
          color="#7c3aed" 
          emissive="#7c3aed"
          emissiveIntensity={0.3}
          transparent 
          opacity={opacity}
        />
      </mesh>
      
      {/* Inner track glow */}
      <mesh position={[0, -1.8, 0]}>
        <torusGeometry args={[6, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={0.5}
          transparent 
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

// Floating Game Elements
function GameElements({ opacity }) {
  const elementsRef = useRef();
  
  useFrame((state) => {
    if (elementsRef.current) {
      elementsRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  
  return (
    <group ref={elementsRef}>
      {/* Power-up orbs */}
      <Sphere args={[0.3, 16, 16]} position={[3, 0, 3]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent 
          opacity={opacity}
        />
      </Sphere>
      
      <Sphere args={[0.3, 16, 16]} position={[-3, 1, -3]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent 
          opacity={opacity}
        />
      </Sphere>
      
      <Sphere args={[0.3, 16, 16]} position={[3, 1.5, -3]}>
        <meshStandardMaterial 
          color="#06b6d4" 
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent 
          opacity={opacity}
        />
      </Sphere>
      
      {/* Virtual obstacles */}
      <RoundedBox args={[1, 1, 1]} position={[-2, 0, 2]} radius={0.1}>
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={0.3}
          transparent 
          opacity={opacity * 0.7}
          wireframe
        />
      </RoundedBox>
      
      <RoundedBox args={[1, 1, 1]} position={[2, 0.5, -2]} radius={0.1}>
        <meshStandardMaterial 
          color="#ec4899" 
          emissive="#ec4899"
          emissiveIntensity={0.3}
          transparent 
          opacity={opacity * 0.7}
          wireframe
        />
      </RoundedBox>
    </group>
  );
}

// Kart representation
function DriftKart({ opacity, position = [0, -1.5, 3] }) {
  const kartRef = useRef();
  
  useFrame((state) => {
    if (kartRef.current) {
      kartRef.current.position.x = Math.sin(state.clock.elapsedTime) * 5;
      kartRef.current.position.z = Math.cos(state.clock.elapsedTime) * 5;
      kartRef.current.rotation.y = state.clock.elapsedTime + Math.PI / 2;
    }
  });
  
  return (
    <group ref={kartRef} position={position}>
      {/* Kart body */}
      <Box args={[1, 0.5, 1.5]}>
        <meshStandardMaterial 
          color="#7c3aed" 
          transparent 
          opacity={opacity}
        />
      </Box>
      
      {/* Wheels */}
      <Sphere args={[0.2, 16, 16]} position={[0.5, -0.3, 0.5]}>
        <meshStandardMaterial color="#1a1a1a" transparent opacity={opacity} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[-0.5, -0.3, 0.5]}>
        <meshStandardMaterial color="#1a1a1a" transparent opacity={opacity} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[0.5, -0.3, -0.5]}>
        <meshStandardMaterial color="#1a1a1a" transparent opacity={opacity} />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[-0.5, -0.3, -0.5]}>
        <meshStandardMaterial color="#1a1a1a" transparent opacity={opacity} />
      </Sphere>
    </group>
  );
}

// Spectator Area
function SpectatorArea({ opacity }) {
  return (
    <group position={[8, -1, 0]}>
      {/* Viewing platform */}
      <Box args={[2, 0.2, 6]}>
        <meshStandardMaterial 
          color="#4a5568" 
          transparent 
          opacity={opacity}
        />
      </Box>
      
      {/* Railing */}
      <Box args={[0.1, 1, 6]} position={[-1, 0.5, 0]}>
        <meshStandardMaterial 
          color="#7c3aed" 
          transparent 
          opacity={opacity}
        />
      </Box>
    </group>
  );
}

// Main Scene Component
function Scene({ progress }) {
  const warehouseOpacity = Math.max(0, 1 - progress);
  const arenaOpacity = Math.min(1, progress);
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#ec4899" />
      
      {/* Empty warehouse */}
      <EmptyWarehouse opacity={warehouseOpacity} />
      
      {/* MR Arena elements */}
      {progress > 0.2 && <DriftTrack opacity={arenaOpacity} />}
      {progress > 0.4 && <GameElements opacity={arenaOpacity} />}
      {progress > 0.5 && <DriftKart opacity={arenaOpacity} />}
      {progress > 0.7 && <SpectatorArea opacity={arenaOpacity} />}
      
      {/* Labels */}
      {progress < 0.3 && (
        <Text
          position={[0, 3, -5]}
          fontSize={0.8}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Empty Space
        </Text>
      )}
      
      {progress > 0.7 && (
        <Text
          position={[0, 3, -5]}
          fontSize={0.8}
          color="#7c3aed"
          anchorX="center"
          anchorY="middle"
        >
          MR Gaming Arena
        </Text>
      )}
      
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

// Main Component
export default function SpaceTransformation3D() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    if (!isPlaying) return;
    
    const duration = 4000; // 4 seconds
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);
      
      if (newProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Auto-reverse after completion
        setTimeout(() => {
          setProgress(0);
          setIsPlaying(false);
        }, 1000);
      }
    };
    
    animate();
  }, [isPlaying]);
  
  const handleTransform = () => {
    setProgress(0);
    setIsPlaying(true);
  };
  
  return (
    <div className="w-full">
      <div className="relative w-full h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl">
        <Canvas
          camera={{ position: [0, 5, 15], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <Scene progress={progress} />
        </Canvas>
        
        {/* Progress indicator */}
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
        
        {/* Control button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={handleTransform}
            disabled={isPlaying}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isPlaying ? 'Transforming...' : progress === 0 ? 'See the Transformation' : 'Transform Again'}
          </button>
        </div>
        
        {/* Labels */}
        <div className="absolute top-6 left-6">
          <div className={`text-white text-sm font-medium transition-opacity duration-300 ${progress < 0.5 ? 'opacity-100' : 'opacity-0'}`}>
            📦 Empty Venue Space
          </div>
          <div className={`text-purple-400 text-sm font-medium transition-opacity duration-300 ${progress > 0.5 ? 'opacity-100' : 'opacity-0'}`}>
            🎮 Mixed Reality Arena
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center text-white/80">
        <p className="text-lg">
          Watch how ArcadiaX transforms any empty space into an immersive MR gaming experience
        </p>
      </div>
    </div>
  );
}
