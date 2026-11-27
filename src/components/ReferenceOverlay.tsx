import React, { useState } from 'react';
import { Layers, X } from 'lucide-react';

export const ReferenceOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);
  const [opacity, setOpacity] = useState(0.5);
  const [sideBySide, setSideBySide] = useState(false);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center space-x-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1.5 sm:space-x-2 bg-[#0C2B80]/90 hover:bg-[#0C2B80] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full backdrop-blur-lg border border-white/20 shadow-2xl transition-all duration-200 text-[11px] sm:text-xs font-semibold hover:border-[#F9D601] group cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F9D601] group-hover:rotate-12 transition-transform" />
          <span className="hidden xs:inline">Compare Design</span>
          <span className="xs:hidden">Compare</span>
        </button>
      </div>

      {/* Control Drawer */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 z-40 w-[calc(100vw-32px)] sm:w-80 bg-[#0C2B80]/95 backdrop-blur-xl border border-white/25 rounded-3xl p-5 text-white shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/15">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F9D601]" />
              <span className="font-archivo text-xs uppercase tracking-wider">Design Inspector</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-full text-white/70 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-4">
            {/* Toggle Overlay */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/90">Overlay On Page</span>
              <button
                onClick={() => setOverlayActive(!overlayActive)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  overlayActive 
                    ? 'bg-[#F9D601] text-black' 
                    : 'bg-white/15 text-white/70 hover:bg-white/25'
                }`}
              >
                {overlayActive ? 'Active' : 'Off'}
              </button>
            </div>

            {/* Opacity Slider */}
            {overlayActive && (
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between text-[11px] text-white/70">
                  <span>Overlay Opacity</span>
                  <span className="font-mono text-[#F9D601]">{Math.round(opacity * 100)}%</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.9"
                  step="0.05"
                  value={opacity}
                  onChange={(e) => setOpacity(parseFloat(e.target.value))}
                  className="w-full accent-[#F9D601] h-1.5 bg-white/20 rounded-lg cursor-pointer"
                />
              </div>
            )}

            {/* Toggle Side-by-Side Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <span className="text-xs font-medium text-white/90">Side-by-Side View</span>
              <button
                onClick={() => setSideBySide(!sideBySide)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  sideBySide 
                    ? 'bg-[#F9D601] text-black' 
                    : 'bg-white/15 text-white/70 hover:bg-white/25'
                }`}
              >
                {sideBySide ? 'Open' : 'View'}
              </button>
            </div>
          </div>

          <div className="text-[10px] text-white/70 bg-white/10 p-2.5 rounded-xl border border-white/10">
            Compare typography, hashtag doodle, and components against reference.
          </div>
        </div>
      )}

      {/* 1:1 Overlay Mode directly over the page */}
      {overlayActive && (
        <div 
          className="fixed inset-0 pointer-events-none z-50 flex items-start justify-center overflow-hidden"
          style={{ opacity }}
        >
          <img 
            src="/reference.jpg" 
            alt="Reference Design"
            className="w-full max-w-6xl h-auto object-contain mt-4 sm:mt-8 rounded-[44px] shadow-2xl"
          />
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {sideBySide && (
        <div className="fixed inset-0 z-50 bg-[#0C2B80]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl bg-[#0C2B80] border border-white/25 rounded-3xl p-6 shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div className="flex items-center space-x-2">
                <span className="font-archivo text-base uppercase">Original Reference Image</span>
                <span className="text-xs bg-[#F9D601]/20 text-[#F9D601] px-2 py-0.5 rounded font-mono">Reference</span>
              </div>
              <button 
                onClick={() => setSideBySide(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-auto py-4 flex items-center justify-center">
              <img 
                src="/reference.jpg" 
                alt="Original Reference"
                className="max-h-[70vh] rounded-2xl shadow-2xl border-2 border-white/20 object-contain"
              />
            </div>

            <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
              <span>Comparing against the target visual aesthetic</span>
              <button
                onClick={() => {
                  setSideBySide(false);
                  setOverlayActive(true);
                }}
                className="px-4 py-2 bg-[#F9D601] text-black font-sans text-xs font-bold rounded-xl hover:bg-white hover:text-[#3670FF] cursor-pointer"
              >
                Try Direct Page Overlay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
