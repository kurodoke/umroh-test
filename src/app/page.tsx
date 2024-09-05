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
} from "@material-tailwind/react";
import "react-day-picker/style.css";
import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";

//interface
interface AirlineInterface {
    id: number;
    name: string;
    route: string;
    price: number;
}

//type of data
type MonthPeriodType = Array<string>;
type DepartureFromType = Array<string>;
type DepartureToType = Array<string>;
type DaysPacketType = Array<number>;
type ReturnFromType = Array<string>;
type ReturnToType = Array<string>;
type AirlinesType = Array<AirlineInterface>;

//data month period
const dataMonthPeriod = [
    "01 SEPT 2024 - 30 OKT 2024",
    "01 NOV 2024 - 10 DES 2024",
    "11 DES 2024 - 11 JAN 2025",
    "11 JAN 2025 - 28 FEB 2025",
    "01 MAR 2025 - 21 MAR 2025",
    "22 MAR 2025 - 31 MAR 2025",
    "01 APR 2025 - 30 APR 2025",
];

//data departure from
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
//data departure to
const dataDepartureTo = ["JEDDAH", "MADINAH"];

//data packets of days
const dataDaysPacket = [9, 12, 13, 16, 24, 30];

//data return from
const dataReturnFrom = ["JEDDAH", "MADINAH"];

//data return to
const dataReturnTo = [
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

const dataAirlines: AirlinesType = [
    {
        id: 1,
        name: "GARUDA INDONESIA",
        price: 17900000,
        route: "UPG-CKG-JED",
    },
    {
        id: 2,
        name: "LION",
        price: 16200000,
        route: "UPG-JED",
    },
    {
        id: 3,
        name: "AIR ASIA",
        price: 15500000,
        route: "UPG-KUL-JED",
    },
];

interface SavedDataInterface {
    monthPeriod: string;
    departureDate: Date;
    departureFrom: string;
    departureTo: string;
    daysPacket: number | string;
    returnDate: Date;
    returnFrom: string;
    returnTo: string;
    airline: AirlineInterface;
}

export default function Home() {
    //fetch data
    const [monthPeriod, setMonthPeriod] = useState<MonthPeriodType>([""]);
    const [departureFrom, setDepartureFrom] = useState<DepartureFromType>([""]);
    const [departureTo, setDeparturetTo] = useState<DepartureToType>([""]);
    const [daysPacket, setDaysPacket] = useState<DaysPacketType>([0]);
    const [returnFrom, setReturnFrom] = useState<ReturnFromType>([""]);
    const [returnTo, setReturntTo] = useState<ReturnToType>([""]);
    const [airlines, setAirlines] = useState<AirlinesType>([
        { id: 0, name: "Pilih Maskapai", price: 0, route: "" },
    ]);

    const [airlinesId, setAirlinesId] = useState<Array<number>>([0]);

    //saved data
    const [savedData, setSavedData] = useState<SavedDataInterface>({
        monthPeriod: "Pilih Periode Bulan",
        departureDate: new Date(),
        departureFrom: "Pilih Berangkat Darimana",
        departureTo: "Pilih Berangkat Kemana",
        daysPacket: "Pilih Hari",
        returnDate: new Date(),
        returnFrom: "Pilih Pulang Darimana",
        returnTo: "Pilih Pulang Kemana",
        airline: { id: 0, name: "Pilih Maskapai", price: 0, route: "" },
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
        if (daysPacket.length == 1) setDaysPacket(dataDaysPacket);
        if (returnFrom.length == 1) setReturnFrom(dataReturnFrom);
        if (returnTo.length == 1) setReturntTo(dataReturnTo);
        if (airlines.length == 1) {
            setAirlines(dataAirlines);
            setAirlinesId([
                0,
                ...dataAirlines.map((_airline) => {
                    return _airline.id;
                }),
            ]);
        }
    }, [
        monthPeriod,
        departureTo,
        departureFrom,
        daysPacket,
        returnTo,
        returnFrom,
        airlines,
    ]);

    useEffect(() => {
        console.log(savedData);
    }, [savedData]);

    return (
        <main>
            <Button className="" onClick={modalHandler}>
                Tambah Produk
            </Button>
            <Dialog
                open={isOpenModal}
                handler={modalHandler}
                size="xl"
                className="p-2 md:p-5"
            >
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
                    <div className="flex gap-1 md:gap-4">
                        <CustomSelect
                            className="w-6/12"
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
                            className="w-6/12"
                            data={savedData.departureTo}
                            defaultValue="Pilih Berangkat Kemana"
                            label="Berangkat Ke"
                            list={departureTo}
                            onChange={(value) => {
                                setSavedData({
                                    ...savedData,
                                    departureTo: value,
                                });
                            }}
                        />
                    </div>
                    <CustomSelect
                        data={savedData.daysPacket.toString()}
                        defaultValue="Pilih Hari"
                        label="Paket Hari"
                        list={daysPacket.map((_day) => {
                            return _day.toString() + " Hari";
                        })}
                        valueList={daysPacket.map((_days) => {
                            return _days.toString();
                        })}
                        onChange={(value) => {
                            setSavedData({
                                ...savedData,
                                daysPacket: Number(value),
                            });
                        }}
                    />
                    <DatePicker
                        defaultValue="Pilih Hari Kepulangan"
                        label="Tanggal Pulang"
                        dataDate={savedData.returnDate}
                        onSelect={(value) => {
                            setSavedData({
                                ...savedData,
                                returnDate: value,
                            });
                        }}
                    />
                    <div className="flex gap-1 md:gap-4">
                        <CustomSelect
                            className="w-6/12"
                            data={savedData.returnFrom}
                            defaultValue="Pilih Pulang Darimana"
                            label="Pulang Dari"
                            list={returnFrom}
                            onChange={(value) => {
                                setSavedData({
                                    ...savedData,
                                    returnFrom: value,
                                });
                            }}
                        />
                        <CustomSelect
                            className="w-6/12"
                            data={savedData.returnTo}
                            defaultValue="Pilih Pulang Kemana"
                            label="Pulang Ke"
                            list={returnTo}
                            onChange={(value) => {
                                setSavedData({
                                    ...savedData,
                                    returnTo: value,
                                });
                            }}
                        />
                    </div>
                    <CustomSelect
                        data={savedData.airline.id.toString()}
                        defaultValue="Pilih Maskapai"
                        idDefaultValue="0"
                        label="Maskapai"
                        valueList={airlinesId.map((_id) => {
                            return _id.toString();
                        })}
                        list={airlines.map((_airline) => {
                            return (
                                _airline &&
                                `${_airline.name} ${_airline.route} - ${_airline.price}`
                            );
                        })}
                        onChange={(value) => {
                            const selectedAirline = airlines.find(
                                (_airline) =>
                                    _airline && Number(value) === _airline.id
                            );

                            if (selectedAirline)
                                setSavedData({
                                    ...savedData,
                                    airline: selectedAirline,
                                });
                        }}
                    />
                </DialogBody>
            </Dialog>
        </main>
    );
}
