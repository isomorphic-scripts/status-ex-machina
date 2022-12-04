import {
    useCallback,
    Fragment,
    MouseEvent,
    useLayoutEffect,
    useRef
} from "react";
import {
    Handle,
    Position,
    NodeProps,
} from 'reactflow'
import styled from "styled-components";

const NodeWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    width: 170px;
    font-size: 13.33px;
    color: #222;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-color: #1a192b;
    background-color: white;
    label {
        text-align: start;
    }
    input {
        align-self: end;
        width: 100px;
    }
`

// react-flow__node react-flow__node-default nopan selected selectable
// react-flow__node react-flow__node-default nopan selectable

export default function RestApiNode(
    props: NodeProps<{
        label: string;
        endPoints: string[];
        onChange: ((id: string, value: string | number) => void);
    }>
) {
    const onChange = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            console.log({
                restApiId: props.id,
                restApiEventTarget: event.target
            })
        },
        [props]
    );
    const nodeRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (nodeRef.current) {
            // report logged value above to automatic layout service
            console.log(nodeRef.current.getBoundingClientRect());
        }
    }, [nodeRef])
    return (
        <Fragment>
            <Handle type="target" position={Position.Top} id="d" />
            <NodeWrapper
                ref={nodeRef}
                onClick={onChange}
            >
                {props.data.label}
            </NodeWrapper>
            {props.data.endPoints.map((endPoint, i) => (
                <Handle
                    key={endPoint}
                    type="source"
                    position={Position.Right}
                    id={endPoint}
                    style={{
                        top: `${Math.trunc(
                            i / props.data.endPoints.length * 10000
                        ) / 100}%`
                    }}
                />
            ))}
        </Fragment>
    )
}
