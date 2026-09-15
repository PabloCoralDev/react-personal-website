import type { Book } from '../types'

export const books: Book[] = [
  {
    title: 'The Final Empire',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/0765350386-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mistborn Book 1. A thousand years under the Lord Ruler's tyranny have convinced most that ash falls from the sky, the sun is red, and rebellion is hopeless. A crew of underworld thieves led by Kelsier - who's survived the Lord Ruler's terrible prison camps and discovered a Mistborn's powers - believes otherwise, and sets out to do the impossible: overthrow the empire.`
      ],
      keyTakeaways: [
        'Allomancy & Magic Systems',
        'Found Family / Crew Dynamics',
        'Hope Against Tyranny',
      ]
    }
  },
  {
    title: 'The Well of Ascension',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/9780575089938-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mistborn Book 2. The Lord Ruler is dead, but the empire he built still teeters on the edge of collapse. Vin and Elend must hold Luthadel against three armies while untangling the true purpose of the legendary Well of Ascension - a lesson in how toppling a tyrant is only the first, easiest step toward actually building something better.`
      ]
    }
  },
  {
    title: 'The Hero of Ages',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/1427206392-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mistborn Book 3. The world is dying, choked in ash and mist, and the answers everyone trusted turn out to be half the story at best. A satisfying capstone on the original trilogy's central puzzle-box magic system and its running theme that the "chosen one" narrative is rarely as simple as it first appears.`
      ]
    }
  },
  {
    title: 'The Alloy of Law',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/1429994894-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mistborn Era 2, Book 1. Three hundred years after the original trilogy, the same magic system collides with an industrializing, train-and-revolver frontier world. Waxillium Ladrian - lawman turned reluctant nobleman - is a fun tonal swing from high fantasy toward something closer to a magic-infused western.`
      ]
    }
  },
  {
    title: 'Shadows of Self',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/0765378558-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mistborn Era 2, Book 2. A political assassination sends Wax and Wayne digging through Elendel's class tensions and its gods' oldest secrets. Tighter and darker than the first Era 2 book, with the worldbuilding starting to pay off as the original trilogy's mythology re-surfaces in a modernizing world.`
      ]
    }
  },
  {
    title: 'The Bands of Mourning',
    author: 'Brandon Sanderson',
    image: 'https://covers.openlibrary.org/b/isbn/1427267901-L.jpg',
    status: 'in-progress',
    details: {
      fullDescription: ['currently reading...'],
      keyTakeaways: [],
    },
  },
  {
    title: 'First, Break All the Rules',
    author: 'Marcus Buckingham & Curt Coffman',
    image: 'https://covers.openlibrary.org/b/isbn/9780684852867-L.jpg',
    status: 'in-progress',
    details: {
      fullDescription: ['currently learning...'],
      keyTakeaways: [],
    },
  },
  {
    title: 'Fear',
    author: 'Tich Nhat Hanh',
    image: 'https://covers.openlibrary.org/b/isbn/9780062004734-L.jpg',
    status: 'in-progress',
    details: {
      fullDescription: ['currently learning...'],
      keyTakeaways: [],
    },
  },
  {
    title: 'Advanced Futures Trading Strategies',
    author: 'Robert Carver',
    image: 'https://covers.openlibrary.org/b/isbn/9780857199683-L.jpg',
    status: 'in-progress',
    details: {
      fullDescription: ['currently learning...'],
      keyTakeaways: [],
    }
  },
  {
    title: 'The Intelligent Investor',
    author: 'Benjamin Graham',
    image: 'https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Investment is most intelligent when it's most businesslike. Focus on fundamental value, maintain a margin of safety, and embrace Mr. Market's irrationality as opportunity. Distinguish between investing (thorough analysis, safety of principal, adequate return) and speculation. Dollar-cost averaging, diversification, and patience are the defensive investor's tools. The investor's chief enemy is likely to be themselves.`
      ],
      keyTakeaways: [
        'Value Investing Principles',
        'Margin of Safety',
        'Market Psychology',
        'Long-term Thinking',
        'Risk Management'
      ]
    }
  },
  {
    title: 'So Good they Can\'t Ignore You',
    author: 'Cal Newport',
    image: 'https://covers.openlibrary.org/b/isbn/9781455509126-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        'The passion hypothesis is a lie. Career satisfaction comes from developing rare and valuable skills, not following pre-existing passions. Adopt a craftsman mindset, focus on skill acquisition, and seek "career capital" through deliberate practice. Control over your work and the ability to leverage your skills lead to fulfilling careers. Mission emerges from mastery, not the other way around.'
      ],
      keyTakeaways: [
        'Craftsman Mindset',
        'Mission from Mastery',
        'Deliberate Practice',
        'Career Capital',

      ],
    }
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    image: 'https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Wealth is what you don't see - it's saved and invested money, not flashy spending. Getting rich and staying rich require different skills: getting rich needs taking risks, being optimistic, and seizing opportunities; staying rich requires frugality, humility, and long-term thinking. Luck and risk are both real and often misunderstood. Compounding is the most powerful force in finance: small consistent actions lead to extraordinary results over time.`
      ],
      keyTakeaways: [
        'Power of Compounding'
      ]
    }
  },
  {
    title: 'The Man Who Solved the Market',
    author: 'Gregory Zuckerman',
    image: 'https://covers.openlibrary.org/b/isbn/9780735217980-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Jim Simons and Renaissance Technologies revolutionized investing by applying mathematics and data science to markets. Success came from hiring brilliant scientists, not finance people, and letting data guide decisions over intuition. Small edges compound dramatically with scale and speed. The story demonstrates how quantitative analysis, computing power, and rigorous scientific method can find patterns invisible to traditional investors.`
      ]
    }
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Small habits compound over time - improving by just 1% each day leads to remarkable results. The key isn't setting goals, but building systems. Focus on identity-based habits: instead of "I want to run a marathon," think "I am a runner." Make good habits obvious, attractive, easy, and satisfying. The inverse applies to breaking bad habits.`
      ]
    }
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    image: 'https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Assets put money in your pocket; liabilities take money out. The rich buy assets, the poor buy liabilities thinking they're assets. Financial literacy is crucial - understand the difference between working for money and having money work for you. Pay yourself first, invest in income-generating assets, and focus on building businesses and investment portfolios rather than climbing the corporate ladder.`
      ]
    }
  },
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    image: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `The ability to focus without distraction on cognitively demanding tasks is becoming increasingly rare and valuable. Deep work produces better results in less time than shallow work. Schedule deep work blocks, eliminate distractions, embrace boredom to strengthen focus, and drain the shallows from your schedule. Quality of work = Time spent × Intensity of focus.`
      ]
    }
  },
  {
    title: 'Extreme Ownership',
    author: 'Jocko Willink & Leif Babin',
    image: 'https://covers.openlibrary.org/b/isbn/9781250067050-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Leaders must own everything in their world - no excuses. There are no bad teams, only bad leaders. Believe in the mission, explain the "why" to your team, and check your ego. Simplify plans, prioritize and execute, and use decentralized command. When things go wrong, look in the mirror first - total responsibility for failure is what leads to success.`
      ]
    }
  },
  {
    title: 'Mindfulness in Plain English',
    author: 'Bhante Gunaratana',
    image: 'https://covers.openlibrary.org/b/isbn/9780861719068-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Mindfulness is about being present with whatever arises, without judgment. Meditation isn't about stopping thoughts - it's about observing them without attachment. Start with breath awareness, notice when your mind wanders, and gently return focus. The goal is to develop clear seeing and equanimity in daily life, transforming how you relate to experience itself.`
      ]
    }
  },
  {
    title: 'The One Thing',
    author: 'Gary Keller',
    image: 'https://covers.openlibrary.org/b/isbn/9781885167774-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Ask yourself: "What's the ONE thing I can do such that by doing it, everything else will be easier or unnecessary?" Success is sequential, not simultaneous. Multitasking is a lie - focus on your most important work first. Time block your ONE thing, say no to distractions, and build the domino effect where each action makes the next one easier.`
      ]
    }
  },
  {
    title: 'The 4-Hour Workweek',
    author: 'Tim Ferriss',
    image: 'https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Don't defer life until retirement - design your ideal lifestyle now. The 80/20 rule: 80% of results come from 20% of efforts. Eliminate the unimportant, automate what you can, and delegate the rest. Build systems that generate income without your constant presence. Time is more valuable than money - buy your time back by outsourcing low-value tasks.`
      ],
      keyTakeaways: [
        'Lifestyle Design',
        '80/20 Principle',
        'Automation & Delegation',
        'Time Management',
        'Location Independence'
      ]
    }
  },
  {
    title: 'The Four Agreements',
    author: 'Don Miguel Ruiz',
    image: 'https://covers.openlibrary.org/b/isbn/9781878424310-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Four simple yet profound principles for personal freedom: Be impeccable with your word - speak with integrity and say only what you mean. Don't take anything personally - others' actions are a projection of their own reality. Don't make assumptions - have the courage to ask questions and express what you really want. Always do your best - your best will change moment to moment, but giving your best prevents self-judgment and regret.`
      ],
      keyTakeaways: [
        'Be Impeccable with Your Word',
        'Don\'t Take Anything Personally',
        'Don\'t Make Assumptions',
        'Always Do Your Best',
        'Personal Freedom'
      ]
    }
  },
  {
    title: 'The Mastery of Self',
    author: 'Don Miguel Ruiz Jr.',
    image: 'https://covers.openlibrary.org/b/isbn/9781938289538-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Building on Toltec wisdom, this book teaches awareness of the beliefs and agreements that shape your reality. You are not your thoughts or emotions - you are the one observing them. Break free from domestication and the voice of knowledge that judges and limits you. Practice unconditional self-love and authentic expression. The master within recognizes that suffering comes from attachment to beliefs, not from life itself.`
      ],
      keyTakeaways: [
        'Self-Awareness',
        'Breaking Domestication',
        'Unconditional Self-Love',
        'Authentic Expression',
        'Toltec Wisdom',
        'Emotional Intelligence'
      ]
    }
  },
      {
    title: 'Rewiring Your OCD Brain',
    author: 'Catherine Pittman & William Youngs',
    image: 'https://covers.openlibrary.org/b/isbn/9781684037186-L.jpg',
    status: 'complete',
    details: {
      fullDescription: [
        `Opened my mind to a crucial thing: My brain is malleable at-will. After applying the concepts here to improve my own mental health, the door opened for an insane amount of possibilities: I can rewire my brain to be more focused, more resilient, a better engineer & pianist, and ultimately a better version of myself. The book provides practical tools to understand and rewire the brain's response to OCD, but the underlying principle of neuroplasticity can be applied to any area of life. By consciously changing thought patterns and behaviors, we can reshape our brains and transform our lives.
         Meditation is amazing!`
      ]
    }
  }
]
