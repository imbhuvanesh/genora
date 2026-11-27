import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Shield, Zap, Gift, Users, Coins } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ModalsProps {
  activeModal: 'about' | 'stats' | 'tokenomics' | 'airdrop' | 'wallet' | null;
  onClose: () => void;
  walletConnected: boolean;
  setWalletConnected: (val: boolean) => void;
  setWalletAddress: (addr: string) => void;
}

export const Modals: React.FC<ModalsProps> = ({
  activeModal,
  onClose,
  walletConnected: _walletConnected,
  setWalletConnected,
  setWalletAddress,
}) => {
  // Airdrop checker state
  const [ensInput, setEnsInput] = useState('');
  const [checkingAirdrop, setCheckingAirdrop] = useState(false);
  const [airdropResult, setAirdropResult] = useState<{ eligible: boolean; amount: number; tier: string } | null>(null);

  const handleCheckAirdrop = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ensInput.trim()) return;
    setCheckingAirdrop(true);
    setTimeout(() => {
      setCheckingAirdrop(false);
      setAirdropResult({
        eligible: true,
        amount: 4850,
        tier: 'Tier 1 Alpha Contributor'
      });
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }, 700);
  };

  const handleConnect = (_walletName: string) => {
    setWalletAddress('0x71C849fF138243b8214f4e24D7A1A7D0bE649A2b');
    setWalletConnected(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.5 } });
    onClose();
  };

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0C2B80]/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-[#072579] border-2 border-white/20 rounded-[32px] p-6 sm:p-8 text-white shadow-2xl overflow-hidden z-10"
        >
          {/* Subtle grid background inside modal */}
          <div className="absolute inset-0 hero-grid opacity-20 pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ================= WALLET MODAL ================= */}
          {activeModal === 'wallet' && (
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-royal-blue flex items-center justify-center border border-white/20">
                  <Shield className="w-5 h-5 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-archivo text-xl font-bold uppercase">Connect Wallet</h3>
                  <p className="text-xs text-white/70">Connect to Base Network to join the club</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'MetaMask', icon: '🦊', desc: 'Popular Ethereum browser extension' },
                  { name: 'Coinbase Wallet', icon: '🔵', desc: 'Native Base L2 wallet integration' },
                  { name: 'Rainbow', icon: '🌈', desc: 'Sleek mobile and desktop Web3 wallet' },
                  { name: 'WalletConnect', icon: '🔗', desc: 'Scan with mobile camera to connect' },
                ].map((wallet) => (
                  <button
                    key={wallet.name}
                    onClick={() => handleConnect(wallet.name)}
                    className="w-full p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-between transition-all group hover:scale-[1.01]"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{wallet.icon}</span>
                      <div className="text-left">
                        <div className="font-archivo text-sm font-bold text-white group-hover:text-neon-lime transition-colors">
                          {wallet.name}
                        </div>
                        <div className="text-[11px] text-white/60">{wallet.desc}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 group-hover:bg-neon-lime group-hover:text-black transition-colors">
                      Connect
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 text-center text-[11px] text-white/50">
                By connecting a wallet, you agree to the Base Club SocialFi protocol terms.
              </div>
            </div>
          )}

          {/* ================= ABOUT MODAL ================= */}
          {activeModal === 'about' && (
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-royal-blue flex items-center justify-center border border-white/20">
                  <Zap className="w-5 h-5 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-archivo text-xl font-bold uppercase">About Base Club</h3>
                  <p className="text-xs text-white/70">The Premier SocialFi Protocol on Base L2</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-white/85 leading-relaxed">
                <p>
                  <strong>Base Club</strong> is an experimental, hyper-efficient SocialFi layer where creators and community members share real-time economic upside.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15">
                    <div className="font-archivo text-neon-lime text-lg font-black">0.001s</div>
                    <div className="text-xs font-semibold text-white/80">Continuous Emissions</div>
                    <div className="text-[11px] text-white/60 mt-1">Earnings flow into your wallet every single second.</div>
                  </div>
                  <div className="bg-white/10 p-3.5 rounded-2xl border border-white/15">
                    <div className="font-archivo text-neon-lime text-lg font-black">&lt;$0.01</div>
                    <div className="text-xs font-semibold text-white/80">Base L2 Gas Fees</div>
                    <div className="text-[11px] text-white/60 mt-1">Negligible transaction costs powered by OP Stack.</div>
                  </div>
                </div>
                <p className="text-xs text-white/70">
                  Creators issue bonding curves, subscribers receive instant tokenized yield, and stakers earn protocol fees distributed continuously on-chain.
                </p>
              </div>
            </div>
          )}

          {/* ================= STATS MODAL ================= */}
          {activeModal === 'stats' && (
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-royal-blue flex items-center justify-center border border-white/20">
                  <Users className="w-5 h-5 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-archivo text-xl font-bold uppercase">Protocol Stats</h3>
                  <p className="text-xs text-white/70">Live Base Club On-Chain Metrics</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-white/70">Total Value Locked</div>
                  <div className="font-archivo text-2xl font-black text-white mt-1">$14,284,910</div>
                  <div className="text-[11px] text-neon-lime mt-1 font-semibold">+18.4% this week</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-white/70">Active Creators</div>
                  <div className="font-archivo text-2xl font-black text-white mt-1">8,420</div>
                  <div className="text-[11px] text-neon-lime mt-1 font-semibold">142 added today</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-white/70">$CLUB Distributed</div>
                  <div className="font-archivo text-2xl font-black text-white mt-1">188,342,570</div>
                  <div className="text-[11px] text-white/60 mt-1">Per second emissions</div>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl border border-white/15">
                  <div className="text-xs text-white/70">Staking APY</div>
                  <div className="font-archivo text-2xl font-black text-neon-lime mt-1">36.5%</div>
                  <div className="text-[11px] text-white/60 mt-1">Compounded monthly</div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TOKENOMICS MODAL ================= */}
          {activeModal === 'tokenomics' && (
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-royal-blue flex items-center justify-center border border-white/20">
                  <Coins className="w-5 h-5 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-archivo text-xl font-bold uppercase">$CLUB Tokenomics</h3>
                  <p className="text-xs text-white/70">1,000,000,000 Fixed Total Supply</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'Community & Staking Rewards', pct: '40%', color: '#A6FF00' },
                  { name: 'Ecosystem & Creator Grants', pct: '25%', color: '#60A5FA' },
                  { name: 'Liquidity Pools (Aerodrome/Uniswap)', pct: '20%', color: '#818CF8' },
                  { name: 'Core Contributors (3yr Vesting)', pct: '15%', color: '#F472B6' },
                ].map((item) => (
                  <div key={item.name} className="p-3 bg-white/10 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs font-semibold">{item.name}</span>
                    </div>
                    <span className="font-archivo text-sm font-bold">{item.pct}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-neon-lime/10 border border-neon-lime/30 flex items-center space-x-2 text-xs text-neon-lime">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Zero buy/sell taxes. Contract renounced on Base Mainnet.</span>
              </div>
            </div>
          )}

          {/* ================= AIRDROP MODAL ================= */}
          {activeModal === 'airdrop' && (
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 rounded-2xl bg-royal-blue flex items-center justify-center border border-white/20">
                  <Gift className="w-5 h-5 text-neon-lime" />
                </div>
                <div>
                  <h3 className="font-archivo text-xl font-bold uppercase">Airdrop Checker</h3>
                  <p className="text-xs text-white/70">Check eligibility for Season 1 $CLUB tokens</p>
                </div>
              </div>

              <form onSubmit={handleCheckAirdrop} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={ensInput}
                    onChange={(e) => setEnsInput(e.target.value)}
                    placeholder="Enter ENS or 0x address (e.g. vitalik.eth)"
                    className="w-full bg-white/10 border border-white/25 rounded-2xl py-3 px-4 text-xs text-white placeholder-white/40 focus:outline-none focus:border-neon-lime"
                  />
                </div>
                <button
                  type="submit"
                  disabled={checkingAirdrop}
                  className="w-full py-3 rounded-2xl bg-neon-lime text-black font-archivo text-xs font-extrabold uppercase hover:bg-[#8ee600] transition-colors flex items-center justify-center space-x-2"
                >
                  {checkingAirdrop ? (
                    <span>Querying On-Chain Records...</span>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Check Allocation</span>
                    </>
                  )}
                </button>
              </form>

              {airdropResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-2xl bg-white/15 border border-neon-lime/40 text-center"
                >
                  <div className="text-xs text-white/80">Allocation Confirmed:</div>
                  <div className="font-archivo text-2xl font-black text-neon-lime mt-1">
                    {airdropResult.amount.toLocaleString()} $CLUB
                  </div>
                  <div className="text-[11px] text-white/70 mt-1">{airdropResult.tier}</div>
                  <button
                    onClick={() => {
                      confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 } });
                      alert('Claimed 4,850 $CLUB! Sent to your wallet.');
                      onClose();
                    }}
                    className="mt-3 w-full py-2 bg-white text-royal-blue font-archivo text-xs font-bold rounded-xl hover:bg-neon-lime hover:text-black transition-colors"
                  >
                    Claim To Wallet Now
                  </button>
                </motion.div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
