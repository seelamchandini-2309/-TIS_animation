export interface SportItem {
  id: string;
  name: string;
  category: 'olympic' | 'adventure' | 'precision' | 'team';
  tagline: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface CampusHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  stats: string;
  image: string;
  highlights: string[];
  panoramaUrl?: string;
  coordinates: { x: number; y: number }; // percentage on map
}

export interface DayScheduleItem {
  time: string;
  title: string;
  category: 'wellness' | 'academic' | 'sports' | 'recreation' | 'night';
  description: string;
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: 'parent' | 'alumni' | 'student';
  gradeOrYear: string;
  quote: string;
  avatar: string;
  achievement?: string;
}

export const TIS_STATS = [
  { value: 22, suffix: '+ Acres', label: 'Lush Himalayan Campus', sub: 'Pollution-free ecosystem in Dehradun' },
  { value: 16, suffix: '+ Sports', label: 'Olympic & Modern Sports', sub: 'Dedicated coaches & tournament grounds' },
  { value: 8, suffix: ':1 Ratio', label: 'Student-Teacher Mentorship', sub: 'Personalized holistic attention' },
  { value: 100, suffix: '% Placed', label: 'Global University Acceptance', sub: 'Ivy League, IITs & premier colleges' },
  { value: 20000, suffix: '+ Books', label: 'World-Class Central Library', sub: 'Digital & archival research center' },
];

export const PILLARS_DATA = [
  {
    id: 'mind',
    title: 'Mind (Dhi)',
    tagline: 'Academic Brilliance & Critical Thinking',
    icon: 'BrainCircuit',
    accentColor: 'from-amber-500 to-yellow-600',
    description: 'A transformative curriculum rooted in CBSE excellence and augmented with international methodologies, STEM robotics, AI workshops, and project-based experiential learning.',
    bullets: [
      'Smart Digital Classrooms & Subject-Specific Workstations',
      'Advanced Physics, Chemistry, Biology & Robotics Labs',
      'Oxford Reading Tree & Intensive Communication Mastery',
      'Olympiad, SAT, IIT-JEE & NEET Integrated Guidance'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    quote: 'Knowledge is not just memorization; it is the art of questioning, synthesizing, and creating.'
  },
  {
    id: 'body',
    title: 'Body (Shakti)',
    tagline: 'Physical Fortitude & Olympic Discipline',
    icon: 'Trophy',
    accentColor: 'from-emerald-500 to-teal-700',
    description: 'Comprehensive sports infrastructure designed to instill resilience, tactical strategy, teamwork, and athletic mastery under national-level coaches.',
    bullets: [
      'In-house Royal Equestrian Horse Riding Arena & Stables',
      '10m Precision Air Rifle Shooting Range',
      'Half-Olympic Swimming Pool with Certified Lifeguards',
      'Floodlit Cricket Pavilion, Football Turf & Synthetic Tennis Courts'
    ],
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
    quote: 'A vigorous body is the true temple of an enlightened and disciplined mind.'
  },
  {
    id: 'soul',
    title: 'Soul (Satva)',
    tagline: 'Ancient Gurukul Wisdom & Character Building',
    icon: 'Sparkles',
    accentColor: 'from-orange-500 to-amber-700',
    description: 'Preserving the sacred Guru-Shishya parampara. We cultivate emotional intelligence, mindfulness, Vedic philosophy, and deep moral compass.',
    bullets: [
      'Daily Morning Pranayama, Yoga & Guided Meditation',
      'Organic Campus Farming & Environmental Stewardship',
      'Value-Driven Mentorship by Resident Housemasters',
      'Community Service, SEWA & Rural Outreach Programs'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    quote: 'Nurturing compassionate humans who lead with integrity, empathy, and wisdom.'
  },
  {
    id: 'global',
    title: 'Global Edge (Vishwa)',
    tagline: '21st Century World-Ready Leadership',
    icon: 'Globe2',
    accentColor: 'from-blue-500 to-indigo-700',
    description: 'Empowering future global diplomats, entrepreneurs, and scholars through international forums, cross-cultural student exchanges, and career mastery.',
    bullets: [
      'Model United Nations (MUN) Conferences & Youth Debates',
      'Foreign Language Immersion (French, German, Spanish)',
      'Design Thinking, Coding & Fintech Hackathons',
      'Direct Counseling for Top US, UK, Canada & Indian Universities'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    quote: 'Rooted in timeless heritage, poised to conquer global frontiers.'
  }
];

export const CAMPUS_HOTSPOTS: CampusHotspot[] = [
  {
    id: 'academic-tower',
    title: 'Academic Conclave & Smart Labs',
    subtitle: 'The Core Learning Nexus',
    category: 'Academics',
    stats: '35+ Smart Tech Classrooms',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    description: 'Architecturally designed for natural light and ventilation, housing modern digital workstations, robotic stations, and physics/chemistry/biology experimental zones.',
    highlights: ['4K Interactive Smartboards', 'Robotics & AI Innovation Hub', 'Ergonomic Acoustic Desks', 'High-Speed Wi-Fi 6'],
    coordinates: { x: 38, y: 35 }
  },
  {
    id: 'equestrian-arena',
    title: 'Royal Equestrian Arena & Stables',
    subtitle: 'Premier Horse Riding Academy',
    category: 'Sports',
    stats: '15 Thoroughbred Horses & Sand Arena',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
    description: 'One of the very few boarding schools in North India offering professional dressage, show jumping, and equestrian training under certified master riders.',
    highlights: ['International Regulation Sand Ring', 'Expert Grooming & Veterinary Care', 'Equestrian Show Jumping Gear', 'Beginner to Advanced Tracks'],
    coordinates: { x: 72, y: 25 }
  },
  {
    id: 'aquatic-sports',
    title: 'Olympic Swimming Complex & Sports Pavilion',
    subtitle: 'Multi-Discipline Athletic Arena',
    category: 'Sports',
    stats: '6-Lane Temperature Regulated Pool',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1200&q=80',
    description: 'State-of-the-art sports arena featuring an Olympic-grade swimming pool, FIFA-standard football ground, floodlit cricket nets, and indoor squash & badminton courts.',
    highlights: ['Certified Lifeguards & Coaches', 'Automated Water Filtration', 'Spectator Grandstand', 'Night Floodlit Practice Nets'],
    coordinates: { x: 22, y: 65 }
  },
  {
    id: 'library-tower',
    title: 'Central Gurukul Library & Research Hub',
    subtitle: 'Sanctuary of Infinite Wisdom',
    category: 'Knowledge',
    stats: '20,000+ Printed & Digital Resources',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanning two tranquil floors, our library features quiet reading nooks, EBSCO online research journals, rare manuscripts, and modern literary collections.',
    highlights: ['Kindle E-Reading Pods', 'Research Paper Archive', 'Co-working Brainstorm Lounges', 'Audiobook Listening Stations'],
    coordinates: { x: 55, y: 50 }
  },
  {
    id: 'boarding-residences',
    title: 'Executive Residential Hostels & Dining Hall',
    subtitle: 'Safe, Warm & Homely Living',
    category: 'Boarding Life',
    stats: 'Separate Boys & Girls Residences',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Air-conditioned and air-cooled comfortable dormitories with attached study spaces, 24/7 warm water, pastoral care by resident wardens, and organic dining.',
    highlights: ['4-Tier Biometric & CCTV Security', '24/7 Doctor & 10-Bed Infirmary', 'Nutritious Multi-Cuisine Menu', 'Dedicated Laundry & Housekeeping'],
    coordinates: { x: 80, y: 70 }
  },
  {
    id: 'amphitheatre-himalayas',
    title: 'Open-Air Amphitheatre & Sunset Deck',
    subtitle: 'Creativity Under Himalayan Skies',
    category: 'Arts & Culture',
    stats: '800-Seater Scenic Arena',
    image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    description: 'Perched overlooking the serene Mussoorie hills, the amphitheatre is the vibrant heart for music festivals, theatrical plays, rock bands, and celestial stargazing nights.',
    highlights: ['Acoustic Mountain Backdrop', 'Surround Sound Audio System', 'Stargazing Telescope Deck', 'Annual Cultural Fest Venue'],
    coordinates: { x: 45, y: 82 }
  }
];

export const SPORTS_COLLECTION: SportItem[] = [
  {
    id: 'equestrian',
    name: 'Horse Riding & Equestrian',
    category: 'precision',
    tagline: 'Elegance, Balance & Royal Mastery',
    description: 'Full-fledged training in trot, canter, gallop, and show jumping with trained horses and experienced equestrian masters.',
    features: ['Professional Saddlery', 'Show Jumping Track', 'Horse Care & Bonding'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    badge: 'Signature Sport'
  },
  {
    id: 'shooting',
    name: 'Precision Air Rifle Shooting',
    category: 'precision',
    tagline: 'Focus, Breathing & Unshakable Calm',
    description: 'Indoor 10-meter shooting range equipped with electronic target scoring for national rifle and pistol championships.',
    features: ['Electronic Targets', 'Imported Precision Rifles', 'National Medalist Coach'],
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80',
    badge: 'National League'
  },
  {
    id: 'swimming',
    name: 'All-Weather Swimming Pool',
    category: 'olympic',
    tagline: 'Hydrodynamics & Endurance',
    description: '6-lane swimming pool with certified stroke correction coaches, timing pads, and survival safety drills.',
    features: ['Heated Water Control', 'Life Safety Certifications', 'Inter-School Galas'],
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cricket',
    name: 'Cricket Academy & Turf Nets',
    category: 'team',
    tagline: 'Passion, Strategy & Power Hitting',
    description: 'Full-size cricket oval with both turf and cemented pitches, bowling machines, and video analysis for technique.',
    features: ['Night Floodlights', 'Automatic Bowling Machines', 'BCCI Level Coaching'],
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'football',
    name: 'FIFA-Standard Football Turf',
    category: 'team',
    tagline: 'Agility, Speed & Fluid Teamwork',
    description: 'Lush green full-size football field hosting regional tournaments, tactical drills, and seasonal championships.',
    features: ['All-Weather Drainage', 'Tactical Video Review', 'International Friendlies'],
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lawn-tennis',
    name: 'Synthetic Lawn Tennis Courts',
    category: 'olympic',
    tagline: 'Reflexes, Stamina & Precision Serves',
    description: 'ITF standard synthetic courts for singles and doubles training with ball machines and tournament exposure.',
    features: ['DecoTurf Surface', 'Serving Speed Radar', 'Junior Tournament Circuit'],
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'taekwondo',
    name: 'Taekwondo & Martial Arts Dojo',
    category: 'precision',
    tagline: 'Discipline, Agility & Self-Defense',
    description: 'Dedicated padded dojo teaching traditional forms, sparring, belt grading, and unyielding self-confidence.',
    features: ['Black Belt Instructors', 'Official Belt Certifications', 'State Championship Medals'],
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'squash-badminton',
    name: 'Glass Squash & Badminton Arena',
    category: 'olympic',
    tagline: 'Explosive Speed & Sharp Angles',
    description: 'Indoor wooden-floored courts with climate control, anti-glare illumination, and international coaching drills.',
    features: ['Teak Wood Spring Flooring', 'Acoustic Soundproofing', 'Year-Round Leagues'],
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80'
  }
];

export const DAILY_ROUTINE: DayScheduleItem[] = [
  {
    time: '06:00 AM',
    title: 'Morning Awakening & Himalayan Pranayama',
    category: 'wellness',
    description: 'Students wake to crisp mountain air, followed by gentle stretches, Surya Namaskar, and silent mindfulness meditation.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '07:30 AM',
    title: 'Nutritious Farm-to-Table Breakfast',
    category: 'wellness',
    description: 'Wholesome buffet curated by pediatric nutritionists featuring fresh dairy, organic fruits, cereals, and hot breakfast specials.',
    iconName: 'Utensils',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '08:30 AM - 01:30 PM',
    title: 'Academic Immersion & Experiential Labs',
    category: 'academic',
    description: 'Interactive classrooms, STEM workshops, literature discussions, and laboratory experiments with faculty mentors.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '02:00 PM - 03:00 PM',
    title: 'Wholesome Lunch & Pastoral Mentorship',
    category: 'wellness',
    description: 'Community lunch in the royal dining hall where students interact with resident teachers and housemasters.',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '03:30 PM - 05:30 PM',
    title: 'Olympic Sports & Equestrian Practice',
    category: 'sports',
    description: 'Daily training across 16+ sports disciplines: horse riding, shooting, swimming, football, cricket, and archery.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '06:00 PM - 07:30 PM',
    title: 'Fine Arts, Music Conservatory & Clubs',
    category: 'recreation',
    description: 'Vocal/instrumental music, Indian classical & western dance, pottery, drama theatre, robotics club, and debate society.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '07:30 PM - 09:00 PM',
    title: 'Supervised Evening Prep & Dinner',
    category: 'academic',
    description: 'Quiet study hours with subject teachers on hand for one-on-one doubt clearance, followed by a warm family dinner.',
    iconName: 'Moon',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    time: '09:30 PM',
    title: 'Night Reflection & Lights Out',
    category: 'night',
    description: 'Casual bonding in the hostel lounge, journaling, book reading, and peaceful sleep in secure, comfortable dorms.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rajesh & Sunita Sharma',
    role: 'Parents of Rohan (Grade XI - Medical Stream)',
    relation: 'parent',
    gradeOrYear: 'Parent since 2022',
    quote: "Sending our son to Tula's International School was the single best decision for his character and ambition. The Modern Gurukul values, combined with top-tier science labs and horse riding, transformed him into a disciplined, confident young man.",
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    achievement: 'Son ranked top 1% in National Science Olympiad'
  },
  {
    id: '2',
    name: 'Ananya Verma',
    role: 'Alumna (Batch of 2023)',
    relation: 'alumni',
    gradeOrYear: 'Currently at University of Toronto (Computer Science)',
    quote: "TIS didn't just prepare me for board exams; it taught me how to think globally, debate with poise at MUNs, and stay grounded. The campus surrounded by Himalayan hills is an experience you cherish forever.",
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    achievement: 'Received 100% International Merit Scholarship'
  },
  {
    id: '3',
    name: 'Brigadier Vikrant Singh (Retd.)',
    role: 'Parent of Kabir (Grade IX)',
    relation: 'parent',
    gradeOrYear: 'Parent since 2021',
    quote: "As an army officer, discipline and physical fitness matter most to me. TIS's 16+ sports infrastructure, especially the precision shooting range and equestrian academy, is unmatched in North India.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    achievement: 'Son won Gold in Uttarakhand State Shooting Meet'
  },
  {
    id: '4',
    name: 'Devansh Khandelwal',
    role: 'Head Boy (Grade XII - Commerce)',
    relation: 'student',
    gradeOrYear: 'Class of 2026',
    quote: "At Tula's, teachers are our true Gurus and mentors. From morning yoga to late-night doubt sessions in the hostel, the family atmosphere makes you feel so supported.",
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    achievement: 'Founder of TIS Student FinTech & Economics Club'
  }
];

export const AWARDS_LIST = [
  {
    title: 'Ranked #1 Co-Ed Boarding School',
    organization: 'Education Today Awards',
    year: '2025 - 2026',
    icon: 'Award',
    badge: 'Uttarakhand State Rank 1'
  },
  {
    title: 'Top Residential School for Sports Infrastructure',
    organization: 'Outlook Education Conclave',
    year: '2024 - 2025',
    icon: 'Trophy',
    badge: 'North India Winner'
  },
  {
    title: 'Excellence in Modern Gurukul Pedagogy',
    organization: 'World Education Summit',
    year: '2025',
    icon: 'Star',
    badge: 'National Honor'
  },
  {
    title: 'Green & Sustainable Campus Award',
    organization: 'Eco-Schools International Forum',
    year: '2025',
    icon: 'ShieldCheck',
    badge: 'Himalayan Clean Air Certified'
  }
];

export const FAQS = [
  {
    q: 'What is the "Modern Gurukul" philosophy at Tula’s International School?',
    a: 'The Modern Gurukul blends the timeless values of the ancient Indian Gurukul system (mentor-student bonding, holistic character, mindfulness, discipline) with cutting-edge 21st-century infrastructure, digital smartboards, STEM robotics, and international university pathways.'
  },
  {
    q: 'Which grades are admitted and what board affiliations are offered?',
    a: 'TIS admits students from Grade IV to Grade XII. We are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, while incorporating Cambridge and global benchmarks for international readiness.'
  },
  {
    q: 'How safe is the campus and what medical facilities are available?',
    a: 'The 22-acre campus has 24/7 security with CCTV surveillance, gated biometric access, and resident housemasters. We maintain a 10-bed in-house medical infirmary staffed around the clock with qualified doctors, nursing staff, and an ambulance on standby with tied-up super-specialty hospitals in Dehradun.'
  },
  {
    q: 'Are both Indian and International / NRI students eligible for admission?',
    a: 'Yes! TIS welcomes students from over 15+ countries and all Indian states. We have a dedicated International Student Cell that assists with visas, travel logistics, cultural acclimatization, and specialized English language bridging courses.'
  },
  {
    q: 'How can parents schedule a physical or virtual campus tour?',
    a: 'You can book an immediate virtual 360° tour via our online portal or schedule a private physical campus walk in Dehradun with our Senior Admissions Director via our helpline (+91-9837983791) or instant online enquiry form.'
  }
];
