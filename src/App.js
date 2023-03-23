import styled from 'styled-components';
import Banner from './components/molecules/Banner';
import Header from './components/molecules/Header';
import Quote from './components/molecules/Quote';
import About from './components/organisms/About';
import Contact from './components/organisms/Contact';
import Projects from './components/organisms/Projects';
import Skills from './components/organisms/Skills';

const StyledApp = styled.div`
  background: ${props => props.theme.palette.background.default};
`;

const AppContent = styled.div`
  color: ${props => props.theme.palette.color.default};
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
`

function App() {

  return (
    <StyledApp>
      <AppContent>
        <Header />
        <Banner />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </AppContent>
    </StyledApp>
  );
}

export default App;
