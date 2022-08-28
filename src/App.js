import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import About from './Components/About';
import styled from 'styled-components';

const Footer = styled.footer`
position: fixed;
left: 0%;
bottom: 0%;
width: 100%;`

const Github = styled.img`
max-height: 60px;
max-width: 200px;
object-fit: cover;`

const ListOfLinks = styled.ul`
list-style-type: none;
margin: 0;
overflow: hidden;
display: flex;
justify-content: center;
background-color: #92A8D1;

`

const IndividualLink = styled.li`
float: left;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none;
padding-top: 3px;
padding-bottom: 3px;`

const Wrapper = styled.div`
&:hover ${IndividualLink} {
    background-color: #a7b9da;
}
`

const Main = styled.div`
padding: 0px`


function App() {
  return (
    <Router>
      <NavBar/>
      <Main>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/About" element={<About/>}></Route>
      </Routes></Main>
      <Footer>
        <ListOfLinks>
          <Wrapper>
          <IndividualLink>
            <a class="github" href="https://github.com/roryconlon1"><Github src={require(".//images/Octicons-mark-github.svg.png")} alt="khbkhbhk"></Github></a> 
          </IndividualLink>
          </Wrapper>
          <Wrapper>
          <IndividualLink>
            <a class="github" href="https://www.linkedin.com/in/rory-conlon-643128134"><Github src={require(".//images/linkdin.png")} alt="khbkhbhk"></Github></a> 
          </IndividualLink>
          </Wrapper>
        </ListOfLinks>
      </Footer>
    </Router>
  );
}

export default App;


{/* <img src="/src/images/Octicons-mark-github.svg.png"/> */}
