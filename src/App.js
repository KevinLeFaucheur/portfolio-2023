import { styled } from 'styled-components';
import './App.css';
import { Experience } from './components/Experience';
import { projects } from './data/projects';

const App = () => {
  return (
    <Main>
      <Section width="40%">
        <Header>
          <Name>Kevin Le Faucheur</Name>
          <Job>Développeur Frontend</Job>
          <Hook>Un vecteur graphique pour votre entreprise.</Hook>
        </Header>
        <Nav>
          <Anchor className='selected'><Bullet></Bullet><span>Projet 1</span></Anchor>
          <Anchor><Bullet></Bullet><span>Projet 2</span></Anchor>
          <Anchor><Bullet></Bullet><span>Projet 3</span></Anchor>
        </Nav>
        <Social width="40%">
          <SocialLink href='https://www.linkedin.com/in/kevin-le-faucheur/'>in</SocialLink>
          <SocialLink href='https://github.com/KevinLeFaucheur' >git</SocialLink>
          <SocialLink href='' >&nbsp;</SocialLink>
          <SocialLink href='' >&nbsp;</SocialLink>
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
        {projects.map(project => <Experience key={project.title} project={project} />)}
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
`

const Header = styled.header`
  padding: 20px 20px;
`

const Name = styled.h1`
  text-align: center;
  font-size: 3rem;
`

const Job = styled.div`

`

const Hook = styled.div`

`

const Nav = styled.nav`
  background-color: #f6f6f6;
  height: 100px;
  padding: 10%;
`

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  border-right: 1px solid black;
`


const Social = styled.nav`
  position: fixed;
  width: ${({ width }) => width};
  bottom: 0;
  background-color: rgba(0, 15, 55, .2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  margin-top: auto;
  margin-bottom: 3rem;
`

const SocialLink = styled.a`
  background-color: #f6f6f6;
  border-radius: 25%;
  width: 35px;
  height: 35px;

  &:link, &:visited, &:hover, &:active {
    text-decoration: none;
    color: black;
    font-weight: 500;
    text-align: center;
    line-height: 35px;
  }
`

const Pitch = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  margin: 5% 1rem;
`

const Anchor = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  &.selected {
    font-weight: 500;
  }

  &:hover > span:first-child {
    background-color: rgb(71, 85, 105);
    width: 4rem;
    opacity: 1;
    transition: all .25s ease-in-out;
  }
`

const Bullet = styled.span`  
  display: inline-block;
  background-color: rgb(226, 232, 240);
  height: 1px;
  width: 2rem;
  margin-right: 1rem;
  opacity: 0.5;
`

export default App;