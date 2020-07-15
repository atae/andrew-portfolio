import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './about';

export default function Page({type, match}) {
  let pageContent = {
    'engineer': {
      'about': {
        title: 'About',
        text: [" It's engineering"],
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
      'about': {
        title: 'About',
        text: [" It's music"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    },
    'nerd': {
      'about': {
        title: 'About',
        text: [" It's nerd"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    }
  }

  let about = () => <About content={pageContent[type]['about']} />;

  return (
    <div className="page-container">
      <Switch>
        <Route path={`${match.path}/about`} component={about}/>
      </Switch>
    </div>
  )
}