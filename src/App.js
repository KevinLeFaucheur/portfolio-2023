import { styled } from 'styled-components';
import './App.css';
import { Experience } from './components/Experience';
import { projects } from './data/projects';
import { pitch } from './data/projects';

const App = () => {
  return (
    <Main>
      <Section width="40%" border="true">
        <Header>
          <Name>Kevin Le Faucheur</Name>
          <Job>Développeur Frontend</Job>
          <Hook>Un vecteur graphique pour votre entreprise.</Hook>
        </Header>
        <Nav>
          {projects.map((project, i) => <Anchor key={project.title} className='selected'><Bullet></Bullet><span>Projet {i + 1}</span></Anchor>)}
        </Nav>
        <Social width="40%">
          <SocialLink href='https://www.linkedin.com/in/kevin-le-faucheur/'>
            <i class="fa-brands fa-linkedin-in"/>
          </SocialLink>
          <SocialLink href='https://github.com/KevinLeFaucheur'>
            <i class="fa-brands fa-github"/>
          </SocialLink>
          <SocialLink href='' >&nbsp;</SocialLink>
          <SocialLink href='' >&nbsp;</SocialLink>
        </Social>
      </Section>
      <Section width="60%">
        <Pitch>
          {pitch}
        </Pitch>
        {projects.map(project => <Experience key={project.title} project={project} />)}
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.header`
  padding: 20px 20px;
`

const Name = styled.h1`
  /* text-align: center; */
  font-size: 3rem;
`

const Job = styled.div`

`

const Hook = styled.div`

`

const Nav = styled.nav`
  /* background-color: #f6f6f6; */  // debug
  height: 100px;
  padding: 10% 0;
`

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  border-right: ${({ border }) => border ? '1px solid black' : 'none' };
`


const Social = styled.nav`
  position: fixed;
  /* width: ${({ width }) => width}; */
  width: 40%;
  left: 0;
  bottom: 0;
  /* background-color: rgba(0, 15, 55, .2); */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
  margin-top: auto;
  margin-bottom: 3rem;
`

const SocialLink = styled.a`
  border-radius: 25%;
  width: 35px;
  height: 35px;
  border: 2px solid black;

  &:link, &:visited, &:hover, &:active {
    text-decoration: none;
    color: black;
    font-weight: 500;
    text-align: center;
    line-height: 35px;
  }

  &:hover {
    transform: scale(1.2, 1.2);
    transition: transform 0.15s ease-in-out;
  }
`

const Pitch = styled.div`
  /* background-color: #f6f6f6; */// debug
  padding: 10px;
  margin: 5% 1rem;
  font-weight: 500;
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
  background-color: rgb(150, 155, 165);
  height: 1px;
  width: 2rem;
  margin-right: 1rem;
  opacity: 0.5;
`

export default App;