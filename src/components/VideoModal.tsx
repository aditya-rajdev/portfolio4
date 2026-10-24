import React, { useEffect } from 'react';
import { X, Play, Volume2, Maximize2, Tag, Calendar, User, ExternalLink, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscuss?: (project: Project) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ project, onClose, onDiscuss }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          {/* Video Player Container */}
          <div className={`video-player-container ${project.aspectRatio === '9:16' ? 'vertical-reel' : 'widescreen'}`}>
            {project.videoUrl ? (
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                playsInline
                poster={project.image}
                className="video-element"
              >
                Your browser does not support HTML5 video.
              </video>
            ) : project.embedUrl ? (
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="iframe-element"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-fallback">
                <img src={project.image} alt={project.title} className="fallback-image" />
                <div className="fallback-badge">
                  <Play size={24} fill="currentColor" />
                  <span>PREVIEW MODE</span>
                </div>
              </div>
            )}
            <div className="video-meta-badge">
              <span>{project.aspectRatio} FORMAT</span>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <aside className="modal-details">
            <div className="details-header">
              <span className="category-pill"><Sparkles size={11} /> {project.category}</span>
              <span className="year-pill">{project.year}</span>
            </div>

            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>

            <div className="meta-list">
              <div className="meta-item">
                <span className="meta-label"><User size={12} /> CLIENT / BRAND</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label"><Tag size={12} /> TAGS</span>
                <span className="meta-value">{project.tag}</span>
              </div>
            </div>

            <div className="tools-section">
              <span className="tools-title">EDITING & POST-PRODUCTION TOOLS</span>
              <div className="tools-tags">
                {project.tools.map((tool) => (
                  <span key={tool} className="tool-chip">{tool}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              {onDiscuss && (
                <button
                  className="primary-action-btn"
                  onClick={() => {
                    onClose();
                    onDiscuss(project);
                  }}
                >
                  DISCUSS THIS PROJECT <ExternalLink size={13} />
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
