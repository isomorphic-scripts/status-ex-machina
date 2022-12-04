import {
    useCallback,
    Fragment,
    ChangeEvent,
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

export default function TextUpdaterNode(
    props: NodeProps<{
        value: string | number;
        onChange: ((id: string, value: string | number) => void)
    }>
) {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            props.data.onChange(props.id, event.target.value)
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
            >
                <label htmlFor="text">
                    Text with long space:{' '}
                </label>
                <input
                    id="text"
                    name="text"
                    type="text"
                    value={props.data.value}
                    onChange={onChange}
                />
            </NodeWrapper>
            <Handle type="source" position={Position.Bottom} id="b" style={{ left: 0 }} />
            <Handle type="source" position={Position.Bottom} id="a" style={{ left: '100%' }} />
            <Handle type="target" position={Position.Right} id="c" />
        </Fragment>
    )
}
