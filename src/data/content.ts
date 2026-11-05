
import { ServiceItem, GalleryImage, PortfolioProject, Testimonial, FAQItem } from '../types';

import heroRoyalWeddingImg from '../assets/images/hero_royal_wedding.jpg';
import weddingStageRoyalImg from '../assets/images/wedding_stage_royal.jpg';
import haldiSangeetDecorImg from '../assets/images/haldi_sangeet_decor.jpg';
import corporateConferenceGalaImg from '../assets/images/corporate_conference_gala.jpg';
import luxuryBirthdayPartyImg from '../assets/images/luxury_birthday_party.jpg';

export const IMAGES = {
  heroRoyalWedding: heroRoyalWeddingImg,
  weddingStageRoyal: weddingStageRoyalImg,
  haldiSangeetDecor: haldiSangeetDecorImg,
  corporateConferenceGala: corporateConferenceGalaImg,
  luxuryBirthdayParty: luxuryBirthdayPartyImg,
};

export const COMPANY_DETAILS = {
  name: 'Event Saathi Weddings India Pvt. Ltd.',
  shortName: 'Event Saathi Weddings',
  establishedYear: '2025',
  headquarters: 'L.C Road, Dhanbad, Jharkhand - 826001',
  phone: '+91 8893870565',
  phoneClean: '918893870565',
  email: 'eventsaathidhanbad@gmail.com',
  workingHours: 'Mon - Sun: 9:00 AM - 9:30 PM (24/7 Event Helpline)',
  tagline: 'Aapke Har Utsav Ka Shahi Saathi',
  hindiMotto: 'हर उत्सव, एक शाही और अविस्मरणीय अनुभव',
  overview:
    'Event Saathi Weddings India Pvt. Ltd. was established in 2025 with headquarters on LC Road, Dhanbad, Jharkhand. We bring royal grandeur, meticulous budget control, and seamless execution to weddings, corporate galas, kitty parties, exhibitions, brand promotions, and government events across Jharkhand & Eastern India.',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'wedding-planning',
    title: 'Full Wedding Planning & Royal Decoration',
    hindiTitle: 'सम्पूर्ण शाही विवाह एवं मंडप सजावट',
    tagline: 'Bespoke end-to-end wedding curation with precise budget & guest management',
    description:
      'From traditional Rajputana & royal palace mandaps to contemporary floral themes, we handle venue scouting, vendor contracts, 3D stage layouts, guest hospitality, baraat coordination, and complete ritual management.',
    iconName: 'Crown',
    image: weddingStageRoyalImg,
    keyFeatures: [
      'Comprehensive budget planning & financial transparency',
      'Guest concierge, RSVP management & airport/station pick-ups',
      'Thematic stage, grand entrance & royal mandap architecture',
      'Catering curation & traditional delicacies coordination',
      'Baraat, fireworks, royal dhol & bridal entry sequencing',
    ],
    idealFor: 'Grand Weddings, Destination Weddings, Reception Galas',
    estimatedBudget: 'Flexible packages starting from ₹2.5 Lakhs to Luxury Bespoke',
    badge: 'Signature Specialty',
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events & Annual Conferences',
    hindiTitle: 'कॉरपोरेट मीट, कॉन्फ़्रेंस एवं अवॉर्ड सेरेमनी',
    tagline: 'High-impact enterprise summits, dealer meets & corporate hospitality',
    description:
      'Professional event management for PSU, mining sector, banking, and private enterprises in Dhanbad & Jharkhand. Includes high-tech AV staging, LED screens, keynote logistics, and VIP hosting.',
    iconName: 'Building2',
    image: corporateConferenceGalaImg,
    keyFeatures: [
      'Ultra-HD LED wall stage sets & crystal audio engineering',
      'Executive delegate badge registration & guest management',
      'Gala award show sequencing, anchoring & entertainment',
      'Corporate gifting & brand compliance',
    ],
    idealFor: 'Annual General Meetings, Award Galas, Dealer Summits, Seminars',
    estimatedBudget: 'Custom packages based on delegate scale',
  },
  {
    id: 'birthday-kitty',
    title: 'Birthday Parties, Kitty Parties & Social Gatherings',
    hindiTitle: 'बर्थडे, किटी पार्टी एवं पारिवारिक उत्सव',
    tagline: 'Intimate, vibrant, and picture-perfect private celebrations',
    description:
      'Specialized planning for kids theme birthdays, milestone 25th/50th celebrations, stylish ladies kitty parties, and family anniversaries with customized themes, games, catering, and bespoke photo corners.',
    iconName: 'Cake',
    image: luxuryBirthdayPartyImg,
    keyFeatures: [
      'Curated themes (Pastel Chic, Boho, Bollywood Glam, Royal Vintage)',
      'Engaging party hosts, themed games & live activities',
      'Customized floral backdrops, neon signages & photo-booths',
      'Handcrafted cake tables, finger food & beverage bar styling',
      'Hassle-free venue setup & same-day breakdown',
    ],
    idealFor: 'Kids 1st Birthdays, Ladies Kitty Clubs, Golden Anniversaries, Roka Parties',
    estimatedBudget: 'Affordable luxury packages starting from ₹25,000',
    badge: 'Popular for Dhanbad Clubs',
  },
  {
    id: 'haldi-mehendi',
    title: 'Haldi, Mehendi & Sangeet Functions',
    hindiTitle: 'हल्दी, मेहंदी एवं संगीतमय शाम',
    tagline: 'Joyous cultural pre-wedding festivities with vibrant festive decor',
    description:
      'Colorful marigold canopies, floral jhula (swings), brass urli bowls, professional Mehendi artists, synchronized sound systems for sangeet dance choreography, and festive guest entertainment.',
    iconName: 'Sparkles',
    image: haldiSangeetDecorImg,
    keyFeatures: [
      'Authentic Phoolon ki Haldi & organic color arrangements',
      'Rajasthani umbrella canopies & festive photobooths',
      'High-grade acoustic sound system & stage for dance performances',
      'Comfortable seating lounges with ethnic cushions and bolsters',
    ],
    idealFor: 'Family Pre-Wedding Rituals, Sangeet Nights, Cocktails',
    estimatedBudget: 'Tailored per gathering scale',
  },
  {
    id: 'exhibition-tradeshows',
    title: 'Exhibitions & Trade Shows',
    hindiTitle: 'प्रदर्शनी एवं ट्रेड शो प्रबंधन',
    tagline: 'Turnkey expo stall fabrication, crowd flow & visitor infrastructure',
    description:
      'Turnkey setup for industrial exhibitions, handloom expos, mineral & mining summits, and commercial vendor stalls with German hangar structures, octanorm stalls, electricals, and visitor control.',
    iconName: 'Store',
    image: corporateConferenceGalaImg,
    keyFeatures: [
      'Weather-proof German hanger pavilions & octanorm modular booths',
      'Heavy-duty 3-phase power backup & industrial lighting',
      'Security barriers, ticketing counters & fire compliance',
      'Outdoor branding banners & digital registration desks',
    ],
    idealFor: 'Industrial Expos, Education Fairs, Gem & Jewellery Shows',
    estimatedBudget: 'Per sq. ft. commercial rates',
  },
  {
    id: 'product-launches',
    title: 'Product Launches & Brand Activations',
    hindiTitle: 'प्रोडक्ट लॉन्च एवं ब्रांड एक्टिवेशन',
    tagline: 'High-energy reveals that generate instant buzz and media spotlight',
    description:
      'Dynamic unveilings for automobile showrooms, retail outlets, electronics, and consumer brands in Dhanbad and surrounding districts with dramatic hydraulic reveals, pyrotechnics, and press conference staging.',
    iconName: 'Rocket',
    image: corporateConferenceGalaImg,
    keyFeatures: [
      'Dramatic drop-sheet or mechanical product unveilings',
      'Cold pyro and CO2 stage special effects',
      'Media backdrop, press kit distribution & live streaming',
      'Promotional hostesses & brand ambassadors management',
    ],
    idealFor: 'New Showroom Launches, Vehicle Unveils, Flagship Stores',
    estimatedBudget: 'Custom campaign pricing',
  },
  {
    id: 'concerts-entertainment',
    title: 'Concerts & Live Entertainment',
    hindiTitle: 'लाइव कॉन्सर्ट एवं सेलिब्रिटी नाइट',
    tagline: 'Stadium-scale sound, intelligent concert lighting, and artist handling',
    description:
      'Executing music festivals, Dandiya nights, Bollywood celebrity concerts, and college cultural fests with line-array audio systems, trussing, artist green rooms, and crowd control barricades.',
    iconName: 'Music',
    image: heroRoyalWeddingImg,
    keyFeatures: [
      'JBL / Meyer Sound line array systems & digital audio consoles',
      'Intelligent beam, wash, and laser lighting consoles',
      'VIP lounge fabrication & artist hospitality logistics',
      'Police permissions, bouncers & crowd management plans',
    ],
    idealFor: 'Dandiya Celebrations, College Fests, Music Concerts, Public Shows',
    estimatedBudget: 'Scalable from college scale to stadium scale',
  },
  {
    id: 'government-brand-promotions',
    title: 'Government Events & Brand Promotion Marketing',
    hindiTitle: 'सरकारी समारोह एवं ब्रांड प्रमोशन मार्केटिंग',
    tagline: 'Protocol-adherent state ceremonies and high-visibility roadshows',
    description:
      'Organizing official foundation stone laying ceremonies, state inaugurations, public distribution programs, mobile promotional vans, mall activations, and street flyer campaigns with disciplined protocol.',
    iconName: 'Award',
    image: corporateConferenceGalaImg,
    keyFeatures: [
      'Strict adherence to VIP and government state protocols',
      'Bullet-proof or raised VIP dais fabrication and green rooms',
      'Mobile canter promotional vans with sound systems',
      'Pamphlet distribution, street banners & hoardings logistics',
    ],
    idealFor: 'Government Inagurations, Public Awareness Drives, FMCG Roadshows',
    estimatedBudget: 'Tender & corporate standard rates',
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'The Grand Royal Vivah Mandap',
    category: 'weddings',
    categoryLabel: 'Royal Weddings',
    location: 'Heritage Palace Lawn, Dhanbad',
    date: '2025 Season',
    imageUrl: heroRoyalWeddingImg,
    fallbackUrl: './assets/images/wedding_stage_royal.jpg',
    description: 'Bespoke 360-degree floral dome with 5,000+ handpicked red roses and golden royal arches for an elite Dhanbad industrialist family.',
    tags: ['Mandap', 'Royal Gold', 'Palace Decor', 'Chandelier'],
  },
  {
    id: 'gal-2',
    title: 'Royal Jharokha Reception Stage',
    category: 'weddings',
    categoryLabel: 'Royal Weddings',
    location: 'Dhanbad Club Grounds, Jharkhand',
    date: '2025 Edition',
    imageUrl: weddingStageRoyalImg,
    fallbackUrl: './assets/images/hero_royal_wedding.jpg',
    description: 'Crimson velvet draping with handcrafted golden arches, crystal chandeliers, and opulent floral accents.',
    tags: ['Stage Design', 'Velvet Maroon', 'Jharokha', 'Reception'],
  },
  {
    id: 'gal-3',
    title: 'Sunlit Marigold Haldi & Sangeet Canopy',
    category: 'haldi_sangeet',
    categoryLabel: 'Haldi & Sangeet',
    location: 'Resort Greens, LC Road Dhanbad',
    date: '2025 Spring',
    imageUrl: haldiSangeetDecorImg,
    fallbackUrl: './assets/images/hero_royal_wedding.jpg',
    description: 'Festive marigold strings, brass urli bowls with floating fresh rose petals, and ethnic cushions for Haldi celebration.',
    tags: ['Haldi Decor', 'Marigold', 'Brass Urli', 'Traditional'],
  },
  {
    id: 'gal-4',
    title: 'Jharkhand Leadership Summit & Gala',
    category: 'corporate',
    categoryLabel: 'Corporate & Conferences',
    location: 'Grand Convention Hall, Dhanbad',
    date: '2025 Corporate Meet',
    imageUrl: corporateConferenceGalaImg,
    fallbackUrl: './assets/images/hero_royal_wedding.jpg',
    description: 'High-tech corporate stage setup featuring seamless 4K LED backdrop, intelligent beam lighting, and round banquet seating for 350 delegates.',
    tags: ['Corporate', 'LED Wall', 'Awards Night', 'Audio Visual'],
  },
  {
    id: 'gal-5',
    title: 'Blush Gold Boutique Birthday & Kitty Party',
    category: 'birthdays_kitty',
    categoryLabel: 'Birthdays & Kitty Parties',
    location: 'Private Banquet Suite, Dhanbad',
    date: '2025 Special',
    imageUrl: luxuryBirthdayPartyImg,
    fallbackUrl: './assets/images/wedding_stage_royal.jpg',
    description: 'Chic golden circular arch with organic balloon garland, customized cake pedestal, and romantic fairy light curtain.',
    tags: ['Birthday', 'Kitty Party', 'Balloon Art', 'Pastel Decor'],
  },
  {
    id: 'gal-6',
    title: 'Regal Sangeet Musical Night Stage',
    category: 'haldi_sangeet',
    categoryLabel: 'Haldi & Sangeet',
    location: 'Bokaro-Dhanbad Highway Resort',
    date: '2025 Winter',
    imageUrl: heroRoyalWeddingImg,
    fallbackUrl: './assets/images/haldi_sangeet_decor.jpg',
    description: 'Live performance dance stage equipped with intelligent moving lights, haze machines, and acoustic precision audio.',
    tags: ['Sangeet', 'Dance Floor', 'Night Ambiance', 'Lighting'],
  },
  {
    id: 'gal-7',
    title: 'Automobile & Brand Expo Pavilion',
    category: 'concerts_exhibitions',
    categoryLabel: 'Concerts & Exhibitions',
    location: 'Golf Ground, Dhanbad',
    date: '2025 Expo',
    imageUrl: corporateConferenceGalaImg,
    fallbackUrl: './assets/images/wedding_stage_royal.jpg',
    description: 'Turnkey exhibition setup featuring air-cooled German hanger domes, branded octanorm stalls, and visitor lounge.',
    tags: ['Exhibition', 'Brand Launch', 'German Hanger', 'Stall Setup'],
  },
  {
    id: 'gal-8',
    title: 'Royal Destination Vivah Entryway',
    category: 'weddings',
    categoryLabel: 'Royal Weddings',
    location: 'Royal Heritage Lawn, Jharkhand',
    date: '2025 Edition',
    imageUrl: weddingStageRoyalImg,
    fallbackUrl: './assets/images/hero_royal_wedding.jpg',
    description: 'Grand gateway with classical stone columns, red velvet carpets, brass diya stands, and fresh tuberose aromas.',
    tags: ['Entrance Decor', 'Royal Walkway', 'Floral Grandeur'],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'The Royal Agarwal & Singhania Vivah',
    clientType: 'High-Profile Wedding',
    venue: 'Dhanbad Club Grounds',
    city: 'Dhanbad, Jharkhand',
    guestsCount: '1,200 Guests',
    timeline: '3 Days (Mehendi, Sangeet, Royal Vivah)',
    description:
      'Complete end-to-end management of an opulent 3-day wedding celebration. Designed an authentic Jaipur-inspired royal palace mandap, handled 150 hotel room check-ins, VIP security, and bespoke culinary stalls from Delhi & Kolkata.',
    highlightMetric: '100%',
    metricLabel: 'On-Schedule Timeline Execution',
    coverImage: heroRoyalWeddingImg,
    scopeOfWork: [
      'Royal Rajputana Mandap & 360-degree floral dome',
      'Guest hospitality desk at Dhanbad Railway Station & Ranchi Airport',
      'Multi-cuisine catering vendor coordination for 1,200+ guests',
      'Grand bridal entry with dry-ice fog and royal chhatri',
    ],
  },
  {
    id: 'project-2',
    title: 'Jharkhand Mining & Tech Leaders Summit',
    clientType: 'Corporate Annual Conclave',
    venue: 'Executive Convention Centre',
    city: 'Dhanbad, Jharkhand',
    guestsCount: '450 Delegates',
    timeline: '2 Days Conclave + Awards Gala Dinner',
    description:
      'Organized an enterprise-grade corporate summit for industrial decision-makers. Seamless dual-screen 4K projection, simultaneous audio interpretation, VIP lounge security, and gala evening entertainment.',
    highlightMetric: '450+',
    metricLabel: 'Senior Industry Delegates Hosted',
    coverImage: corporateConferenceGalaImg,
    scopeOfWork: [
      'High-definition LED backdrop and digital podiums',
      'QR-code badge scanning and delegate registration kiosks',
      'VIP protocol liaison with district administration',
      'Formal banquet styling and awards ceremony orchestration',
    ],
  },
  {
    id: 'project-3',
    title: 'Celebrity Dandiya & Festive Cultural Night',
    clientType: 'Mega Entertainment & Concert',
    venue: 'Open Arena Grounds',
    city: 'LC Road Environs, Dhanbad',
    guestsCount: '2,800 Attendees',
    timeline: 'Evening Mega Event (6 PM - 12 AM)',
    description:
      'Turnkey management of a high-energy festive night featuring celebrity singers, synchronized light laser shows, food street pavilions, and robust crowd barricading.',
    highlightMetric: '2,800+',
    metricLabel: 'Joyous Participants Managed Safely',
    coverImage: haldiSangeetDecorImg,
    scopeOfWork: [
      '30-feet trussing with intelligent beam & sharpie fixtures',
      'Dedicated women & family safe enclosures with trained security',
      '20+ local food vendor stalls curation & hygiene audit',
      'Artist liaison, green room setup & stage management',
    ],
  },
  {
    id: 'project-4',
    title: 'Boutique Kitty Fiesta & Milestone Birthday',
    clientType: 'Private VIP Celebration',
    venue: 'Luxury Banquet Suite',
    city: 'Dhanbad, Jharkhand',
    guestsCount: '80 Guests',
    timeline: 'Evening Celebration',
    description:
      'Crafted an ultra-stylish Parisian floral theme for an exclusive ladies kitty club combined with a 40th birthday surprise, featuring live acoustic music, customized mocktail bar, and personalized souvenir boxes.',
    highlightMetric: '10/10',
    metricLabel: 'Client Satisfaction Rating',
    coverImage: luxuryBirthdayPartyImg,
    scopeOfWork: [
      'Customized neon photo-booth with organic pastel balloons',
      'Personalized table runners, menu cards & luxury cutlery',
      'Engaging anchor and customized musical bingo trivia',
      'Gourmet dessert table curation',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Er. Rajesh Kumar Sharma',
    occasion: 'Daughter’s Royal Wedding (1,200 Guests)',
    location: 'LC Road, Dhanbad',
    rating: 5,
    review:
      'Event Saathi Weddings handled everything from the mandap decoration to guest reception with royal perfection. We did not have to worry about a single detail on the wedding day. Their budget planning saved us at least 15% without compromising luxury!',
    date: 'February 2025',
  },
  {
    id: 't-2',
    clientName: 'Priya & Vivek Sinha',
    occasion: 'Grand Haldi & Sangeet Ceremony',
    location: 'Dhanbad, Jharkhand',
    rating: 5,
    review:
      'The marigold floral setup and the Sangeet stage were straight out of a Bollywood dream! The team is so courteous and attentive. Our guests still praise the Haldi photo booth and the seamless dance sequencing.',
    date: 'January 2025',
  },
  {
    id: 't-3',
    clientName: 'Anand Verma',
    occasion: 'Director, Industrial Solutions Conclave',
    location: 'Bank More, Dhanbad',
    rating: 5,
    review:
      'Event Saathi demonstrated high corporate professionalism for our annual conference. Punctual LED setup, clear audio, and crisp delegate badges. Dhanbad finally has an event company of national standards!',
    date: 'March 2025',
  },
  {
    id: 't-4',
    clientName: 'Sunita Mehra',
    occasion: 'Dhanbad Ladies Kitty Club Gala & 1st Birthday',
    location: 'Park Market Area, Dhanbad',
    rating: 5,
    review:
      'Our Kitty Party was so chic and classy! The balloon installation and customized game host made everyone enjoy non-stop. Highly recommend Event Saathi for all small and grand party functions.',
    date: 'April 2025',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Event Saathi Weddings kin-kin services ko provide karti hai?',
    answer:
      'Hum Full Wedding Planning (Mandap, Decor, Guest & Budget Management), Haldi & Sangeet functions, Corporate Conferences, Birthday Parties, Kitty Parties, Small Family Functions, Exhibitions & Trade Shows, Product Launches, Concerts aur Government Events ki complete end-to-end planning provide karte hain.',
    category: 'Services',
  },
  {
    question: 'Aapka office kahan par sthit hai aur kya hum milne aa sakte hain?',
    answer:
      'Humara office L.C Road, Dhanbad, Jharkhand - 826001 par sthit hai. Aap humare office Monday se Sunday subah 9:00 AM se raat 9:30 PM ke beech aa sakte hain ya +91 8893870565 par call karke ek dedicated consultation slot book kar sakte hain.',
    category: 'Location',
  },
  {
    question: 'Humara budget limited hai, kya aap budget-friendly planning karte hain?',
    answer:
      'Ji bilkul! Event Saathi ka core principle hi "Transparent Budget & Guest Management" hai. Hum client ke budget ke anusaar customized packages banate hain—chahe ₹25,000 ka intimate birthday function ho ya ₹25 Lakhs ka royal wedding extravaganza.',
    category: 'Budget',
  },
  {
    question: 'Booking karne ke liye hume kitna advance time chahiye hota hai?',
    answer:
      'Shahi Vivah aur Corporate Conferences ke liye 1 se 3 mahine pehle book karna behtar hota hai taaki dates aur best vendors secure ho sakein. Birthday aur Kitty parties ke liye hum 3 se 7 din ke notice par bhi behtareen setup deliver karte hain.',
    category: 'Booking',
  },
  {
    question: 'Kya aap Dhanbad ke alawa dusre shahron mein bhi kaam karte hain?',
    answer:
      'Haan, hum Dhanbad ke alawa Bokaro, Ranchi, Jamshedpur, Giridih, Hazaribagh, Asansol aur poore Jharkhand va Eastern India mein destination weddings aur corporate events execute karte hain.',
    category: 'Coverage',
  },
];
