import React, {Suspense, lazy} from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

const About = lazy(() => import('./about'));
const Contact = lazy(() => import('./contact'));

export default function Page({type, match}) {
  let pageContent = {
    'engineer': {
      'pageColor' : "green",
      'about': {
        title: 'About',
        text: [
          "I'm a fullstack software engineer and UI/UX Javascript specialist (ES6/React).",
          "I do my best work in environments where I know that my code is making a positive impact in the world."

        ],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
      portfolio: [
        {
          name: '',
          description: '',
          image: '',
          liveUrl: '',
          githubUrl: '',
        }
      ],
      contact: [{
        type: '',
        icon: '',
        url: ''
      }]
    },
    'music': {
      'pageColor': "white",
      'about': {
        title: 'About',
        text: [" It's music"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    },
    'nerd': {
      'pageColor': 'orange',
      'about': {
        title: 'About',
        text: [" It's nerd"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    }
  }

  let about = () => <Suspense fallback={<div>Loading...</div>}><About pageColor={pageContent[type]['pageColor']} content={pageContent[type]['about']} /></Suspense>;
  let contact = () => <Suspense fallback={<div>Loading...</div>}><Contact pageColor={pageContent[type]['pageColor']} /></Suspense>;

  return (
    <div className="page-container">
      <div className="page">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
          <Switch>
              <Route path={`/music/*`} component={() => <h2 className="white-background-font">Under Construction</h2>} />
              <Route path={`/nerd/*`} component={() => <h2 className="orange-background-font">Under Construction</h2>} />
              <Route path={`${match.path}/about`} component={about}/>
              <Route path={`${match.path}/contact`} component={contact}/>
          </Switch>
        </CSSTransitionGroup>
        </div>
    </div>
  )
}