// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Notes,
  Quote,
  S,
  Slide,
  SlideSet,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quarternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  speakerImage: require('../assets/me.jpg'),
  famc: require('../assets/famc-logo.svg'),
};

const questionsSlide = [
  <Slide transition={['fade']}>
    <Heading size={1} lineHeight={1} caps>
      Questions?
    </Heading>
  </Slide>,
];

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']}>
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Angular Authentication
          </Heading>
          <Text textFont="monospace" margin="auto auto 5em auto">
            May 29, 2018
          </Text>
          <Text textFont="monospace">By Chris McKnight</Text>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            About Me
          </Heading>
          <Layout>
            <Fill>
              <Image width="50%" src={images.speakerImage} />
              <Image padding="1rem 0 0 0" width="50%" src={images.famc} />
              <Text padding="1rem 0 0 0">Front End Software Engineer III</Text>
            </Fill>
            <Fill>
              <List>
                <ListItem>B.S. in Computer Science</ListItem>
                <ListItem>Concentration in Mathematics</ListItem>
                <ListItem>LSU</ListItem>
                <ListItem>PHP, Ruby, and JavaScript</ListItem>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <Text>
              I am a Front End Software Engineer III on the Franklin American Innovation team.
            </Text>
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Why Authentication?
          </Heading>
          <div>
            <List>
              <Appear>
                <ListItem>User Identification (Authentication)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Restrict Access to Resources (Authorization)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Auditing</ListItem>
              </Appear>
            </List>
          </div>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            OAuth2
          </Heading>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Angular Configuration
          </Heading>
          <Text>
            Use <S type="italic">APP_INITIALIZER</S> and DI tokens for runtime configuration
          </Text>
          <CodePane
            theme="light"
            lang="javascript"
            source={require('raw-loader!../assets/di.example')}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Firebase
          </Heading>
          <Code>npm install --save firebase angularfire2</Code>
          <Code>npm install --save-dev @firebase/app-types</Code>
          <Notes>
            https://github.com/angular/angularfire2/blob/master/docs/auth/getting-started.md
          </Notes>
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Firebase Configuration
          </Heading>
          <CodePane
            theme="light"
            lang="json"
            source={require('raw-loader!../assets/firebase-config.example')}
          />
        </Slide>
        <Slide transition={['fade']}>
          <Heading size={6} caps>
            Demo
          </Heading>
        </Slide>
        <div hasSlideChildren>{questionsSlide}</div>
      </Deck>
    );
  }
}
