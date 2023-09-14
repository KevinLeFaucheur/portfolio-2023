import { styled } from 'styled-components';
import './App.css';

const App = () => {
  return (
    <Main>
      <Section width="40%">
        <Name>Kevin Le Faucheur</Name>
        <Nav>
        </Nav>
        <Social>

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
        <Block>

        </Block>
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
  width: 100%;
  background-color: #bbb;
  height: 100px;
  margin-top: auto;
  margin-bottom: 3rem;
`

const Pitch = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  margin: 1rem;
`

const Block = styled.div`
  background-color: #b5b5b5;
  padding: 10px;
  margin: 1rem;
`

export default App;