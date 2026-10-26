import type { Experience } from '../types'

export const experiences: Experience[] = [

  {
    title: 'Teaching Assistant',
    company: 'Design and Manufacturing Lab, UF',
    location: 'Gainesville, FL',
    period: 'Aug 2024 – Present',
    logo: '/pictures/uf-logo.png',
    website: 'https://web.mae.ufl.edu/designlab/',
    description: [
      'Teach and run the lab for groups of four students through a semester-long build of compressed-air engines, mentoring each team from first cut to final assembly and reviewing their drawings and reports for DFMA.'
    ],
    tags: ['Teaching & Mentoring', 'Manual & CNC Machining', 'DFMA', 'GD&T', 'Shop Safety'],
    personalNote: "I have a passion for teaching, and it is deeply gratifying to see my students grow as much as my friendship and connection with them grows too.",
    hasTeachingGallery: true,
    details: {

      fullDescription: [
        `At the University of Florida’s Design & Manufacturing Lab (DML), I serve in a hands-on teaching and leadership role focused on bridging the gap between classroom theory and real-world engineering practice. Each semester, I directly train and mentor a group of students on manual mills and lathes, emphasizing safe operation, process planning, and practical shop decision-making.

        Beyond machine operation, I teach students how to design components with manufacturing in mind, integrating mechanics of materials, design for manufacturability, GD&T, production cost awareness, and realistic manufacturing timelines. The goal is to shift their mindset from completing assignments to thinking like practicing engineers and business owners responsible for performance, cost, and feasibility.

        In addition to instruction, I evaluate homework and long-form design projects that mirror industry deliverables. My feedback is framed through a leadership and business lens: what a board of directors or technical leadership team would expect if this work were submitted in a real company, and how design decisions translate into quality, impact, and accountability. The focus is on developing engineers who take ownership of their work, communicate clearly, and consistently deliver high-quality solutions under real-world constraints.`

      ],
      image: '',
    }
  },
      {
    title: 'IPT Power Plant & Mechanical Systems Engineering Intern',
    company: 'Piper Aircraft Inc.',
    location: 'Vero Beach, FL',
    period: 'Jan 2025 – May 2025',
    logo: '/pictures/piper-logo.png',
    website: 'https://www.piper.com',
    description: [
      'Modeled brake-rotor temperature from ~47,000 sensor readings with a Runge-Kutta solver and mini-batch SGD, built a Python sensor-data pipeline, set up VR flight-sim aircraft for pilot evaluation, and reverse-engineered an oleo strut in Siemens NX.'
    ],
    tags: ['Python', 'Numerical Methods', 'Data Pipelines', 'Siemens NX', 'Metrology', 'Flight Simulation'],
    details: {
      fullDescription: [
        `During my time at Piper Aircraft, I worked with real aircraft systems and large sets of engineering data, focusing on building tools and models that made complex information easier to understand and use. I developed a Python based heat analysis tool to study how aircraft brakes warm up over time using test data. This allowed engineers to better visualize trends and chose appropriate brake rotor dimensions for a POC Aircraft.

          In parallel, I performed detailed measurement and reverse engineering work on aircraft components. A major project involved an aftermarket oleo strut system, where I carefully measured parts and recreated them in CAD so the digital models accurately reflected the physical hardware. I also designed brackets for the parking brake system, working closely with representatives from Beringer to ensure the designs met real installation and use requirements.

          Beyond hardware and analysis, I built several Python scripts to help organize and manage thousands of technical documents, including maintenance manuals, parts catalogs, and pilot handbooks stored on the network. These tools improved accessibility and reduced the time engineers spent searching for information. Overall, my experience at Piper combined hands on problem solving, software driven organization, and practical design work in a real world aerospace environment.`
      ],
      image: '/pictures/piper_experience_image.jpeg'
    }
  },
  {
    title: 'Partner and Chief Operations Officer',
    company: 'Bike Bros Gainesville',
    location: 'Gainesville, FL',
    period: 'Summer 2025 – Present',
    logo: '/pictures/bike_bros-logo.png',
    website: '',
    description: [
      'Built a network of 4+ mechanics to source and repair high-quality vintage bicycles, and bought, repaired and resold 30+ bikes across Gainesville through Facebook Marketplace and Instagram campaigns.'
    ],
    tags: ['Operations', 'Finances', 'Upcycling', 'Sustainability', 'Leadership'],

    details: {
      fullDescription: [

        `At Bike Bros Gainesville, the work centers on identifying value where others see waste and turning abandoned or overlooked bicycles into reliable, affordable transportation. Gainesville generates a steady supply of impounded and discarded bikes, many of which still have meaningful market and functional value. Inventory that cannot be responsibly restored is recycled, while select bicycles are refurbished and reintroduced into the community with an emphasis on quality, sustainability, and accessibility.

        My role as Partner and COO is rooted in quantitative decision-making and hands-on operations. I personally perform preemptive valuations before acquisition, analyzing each bike or lot based on overall condition, model and style, market demand, estimated parts and repair costs, resale timelines, and risk. For every opportunity, I quantitatively model best and worst case profit scenarios and derive a strict maximum bid price from those bounds, allowing the business to operate with disciplined margins and a data-driven advantage over competitors who rely primarily on intuition.

        In addition to strategy and valuation, I oversee day-to-day execution across the business. This includes early-morning impound lot sourcing, inventory transport, financial management, repair coordination, marketing through Instagram and online marketplaces, and direct customer communication. Bike Bros Gainesville is operated as a hands-on venture where execution quality, consistency, and accountability directly determine outcomes, mirroring the demands of a real operating company rather than a casual side project.

        Business has picked up considerably in the past few months — a growing wave of local word-of-mouth and social traffic has meaningfully increased both inbound demand and the volume of bikes moving through the pipeline.`

      ],

      image: '/pictures/bike_bros_pic.png',
    }
  },
  {
    title: 'Co-Founder and Chief Technology Officer',
    company: 'Knead',
    location: 'Gainesville, FL',
    period: 'Spring 2026 – Fall 2026',
    logo: '/pictures/knead-logo.svg',
    website: 'https://www.kneadtoinvest.com',
    description: [
      'Architected and built the Strategy Playground, a drag-and-drop trading-strategy builder with one-click backtests, hired and led 5+ engineers, and co-wrote the pitch that won the 2026 GatorTank competition.'
    ],
    tags: ['React', 'TypeScript', 'Flask', 'Microservices', 'Backtrader', 'Leadership'],
    details: {

      fullDescription: [

        `As Co-Founder and CTO at Knead, I architected and built the Strategy Playground in React and TypeScript: a visual trading-strategy builder where users drag Blockly blocks that a custom abstract syntax tree (AST) translator converts into Python. Strategies run as one-click Backtrader backtests, and results are shown on TradingView charts with buy/sell markers, indicator overlays, Sharpe ratio, and max drawdown benchmarked against the S&P 500 (a sample is available on this site!).

        On the backend, I built a working prototype of each service, including the backtesting engine behind a Flask API gateway, then delegated polishing each service to our engineers and partnered with the lead engineer to turn the system into a full microservices backend. I also designed a live-trading architecture with per-strategy subprocesses, threaded market-data delivery, and a rate-limited order scheduler that keeps broker credentials outside strategy code and respects API limits.

        Beyond engineering, I hired, led and mentored 5+ engineers, designing our recruiting and technical interview process from scratch, and developed the pitch deck and business plan that won the 2026 GatorTank pitch competition ($1,200). I've since moved on from Knead to focus on other ventures.`

      ],
      image: '/pictures/knead_pic.jpg',

    }
  },
  {
    title: 'Founder',
    company: 'Coral Dev Studios',
    location: 'Gainesville, FL',
    period: '2026 – Present',
    website: 'https://coraldevstudios.com',
    description: [
      'Independent software studio where I co-founded Level, a calisthenics app on the App Store built with React Native, Expo and Supabase, and beta-tested it with 30+ users over 28 days.'
    ],
    tags: ['TypeScript', 'React Native', 'Expo', 'Supabase', 'Swift'],
    details: {
      fullDescription: [
        `Coral Dev Studios is my independent software studio, where I design, build, and ship apps end to end rather than just prototype them. It's the home for Level, a mobile app built with Expo/React Native and Swift, along with web products built on a modern TypeScript/React/Tailwind stack.

        Running the studio solo means owning every layer of the product: interface design, front-end and native app development, backend integration, and the actual app-store/release process — the same full-stack ownership mindset I bring to my engineering work, applied to shipping real, user-facing software.`
      ]
    }
  },
  {
    title: 'Pianist and Accompanist',
    company: 'Freelance',
    location: 'Gainesville, FL',
    period: 'Jan 2023 – Present',
    logo: '/pictures/piano-logo.png',
    website: 'https://www.youtube.com/watch?v=sgQgLC_Gxt8',
    description: [
      'Collaborate with UF faculty, vocalists, instrumentalists and composers for recitals, juries and concerts, direct weekly worship music at a local church, and perform solo and chamber programs for audiences of up to 3,000.'
    ],
    tags: ['Performance', 'Collaboration', 'Rapid Learning', 'Communication', 'Adaptability'],
    details: {

      fullDescription: [

        `My work as a pianist is centered on disciplined preparation, stylistic accuracy, and dependable performance across a wide range of classical repertoire. I have studied and performed works spanning the Baroque through late Romantic periods, including technically and structurally demanding solo pieces that require long‑term planning, endurance, and interpretive clarity. My approach emphasizes musical architecture, precision, and consistency rather than surface‑level virtuosity.

        In parallel with solo performance, I operate as a freelance pianist with significant collaborative and service‑based experience. I serve as the primary pianist for a church every Sunday, where I regularly learn, rehearse, and perform new repertoire on a weekly cycle. This role requires fast score assimilation, stylistic flexibility, and the ability to deliver polished performances with minimal rehearsal time. Over time, this has resulted in exposure to a large and diverse body of music and has strengthened my reliability under recurring performance constraints.

        Beyond church work, I have extensive experience as a collaborative pianist for instrumentalists and vocalists. This includes accompanying rehearsals and performances, adapting to different musical styles and interpretations, and supporting ensemble cohesion through clear musical communication. I treat freelance performance as a professional service role, where preparation efficiency, responsiveness, and consistency are essential. Across all settings, I apply a systems‑driven practice methodology that breaks repertoire into technical, musical, and structural components and manages preparation timelines backward from performance dates.`
      ],

      image: '/pictures/piano_pic.png',

    }
  },
]
