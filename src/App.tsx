import React, { Fragment } from 'react';

import {
    StyledApp,
    StyledAppHeader,
} from "./styles"
import Writer from './Writer';
import Simulator from './machine-run/Simulator.jsx';
import { Flow } from './flow-chart/Flow';
import { initial } from './lib/graph'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'


function App() {
    return (
        <StyledApp>
            <StyledAppHeader>
                <Router>
                    <Routes>
                        <Route
                            path={`/`}
                            element={
                                <Fragment>
                                    <Writer />
                                    <Simulator />
                                </Fragment>
                            }
                        />
                        <Route
                            path={`/flow`}
                            element={
                                <Flow graph={initial} />
                            }
                        />
                    </Routes>
                </Router>

            </StyledAppHeader>
        </StyledApp>
    );
}

export default App;
