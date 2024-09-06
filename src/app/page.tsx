"use client";

import { Button } from "@material-tailwind/react";
import "react-day-picker/style.css";
import React from "react";
import { useEffect, useState } from "react";
import DialogModalPageOne from "@/components/DialogModalPageOne";
import DialogModalPageTwo from "@/components/DialogModalPageTwo";
import DialogModalPageThree from "@/components/DialogModalPageThree";
import DialogModalDetail from "@/components/DialogModalDetail";
import { DataInterface } from "./data";

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

export interface InputedDataPageTwoInterface {
    //madinah
    vendorMadinah: string;
    starHotelMadinah: number | string;
    hotelMadinah: DataInterface.InputHotelInterface;
    stayDurationMadinah: number | string;
    checkInMadinah: Date | string;
    checkOutMadinah: Date | string;

    //makkah
    vendorMakkah: string;
    starHotelMakkah: number | string;
    hotelMakkah: DataInterface.InputHotelInterface;
    stayDurationMakkah: number | string;
    checkInMakkah: Date | string;
    checkOutMakkah: Date | string;
}

export interface InputedDataPageThreeInterface {
    handlingSaudia: DataInterface.StandardInterface;
    equipment: DataInterface.StandardInterface;
    travelInsurance: DataInterface.StandardInterface;
    manasik: DataInterface.StandardInterface;
    handlingDomestic: DataInterface.StandardInterface;
    visa: DataInterface.StandardInterface;
    transport: DataInterface.StandardInterface;
    pilgrimage: DataInterface.StandardInterface;
    bulletTrain: DataInterface.StandardInterface;
    mutawif: DataInterface.StandardInterface;
    tourLeader: DataInterface.StandardInterface;
    siskopatuh: number;
    itenerary: DataInterface.IteneraryInterface;
}

export interface InputedDataInterface
    extends InputedDataPageOneInterface,
        InputedDataPageTwoInterface,
        InputedDataPageThreeInterface {}

const initStandard: DataInterface.StandardInterface = {
    id: 0,
    name: "TIDAK",
    price: 0,
};

export default function Home() {
    const [isOpenDialogPageOne, setOpenDialogPageOne] = useState(false);
    const [isOpenDialogPageTwo, setOpenDialogPageTwo] = useState(false);
    const [isOpenDialogPageThree, setOpenDialogPageThree] = useState(false);
    const [isOpenDialogPageDetail, setOpenDialogPageDetail] = useState(false);

    //inputed data page 1
    const [inputedDataPageOne, setInputedDataPageOne] =
        useState<InputedDataPageOneInterface>({
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
        });

    //inputed data page 2
    const [inputedDataPageTwo, setInputedDataPageTwo] =
        useState<InputedDataPageTwoInterface>({
            vendorMadinah: "",
            starHotelMadinah: "",
            hotelMadinah: {
                id: -1,
                name: "",
                type: "",
                price: 0,
            },
            stayDurationMadinah: "",
            checkInMadinah: "",
            checkOutMadinah: "",

            //makkah
            vendorMakkah: "",
            starHotelMakkah: "",
            hotelMakkah: {
                id: -1,
                name: "",
                type: "",
                price: 0,
            },
            stayDurationMakkah: "",
            checkInMakkah: "",
            checkOutMakkah: "",
        });

    //inputed data
    const [inputedDataPageThree, setInputedDataPageThree] =
        useState<InputedDataPageThreeInterface>({
            handlingSaudia: initStandard,
            equipment: initStandard,
            travelInsurance: initStandard,
            manasik: initStandard,
            handlingDomestic: initStandard,
            visa: initStandard,
            transport: initStandard,
            pilgrimage: initStandard,
            bulletTrain: initStandard,
            mutawif: initStandard,
            tourLeader: initStandard,
            siskopatuh: 80000,
            itenerary: { id: 0, name: "TIDAK" },
        });

    return (
        <main>
            <Button
                className=""
                onClick={() => {
                    setOpenDialogPageOne(!isOpenDialogPageOne);
                }}
            >
                Tambah Produk
            </Button>
            <DialogModalPageOne
                inputedData={inputedDataPageOne}
                setInputedData={setInputedDataPageOne}
                openState={isOpenDialogPageOne}
                openHandler={() => {
                    setOpenDialogPageOne(!isOpenDialogPageOne);
                }}
                submitHandler={() => {
                    setOpenDialogPageTwo(!isOpenDialogPageTwo);
                }}
            />
            <DialogModalPageTwo
                inputedData={inputedDataPageTwo}
                setInputedData={setInputedDataPageTwo}
                openState={isOpenDialogPageTwo}
                openHandler={() => {
                    setOpenDialogPageTwo(!isOpenDialogPageTwo);
                }}
                submitHandler={() => {
                    setOpenDialogPageThree(!isOpenDialogPageThree);
                }}
                prevHandler={() => {
                    setOpenDialogPageOne(!isOpenDialogPageOne);
                }}
            />
            <DialogModalPageThree
                inputedData={inputedDataPageThree}
                setInputedData={setInputedDataPageThree}
                openState={isOpenDialogPageThree}
                openHandler={() => {
                    setOpenDialogPageThree(!isOpenDialogPageThree);
                }}
                submitHandler={() => {
                    setOpenDialogPageDetail(!isOpenDialogPageDetail);
                }}
                prevHandler={() => {
                    setOpenDialogPageTwo(!isOpenDialogPageTwo);
                }}
            />
            <DialogModalDetail
                inputedData={{
                    ...inputedDataPageOne,
                    ...inputedDataPageTwo,
                    ...inputedDataPageThree,
                }}
                openState={isOpenDialogPageDetail}
                openHandler={() => {
                    setOpenDialogPageDetail(!isOpenDialogPageDetail);
                }}
                submitHandler={function (): void {
                    setOpenDialogPageDetail(!isOpenDialogPageDetail);
                }}
            />
        </main>
    );
}
