"use client";

import { CloseIcon } from "@/components/CloseIcon";
import {
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
    Input,
    Select,
    Textarea,
    Typography,
    Option,
    Popover,
    PopoverContent,
    PopoverHandler,
} from "@material-tailwind/react";
import { format } from "date-fns";
import "react-day-picker/style.css";
import React from "react";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";

//temp data of month period before using database
type MonthPeriodInterface = Array<string>;
type DepartureFromInterface = Array<string>;
type DepartureToInterface = Array<string>;

const dataMonthPeriod = [
    "01 SEPT 2024 - 30 OKT 2024",
    "01 NOV 2024 - 10 DES 2024",
    "11 DES 2024 - 11 JAN 2025",
    "11 JAN 2025 - 28 FEB 2025",
    "01 MAR 2025 - 21 MAR 2025",
    "22 MAR 2025 - 31 MAR 2025",
    "01 APR 2025 - 30 APR 2025",
];

const dataDepartureFrom = [
    "MAKASSAR",
    "JAKARTA",
    "SURABAYA",
    "BANJARMASIN",
    "MEDAN",
    "KENDARI",
    "KOTA PALU",
    "SINGAPURA",
    "KUALA LUMPUR",
];

const dataDepartureTo = ["JEDDAH", "MADINAH"];

interface SavedDataInterface {
    monthPeriod: string;
    departureDate: Date;
    departureFrom: string;
    departureTo: string;
}

export default function Home() {
    //fetch data
    const [monthPeriod, setMonthPeriod] = useState<MonthPeriodInterface>([""]);
    const [departureFrom, setDepartureFrom] = useState<DepartureFromInterface>([
        "",
    ]);
    const [departureTo, setDeparturetTo] = useState<DepartureToInterface>([""]);

    //saved data
    const [savedData, setSavedData] = useState<SavedDataInterface>({
        monthPeriod: "Pilih Periode Bulan",
        departureDate: new Date(),
        departureFrom: "Pilih Berangkat Darimana",
        departureTo: "Pilih Tujuan Kemana",
    });

    //open and close modal
    const [isOpenModal, setOpenModal] = useState(false);
    const modalHandler = () => {
        setOpenModal(!isOpenModal);
    };

    //---
    useEffect(() => {
        if (monthPeriod.length == 1) setMonthPeriod(dataMonthPeriod);
        if (departureFrom.length == 1) setDepartureFrom(dataDepartureFrom);
        if (departureTo.length == 1) setDeparturetTo(dataDepartureTo);
    }, [monthPeriod, departureTo, departureFrom]);

    return (
        <main>
            <Button className="" onClick={modalHandler}>
                Tambah Produk
            </Button>
            <Dialog open={isOpenModal} handler={modalHandler} size="xl">
                <DialogHeader>
                    <div className="flex justify-between w-full items-center">
                        <Typography variant="h4" color="blue-gray">
                            Tambah Produk
                        </Typography>
                        <CloseIcon onClick={modalHandler}></CloseIcon>
                    </div>
                </DialogHeader>
                <DialogBody className="space-y-4 pb-6">
                    <CustomSelect
                        data={savedData.monthPeriod}
                        defaultValue="Pilih Periode Bulan"
                        label="Periode Bulan"
                        list={monthPeriod}
                        onChange={(value) => {
                            setSavedData({
                                ...savedData,
                                monthPeriod: value,
                            });
                        }}
                    />
                    <DatePicker
                        defaultValue="Pilih Hari Keberangkatan"
                        label="Tanggal Berangkat"
                        dataDate={savedData.departureDate}
                        onSelect={(value) => {
                            setSavedData({
                                ...savedData,
                                departureDate: value,
                            });
                        }}
                    />
                    <div className="flex gap-4">
                        <CustomSelect
                            data={savedData.departureFrom}
                            defaultValue="Pilih Berangkat Darimana"
                            label="Berangkat Dari"
                            list={departureFrom}
                            onChange={(value) => {
                                setSavedData({
                                    ...savedData,
                                    departureFrom: value,
                                });
                            }}
                        />
                        <CustomSelect
                            data={savedData.departureTo}
                            defaultValue="Pilih Tujuan Kemana"
                            label="Tujuan Ke"
                            list={departureTo}
                            onChange={(value) => {
                                setSavedData({
                                    ...savedData,
                                    departureTo: value,
                                });
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Name
                        </Typography>
                        <Input
                            color="gray"
                            size="lg"
                            placeholder="eg. White Shoes"
                            name="name"
                            className="placeholder:opacity-100 focus:!border-t-gray-900"
                            containerProps={{
                                className: "!min-w-full",
                            }}
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Category
                        </Typography>
                        <Select
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-blue-gray-900 focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            placeholder="1"
                            labelProps={{
                                className: "hidden",
                            }}
                        >
                            <Option>Clothing</Option>
                            <Option>Fashion</Option>
                            <Option>Watches</Option>
                        </Select>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Weight
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="eg. <8.8oz | 250g"
                                name="weight"
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Size
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="eg. US 8"
                                name="size"
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Description (Optional)
                        </Typography>
                        <Textarea
                            rows={7}
                            placeholder="eg. This is a white shoes with a comfortable sole."
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Description (Optional)
                        </Typography>
                        <Textarea
                            rows={7}
                            placeholder="eg. This is a white shoes with a comfortable sole."
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                    <div>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="mb-2 text-left font-medium"
                        >
                            Description (Optional)
                        </Typography>
                        <Textarea
                            rows={7}
                            placeholder="eg. This is a white shoes with a comfortable sole."
                            className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                    </div>
                </DialogBody>
            </Dialog>
        </main>
    );
}
