import { Typography } from "@material-tailwind/react";
import { variant } from "@material-tailwind/react/types/components/typography";
import React from "react";

export default function DetailText({
    title,
    data,
    variant = "paragraph",
}: {
    title: string;
    data: string;
    variant?: variant;
}): React.ReactElement {
    return (
        <div className="flex w-full justify-between">
            <Typography variant={variant}>{title}</Typography>
            <Typography>{data == "" ? "-" : data}</Typography>
        </div>
    );
}
