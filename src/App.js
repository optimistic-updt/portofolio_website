import React from 'react';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'

// import { GlobalStyles } from './global'
// import { ThemeProvider } from 'styled-components'

// export default props => (
//   <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
// )
import './App.css';
import './grid.css';
import './theme.css';



import SectionHero from './components/SectionHero'
import SectionProjects from './components/SectionProjects'
import SectionAbout from './components/SectionAbout'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <SectionHero />
        <SectionProjects />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
