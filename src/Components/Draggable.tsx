import React, { MouseEvent } from "react";

interface DraggableProps {
    children?: React.ReactNode;
    width: number;
    height: number;
}

const Draggable: React.FC<DraggableProps> = (props) => {
    const {children, width, height} = props;

    return (
        <div style={{
            width: `${width}px`,
            height: `${height}px`,
            border: "solid 1px black",
            marginLeft: "20px",
            marginTop: "20px"
        }}
        className="draggable_wrap"
        >
            {children}
        </div>
    )
}

export default Draggable;