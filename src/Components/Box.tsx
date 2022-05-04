import React, { CSSProperties, MouseEvent, useState } from "react";

interface BoxProps {
    width: number;
    height: number;
    color: string;
}



const Box: React.FC<BoxProps> = (props) => {
    const {width, height, color} = props;

    const boxStyle : CSSProperties = {
        width,
        height,
        color,
        position:"absolute", 
        border:"solid 1px black",
        userSelect:"none"
    }

    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [diffZ, setDiffZ] = useState(0);
    const [diffQ, setDiffQ] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [style, setStyle] = useState(boxStyle);

    const mouseUp = (e:MouseEvent) => {
        setDragging(false);
    }
    
    const mouseDown = (e:MouseEvent<HTMLElement>) => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setDiffZ(e.screenX - e.currentTarget.getBoundingClientRect().right);
        setDiffQ(e.screenY - e.currentTarget.getBoundingClientRect().bottom);
        setDragging(true);
    }
    
    const mouseLeave = (e:MouseEvent<HTMLElement>) => {
        setDragging(false);
    }

    const mouseMove = (e:MouseEvent) => {
        if(dragging){
            let parent = e.currentTarget.parentElement;
            let parent_left = parent?.getBoundingClientRect().left || 0;
            let parent_right = parent?.getBoundingClientRect().right || 0;
            let parent_top = parent?.getBoundingClientRect().top || 0;
            let parent_bottom = parent?.getBoundingClientRect().bottom || 0;

            let left = e.screenX - diffX;
            let top = e.screenY - diffY;

            let rigth = e.screenX - diffZ;
            let bottom = e.screenY - diffQ;

            if(left > parent_left && top > parent_top && rigth < parent_right && bottom < parent_bottom){
                let new_style = {left:"", top:""}
                Object.assign(new_style, style);
    
                new_style.left = left+"px";
                new_style.top = top+"px";
    
                setStyle(new_style);
            }
        }

    }

    return (
        <div 
            style={style}
            onMouseDown = {mouseDown}
            onMouseMove = {mouseMove}
            onMouseUp = {mouseUp}
            onMouseLeave = {mouseLeave}
            className = "box"
        >
            Box
        </div>
    )
}

export default Box;