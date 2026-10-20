import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, CircleHelp, Eye, Heart, Menu, Plus, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';

type Project = {id:number; title:string; creator:string; category:string; image:string; tag:string; description:string; year:string};
const projects:Project[] = [
 {id:1,title:'Cuong Nguyen',creator:'Cuong Nguyen',category:'Branding',tag:'IDENTITY / 3D',year:'2025',image:'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85',description:'A bold visual identity experiment exploring expressive forms, tactile color and a playful graphic language.'},
 {id:2,title:'Polestar 1:1',creator:'DVS XX24',category:'3D Motion',tag:'AUTOMOTIVE / CGI',year:'2025',image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85',description:'Automotive CGI concept with cinematic lighting, reflective surfaces and carefully paced product storytelling.'},
 {id:3,title:'Almas 3',creator:'Studio Form',category:'3D Motion',tag:'PRODUCT / CGI',year:'2024',image:'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=85',description:'A minimal product visualization study focused on materials, precision and atmospheric light.'},
 {id:4,title:'Samar Mosiner',creator:'Samar Mosiner',category:'Web Design',tag:'DIGITAL / INTERFACE',year:'2025',image:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85',description:'A digital product concept bringing a clear information hierarchy and lively interactive moments together.'},
 {id:5,title:'Follai',creator:'Follai Studio',category:'Branding',tag:'BRANDING / OBJECT',year:'2024',image:'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=85',description:'A contemporary brand system with sculptural forms, a reduced palette and a memorable visual signature.'},
 {id:6,title:'David Gart',creator:'David Gart',category:'Motion Design',tag:'MOTION / EXPERIMENT',year:'2025',image:'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=900&q=85',description:'A motion-led digital artwork using gradient light, movement and geometric composition.'},
 {id:7,title:'Blue Hour',creator:'Frame Lab',category:'Video Editing',tag:'FILM / COLOR',year:'2025',image:'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85',description:'A short film edit built around atmosphere, natural transitions and a warm cinematic grade.'},
 {id:8,title:'Objects in Space',creator:'Motion Dept.',category:'Motion Design',tag:'3D / MOTION',year:'2024',image:'https://images.unsplash.com/photo-1633533452148-a9659d7ba6f7?auto=format&fit=crop&w=900&q=85',description:'An abstract 3D motion study that pairs clean forms with vivid color and an intentional rhythm.'}
];
const categories = ['All projects','Branding','Web Design','Video Editing','Motion Design','3D Motion'];

function App(){
 const [category,setCategory]=useState('All projects');
 const [query,setQuery]=useState('');
 const [selected,setSelected]=useState<Project|null>(null);
 const [saved,setSaved]=useState<number[]>([]);
 const [menu,setMenu]=useState(false);
 const [mode,setMode]=useState<'light'|'dark'>('light');
 const [contactOpen,setContactOpen]=useState(false);
 const [sent,setSent]=useState(false);
 const shown=useMemo(()=>projects.filter(p=>(category==='All projects'||p.category===category)&&(`${p.title} ${p.category} ${p.creator}`.toLowerCase().includes(query.toLowerCase()))),[category,query]);
 const toggleSave=(id:number)=>setSaved(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id]);
 return <div className={mode==='dark'?'app darkmode':'app'}>
  <header className="topbar">
   <a className="wordmark" href="#home"><span className="mark">◈</span><b>PORTFOLIO</b></a>
   <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Open navigation">{menu?<X/>:<Menu/>}</button>
   <nav className={menu?'navlinks open':'navlinks'}><a href="#home" onClick={()=>setMenu(false)}>HOME</a><a href="#features" onClick={()=>setMenu(false)}>BẢN TƯƠNG / ABOUT</a><a href="#projects" onClick={()=>setMenu(false)}>PROJECTS</a><a href="#contact" onClick={()=>{setMenu(false);setContactOpen(true)}}>CONTACT</a></nav>
   <div className="navright"><button className="textbtn" onClick={()=>setContactOpen(true)}>LOG IN</button><button className="blackpill" onClick={()=>setContactOpen(true)}>LET'S TALK <ArrowUpRight size={12}/></button><button className="themebtn" onClick={()=>setMode(mode==='light'?'dark':'light')} title="Toggle theme">◐</button></div>
  </header>
  <main>
   <section className="hero" id="home">
    <div className="hero-meta"><span>✳ &nbsp; CLARITY IN EVERY FRAME</span><span>+ &nbsp; MULTIMEDIA DESIGNER</span></div>
    <div className="hero-title"><p>WELCOME TO MY</p><h1>PORT<span>F</span><i>OLIO</i><b className="star">✦</b></h1><div className="redblock"/></div>
    <div className="hero-labels"><span>CUONG NGUYEN</span><span>MULTIMEDIA DESIGNER</span></div>
    <div className="collage">
      <div className="collage-card bluecard"><img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=700&q=85" alt="Abstract blue digital artwork"/><span>01 / DIGITAL</span></div>
      <div className="collage-card redcard"><div className="eye-symbol">◉</div><span>CUONG NGUYEN</span></div>
      <div className="collage-card personcard"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85" alt="Creative portrait"/><b>DVS XX24</b></div>
      <div className="collage-card watchcard"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85" alt="Minimal product watch"/><span>01:27</span></div>
      <div className="collage-card green-card"><span className="green-mark">↗</span><b>DESIGN<br/>IN MOTION</b></div>
      <span className="cross cross1">＋</span><span className="cross cross2">×</span><span className="cross cross3">✳</span>
    </div>
    <div className="hero-bottom"><span>SCROLL TO DISCOVER <ArrowDownRight size={13}/></span><span>INDEPENDENT CREATIVE / AVAILABLE FOR PROJECTS</span><span>01 — 04</span></div>
   </section>
   <section className="ticker"><div>VIDEO EDITING <i>✳</i> ART DIRECTION <i>✳</i> 3D MOTION <i>✳</i> VISUAL DESIGN <i>✳</i> VIDEO EDITING <i>✳</i> ART DIRECTION <i>✳</i></div></section>
   <section className="project-section" id="projects">
    <div className="section-head"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Projects <i>| times to dudien</i></h2></div><div className="headnote">A collection of experiments,<br/>collaborations and visual stories.</div></div>
    <div className="toolbar"><div className="category-tabs">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?'tab active':'tab'}>{c}{c==='3D Motion'&&<span>↗</span>}</button>)}</div><label className="searchbox"><Search size={14}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects"/><SlidersHorizontal size={13}/></label></div>
    <div className="project-grid">{shown.map((p,i)=><article className="project-card" key={p.id}>
      <button className="thumb" onClick={()=>setSelected(p)}><img src={p.image} alt={p.title} loading="lazy"/><span className="thumb-tag">{p.tag}</span><span className="view-project">VIEW PROJECT <ArrowUpRight size={13}/></span><span className="grid-index">{String(p.id).padStart(2,'0')}</span></button>
      <div className="card-foot"><button className="project-name" onClick={()=>setSelected(p)}><b>{p.title}</b><small>{p.creator} · {p.year}</small></button><button className={saved.includes(p.id)?'heart saved':'heart'} onClick={()=>toggleSave(p.id)} aria-label="Save project"><Heart size={15} fill={saved.includes(p.id)?'currentColor':'none'}/></button></div>
     </article>)}
     {shown.length===0&&<div className="empty">No projects match that search. Try another keyword.</div>}
    </div>
    <div className="project-end"><span>SHOWING {String(shown.length).padStart(2,'0')} / {String(projects.length).padStart(2,'0')} PROJECTS</span><button onClick={()=>{setCategory('All projects');setQuery('')}}>RESET FILTERS <ArrowRight size={13}/></button></div>
   </section>
   <section className="about" id="features"><div className="about-top"><span className="eyebrow">02 / A LITTLE ABOUT ME</span><span>DESIGNER · EDITOR · VISUAL THINKER</span></div><div className="about-grid"><div><h2>I make ideas<br/>look <i>impossible</i><br/>to ignore.</h2><div className="scribble">✳</div></div><div className="about-copy"><p className="lead">A multidisciplinary creative focused on turning ideas into clear, memorable visual experiences.</p><p>I work across video editing, digital design, 3D motion and visual storytelling. My process mixes curiosity with precision: find the core idea, give it a visual language, then make every detail work harder.</p><button className="outlinebtn" onClick={()=>setContactOpen(true)}>LET'S COLLABORATE <ArrowUpRight size={14}/></button></div></div><div className="skills"><span>VIDEO EDITING</span><span>COLOR GRADING</span><span>3D MOTION</span><span>ART DIRECTION</span><span>VISUAL IDENTITY</span><span>STORYTELLING</span></div></section>
   <section className="contact" id="contact"><div className="contact-deco">LET'S<br/><i>MAKE</i><br/>SOMETHING.</div><span className="eyebrow">03 / HAVE A GOOD PROJECT?</span><h2>Let's make<br/><i>something matter.</i></h2><p>Have an idea, a film, or a visual problem that needs solving? Send a note and let's make it happen.</p><button className="blackpill large" onClick={()=>setContactOpen(true)}>START A CONVERSATION <ArrowUpRight size={15}/></button><div className="contact-bottom"><span>GOOD IDEAS START WITH A HELLO.</span><a href="mailto:hello@portfolio.studio">HELLO@PORTFOLIO.STUDIO</a></div></section>
  </main>
  <footer className="footer"><a className="wordmark" href="#home"><span className="mark">◈</span><b>PORTFOLIO</b></a><span>INDEPENDENT CREATIVE STUDIO / 2026</span><div><a href="#projects">PROJECTS</a><a href="#features">ABOUT</a><a href="#contact">CONTACT ↗</a></div><small>© 2026 · DESIGNED WITH INTENTION</small></footer>
  {selected&&<div className="overlay" onClick={()=>setSelected(null)}><div className="detail" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true"><button className="close" onClick={()=>setSelected(null)}><X size={18}/></button><aside><button className="backlink" onClick={()=>setSelected(null)}><ArrowLeft size={13}/> ALL PROJECTS</button><div className="detail-mini"><span>PROJECT / {String(selected.id).padStart(2,'0')}</span><span>{selected.year}</span></div><h2>{selected.title}</h2><p>{selected.description}</p><div className="detail-tags"><span>{selected.category}</span><span>{selected.tag}</span></div><button className="blackpill" onClick={()=>{setSelected(null);setContactOpen(true)}}>DISCUSS A PROJECT <ArrowUpRight size={13}/></button></aside><div className="detail-image"><img src={selected.image} alt={selected.title}/><span>{selected.tag}</span></div></div></div>}
  {contactOpen&&<div className="overlay" onClick={()=>setContactOpen(false)}><div className="contact-modal" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true"><button className="close" onClick={()=>setContactOpen(false)}><X size={18}/></button>{sent?<><span className="eyebrow">MESSAGE READY</span><h2>Thanks for reaching out.</h2><p>Your email app should open with your project inquiry.</p><button className="blackpill" onClick={()=>{setContactOpen(false);setSent(false)}}>CLOSE <Check size={13}/></button></>:<><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Tell me what<br/><i>you're making.</i></h2><form onSubmit={e=>{e.preventDefault();setSent(true);window.location.href='mailto:hello@portfolio.studio?subject=Project%20inquiry'}}><label>YOUR NAME<input required placeholder="Name"/></label><label>YOUR EMAIL<input required type="email" placeholder="you@example.com"/></label><label>PROJECT NOTES<textarea required placeholder="A few words about the idea..." rows={3}/></label><button className="blackpill" type="submit">SEND INQUIRY <ArrowUpRight size={13}/></button></form></>}</div></div>}
 </div>
}
export default App;
