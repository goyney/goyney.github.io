import { FunctionComponent } from 'preact';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

import { AboutProps } from './AboutProps';

import SectionContainer from '../SectionContainer/SectionContainer';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';

import classes from './About.scss';

const About: FunctionComponent<AboutProps> = ({ setActiveSection }) => {
  return (
    <SectionContainer
      className={classes.root}
      id='about'
      setActiveSection={setActiveSection}
    >
      <Avatar className={classes.avatar} />
      <div className={classes.about}>
        <h2>About Me</h2>
        <p>I am a software engineer who has been working in the industry for over fifteen years. I enjoy music, gaming, iconography, and home improvement projects. I love to continuously learn new things, and I find expanding my knowledge base often comes while helping others do the same. One of my passions is the <a href='#philanthropy' onClick={() => setActiveSection({ id: 'philanthropy' })}>Extra Life fundraiser</a>, which raises money for kids in Children's Miracle Network Hospitals.</p>
        <div className={classes.contact}>
          <Button
            href='/resume/download/'
            startIcon={<Icon path={mdiArrowDown} size={1} />}
            variant='light'
          >
            Download Resume
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
