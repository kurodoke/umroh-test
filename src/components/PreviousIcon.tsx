import React, { MouseEventHandler } from "react";

export function PreviousIcon({
    onClick,
}: {
    onClick: MouseEventHandler<SVGSVGElement>;
}): React.ReactElement {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-5 w-5 cursor-pointer"
            onClick={onClick}
        >
            <polyline
                fill="none"
                stroke="#000000"
                stroke-width="2"
                points="7 2 17 12 7 22"
                transform="matrix(-1 0 0 1 24 0)"
            />
        </svg>
    );
}
