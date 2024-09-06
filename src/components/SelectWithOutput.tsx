import React from "react";
import CustomSelect from "./CustomSelect";
import { Input } from "@material-tailwind/react";
import { DataInterface, DataType } from "@/app/data";
import formatCurrency from "@/util/formatCurrency";

export default function SelectWithOutput<T>({
    dataId,
    placeHolder,
    data,
    label,
    setInputedData,
    price,
}: {
    dataId: number;
    placeHolder: string;
    label: string;
    data: Array<DataInterface.StandardInterface>;
    setInputedData: (value: DataInterface.StandardInterface) => void;
    price: number;
}): React.ReactElement {
    return (
        <div className="flex flex-col gap-4">
            <CustomSelect
                data={dataId.toString()}
                placeHolder={placeHolder}
                defaultValue="0"
                label={label}
                list={data
                    ?.filter((_list) => {
                        return _list.id != 0 ? true : false;
                    })
                    .map((_list) => {
                        return _list.name;
                    })}
                valueList={data
                    ?.filter((_list) => {
                        return _list.id != 0 ? true : false;
                    })
                    .map((_list) => {
                        return _list.id.toString();
                    })}
                onChange={(value) => {
                    const selectedData = data?.find(
                        (_data) => _data && Number(value) === _data.id
                    );

                    if (selectedData) setInputedData(selectedData);
                }}
            />
            <Input className="" value={formatCurrency(price)} disabled />
        </div>
    );
}
