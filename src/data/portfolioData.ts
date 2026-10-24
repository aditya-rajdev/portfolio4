export interface Project {
  id: number;
  title: string;
  category: 'AI Reels' | 'Client Reels' | 'Election & Political' | 'Fashion Reels' | 'Weddings & Events' | 'YouTube Content';
  tag: string;
  year: string;
  image: string;
  videoUrl?: string;
  embedUrl?: string;
  aspectRatio: '9:16' | '16:9';
  description: string;
  client: string;
  tools: string[];
  featured?: boolean;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socials: {
    linkedin: string;
    youtube: string;
    instagram: string;
    github?: string;
  };
  skills: {
    category: string;
    items: string[];
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}

export const profileInfo: ProfileInfo = {
  name: 'DIVYANSHU',
  title: 'Senior Video Editor & Creative Director',
  tagline: 'Crafting High-Impact Visual Stories, AI Reels & Campaign Media',
  bio: 'A passionate Video Editor and Visual Storyteller specializing in cinematic post-production, AI-driven reels, political & election media campaigns, fashion commercials, wedding films, and retention-focused YouTube content. I combine technical mastery in Premiere Pro, After Effects, and DaVinci Resolve with cutting-edge AI video synthesis to turn ideas into unmissable visual experiences.',
  email: 'divyanshu.editor@gmail.com',
  location: 'India',
  socials: {
    linkedin: 'https://linkedin.com/in/divyanshu-editor',
    youtube: 'https://youtube.com/@divyanshu-edits',
    instagram: 'https://instagram.com/divyanshu_edits',
  },
  stats: [
    { label: 'Verified Drive Assets', value: '23+ Real Media Files' },
    { label: 'Editing Software Suite', value: 'Premiere Pro | After Effects | DaVinci' },
    { label: 'Format Mastery', value: '9:16 Vertical Reels & 16:9 Widescreen' },
    { label: 'Specialized Categories', value: 'AI, Commercials, Politics, Fashion, Events' }
  ],
  skills: [
    {
      category: 'Video Post-Production',
      items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut Pro', 'Multi-Cam Editing', 'Speed Ramping']
    },
    {
      category: 'Motion & Visual Effects',
      items: ['Adobe After Effects', 'Keyframing & Lower Thirds', 'Match Moving', 'VFX Compositing', 'Title Animations']
    },
    {
      category: 'AI Video & Next-Gen Tools',
      items: ['Runway Gen-2/Gen-3', 'Midjourney Prompting', 'Pika Labs', 'Topaz Video AI Upscaling', 'AI Voice Synthesis']
    },
    {
      category: 'Color & Audio Design',
      items: ['DaVinci Color Grading', 'LUT Application', 'Audio Noise Reduction', 'Sound Effects & SFX Sync', 'BGM Scoring']
    },
    {
      category: 'Content & Campaign Strategy',
      items: ['YouTube Hook Strategy', 'Political Campaign Framing', 'TikTok & Instagram Reels Retention', 'Visual Storyboarding']
    }
  ]
};

export const projectCategories = [
  'All Projects',
  'AI Reels',
  'Client Reels',
  'Election & Political',
  'Fashion Reels',
  'Weddings & Events',
  'YouTube Content'
] as const;

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Funda-App-1",
    "category": "AI Reels",
    "tag": "AI REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Funda-app-1.jpg",
    "videoUrl": "/drive_assets/AI REELS/Funda-app-1.mp4",
    "description": "Authentic project video file 'Funda-app-1.mp4' from Google Drive assets under AI Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "AI Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": true
  },
  {
    "id": 2,
    "title": "Metaearning6924 (4)",
    "category": "AI Reels",
    "tag": "AI REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_METAEARNING6924_4.jpg",
    "videoUrl": "/drive_assets/AI REELS/METAEARNING6924 (4).mp4",
    "description": "Authentic project video file 'METAEARNING6924 (4).mp4' from Google Drive assets under AI Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "AI Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": true
  },
  {
    "id": 3,
    "title": "Sample Project",
    "category": "AI Reels",
    "tag": "AI REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_SAMPLE_PROJECT.jpg",
    "videoUrl": "/drive_assets/AI REELS/SAMPLE PROJECT.mp4",
    "description": "Authentic project video file 'SAMPLE PROJECT.mp4' from Google Drive assets under AI Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "AI Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": true
  },
  {
    "id": 4,
    "title": "Aagam",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Aagam.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Aagam.mp4",
    "description": "Authentic project video file 'Aagam.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 5,
    "title": "Aman Birthday",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_AMAN_BIRTHDAY.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/AMAN BIRTHDAY.mp4",
    "description": "Authentic project video file 'AMAN BIRTHDAY.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 6,
    "title": "Funda  Ai 1",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Copy_of_FUNDA__AI_1.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Copy of FUNDA_ AI_1.mp4",
    "description": "Authentic project video file 'Copy of FUNDA_ AI_1.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 7,
    "title": "Sample Project",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Copy_of_SAMPLE_PROJECT.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Copy of SAMPLE PROJECT.mp4",
    "description": "Authentic project video file 'Copy of SAMPLE PROJECT.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 8,
    "title": "Crafting Coffee02-",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Crafting_coffee02-.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Crafting coffee02-.mp4",
    "description": "Authentic project video file 'Crafting coffee02-.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 9,
    "title": "Jawed Birthday",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_JAWED_BIRTHDAY.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/JAWED BIRTHDAY.mp4",
    "description": "Authentic project video file 'JAWED BIRTHDAY.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 10,
    "title": "Katha",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_katha_.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/katha .mp4",
    "description": "Authentic project video file 'katha .mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 11,
    "title": "Logo",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_logo.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/logo.mp4",
    "description": "Authentic project video file 'logo.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 12,
    "title": "Matcha",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Matcha.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Matcha.mp4",
    "description": "Authentic project video file 'Matcha.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 13,
    "title": "Pasta",
    "category": "Client Reels",
    "tag": "CLIENT REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_Pasta.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/Pasta.mp4",
    "description": "Authentic project video file 'Pasta.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 14,
    "title": "Programme Highlights Final",
    "category": "Client Reels",
    "tag": "CLIENT REELS / FILM",
    "year": "2025",
    "aspectRatio": "16:9",
    "image": "/thumbnails/thumb_programme_highlights_final.jpg",
    "videoUrl": "/drive_assets/CLIENT REEL/programme highlights final.mp4",
    "description": "Authentic project video file 'programme highlights final.mp4' from Google Drive assets under Client Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Client Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 15,
    "title": "Fashion Reel Final",
    "category": "Fashion Reels",
    "tag": "FASHION REELS / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_FASHION_REEL_FINAL.jpg",
    "videoUrl": "/drive_assets/FASHION REEL/FASHION REEL FINAL.mp4",
    "description": "Authentic project video file 'FASHION REEL FINAL.mp4' from Google Drive assets under Fashion Reels. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Fashion Reels Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 16,
    "title": "Reel 1",
    "category": "Election & Political",
    "tag": "ELECTION & POLITICAL / REEL",
    "year": "2025",
    "aspectRatio": "9:16",
    "image": "/thumbnails/thumb_REEL_1.jpg",
    "videoUrl": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/REEL 1.mp4",
    "description": "Authentic project video file 'REEL 1.mp4' from Google Drive assets under Election & Political. Features custom post-production editing, dynamic cuts, and visual storytelling.",
    "client": "Election & Political Client",
    "tools": [
      "Adobe Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut Pro"
    ],
    "featured": false
  },
  {
    "id": 17,
    "title": "Campaign Poster - Abhar Nabinagar",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Abhar_nabinagar.jpg",
    "description": "Official political campaign poster graphic 'Abhar_nabinagar.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 18,
    "title": "Campaign Poster - Chetan Anand Bihar 78",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Chetan Anand Bihar 78.jpg",
    "description": "Official political campaign poster graphic 'Chetan Anand Bihar 78.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 19,
    "title": "Campaign Poster - Chetan Anand 59",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Chetan_anand_59.jpg",
    "description": "Official political campaign poster graphic 'Chetan_anand_59.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 20,
    "title": "Campaign Poster - Chetan Anand 81",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Chetan_Anand_81.jpg",
    "description": "Official political campaign poster graphic 'Chetan_Anand_81.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 21,
    "title": "Campaign Poster - Chetan Anand 88",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Chetan_anand_88.jpg",
    "description": "Official political campaign poster graphic 'Chetan_anand_88.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 22,
    "title": "Campaign Poster - Dhanyawaad Bihar",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Dhanyawaad_bihar.jpg",
    "description": "Official political campaign poster graphic 'Dhanyawaad_bihar.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  },
  {
    "id": 23,
    "title": "Campaign Poster - Dhanyawad Bihar Chetan Anad",
    "category": "Election & Political",
    "tag": "POLITICAL / GRAPHIC DESIGN",
    "year": "2024",
    "aspectRatio": "16:9",
    "image": "/drive_assets/POLITICAL PROJECTS/ELECTION Project/GRAPHICS/Dhanyawad_bihar_Chetan_anad.jpg",
    "description": "Official political campaign poster graphic 'Dhanyawad_bihar_Chetan_anad.jpg' from the Google Drive election campaign folder.",
    "client": "Election Campaign Committee",
    "tools": [
      "Photoshop",
      "Illustrator"
    ],
    "featured": false
  }
];
