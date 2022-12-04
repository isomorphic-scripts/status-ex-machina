
import { Graph } from '../../GraphLibrary'
export const initial: Graph = {
    nodes: [
        {
            id: '1',
            position: {
                x: 0,
                y: 0
            },
            data: {
                label: 'EditableState',
                value: 42
            },
            type: 'textUpdater'
        },
        {
            id: '2',
            position: {
                x: 100,
                y: 100
            },
            data: {
                label: 'RestApiDependencies'
            },
            type: 'restApi'
        },
        {
            id: '2',
            position: {
                x: 100,
                y: 100
            },
            data: {
                label: 'FrontEndApplication'
            },
            type: 'frontEnd'
        }
    ],
    edges: [
        {
            id: '1-2',
            source: '1',
            target: '2',
            label: 'transition to',
            type: 'step'
        }
    ]
}
export const noEdges = {
    nodes: initial.nodes,
    edges: []
}
