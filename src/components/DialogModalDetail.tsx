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
import { InputedDataInterface } from "@/app/page";
import DetailText from "./DetailText";
import { format } from "date-fns";
import formatCurrency from "@/util/formatCurrency";

export default function DialogModalDetail({
    openHandler,
    openState,
    submitHandler,
    inputedData,
}: {
    openHandler: () => void;
    openState: boolean;
    submitHandler: () => void;
    inputedData: InputedDataInterface;
}): React.ReactElement {
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
                        Detail Informasi
                    </Typography>
                    <CloseIcon onClick={openHandler}></CloseIcon>
                </div>
            </DialogHeader>
            <DialogBody className="space-y-4 pb-6">
                <div className="flex flex-col gap-2 w-full">
                    <div>
                        <DetailText
                            title="Periode Bulan"
                            data={inputedData.monthPeriod}
                        />
                        <DetailText
                            title="Tanggal Berangkat"
                            data={
                                inputedData.departureDate instanceof Date
                                    ? format(inputedData.departureDate, "PPP")
                                    : ""
                            }
                        />
                        <DetailText
                            title="Tanggal Pulang"
                            data={
                                inputedData.returnDate instanceof Date
                                    ? format(inputedData.returnDate, "PPP")
                                    : ""
                            }
                        />
                        <DetailText
                            title="Berangkat Dari"
                            data={inputedData.departureFrom}
                        />
                        <DetailText
                            title="Berangkat Ke"
                            data={inputedData.departureTo}
                        />
                        <DetailText
                            title="Paket Hari"
                            data={inputedData.daysPacket.toString()}
                        />
                        <DetailText
                            title="Maskapai"
                            data={
                                inputedData.airline.name +
                                " - " +
                                inputedData.airline.route
                            }
                        />
                        <DetailText
                            title="Jumlah Peserta"
                            data={inputedData.passenger.toString()}
                        />
                    </div>
                    {/* madinah */}
                    <div className="mt-2">
                        <Typography variant="h4" color="blue-gray">
                            Produk LA
                        </Typography>
                        <DetailText
                            title="Vendor"
                            data={inputedData.vendorMadinah}
                        />
                        <DetailText
                            title="Hotel"
                            data={inputedData.hotelMadinah.name}
                        />
                        <DetailText
                            title="Bintang Hotel"
                            data={
                                inputedData.starHotelMadinah.toString() +
                                " Bintang"
                            }
                        />
                        <DetailText
                            title="Jumlah Hari"
                            data={
                                inputedData.stayDurationMadinah.toString() +
                                "Hari"
                            }
                        />
                        <DetailText
                            title="Tanggal Masuk"
                            data={
                                inputedData.checkInMadinah instanceof Date
                                    ? format(inputedData.checkInMadinah, "PPP")
                                    : ""
                            }
                        />
                        <DetailText
                            title="Tanggal Keluar"
                            data={
                                inputedData.checkOutMadinah instanceof Date
                                    ? format(inputedData.checkOutMadinah, "PPP")
                                    : ""
                            }
                        />
                    </div>

                    <div className="mt-2">
                        {/* makkah */}
                        <DetailText
                            title="Vendor"
                            data={inputedData.vendorMakkah}
                        />
                        <DetailText
                            title="Hotel"
                            data={inputedData.hotelMakkah.name}
                        />
                        <DetailText
                            title="Bintang Hotel"
                            data={
                                inputedData.starHotelMakkah.toString() +
                                " Bintang"
                            }
                        />
                        <DetailText
                            title="Jumlah Hari"
                            data={
                                inputedData.stayDurationMakkah.toString() +
                                "Hari"
                            }
                        />
                        <DetailText
                            title="Tanggal Masuk"
                            data={
                                inputedData.checkInMakkah instanceof Date
                                    ? format(inputedData.checkInMakkah, "PPP")
                                    : ""
                            }
                        />
                        <DetailText
                            title="Tanggal Keluar"
                            data={
                                inputedData.checkOutMakkah instanceof Date
                                    ? format(inputedData.checkOutMakkah, "PPP")
                                    : ""
                            }
                        />
                    </div>

                    <div>
                        <DetailText
                            title="Handling Saudia"
                            data={inputedData.handlingSaudia.name}
                        />
                        <DetailText
                            title="Mutawif"
                            data={inputedData.mutawif.name}
                        />
                        <DetailText
                            title="Perlengkapan"
                            data={inputedData.equipment.name}
                        />
                        <DetailText
                            title="Visa Umroh"
                            data={inputedData.visa.name}
                        />
                        <DetailText
                            title="Transportasi"
                            data={inputedData.transport.name}
                        />
                        <DetailText
                            title="Asuransi Perjalanan"
                            data={inputedData.travelInsurance.name}
                        />
                        <DetailText
                            title="Jasa Manasik"
                            data={inputedData.manasik.name}
                        />
                        <DetailText
                            title="Handling Domestik"
                            data={inputedData.handlingDomestic.name}
                        />
                        <DetailText
                            title="Ziarah Tambahan"
                            data={inputedData.pilgrimage.name}
                        />
                        <DetailText
                            title="Kereta Cepat"
                            data={inputedData.bulletTrain.name}
                        />
                        <DetailText
                            title="Tour Leader"
                            data={inputedData.tourLeader.name}
                        />
                    </div>
                    <div>
                        <Typography variant="h4" color="blue-gray">
                            Detail Harga
                        </Typography>
                        <DetailText
                            title="Tiket Pesawat"
                            data={formatCurrency(inputedData.airline.price)}
                        />
                        <DetailText
                            title="Hotel Madinah"
                            data={formatCurrency(
                                inputedData.hotelMadinah.price
                            )}
                        />
                        <DetailText
                            title="Hotel Makkah"
                            data={formatCurrency(inputedData.hotelMakkah.price)}
                        />
                        <DetailText
                            title="Jasa Handling"
                            data={formatCurrency(
                                inputedData.handlingSaudia.price
                            )}
                        />
                        <DetailText
                            title="Jasa Mutawif"
                            data={formatCurrency(inputedData.mutawif.price)}
                        />
                        <DetailText
                            title="Perlengkapan"
                            data={formatCurrency(inputedData.equipment.price)}
                        />
                        <DetailText
                            title="Visa Umroh"
                            data={formatCurrency(inputedData.visa.price)}
                        />
                        <DetailText
                            title="Transport"
                            data={formatCurrency(inputedData.transport.price)}
                        />
                        <DetailText
                            title="Asuransi Perjalanan"
                            data={formatCurrency(
                                inputedData.travelInsurance.price
                            )}
                        />
                        <DetailText
                            title="Jasa Manasik"
                            data={formatCurrency(inputedData.manasik.price)}
                        />
                        <DetailText
                            title="Handling Domestik"
                            data={formatCurrency(
                                inputedData.handlingDomestic.price
                            )}
                        />
                        <DetailText
                            title="Tour Leader"
                            data={formatCurrency(inputedData.tourLeader.price)}
                        />
                        <DetailText
                            title="Siskopatuh"
                            data={formatCurrency(inputedData.siskopatuh)}
                        />
                        <DetailText
                            title="Ziarah Tambahan"
                            data={formatCurrency(inputedData.pilgrimage.price)}
                        />
                        <DetailText
                            title="Kereta Cepat"
                            data={formatCurrency(inputedData.bulletTrain.price)}
                        />

                        <div>
                            <DetailText
                                variant="h5"
                                title="Total"
                                data={formatCurrency(
                                    inputedData.airline.price +
                                        inputedData.hotelMadinah.price +
                                        inputedData.hotelMakkah.price +
                                        inputedData.handlingSaudia.price +
                                        inputedData.mutawif.price +
                                        inputedData.equipment.price +
                                        inputedData.visa.price +
                                        inputedData.transport.price +
                                        inputedData.travelInsurance.price +
                                        inputedData.manasik.price +
                                        inputedData.handlingDomestic.price +
                                        inputedData.tourLeader.price +
                                        inputedData.siskopatuh +
                                        inputedData.pilgrimage.price +
                                        inputedData.bulletTrain.price
                                )}
                            />
                        </div>
                    </div>
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
                    Selesai
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
