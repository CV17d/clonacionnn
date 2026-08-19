import Image from 'next/image';
import { Play, Layers, Radio, ShoppingBag, Search, ChevronLeft, Maximize, SkipBack, SkipForward, Volume2, Subtitles, Archive } from 'lucide-react';
import './globals.css';

export default function Home() {
  return (
    <main className="main-container">
      {/* Background Image */}
      <div className="background">
        {/* We use an img tag for background to keep it simple, or Next.js Image */}
        <Image src="/bg.jpeg" alt="Background" fill style={{ objectFit: 'cover' }} priority />
        <div className="background-overlay"></div>
      </div>

      {/* Main UI Container */}
      <div className="ui-container">
        {/* Left Vertical Menu */}
        <div className="left-menu glass-panel">
          <div className="menu-icon active">
            <div className="icon-outline" style={{ width: 28, height: 28 }}>
              <Play size={14} fill="currentColor" style={{ marginLeft: 2 }} />
            </div>
          </div>
          <div className="menu-icon"><Archive size={22} /></div>
          <div className="menu-icon"><Radio size={22} /></div>
          <div className="menu-icon"><ShoppingBag size={22} /></div>
          <div className="menu-icon"><Search size={22} /></div>
        </div>

        {/* Center Main Player */}
        <div className="main-player glass-panel">
          {/* Top Bar */}
          <div className="top-bar">
            <button className="icon-button">
              <ChevronLeft size={20} />
            </button>
            <span className="title">Avengers : Endgame</span>
            <button className="icon-button">
              <Maximize size={18} />
            </button>
          </div>

          {/* Video Area */}
          <div className="video-area">
            <Image src="/thumbnail.jpeg" alt="Video Thumbnail" fill style={{ objectFit: 'cover' }} priority />
            
            <div className="subtitle-overlay">
              <p>Avengers, Assemble !</p>
            </div>
            
            {/* Progress Bar */}
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '68%' }}></div>
                <div className="progress-knob" style={{ left: '68%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="bottom-bar glass-panel">
          <div className="control-group">
            <button className="control-button"><SkipBack size={22} fill="currentColor" /></button>
            <button className="control-button play-button"><Play size={28} fill="currentColor" /></button>
            <button className="control-button"><SkipForward size={22} fill="currentColor" /></button>
          </div>
          
          <div className="control-group">
            <button className="control-button"><Volume2 size={24} /></button>
            <button className="control-button"><Subtitles size={24} /></button>
            <span className="quality-text">1080p</span>
          </div>
        </div>
      </div>
    </main>
  );
}
