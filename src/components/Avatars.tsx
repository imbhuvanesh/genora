import React from 'react';

// Modern Minimalist Creative Director / Designer Avatar
export const DesignerAvatar: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div 
      className={`rounded-full overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg border-2 border-white/80 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full p-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" fill="rgba(255,255,255,0.12)" />
        {/* Head */}
        <circle cx="50" cy="38" r="18" fill="#FFFFFF" />
        {/* Stylish Modern Glasses */}
        <rect x="36" y="34" width="12" height="8" rx="3" fill="#18181B" />
        <rect x="52" y="34" width="12" height="8" rx="3" fill="#18181B" />
        <line x1="48" y1="38" x2="52" y2="38" stroke="#18181B" strokeWidth="2" />
        {/* Smiling Mouth */}
        <path d="M44 48 C47 52, 53 52, 56 48" stroke="#18181B" strokeWidth="2.5" strokeLinecap="round" />
        {/* Torso / Shoulders */}
        <path d="M22 84 C24 64, 38 58, 50 58 C62 58, 76 64, 78 84 Z" fill="#FFFFFF" />
        {/* Creative Accent Sparkle */}
        <path d="M78 24 L80 29 L85 31 L80 33 L78 38 L76 33 L71 31 L76 29 Z" fill="#39ff14" />
      </svg>
    </div>
  );
};

// Modern Minimalist Tech Lead / Full-Stack Engineer Avatar
export const DeveloperAvatar: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div 
      className={`rounded-full overflow-hidden bg-gradient-to-tr from-[#0C2B80] via-[#3670FF] to-[#39ff14] flex items-center justify-center shadow-lg border-2 border-white/80 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full p-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" fill="rgba(255,255,255,0.12)" />
        {/* Head */}
        <circle cx="50" cy="38" r="18" fill="#FFFFFF" />
        {/* Modern Cap / Headset */}
        <path d="M30 36 C30 24, 70 24, 70 36" stroke="#0C2B80" strokeWidth="4" strokeLinecap="round" />
        <circle cx="28" cy="38" r="4" fill="#39ff14" />
        <circle cx="72" cy="38" r="4" fill="#39ff14" />
        {/* Eyes */}
        <circle cx="43" cy="38" r="2.5" fill="#0C2B80" />
        <circle cx="57" cy="38" r="2.5" fill="#0C2B80" />
        {/* Confident Smile */}
        <path d="M45 47 C48 50, 52 50, 55 47" stroke="#0C2B80" strokeWidth="2.5" strokeLinecap="round" />
        {/* Torso / Hoodie */}
        <path d="M22 84 C24 64, 38 58, 50 58 C62 58, 76 64, 78 84 Z" fill="#FFFFFF" />
        {/* Code Accent </> */}
        <text x="50" y="74" fill="#0C2B80" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
      </svg>
    </div>
  );
};

// Exact Pixel Punk with 3D glasses (Red & Blue lenses) and cigarette
export const PunkAvatar: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div 
      className={`rounded-full overflow-hidden bg-[#1E293B] flex items-center justify-center shadow-inner border-2 border-white/40 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 24 24" 
        className="w-full h-full"
        style={{ shapeRendering: 'crispEdges' }}
      >
        {/* Background / Dark Skin */}
        <rect width="24" height="24" fill="#0F172A" />
        
        {/* Neck & Shoulders */}
        <rect x="9" y="19" width="6" height="5" fill="#C68642" />
        <rect x="6" y="21" width="12" height="3" fill="#1E1B4B" />

        {/* Head Base */}
        <rect x="7" y="6" width="10" height="13" fill="#D99B61" />
        <rect x="8" y="5" width="8" height="1" fill="#D99B61" />
        
        {/* Hair / Cap - Wild Black Punk Hair */}
        <rect x="6" y="3" width="12" height="4" fill="#18181B" />
        <rect x="5" y="4" width="2" height="5" fill="#18181B" />
        <rect x="17" y="4" width="2" height="5" fill="#18181B" />
        <rect x="7" y="2" width="10" height="2" fill="#18181B" />
        
        {/* Ear */}
        <rect x="6" y="11" width="1" height="3" fill="#C68642" />
        <rect x="6" y="13" width="1" height="1" fill="#FBBF24" /> {/* Earring */}

        {/* Nose */}
        <rect x="11" y="12" width="2" height="2" fill="#B27433" />

        {/* Iconic 3D Glasses */}
        {/* White / Silver Frames */}
        <rect x="7" y="9" width="10" height="4" fill="#FFFFFF" />
        <rect x="11" y="10" width="2" height="2" fill="#E2E8F0" />
        
        {/* Left Lens: Red 3D Anaglyph */}
        <rect x="8" y="10" width="3" height="2" fill="#EF4444" />
        {/* Right Lens: Blue 3D Anaglyph */}
        <rect x="13" y="10" width="3" height="2" fill="#06B6D4" />

        {/* Mouth */}
        <rect x="10" y="15" width="4" height="1" fill="#884A22" />

        {/* Cigarette / Pipe */}
        <rect x="14" y="15" width="4" height="1" fill="#FFFFFF" />
        <rect x="18" y="15" width="1" height="1" fill="#F97316" /> {/* Burning tip */}
        {/* Smoke pixel */}
        <rect x="19" y="14" width="1" height="1" fill="#E2E8F0" opacity="0.6" />
        <rect x="20" y="13" width="1" height="1" fill="#E2E8F0" opacity="0.4" />
      </svg>
    </div>
  );
};

// Exact Bored Ape style NFT character
export const ApeAvatar: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  return (
    <div 
      className={`rounded-full overflow-hidden bg-[#D8B48D] flex items-center justify-center shadow-inner border-2 border-white/40 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
      >
        {/* Background circle subtle gradient */}
        <rect width="100" height="100" fill="#CDB08B" />

        {/* Ape Ears */}
        <circle cx="22" cy="50" r="14" fill="#8C6747" stroke="#332211" strokeWidth="3" />
        <circle cx="22" cy="50" r="7" fill="#C6A078" />
        {/* Gold Earring */}
        <circle cx="15" cy="56" r="4" fill="none" stroke="#F59E0B" strokeWidth="2.5" />

        {/* Head Shape */}
        <ellipse cx="56" cy="46" rx="28" ry="32" fill="#8C6747" stroke="#332211" strokeWidth="3.5" />
        
        {/* Muzzle / Mouth area */}
        <ellipse cx="58" cy="64" rx="22" ry="17" fill="#D9B78F" stroke="#332211" strokeWidth="3" />

        {/* Eyes & Brow */}
        <ellipse cx="46" cy="38" rx="8" ry="7" fill="#EADBC8" stroke="#332211" strokeWidth="2" />
        <circle cx="48" cy="39" r="4" fill="#1C1917" />
        <circle cx="49" cy="37" r="1.5" fill="#FFFFFF" />

        <ellipse cx="68" cy="38" rx="8" ry="7" fill="#EADBC8" stroke="#332211" strokeWidth="2" />
        <circle cx="68" cy="39" r="4" fill="#1C1917" />
        <circle cx="69" cy="37" r="1.5" fill="#FFFFFF" />

        {/* Nose */}
        <ellipse cx="52" cy="54" rx="2" ry="2" fill="#332211" />
        <ellipse cx="60" cy="54" rx="2" ry="2" fill="#332211" />

        {/* Mouth with slight ape smirk */}
        <path 
          d="M 44 68 Q 58 76 74 67" 
          fill="none" 
          stroke="#332211" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />

        {/* Cadet / Fisherman Cap */}
        <path 
          d="M 28 32 C 32 14, 76 12, 84 32 C 86 38, 76 42, 28 36 Z" 
          fill="#1C1917" 
          stroke="#0F0E0E" 
          strokeWidth="3" 
        />
        {/* Cap Visor / Brim */}
        <path 
          d="M 24 36 C 40 44, 74 44, 88 32 C 78 30, 40 32, 24 36 Z" 
          fill="#292524" 
        />
        {/* Cap Pin */}
        <circle cx="56" cy="24" r="3" fill="#EAB308" />
      </svg>
    </div>
  );
};
