import React, {useEffect} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
// import {CSSTransitionGroup} from 'react-transition-group';
import MessagingScreenshot from './RaiseMe Messaging Screenshot.png';

import { CSSTransitionGroup } from "react-transition-group";
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';
import Discography from './discography';
import Transcriptions from './transcriptions';
import Goals from './sidequests/goals';

// const About = lazy(() => import('./about'));
// const Contact = lazy(() => import('./contact'));
// const Portfolio = lazy(() => import('./portfolio'));

export default function Page({type, match, changeCurrentLink}) {
  let location = useLocation();

  useEffect(() => {
    changeCurrentLink(location.pathname.split('/')[1])
  }, [location, changeCurrentLink]);

  let pageContent = {
    'engineer': {
      'pageColor' : "green",
      'about': {
        title: '',
        text: [
          "Senior frontend engineer specializing in React, TypeScript, and Next.js.",
          "I do my best work at the intersection of performance, accessibility, and great UX.",
          "Past work includes auth platforms at scale, commerce experiences for millions of users, and mission-critical banking software.",
        ],
        skills: {
          'Front-end': ['React', 'TypeScript', 'Next.js', 'Redux Sagas', 'CSS/SCSS'],
          'Testing': ['Jest', 'Playwright'],
          'Back-end & Infra': ['Node.js', 'GraphQL', 'Auth0', 'Jenkins', 'Harness'],
          'Other': ['Accessibility (WCAG)', 'A/B Testing', 'JLPT N1 (Japanese)']
        },
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
      portfolio: [
        {
          name: 'Wells Fargo ATM Platform',
          date: '2025',
          shortDescription: 'React frontend for mission-critical 24/7 ATM software',
          tech: ['React', 'TypeScript', 'Playwright', 'Redux', 'Splunk'],
          description: [
            'Reduced per-session memory usage from 100MB to 7MB by migrating from base64 to blob-based image storage.',
            'Pioneered Playwright E2E testing alongside Jest, leveraging AI-assisted development to accelerate test generation.',
            'Ensured WCAG accessibility compliance across ATM features including keypad navigation and speech string frameworks.',
            'Implemented customer behavior analytics using Splunk and AppDynamics across ATM network.'
          ],
          image: '/images/Wells_Fargo_Logo_(2020).svg.png',
          liveUrl: '',
          githubUrl: ''
        },
        {
          name: 'Peloton Auth Platform',
          date: '2022',
          shortDescription: 'Auth0-based social account linking for 2.3M+ users',
          tech: ['Next.js', 'Auth0', 'TypeScript'],
          description: [
            'Sole frontend engineer owning the full UI layer for Auth0-based social account linking across web and mobile.',
            'Designed and implemented critical auth error handling and redirect flows in a zero-tolerance, always-on authentication system.',
            'Partnered directly with backend Auth0 engineers to define API contracts and deliver a cohesive cross-platform auth experience.'
          ],
          image: '/images/Peloton-logo-768x432.png',
          imageBg: '#ffffff',
          liveUrl: '',
          githubUrl: ''
        },
        {
          name: 'PayPal Shopping Hub',
          date: '2022',
          shortDescription: 'Customer Portal for PayPal Shopping',
          tech: ['React', 'GraphQL'],
          liveUrl: 'https://www.paypal.com/shopping',
          image: 'https://i.gyazo.com/437942a0a6550533d9ad8b08abb671b0.gif'
        },
        {
          name: 'Portfolio Site',
          date: '2020',
          shortDescription: "The site you're on now!",
          tech: ['React', 'Node'],
          image: 'https://i.gyazo.com/c4e865405d4741027e9e4148c44a5ebc.gif',
          liveUrl: 'https://www.andrewtae.com',
          githubUrl: 'https://github.com/atae/andrews-hot-ass-portfolio-site/'
        },
        {
          name: 'RaiseMe Bulk Messaging',
          shortDescription: 'College/Student Bulk Message System',
          date: '2019',
          description: [],
          tech: ['AWS SES', 'React', 'Redux', 'Ruby on Rails'],
          image: MessagingScreenshot,
          liveUrl: '',
          githubUrl: ''
        },
        {
          name: 'RaiseMe B2B Marketing Pages',
          date: '2019',
          shortDescription: 'Beautiful Landing Pages for B2B Clients',
          description: [],
          tech: ['HTML, CSS, JS', 'AWS Cloudfront'],
          image: 'https://i.gyazo.com/2739a6675f9c9f9e2a7dfcc4f8968c68.gif',
          liveUrl: 'https://www.raise.me/college/overview',
          githubUrl: '',
        },
        {
          name: 'Hiyoko Jisho',
          date: '2018',
          shortDescription: "Japanese Dictionary based on Heisig's RTK",
          description: [],
          tech: ['React', 'jisho.org API', 'Fuzzy'],
          image: 'https://i.gyazo.com/29a17fa248dd34fb374a0459c57a000f.gif',
          liveUrl: 'https://www.hiyokojisho.com',
          githubUrl: 'https://github.com/atae/jisho-word-builder'
        },
        {
          name: 'Veritas Customer Success',
          date: '2018',
          shortDescription: 'Explore Veritas Customer Stories',
          description: [
            'A one-off application to allow users to search and filter through hundreds of Veritas customers.',
            'This project involved creating a custom API endpoint into the Adobe Experience Manager CMS to access our customer data from the frontend dynamically.'],
          tech: ['React', 'Adobe Experience Manager', 'API Design'],
          image: 'https://i.gyazo.com/33d2c354bce1bd00e39d74f7d5845724.gif',
          liveUrl: '',
          githubUrl: '',
        },
        {
          name: 'Beautiful Typing',
          date :'2017',
          shortDescription: 'Modern Arcade-Style Typing Game ',
          description: [],
          tech: ['jQuery', 'HTML', 'CSS', 'JS', 'Canvas'],
          image: 'https://raw.githubusercontent.com/atae/andrew-portfolio/master/images/beautiful_typing.gif',
          liveUrl: 'https://atae.github.io/BeautifulTyping/beauTypin.html',
          githubUrl: 'https://github.com/atae/BeautifulTyping',
          soundWarning: true
        },
      ],
      contact: [{
        type: 'email',
        icon: '',
        contact: 'andrewtae368@gmail.com'
      }, {
        type: 'github',
        icon: '',
        contact: 'https://www.github.com/atae'
      }, {
        type: 'linkedin',
        icon: '',
        contact: 'https://www.linkedin.com/in/andrew-tae'
      }, {
        type: 'resume',
        icon: '',
        contact: '/Andrew Tae Resume.pdf'
      }]
    },
    'music': {
      'pageColor': "white",
      'about': {
        title: 'DJ最テー / DJ SaiTae',
        text: [
          "I started playing Guitar in 2005 but I am now a composer first, instrumentalist second.",
          "My first songs were from Katamari Damacy and Gitaroo Man, and it's only gotten better/worse from there.",
          "I love any song with a complex harmony and everything I write tends to reflect my anime/video game upbringing, so I lean into it as much as I can.",
        ],
        skills: {
          "Instruments": ["Guitar", "Bass", "Drums", "Piano", "FL Studio"],
          "Genres": ["Funk", "Hard Rock", "Neo Soul", "Japanese Jazz Fusion", "Bossa Nova", "Metal", "Anime/Game BGM"],
          "Other": ["Transcription", "Fingerstyle Arrangements", "Improvisation"]
        },
        image: "https://raw.githubusercontent.com/atae/andrew-portfolio/master/images/Tae_Andrew_19-08-01_1072.jpg"
      },
      'portfolio': {
        published: [
          {
            name: 'Call It A Jam in Liyue',
            date: '2021',
            shortDescription: 'YoMusic Music Composition Contest',
            tech: [],
            image: '/images/Call_It_A_Jam_In_Liyue_Thumb.jpg',
            albumUrl: 'https://www.hoyolab.com/article/4656590'
          },
          {
            name: 'Kleepocalypse',
            date: '2021',
            shortDescription: 'YoMusic Music Composition Contest',
            tech: [],
            image: '/images/Kleepocalypse_Thumb.png',
            albumUrl: 'https://www.hoyolab.com/article/4656506'
          },
          {
            name: 'Sambanomiya',
            date: '2021',
            shortDescription: 'YoMusic Music Composition Contest',
            tech: [],
            image: '/images/Sambanomiya_Thumb.jpg',
            albumUrl: 'https://www.hoyolab.com/article/4658068'
          },
          {
            name: 'Glory Days (~栄枯盛衰~)',
            date: '2020',
            shortDescription: 'DJMAX Remix Contest - 4th Place',
            tech: [],
            image: 'https://i.ytimg.com/vi/zU_iBdlb5UY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBxl3Q_sT_TwlB6wFU-04_mTClKg',
            albumUrl: 'https://www.youtube.com/watch?v=zU_iBdlb5UY'
          },
          {
            name: 'coloUrs and mayhem: Universe A & B',
            date: '2012',
            shortDescription: 'Iron Knight (Track 17) and Violet Prince (Track 24)',
            tech: [],
            image: 'https://f4.bcbits.com/img/a0169239261_16.jpg',
            albumUrl: 'https://homestuck.bandcamp.com/album/colours-and-mayhem-universe-a-b'
          }
        ],
        jams: [
          {
            name: '青空禁止',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/青空禁止.mp3'
          },
          {
            name: 'Zero Sugar',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Zero Sugar.mp3'
          },
          {
            name: 'Perfum no. 18 Kai',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Perfum no. 18 Kai.mp3'
          },
          {
            name: 'Interplanetary Detective Duo',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Interplanetary Detective Duo.mp3'
          },
          {
            name: 'Disco is Here',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Disco is Here.mp3'
          },
          {
            name: 'Corridor Of Mirrors',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Corridor Of Mirrors.mp3'
          },
          {
            name: 'Breadmaker',
            date: '',
            shortDescription: '',
            tech: [],
            audioSrc: '/audio/Breadmaker.mp3'
          }
        ]
      },
      contact: [{
        type: 'email',
        icon: '',
        contact: 'djsaitae@gmail.com'
      }],
      transcriptions: [
        {
          title: 'Dragon Blade',
          source: 'Kozo Nakamura — GITADORA',
          instrument: 'Guitar',
          pdfSrc: '/transcriptions/Dragon Blade.pdf'
        },
        {
          title: "Pirate's Banquet",
          source: 'Maoki Yamamoto — GITADORA',
          instrument: 'Guitar',
          pdfSrc: '/transcriptions/Pirates Banquet.pdf'
        },
        {
          title: '月暈 (Tsukigasa)',
          source: 'BEMANI Sound Team "meteorologists" — GITADORA',
          instrument: 'Guitar',
          pdfSrc: '/transcriptions/月暈.pdf'
        }
      ]
    },
    'sidequests': {
      'pageColor': 'orange',
      'about': {
        title: 'Side Quests',
        text: [
          "The stuff I do for fun that doesn't fit on a resume.",
          "Vibe-coded experiments, half-finished ideas, and things I'm actively grinding toward.",
        ],
        skills: {
          'Hyperfixations': ['JRPGs', 'Japanese', 'Music Games', 'Anime'],
          'Building With': ['Cursor', 'Claude', 'Whatever works'],
        },
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
      'goals': [
        {
          category: 'Music',
          items: [
            'Release something this year',
            'Finish the transcriptions backlog',
            'Collab with someone online'
          ]
        },
        {
          category: 'Japanese',
          items: [
            'N1 certified — keep it sharp',
            'Reading the Haruhi Suzumiya series in Japanese (1 vol down)',
            'Eventually work with a Japanese team'
          ]
        },
        {
          category: 'Currently Into',
          items: [
            'JRPGs',
            'Music games',
            'Vibe coding random stuff'
          ]
        }
      ]
    }
  }
  let suspenseComponent = (component) => {
    // return (
    //   <Suspense 
    //   fallback={
    //     <div className={`${pageContent[type]['pageColor']}-background-font`}>
    //         Loading...
    //       </div>
    //     }>
    //     {component}
    //   </Suspense>
    // )
    return component;
  }

  let about = () => suspenseComponent(<About pageColor={pageContent[type]['pageColor']} content={pageContent[type]['about']} />);
  let contact = () => suspenseComponent(<Contact pageColor={pageContent[type]['pageColor']} content={pageContent[type]['contact']} />);
  let portfolio = () => suspenseComponent(<Portfolio pageColor={pageContent[type]['pageColor']} content={pageContent[type]['portfolio']} />);
  let discography = () => suspenseComponent(<Discography pageColor={pageContent[type]['pageColor']} content={pageContent[type]['portfolio']} />);
  let transcriptions = () => suspenseComponent(<Transcriptions pageColor={pageContent[type]['pageColor']} content={pageContent[type]['transcriptions']} />);
  let goals = () => suspenseComponent(<Goals pageColor={pageContent[type]['pageColor']} content={pageContent[type]['goals']} />);

  return (
    <div className="page-container">
      <div className="page">
        <CSSTransitionGroup
          key={location.key}
          classNames="fade"
          timeout={300}
        >
            <Switch location={location}>
                <Route path={`${match.path}/about`} component={about}/>
                <Route path={`${match.path}/contact`} component={contact}/>
                <Route path={`${match.path}/portfolio`} component={portfolio}/>
                <Route path={`${match.path}/discography`} component={discography}/>
                <Route path={`${match.path}/goals`} component={goals}/>
                <Route path={`${match.path}/transcriptions`} component={transcriptions}/>
            </Switch>
          </CSSTransitionGroup>
      </div>
    </div>
  )
  // {/* </TransitionGroup> */}
}
