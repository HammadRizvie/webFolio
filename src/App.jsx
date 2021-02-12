import React from 'react';
import NaveBar from './components/Navebar'
import Intro from './components/Intro'
import Info from './components/Info'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'

class App extends React.Component
{
    render()
    {
        return(
            <div>
                <NaveBar />
                <Intro />
                <Info />
                <Skills />
                <Experience />
                <Footer />
            </div>
        )
    }
}

export default App;
