import React, { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  Eye,
  Film,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Play,
  Search,
  SlidersHorizontal,
  Sparkles,
  Video,
  X,
  Youtube
} from 'lucide-react';
import { profileInfo, projectCategories, projects, Project } from './data/portfolioData';
import { VideoModal } from './components/VideoModal';

function App() {
  const [category, setCategory] = useState<string>('All Projects');
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [saved, setSaved] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [contactOpen, setContactOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<string>('AI Reels');
  const [sent, setSent] = useState(false);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCategory = category === 'All Projects' || p.category === category;
      const searchContent = `${p.title} ${p.category} ${p.tag} ${p.client} ${p.tools.join(' ')}`.toLowerCase();
      const matchQuery = searchContent.includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [category, query]);

  const toggleSave = (id: number) => {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleDiscussProject = (p: Project) => {
    setInquiryCategory(p.category);
    setContactOpen(true);
  };

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <div className={mode === 'dark' ? 'app darkmode' : 'app'}>
      {/* Topbar Header */}
      <header className="topbar">
        <a className="wordmark" href="#home">
          <span className="mark">◈</span>
          <b>DIVYANSHU</b>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={menuOpen ? 'navlinks open' : 'navlinks'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
          <a href="#showreel" onClick={() => setMenuOpen(false)}>SHOWREEL</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>WORK / PROJECTS</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT & SKILLS</a>
          <a href="#contact" onClick={() => { setMenuOpen(false); setContactOpen(true); }}>CONTACT</a>
        </nav>

        <div className="navright">
          <button
            className="themebtn"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            title="Toggle Light/Dark Theme"
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
          <a
            className="resume-btn"
            href="#contact"
            onClick={() => setContactOpen(true)}
            title="Contact Divyanshu"
          >
            HIRE ME <ArrowUpRight size={12} />
          </a>
          <button className="blackpill" onClick={() => setContactOpen(true)}>
            LET'S TALK <ArrowUpRight size={12} />
          </button>
        </div>
      </header>

      <main>
        {/* Editorial Hero Section */}
        <section className="hero" id="home">
          <div className="hero-meta">
            <span>✳ &nbsp; HIGH-IMPACT VISUAL STORYTELLER</span>
            <span>+ &nbsp; VIDEO EDITOR & CREATIVE DIRECTOR</span>
          </div>

          <div className="hero-title">
            <p>PORTFOLIO & SHOWCASE</p>
            <h1>
              DIVYAN<span>S</span><i>HU</i>
              <b className="star">✦</b>
            </h1>
            <div className="redblock" />
          </div>

          <div className="hero-labels">
            <span>AI REELS · COMMERCIALS · POLITICS</span>
            <span>WEDDINGS · FASHION · YOUTUBE</span>
          </div>

          {/* Interactive Floating 3D Video Cards Collage */}
          <div className="collage">
            <div
              className="collage-card bluecard"
              onClick={() => setSelectedProject(projects[0])}
              role="button"
              tabIndex={0}
            >
              <img src={projects[0].image} alt="AI Reels preview" />
              <span>01 / AI REELS</span>
            </div>

            <div
              className="collage-card redcard"
              onClick={() => setShowreelOpen(true)}
              role="button"
              tabIndex={0}
            >
              <div className="eye-symbol">▶</div>
              <span>WATCH REEL</span>
            </div>

            <div
              className="collage-card personcard"
              onClick={() => setSelectedProject(projects[1])}
              role="button"
              tabIndex={0}
            >
              <img src="/assets/divyanshu_portrait.jpg" alt="Divyanshu - Creative Editor" />
              <b>CLIENT REEL</b>
            </div>

            <div
              className="collage-card watchcard"
              onClick={() => setSelectedProject(projects[3])}
              role="button"
              tabIndex={0}
            >
              <img src={projects[3].image} alt="Fashion Reels preview" />
              <span>FASHION 9:16</span>
            </div>

            <div
              className="collage-card green-card"
              onClick={() => setSelectedProject(projects[2])}
              role="button"
              tabIndex={0}
            >
              <span className="green-mark">🗳️</span>
              <b>ELECTION<br />CAMPAIGNS</b>
            </div>

            <span className="cross cross1">＋</span>
            <span className="cross cross2">×</span>
            <span className="cross cross3">✳</span>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE WORK <ArrowDownRight size={13} /></span>
            <span>AVAILABLE FOR FREELANCE & FULL-TIME PROJECTS</span>
            <span>01 — 07 CATEGORIES</span>
          </div>
        </section>

        {/* Ticker / Marquee Banner */}
        <section className="ticker">
          <div>
            AI REELS <i>✳</i> VIDEO EDITING <i>✳</i> ELECTION CAMPAIGNS <i>✳</i> COLOR GRADING <i>✳</i> FASHION REELS <i>✳</i> YOUTUBE PRODUCTION <i>✳</i> 3D MOTION <i>✳</i>
          </div>
        </section>

        {/* Featured Video Showreel Highlight Section */}
        <section className="showreel-section" id="showreel">
          <div className="showreel-card">
            <div className="showreel-content">
              <span className="eyebrow"><Sparkles size={12} /> FEATURED SHOWREEL</span>
              <h2>Cinematic Motion & Video Editing Reel</h2>
              <p>Experience seamless cuts, precision color grading, dynamic sound design, and generative AI video storytelling.</p>
              <div className="showreel-actions">
                <button className="blackpill large" onClick={() => setSelectedProject(featuredProject)}>
                  <Play size={16} fill="currentColor" /> PLAY SHOWREEL PREVIEW
                </button>
              </div>
            </div>
            <div className="showreel-media" onClick={() => setSelectedProject(featuredProject)}>
              <img src={featuredProject.image} alt="Showreel Thumbnail" />
              <div className="play-overlay">
                <Play size={36} fill="white" />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with Category Filters & Search */}
        <section className="project-section" id="projects">
          <div className="section-head">
            <div>
              <span className="eyebrow">01 / SELECTED VIDEO WORK</span>
              <h2>Video Projects <i>| across 7 categories</i></h2>
            </div>
            <div className="headnote">
              Real projects spanning AI Reels, Commercials,<br />Political Campaigns, Weddings, and YouTube content.
            </div>
          </div>

          <div className="toolbar">
            <div className="category-tabs">
              {projectCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={category === c ? 'tab active' : 'tab'}
                >
                  {c}
                  {c === 'AI Reels' && <span className="tab-badge">NEW</span>}
                </button>
              ))}
            </div>

            <label className="searchbox">
              <Search size={14} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tools..."
              />
              <SlidersHorizontal size={13} />
            </label>
          </div>

          <div className="project-grid">
            {filteredProjects.map((p) => (
              <article className={`project-card ${p.aspectRatio === '9:16' ? 'is-vertical' : ''}`} key={p.id}>
                <button className="thumb" onClick={() => setSelectedProject(p)}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className="thumb-tag">{p.tag}</span>
                  <span className="ratio-tag">{p.aspectRatio}</span>
                  <span className="view-project">
                    WATCH VIDEO <ArrowUpRight size={13} />
                  </span>
                  <span className="grid-index">{String(p.id).padStart(2, '0')}</span>
                </button>

                <div className="card-foot">
                  <button className="project-name" onClick={() => setSelectedProject(p)}>
                    <b>{p.title}</b>
                    <small>{p.client} · {p.year}</small>
                  </button>
                  <button
                    className={saved.includes(p.id) ? 'heart saved' : 'heart'}
                    onClick={() => toggleSave(p.id)}
                    aria-label="Save project to bookmarks"
                  >
                    <Heart size={15} fill={saved.includes(p.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </article>
            ))}

            {filteredProjects.length === 0 && (
              <div className="empty">
                No video projects match your search query. Try another category or keyword.
              </div>
            )}
          </div>

          <div className="project-end">
            <span>
              SHOWING {String(filteredProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} PROJECTS
              {saved.length > 0 && ` (${saved.length} BOOKMARKED)`}
            </span>
            <button
              onClick={() => {
                setCategory('All Projects');
                setQuery('');
              }}
            >
              RESET FILTERS <ArrowRight size={13} />
            </button>
          </div>
        </section>

        {/* About & Skills Section */}
        <section className="about" id="about">
          <div className="about-top">
            <span className="eyebrow">02 / ABOUT DIVYANSHU</span>
            <span>VIDEO EDITOR · CREATIVE DIRECTOR · VISUAL THINKER</span>
          </div>

          <div className="about-grid">
            <div>
              <h2>
                I make footage<br />
                look <i>impossible</i><br />
                to ignore.
              </h2>
              <div className="scribble">✳</div>
            </div>

            <div className="about-copy">
              <p className="lead">{profileInfo.bio}</p>
              <p>
                Whether it's an aggressive political campaign video that demands voter attention, a high-fashion 9:16 Instagram Reel, a cinematic wedding highlight, or a viral AI-generated concept reel, I engineer every frame for pacing, retention, and aesthetic mastery.
              </p>
              <div className="about-actions">
                <button className="outlinebtn" onClick={() => setContactOpen(true)}>
                  LET'S COLLABORATE <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            {profileInfo.stats.map((st) => (
              <div className="stat-item" key={st.label}>
                <b className="stat-value">{st.value}</b>
                <span className="stat-label">{st.label}</span>
              </div>
            ))}
          </div>

          {/* Skills Matrix */}
          <div className="skills-matrix">
            <span className="eyebrow">TECHNICAL & CREATIVE CAPABILITIES</span>
            <div className="skills-grid">
              {profileInfo.skills.map((group) => (
                <div key={group.category} className="skill-group">
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item} className="skill-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="contact-deco">
            CREATE<br />
            <i>IMPACT</i><br />
            NOW.
          </div>

          <span className="eyebrow">03 / READY TO START A PROJECT?</span>
          <h2>
            Let's create<br />
            <i>something extraordinary.</i>
          </h2>

          <p>
            Have a brand campaign, an AI Reel idea, an election film, or YouTube content that needs top-tier post-production? Reach out and let's bring it to life.
          </p>

          <div className="contact-actions-row">
            <button className="blackpill large" onClick={() => setContactOpen(true)}>
              START A CONVERSATION <ArrowUpRight size={15} />
            </button>
            <a
              href={`mailto:${profileInfo.email}`}
              className="email-direct-btn"
            >
              <Mail size={14} /> {profileInfo.email}
            </a>
          </div>

          <div className="social-links-bar">
            <a href={profileInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profileInfo.socials.youtube} target="_blank" rel="noopener noreferrer">
              <Youtube size={15} /> YouTube
            </a>
            <a href={profileInfo.socials.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram size={15} /> Instagram
            </a>
          </div>

          <div className="contact-bottom">
            <span>GOOD IDEAS START WITH A HELLO.</span>
            <a href={`mailto:${profileInfo.email}`}>{profileInfo.email.toUpperCase()}</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a className="wordmark" href="#home">
          <span className="mark">◈</span>
          <b>DIVYANSHU</b>
        </a>
        <span>CREATIVE VIDEO EDITOR & POST-PRODUCTION / 2026</span>
        <div>
          <a href="#projects">PROJECTS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact" onClick={() => setContactOpen(true)}>CONTACT ↗</a>
        </div>
        <small>© 2026 DIVYANSHU · CRAFTED WITH PRECISION & INTENTION</small>
      </footer>

      {/* Video Modal Popup */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscuss={handleDiscussProject}
      />

      {/* Contact & Inquiry Modal */}
      {contactOpen && (
        <div className="overlay" onClick={() => setContactOpen(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="close" onClick={() => setContactOpen(false)}>
              <X size={18} />
            </button>

            {sent ? (
              <>
                <span className="eyebrow">MESSAGE PREPARED</span>
                <h2>Thank you for reaching out!</h2>
                <p>Opening your email client to send your project inquiry directly to Divyanshu.</p>
                <button
                  className="blackpill"
                  onClick={() => {
                    setContactOpen(false);
                    setSent(false);
                  }}
                >
                  CLOSE <Check size={13} />
                </button>
              </>
            ) : (
              <>
                <span className="eyebrow">WORK WITH DIVYANSHU</span>
                <h2>
                  Tell me about<br />
                  <i>your project.</i>
                </h2>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    window.location.href = `mailto:${profileInfo.email}?subject=Project%20Inquiry%20[${inquiryCategory}]`;
                  }}
                >
                  <label>
                    YOUR NAME
                    <input required placeholder="Full Name" />
                  </label>

                  <label>
                    YOUR EMAIL
                    <input required type="email" placeholder="you@example.com" />
                  </label>

                  <label>
                    PROJECT CATEGORY
                    <select
                      value={inquiryCategory}
                      onChange={(e) => setInquiryCategory(e.target.value)}
                      className="modal-select"
                    >
                      {projectCategories.filter((c) => c !== 'All Projects').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    PROJECT NOTES & REQUIREMENTS
                    <textarea
                      required
                      placeholder="Briefly describe the video style, timeline, and goals..."
                      rows={3}
                    />
                  </label>

                  <button className="blackpill" type="submit">
                    SEND INQUIRY <ArrowUpRight size={13} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
