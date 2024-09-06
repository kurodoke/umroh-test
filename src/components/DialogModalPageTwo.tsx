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

export default function DialogModalPageTwo({
    openHandler,
    openState,
}: {
    openHandler: () => void;
    openState: boolean;
}): React.ReactElement {
    //inputed data
    const [inputedData, setInputedData] = useState<InputedDataPageTwoInterface>(
        {
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
        }
    );

    //fetch data
    const [vendorMadinah, setVendorMadinah] = useState<DataType.Vendor>();
    const [starHotelMadinah, setStarHotelMadinah] =
        useState<DataType.StarHotel>();
    const [hotelMadinah, setHotelMadinah] = useState<DataType.Hotel>();
    const [hotelMadinahId, setHotelMadinahId] = useState<Array<number>>();
    const [stayDurationMadinah, setStayDurationMadinah] =
        useState<DataType.StayDuration>();

    const [vendorMakkah, setVendorMakkah] = useState<DataType.Vendor>();
    const [starHotelMakkah, setStarHotelMakkah] =
        useState<DataType.StarHotel>();
    const [hotelMakkah, setHotelMakkah] = useState<DataType.Hotel>();
    const [hotelMakkahId, setHotelMakkahId] = useState<Array<number>>();
    const [stayDurationMakkah, setStayDurationMakkah] =
        useState<DataType.StayDuration>();

    //fetch on initial render and if data is null
    useEffect(() => {
        if (!vendorMadinah) setVendorMadinah(Data.VendorMadinah);
        if (!starHotelMadinah) setStarHotelMadinah(Data.StarHotelMadinah);
        if (!hotelMadinah) {
            setHotelMadinah(Data.HotelMadinah);
            setHotelMadinahId(
                Data.HotelMadinah.map((_hotel) => {
                    return _hotel.id;
                })
            );
        }
        if (!stayDurationMadinah)
            setStayDurationMadinah(Data.StayDurationMadinah);

        if (!vendorMakkah) setVendorMakkah(Data.VendorMakkah);
        if (!starHotelMakkah) setStarHotelMakkah(Data.StarHotelMakkah);
        if (!hotelMakkah) {
            setHotelMakkah(Data.HotelMakkah);
            setHotelMakkahId(
                Data.HotelMakkah.map((_hotel) => {
                    return _hotel.id;
                })
            );
        }
        if (!stayDurationMakkah) setStayDurationMakkah(Data.StayDurationMakkah);
    }, [
        vendorMadinah,
        starHotelMadinah,
        hotelMadinah,
        stayDurationMadinah,
        vendorMakkah,
        starHotelMakkah,
        hotelMakkah,
        stayDurationMakkah,
    ]);

    const formatCurrency = (amount: number) => {
        return `Rp${amount.toLocaleString("id-ID")}`;
    };

    const getHotelPrice = (
        value: "DUO" | "TRIO" | "QUAD" | string,
        hotel: DataType.Hotel,
        id: number
    ) => {
        if (!hotel || id < 0 || id >= hotel.length) {
            return 0;
        }

        const selectedHotel = hotel[id];

        switch (value) {
            case "DUO":
                return selectedHotel.priceDuo;
            case "TRIO":
                return selectedHotel.priceTrio;
            case "QUAD":
                return selectedHotel.priceQuad;
            default:
                return 0;
        }
    };

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
                        P
                    </Typography>
                    <CloseIcon onClick={openHandler}></CloseIcon>
                </div>
            </DialogHeader>
            <DialogBody className="space-y-4 pb-6">
                {/* madinah */}
                <CustomSelect
                    data={inputedData.vendorMadinah}
                    placeHolder="Pilih Vendor"
                    label="Vendor"
                    list={vendorMadinah}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            vendorMadinah: value,
                        });
                    }}
                />
                <CustomSelect
                    data={inputedData.starHotelMadinah.toString()}
                    placeHolder="Pilih Hotel Bintang Berapa"
                    label="Hotel Bintang"
                    list={starHotelMadinah?.map((_list) => {
                        return _list.toString();
                    })}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            starHotelMadinah: value,
                        });
                    }}
                />
                <CustomSelect
                    data={inputedData.hotelMadinah.id.toString()}
                    placeHolder="Pilih Hotel Madinah"
                    defaultValue="-1"
                    label="Hotel Madinah"
                    valueList={hotelMadinahId?.map((_id) => {
                        return _id.toString();
                    })}
                    list={hotelMadinah?.map((_hotel) => {
                        return _hotel && `${_hotel.name}`;
                    })}
                    onChange={(value) => {
                        const selectedHotel = hotelMadinah?.find(
                            (_hotel) => _hotel && Number(value) === _hotel.id
                        );

                        if (selectedHotel)
                            setInputedData({
                                ...inputedData,
                                hotelMadinah: {
                                    id: selectedHotel.id,
                                    name: selectedHotel.name,
                                    type: inputedData.hotelMadinah.type,
                                    price: hotelMadinah
                                        ? getHotelPrice(
                                              inputedData.hotelMadinah.type,
                                              hotelMadinah,
                                              selectedHotel.id
                                          )
                                        : 0,
                                },
                            });
                    }}
                />

                <div className="flex gap-1 md:gap-4">
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.hotelMadinah.type}
                        placeHolder="Pilih Tipe Hotel"
                        label="Tipe Hotel"
                        list={["DUO", "TRIO", "QUAD"]}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                hotelMadinah: {
                                    id: inputedData.hotelMadinah.id,
                                    name: inputedData.hotelMadinah.name,
                                    type: value,
                                    price: hotelMadinah
                                        ? getHotelPrice(
                                              value,
                                              hotelMadinah,
                                              inputedData.hotelMadinah.id
                                          )
                                        : 0,
                                },
                            });
                        }}
                    />
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.stayDurationMadinah.toString()}
                        placeHolder="Pilih Durasi Hotel"
                        label="Durasi Hotel Madinah"
                        list={stayDurationMadinah?.map((_list) => {
                            return _list.toString();
                        })}
                        formatListText={(_text) => {
                            return (
                                (Number(_text) - 1 == 0
                                    ? "City Tour"
                                    : `${Number(_text) - 1} Malam`) +
                                ` - ${_text} Hari`
                            );
                        }}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                stayDurationMadinah: value,
                            });
                        }}
                    />
                </div>
                <Input
                    className="w-full"
                    value={formatCurrency(
                        inputedData.hotelMadinah.price *
                            Number(inputedData.stayDurationMadinah)
                    )}
                    disabled
                />
                <div className="flex gap-1 md:gap-4">
                    <DatePicker
                        className="w-6/12"
                        placeHolder="Tanggal Check-In"
                        label="Check-In"
                        dataDate={inputedData.checkInMadinah}
                        onSelect={(value) => {
                            setInputedData({
                                ...inputedData,
                                checkInMadinah: value,
                            });
                        }}
                    />
                    <DatePicker
                        className="w-6/12"
                        placeHolder="Tanggal Check-Out"
                        label="Check-Out"
                        dataDate={inputedData.checkOutMadinah}
                        onSelect={(value) => {
                            setInputedData({
                                ...inputedData,
                                checkOutMadinah: value,
                            });
                        }}
                    />
                </div>
                <hr className="my-2 border-blue-gray-50" />
                {/* makkah */}
                <CustomSelect
                    data={inputedData.vendorMakkah}
                    placeHolder="Pilih Vendor"
                    label="Vendor"
                    list={vendorMakkah}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            vendorMakkah: value,
                        });
                    }}
                />
                <CustomSelect
                    data={inputedData.starHotelMakkah.toString()}
                    placeHolder="Pilih Hotel Bintang Berapa"
                    label="Hotel Bintang"
                    list={starHotelMakkah?.map((_list) => {
                        return _list.toString();
                    })}
                    onChange={(value) => {
                        setInputedData({
                            ...inputedData,
                            starHotelMakkah: value,
                        });
                    }}
                />
                <CustomSelect
                    data={inputedData.hotelMakkah.id.toString()}
                    placeHolder="Pilih Hotel Makkah"
                    defaultValue="-1"
                    label="Hotel Makkah"
                    valueList={hotelMakkahId?.map((_id) => {
                        return _id.toString();
                    })}
                    list={hotelMakkah?.map((_hotel) => {
                        return _hotel && `${_hotel.name}`;
                    })}
                    onChange={(value) => {
                        const selectedHotel = hotelMakkah?.find(
                            (_hotel) => _hotel && Number(value) === _hotel.id
                        );

                        if (selectedHotel)
                            setInputedData({
                                ...inputedData,
                                hotelMakkah: {
                                    id: selectedHotel.id,
                                    name: selectedHotel.name,
                                    type: inputedData.hotelMakkah.type,
                                    price: hotelMakkah
                                        ? getHotelPrice(
                                              inputedData.hotelMakkah.type,
                                              hotelMakkah,
                                              selectedHotel.id
                                          )
                                        : 0,
                                },
                            });
                    }}
                />

                <div className="flex gap-1 md:gap-4">
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.hotelMakkah.type}
                        placeHolder="Pilih Tipe Hotel"
                        label="Tipe Hotel"
                        list={["DUO", "TRIO", "QUAD"]}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                hotelMakkah: {
                                    id: inputedData.hotelMakkah.id,
                                    name: inputedData.hotelMakkah.name,
                                    type: value,
                                    price: hotelMakkah
                                        ? getHotelPrice(
                                              value,
                                              hotelMakkah,
                                              inputedData.hotelMakkah.id
                                          )
                                        : 0,
                                },
                            });
                        }}
                    />
                    <CustomSelect
                        className="w-6/12"
                        data={inputedData.stayDurationMakkah.toString()}
                        placeHolder="Pilih Durasi Hotel"
                        label="Durasi Hotel Makkah"
                        list={stayDurationMakkah?.map((_list) => {
                            return _list.toString();
                        })}
                        formatListText={(_text) => {
                            return (
                                (Number(_text) - 1 == 0
                                    ? "City Tour"
                                    : `${Number(_text) - 1} Malam`) +
                                ` - ${_text} Hari`
                            );
                        }}
                        onChange={(value) => {
                            setInputedData({
                                ...inputedData,
                                stayDurationMakkah: value,
                            });
                        }}
                    />
                </div>
                <Input
                    className="w-full"
                    value={formatCurrency(
                        inputedData.hotelMakkah.price *
                            Number(inputedData.stayDurationMakkah)
                    )}
                    disabled
                />
                <div className="flex gap-1 md:gap-4">
                    <DatePicker
                        className="w-6/12"
                        placeHolder="Tanggal Check-In"
                        label="Check-In"
                        dataDate={inputedData.checkInMakkah}
                        onSelect={(value) => {
                            setInputedData({
                                ...inputedData,
                                checkInMakkah: value,
                            });
                        }}
                    />
                    <DatePicker
                        className="w-6/12"
                        placeHolder="Tanggal Check-Out"
                        label="Check-Out"
                        dataDate={inputedData.checkOutMakkah}
                        onSelect={(value) => {
                            setInputedData({
                                ...inputedData,
                                checkOutMakkah: value,
                            });
                        }}
                    />
                </div>
            </DialogBody>
            <DialogFooter>
                <Button variant="filled" size="sm" onClick={openHandler}>
                    Lanjutkan
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
