import { styled } from 'styled-components';
import './App.css';
import { Experience } from './components/Experience';

const App = () => {
  return (
    <Main>
      <Section width="40%">
        <Name>Kevin Le Faucheur</Name>
        <Job>Développeur Frontend</Job>
        <Hook>Un vecteur graphique pour votre entreprise.</Hook>
        <Nav>
          <Anchor>Projet 1</Anchor>
          <Anchor>Projet 1</Anchor>
          <Anchor>Projet 1</Anchor>
        </Nav>
        <Social>
          <SocialLink>&nbsp;</SocialLink>
          <SocialLink>&nbsp;</SocialLink>
          <SocialLink>&nbsp;</SocialLink>
          <SocialLink>&nbsp;</SocialLink>
        </Social>
      </Section>
      <Section width="60%">
        <Pitch>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </Pitch>
        <Experience />
        <Experience />
        <Experience />
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
`

const Nav = styled.nav`
  width: 100%;
  background-color: #f6f6f6;
  height: 300px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  border-right: 1px solid black;
`

const Name = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const Social = styled.nav`
  background-color: #bbb;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 20%;
  margin-top: auto;
  margin-bottom: 3rem;
`

const SocialLink = styled.a`
  background-color: #f6f6f6;
  border-radius: 25%;
  width: 35px;
  height: 35px;
`

const Pitch = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  margin: 1rem;
`

const Anchor = styled.div`

`

const Job = styled.div`

`

const Hook = styled.div`

`

export default App;