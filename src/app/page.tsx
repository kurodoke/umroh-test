"use client";

import { Button } from "@material-tailwind/react";
import "react-day-picker/style.css";
import React from "react";
import { useEffect, useState } from "react";
import DialogModalPageOne from "@/components/DialogModalPageOne";
import DialogModalPageTwo from "@/components/DialogModalPageTwo";

export default function Home() {
    const [isOpenDialogPageOne, setOpenDialogPageOne] = useState(false);
    const [isOpenDialogPageTwo, setOpenDialogPageTwo] = useState(false);

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
                openState={isOpenDialogPageOne}
                openHandler={() => {
                    setOpenDialogPageOne(!isOpenDialogPageOne);
                }}
                submitHandler={() => {
                    setOpenDialogPageTwo(!isOpenDialogPageTwo);
                }}
            />
            <DialogModalPageTwo
                openState={isOpenDialogPageTwo}
                openHandler={() => {
                    setOpenDialogPageTwo(!isOpenDialogPageTwo);
                }}
            />
        </main>
    );
}
