"use client";

import {
    Typography,
    Popover,
    PopoverHandler,
    PopoverContent,
    Input,
} from "@material-tailwind/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function DatePicker({
    dataDate,
    label,
    defaultValue,
    onSelect,
}: {
    dataDate: Date;
    label: string;
    defaultValue: string;
    onSelect: (value: Date) => void;
}): React.ReactElement {
    //open and close popover
    const [isOpenPopover, setOpenPopover] = useState(false);
    const popoverHandler = () => {
        setOpenPopover(!isOpenPopover);
    };

    return (
        <div>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
            >
                {label}
            </Typography>
            <Popover
                placement="bottom-start"
                open={isOpenPopover}
                handler={popoverHandler}
            >
                <PopoverHandler>
                    <Input
                        onChange={() => null}
                        readOnly
                        value={
                            dataDate ? format(dataDate, "PPP") : defaultValue
                        }
                        className="!border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-blue-gray-900 focus:!border-t-blue-gray-900 group-hover:!border-primary"
                        labelProps={{
                            className: "hidden",
                        }}
                    />
                </PopoverHandler>
                <PopoverContent className="z-[9999]">
                    <DayPicker
                        mode="single"
                        selected={dataDate}
                        onSelect={(value) => {
                            if (value) onSelect(value);
                            popoverHandler();
                        }}
                        className="border-0"
                        captionLayout="label"
                        numberOfMonths={1}
                        classNames={{
                            months: "flex",
                            month_caption:
                                "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm !font-medium text-gray-900",
                            nav: "flex items-center",
                            button_previous:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300 absolute z-[10000] top-1.5 left-1.5",
                            button_next:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300 absolute z-[10000] top-1.5 right-1.5",
                            month_grid: "w-full",
                            weekdays: "flex w-full font-medium text-gray-900",
                            weekday: "m-0.5 w-full font-normal text-sm",
                            week: "flex w-full mt-2",
                            day: "text-gray-600 rounded-md  text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 p-0 font-normal",
                            range_end: "day-range-end",
                            selected:
                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            today: "rounded-md bg-gray-200 text-gray-900",
                            outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            disabled: "text-gray-500 opacity-50",
                            hidden: "invisible",
                            chevron: "fill-black",
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
