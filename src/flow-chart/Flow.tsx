import {
    useCallback,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';
import {
    Graph
} from '../GraphLibrary'
import ReactFlow, {
    Controls,
    Background,
    MiniMap,
    applyEdgeChanges,
    applyNodeChanges,
    OnNodesChange,
    OnEdgesChange,
    Node,
    Edge,
    addEdge,
    OnConnect,
    Connection,
    MarkerType
} from 'reactflow';
/** This will need a fixed css loader in jest-jsdom */
import 'reactflow/dist/style.css';
import TextUpdaterNode from '../lib/graph/TextUpdaterNode';
import RestApiNode from '../lib/graph/RestApiNode';
import FrontEndNode from '../lib/graph/FrontEndNode';

const FlowContainer = styled.div`
    height: 90vh;
    width: 100%;
`;

export const nodeTypes = { textUpdater: TextUpdaterNode, restApi: RestApiNode, frontEnd: FrontEndNode };

export function Flow(
    props: {
        graph: Graph
    }
) {
    const [nodes, setNodes] = useState(props.graph.nodes);
    const [edges, setEdges] = useState(props.graph.edges);
    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes(
            (newNodes: Node[]) => applyNodeChanges(changes, newNodes)
        ),
        []
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges(
            (newEdges: Edge[]) => applyEdgeChanges(changes, newEdges)
        ),
        []
    );
    const onConnect: OnConnect = useCallback(
        (connection: Connection) => setEdges(
            (newEdges: Edge[]) => addEdge(connection, newEdges)
        ),
        []
    );

    useEffect(() => {
        setNodes(
            updatedNodes => updatedNodes.map(
                node => ({
                    ...node,
                    data: {
                        ...node.data,
                        onChange: (id: string, value: string | number) => {
                            setNodes(changedNodes => changedNodes.map(node => {
                                if (node.id !== id) {
                                    return node;
                                }
                                return {
                                    ...node,
                                    data: {
                                        ...node.data,
                                        value
                                    }
                                }
                            })

                            )

                        }
                    }
                })
            )
        )
    }, [setNodes]);

    return <FlowContainer>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            defaultEdgeOptions={{
                type: 'smoothstep',
                style: {
                    stroke: 'black'
                },
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    color: 'black'
                }
            }}
            nodeTypes={nodeTypes}
            fitView
            style={{
                backgroundColor: "#B8CEFF"
            }}
        >
            <MiniMap />
            <Controls />
            <Background />
        </ReactFlow>
    </FlowContainer>;
}
