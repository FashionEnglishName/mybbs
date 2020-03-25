import React from 'react';
import MainContainer from './containers/MainContainer/MainContainer';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

class App extends React.Component {
    render() {
        return (
            <MainContainer>
                <Sidebar></Sidebar>
                <Navbar></Navbar>

                <Main></Main>
            </MainContainer>
        )
    }
}

export default App;