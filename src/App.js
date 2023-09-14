import { styled } from 'styled-components';
import './App.css';

const App = () => {
  return (
    <Main>
      <Nav>
      </Nav>
      <Section>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  min-height: 100vh
`

const Nav = styled.nav`
  border-right: 1px solid black;
  width: 30%;
`

const Section = styled.section`
  width: 70%;
`


export default App;