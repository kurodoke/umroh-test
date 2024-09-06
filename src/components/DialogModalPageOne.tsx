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
    DialogFooter,
} from "@material-tailwind/react";
import "react-day-picker/style.css";
import React from "react";
import { useEffect, useState } from "react";
import DatePicker from "@/components/DatePicker";
import CustomSelect from "@/components/CustomSelect";
import { Data, DataInterface, DataType } from "@/app/data";

export interface InputedDataPageOneInterface {
    monthPeriod: string;
    departureDate: Date | string;
    departureFrom: string;
    departureTo: string;
    daysPacket: number | string;
    returnDate: Date | string;
    returnFrom: string;
    returnTo: string;
    airline: DataInterface.AirlineInterface;
    passenger: number | string;
}

export default function DialogModalPageOne({
    openHandler,
    openState,
    submitHandler,
}: {
    openHandler: () => void;
    openState: boolean;
    submitHandler: () => void;
}): React.ReactElement {
    //inputed data
    const [inputedData, setInputedData] = useState<InputedDataPageOneInterface>(
        {
            monthPeriod: "",
            departureDate: "",
            departureFrom: "",
            departureTo: "",
            daysPacket: "",
            returnDate: "",
            returnFrom: "",
            returnTo: "",
            airline: { id: -1, name: "", price: -1, route: "" },
            passenger: "",
        }
    );

    //fetch data
    const [monthPeriod, setMonthPeriod] = useState<DataType.MonthPeriod>();
    const [departureFrom, setDepartureFrom] =
        useState<DataType.DepartureFrom>();
    const [departureTo, setDeparturetTo] = useState<DataType.DepartureTo>();
    const [daysPacket, setDaysPacket] = useState<DataType.DaysPacket>();
    const [returnFrom, setReturnFrom] = useState<DataType.ReturnFrom>();
    const [returnTo, setReturntTo] = useState<DataType.ReturnTo>();
    const [airlines, setAirlines] = useState<DataType.Airlines>();
    const [airlinesId, setAirlinesId] = useState<Array<number>>();
    const [passenger, setPassenger] = useState<DataType.DaysPacket>();

    //fetch on initial render and if data is null
    useEffect(() => {
        if (!monthPeriod) setMonthPeriod(Data.MonthPeriod);
        if (!departureFrom) setDepartureFrom(Data.DepartureFrom);
        if (!departureTo) setDeparturetTo(Data.DepartureTo);
        if (!daysPacket) setDaysPacket(Data.DaysPacket);
        if (!returnFrom) setReturnFrom(Data.ReturnFrom);
        if (!returnTo) setReturntTo(Data.ReturnTo);
        if (!airlines) {
            setAirlines(Data.Airlines);
            setAirlinesId(
                Data.Airlines.map((_airline) => {
                    return _airline.id;
                })
            );
        }
        if (!passenger) setPassenger(Data.Passenger);
    }, [
        monthPeriod,
        departureTo,
        departureFrom,
        daysPacket,
        returnTo,
        returnFrom,
        airlines,
        passenger,
    ]);

    return (
        <Dialog
            open={openState}
            handler={openHandler}
            size="xl"
            className="p-2 md:p-5"
        >
            <DialogHeader>
                <div className="flex justify-between w-full items-center">
                    <Typography variant="h4" color="blue-gray">
                        Tambah Produk
                    </Typography>
                    <CloseIcon onClick={openHandler}></CloseIcon>
                </div>
            </DialogHeader>
            <DialogBody className="space-y-4 pb-6">
                <CustomSelect
                    data={inputedData.monthPeriod}
                    placeHolder="Pilih Periode Bulan"
                    label="Periode Bulan"
                    list={monthPeriod}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            monthPeriod: value,
                        });
                    }}
                />
                <DatePicker
                    placeHolder="Pilih Hari Keberangkatan"
                    label="Tanggal Berangkat"
                    dataDate={inputedData.departureDate}
                    onSelect={(value) => {
                        setInputedData({
                            ...inputedData,
                            departureDate: value,
                        });
                    }}
                />
                <div className="flex gap-1 md:gap-4">
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.departureFrom}
                        placeHolder="Pilih Berangkat Darimana"
                        label="Berangkat Dari"
                        list={departureFrom}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                departureFrom: value,
                            });
                        }}
                    />
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.departureTo}
                        placeHolder="Pilih Berangkat Kemana"
                        label="Berangkat Ke"
                        list={departureTo}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                departureTo: value,
                            });
                        }}
                    />
                </div>
                <CustomSelect
                    data={inputedData.daysPacket.toString()}
                    placeHolder="Pilih Hari"
                    label="Paket Hari"
                    formatListText={(_day) => {
                        return _day + " Hari";
                    }}
                    list={daysPacket?.map((_list) => {
                        return _list.toString();
                    })}
                    valueList={daysPacket?.map((_list) => {
                        return _list.toString();
                    })}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            daysPacket: Number(value),
                        });
                    }}
                />
                <DatePicker
                    placeHolder="Pilih Hari Kepulangan"
                    label="Tanggal Pulang"
                    dataDate={inputedData.returnDate}
                    onSelect={(value) => {
                        setInputedData({
                            ...inputedData,
                            returnDate: value,
                        });
                    }}
                />
                <div className="flex gap-1 md:gap-4">
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.returnFrom}
                        placeHolder="Pilih Pulang Darimana"
                        label="Pulang Dari"
                        list={returnFrom}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                returnFrom: value,
                            });
                        }}
                    />
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.returnTo}
                        placeHolder="Pilih Pulang Kemana"
                        label="Pulang Ke"
                        list={returnTo}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                returnTo: value,
                            });
                        }}
                    />
                </div>
                <CustomSelect
                    data={inputedData.airline.id.toString()}
                    placeHolder="Pilih Maskapai"
                    defaultValue="-1"
                    label="Maskapai"
                    valueList={airlinesId?.map((_id) => {
                        return _id.toString();
                    })}
                    list={airlines?.map((_airline) => {
                        return (
                            _airline &&
                            `${_airline.name} ${_airline.route} - ${_airline.price}`
                        );
                    })}
                    onChange={(value) => {
                        const selectedAirline = airlines?.find(
                            (_airline) =>
                                _airline && Number(value) === _airline.id
                        );

                        if (selectedAirline)
                            setInputedData({
                                ...inputedData,
                                airline: selectedAirline,
                            });
                    }}
                />
                <div>
                    <CustomSelect
                        data={inputedData.passenger.toString()}
                        placeHolder="Pilih Jumlah Peserta"
                        defaultValue="Pilih Jumlah Peserta"
                        label="Jumlah Peserta"
                        list={passenger?.map((_list) => {
                            return _list.toString();
                        })}
                        formatListText={(_text) => {
                            return _text + " Peserta";
                        }}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                passenger: Number(value),
                            });
                        }}
                    />
                    <Typography className="mt-1 text-sm text-red-600 font-medium">
                        35 - 45 Peserta free biaya bus
                    </Typography>
                </div>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="filled"
                    size="sm"
                    onClick={() => {
                        openHandler();
                        submitHandler();
                    }}
                >
                    Lanjutkan
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
