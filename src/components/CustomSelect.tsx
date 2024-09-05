import React from "react";
import { Typography, Select, Option } from "@material-tailwind/react";

export default function CustomSelect({
    label,
    data,
    onChange,
    defaultValue,
    list,
    className = "w-full",
    valueList,
    idDefaultValue,
}: {
    className?: string;
    label: string;
    data: string;
    onChange: (value: string) => void;
    defaultValue: string;
    idDefaultValue?: string;
    list: Array<string>;
    valueList?: Array<string> | undefined;
}): React.ReactElement {
    const keyPrefix = label.toLocaleLowerCase().split(" ").join("-");

    return (
        <div className={className}>
            <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium"
            >
                {label}
            </Typography>
            <Select
                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-blue-gray-900 focus:!border-t-blue-gray-900 group-hover:!border-primary"
                placeholder="1"
                value={data}
                onChange={(value) => {
                    if (value) onChange(value);
                }}
                labelProps={{
                    className: "hidden",
                }}
            >
                {[
                    <Option
                        key={keyPrefix + "-(-1)"}
                        value={idDefaultValue ? idDefaultValue : defaultValue}
                    >
                        {defaultValue}
                    </Option>,
                    ...list.map((_list: string, index: number) => {
                        return (
                            <Option
                                value={valueList ? valueList[index] : _list}
                                key={keyPrefix + "-" + index}
                            >
                                {_list}
                            </Option>
                        );
                    }),
                ]}
            </Select>
        </div>
    );
}
