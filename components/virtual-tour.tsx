'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, Eye, Maximize2 } from 'lucide-react';
import Image from 'next/image';

const hotspots = [
  { id: 1, x: 20, y: 35, title: "The Grand Hall", desc: "Main student gathering and event area." },
  { id: 2, x: 70, y: 45, title: "Turing Tech Center", desc: "Computer Science and AI labs." },
  { id: 3, x: 45, y: 75, title: "Oasis Library", desc: "24/7 study space with extensive archives." },
];

export function VirtualTour() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'map' | 'pano'>('map');

  return (
    <div className="bg-card-bg border border-border-color rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative group h-[450px] md:h-[600px] w-full">
      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-center pointer-events-none">
        <div className="bg-bg/90 backdrop-blur-md px-5 py-2.5 rounded-full border border-border-color/50 flex items-center gap-3 pointer-events-auto shadow-md">
          <Eye size={18} className="text-accent" />
          <span className="font-semibold text-sm text-text-heading">Interactive Campus Map</span>
        </div>
        <div className="bg-bg/90 backdrop-blur-md p-3 rounded-full border border-border-color/50 pointer-events-auto shadow-md cursor-pointer hover:bg-accent hover:text-text-on-accent hover:border-accent text-text-muted transition-colors">
          <Maximize2 size={18} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'map' ? (
          <motion.div 
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative cursor-crosshair"
          >
            <Image
              src="https://picsum.photos/seed/venitecampusmap/1920/1080"
              alt="Campus Map"
              fill
              className="object-cover opacity-60 dark:opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />
            
            {hotspots.map((spot) => (
              <div 
                key={spot.id} 
                className="absolute z-10"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setViewMode('pano')}
              >
                <motion.div 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative cursor-pointer"
                >
                  <MapPin size={36} className="text-accent fill-bg drop-shadow-lg" />
                  <div className="absolute -bottom-2 -left-1 w-8 h-2.5 bg-black/20 blur-[2px] rounded-[100%]" />
                </motion.div>
                
                <AnimatePresence>
                  {activeHotspot === spot.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-bg/95 backdrop-blur-md border border-border-color p-4 rounded-2xl shadow-2xl pointer-events-none"
                    >
                      <h4 className="font-bold text-text-heading text-base mb-1">{spot.title}</h4>
                      <p className="text-sm text-text-muted leading-snug">{spot.desc}</p>
                      <div className="text-xs text-accent font-semibold mt-3 flex items-center gap-1.5 bg-accent/10 py-1.5 px-3 rounded-full w-fit">
                        <Navigation size={12} /> Enter 360° View
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Map Legend */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div className="bg-bg/90 backdrop-blur-md px-4 py-3 rounded-xl border border-border-color/50 shadow-md text-xs text-text-muted pointer-events-auto">
                <p className="font-semibold text-text-heading mb-1">How to use:</p>
                <p>Hover over markers to preview. Click to enter 360° street view.</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="pano"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative overflow-hidden flex items-center justify-center bg-black/10 cursor-ew-resize"
          >
            <Image
              src="https://picsum.photos/seed/venitepano/1920/600"
              alt="360 Panorama"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Fake 360 motion */}
            <motion.div 
              animate={{ x: ["-10%", "10%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
              className="absolute inset-0 pointer-events-none"
            >
              <Image
                src="https://picsum.photos/seed/venitepano/1920/600"
                alt="360 Panorama Motion Layer"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-bg/80 backdrop-blur-lg px-6 py-4 rounded-2xl flex flex-col items-center gap-3 border border-border-color shadow-2xl"
              >
                 <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
                   <Navigation size={24} className="text-accent" />
                 </motion.div>
                 <div className="text-center">
                   <span className="font-bold text-text-heading block mb-1">360° Panorama Active</span>
                   <span className="text-xs text-text-muted">Drag to explore the surroundings</span>
                 </div>
              </motion.div>
            </div>
            
            <button 
              onClick={() => setViewMode('map')}
              className="absolute bottom-6 left-6 bg-bg/90 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold text-text-heading shadow-xl border border-border-color/50 hover:text-accent hover:border-accent transition-all z-20 flex items-center gap-2"
            >
              &larr; Return to Campus Map
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
