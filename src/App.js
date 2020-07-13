import React from 'react';
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import { useMediaQuery } from 'react-responsive'


import './App.css';
import './grid.css';
import './theme.css';

import NavBar from './components/NavBar'
import MobileNavBar from './components/MobileNavBar';
import SectionHero from './components/SectionHero'
import SectionProjects from './components/SectionProjects'
import SectionAbout from './components/SectionAbout'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* conditionnally renders a different navar based on media queries, see below */}
        <NavBarRendering />

        <SectionHero />
        <SectionProjects />
        <SectionAbout />
        <SectionContact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}



const NavBarRendering = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 736px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 736px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 736px)'
  })
  
  return (
    <div>
      {isTabletOrMobile && <MobileNavBar />}
      {isTabletOrMobileDevice && <MobileNavBar />}
      {isDesktopOrLaptop && <NavBar />}
    </div>
  )
}

export default App;
