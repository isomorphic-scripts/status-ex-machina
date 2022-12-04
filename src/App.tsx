import React from 'react';

import {
    StyledApp,
    StyledAppHeader,
} from "./styles"
import Writer from './Writer';
import Simulator from './machine-run/Simulator.jsx';


function App() {
    return (
        <StyledApp>
            <StyledAppHeader>
                <Writer />
                <Simulator />
            </StyledAppHeader>
        </StyledApp>
    );
}

export default App;
