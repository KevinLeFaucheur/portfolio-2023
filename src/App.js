import { styled } from 'styled-components';
import './App.css';
import { Experience } from './components/Experience';
import { projects } from './data/projects';
import { pitch } from './data/projects';
import { createContext, useState } from 'react';

export const TagContext = createContext([]);

const App = () => {
  const [selected, setSelected] = useState('p1');
  const [tags, setTags] = useState([]);
  const [projectList, setProjectList] = useState(projects);

  const handleAnchorClick = (name) => {
    setSelected(name);
  }

  const updateProjectList = () => {
    if (tags.length === 0) {
      setProjectList(projects);
    } else {
      setProjectList(projects.filter(project => tags.some(tag => project.tech.includes(tag))));
    }
  }

  const addTag = (name) => {
    //
    if(!tags.some(tagName => tagName === name)) {
      tags.push(name);
    }
    else {
      tags.splice(tags.findIndex(tagName => tagName === name), 1)
    }
    setTags(tags);

    // 
    updateProjectList();
  }

  return (
    <TagContext.Provider value={{addTag, tags}} >
      <Main>
        <Section width="40%" $border="1px solid black">
          <Header>
            <Name>Kevin Le Faucheur</Name>
            <Job>Développeur Frontend</Job>
            <Hook>Un vecteur graphique et déterminant pour votre entreprise.</Hook>
          </Header>
          <Nav>
            {projects.map((project, i) => (
              <Anchor 
                key={project.title + i} 
                href={'#p' + i} 
                className={selected === `p${i+1}` ? 'selected' : ''}
                onClick={() => handleAnchorClick(`p${i+1}`)}>
                <Bullet />
                <span className='anchor'>Projet {i + 1}</span>
              </Anchor>
            ))}
          </Nav>
          <Social width="40%">
            <SocialLink href='https://www.linkedin.com/in/kevin-le-faucheur/'>
              <i className="fa-brands fa-linkedin-in"/>
            </SocialLink>
            <SocialLink href='https://github.com/KevinLeFaucheur'>
              <i className="fa-brands fa-github"/>
            </SocialLink>
            {/* <SocialLink href='' >&nbsp;</SocialLink>
            <SocialLink href='' >&nbsp;</SocialLink> */}
          </Social>
        </Section>
        <Section width="60%" $padding="padding-bottom: 66%;">
          <Pitch>
            {pitch}
          </Pitch>
          {projects
            .map((project, i) => <Experience key={project.title + i} id={'p' + i} project={project} display={projectList.includes(project)} index={i} />)
          }
        </Section>
      </Main>
    </TagContext.Provider>

  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  & a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: black;
    font-weight: 500;
    text-align: center;
  }
`

const Header = styled.header`
  padding: 20px 20px;
`

const Name = styled.h1`
  /* text-align: center; */
  font-family: 'Anton', sans-serif;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  opacity: 0.75;
`

const Job = styled.div`
  margin-bottom: 3rem;
  font-weight: 500;
  font-size: 1.2rem;
`

const Hook = styled.div`

`

const Nav = styled.nav`
  /* background-color: #f6f6f6; */  // debug
  position: sticky;
  top: 0;
  height: 100px;
  padding: 10% 0;
`

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  border-right: ${({ $border }) => $border ? $border : 'none' };
  ${( {$padding} ) => $padding}
`


const Social = styled.nav`
  position: sticky;
  left: 0;
  bottom: 5%;
  display: flex;
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
  margin-right: 10%;

  &:link, &:visited, &:hover, &:active {
    line-height: 35px;
  }

  &:hover {
    transform: scale(1.2, 1.2);
    transition: transform 0.15s ease-in-out;
  }
`

const Pitch = styled.div`
  padding: 10px;
  margin: 5% 1rem;
  font-weight: 500;
`

const Anchor = styled.a`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  & > span.anchor {
    font-weight: 400;
  }

  &:hover > span:first-child {
    background-color: rgb(71, 85, 105);
    width: 4rem;
    opacity: 1;
    transition: all .25s ease-in-out;
  }

  &.selected > span:first-child {
    width: 4rem;
  }

  &.selected > span:last-child {
    font-weight: 500;
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