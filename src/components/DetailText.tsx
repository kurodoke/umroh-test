import { Typography } from "@material-tailwind/react";
import React from "react";

export default function DetailText({
    title,
    data,
}: {
    title: string;
    data: string;
}): React.ReactElement {
    return (
        <div className="flex w-full justify-between">
            <Typography>{title}</Typography>
            <Typography>{data == "" ? "-" : data}</Typography>
        </div>
    );
}
