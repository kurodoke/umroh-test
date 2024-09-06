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
import SelectWithOutput from "./SelectWithOutput";
import formatCurrency from "@/util/formatCurrency";
import { PreviousIcon } from "./PreviousIcon";
import { InputedDataPageThreeInterface } from "@/app/page";

export default function DialogModalPageThree({
    openHandler,
    openState,
    submitHandler,
    prevHandler,
    inputedData,
    setInputedData,
}: {
    openHandler: () => void;
    openState: boolean;
    submitHandler: () => void;
    prevHandler: () => void;
    inputedData: InputedDataPageThreeInterface;
    setInputedData: React.Dispatch<
        React.SetStateAction<InputedDataPageThreeInterface>
    >;
}): React.ReactElement {
    //fetch data
    const [handlingSaudia, setHandlingSaudia] = useState<DataType.Handling>();
    const [handlingSaudiaId, setHandlingSaudiaId] = useState<Array<number>>();

    const [equipment, setEquipment] = useState<DataType.Equipment>();
    const [equipmentId, setEquipmentId] = useState<Array<number>>();

    const [travelInsurance, setTravelInsurance] =
        useState<DataType.TravelInsurance>();
    const [travelInsuranceId, setTravelInsuranceId] = useState<Array<number>>();

    const [manasik, setManasik] = useState<DataType.Manasik>();
    const [manasikId, setManasikId] = useState<Array<number>>();

    const [handlingDomestic, setHandlingDomestic] =
        useState<DataType.Handling>();
    const [handlingDomesticId, setHandlingDomesticId] =
        useState<Array<number>>();

    const [visa, setVisa] = useState<DataType.Visa>();
    const [visaId, setVisaId] = useState<Array<number>>();

    const [transport, setTransport] = useState<DataType.Transport>();
    const [transportId, setTransportId] = useState<Array<number>>();

    const [pilgrimage, setPilgrimage] = useState<DataType.Pilgrimage>();
    const [pilgrimageId, setPilgrimageId] = useState<Array<number>>();

    const [bulletTrain, setBulletTrain] = useState<DataType.BulletTrain>();
    const [bulletTrainId, setBulletTrainId] = useState<Array<number>>();

    const [mutawif, setMutawif] = useState<DataType.Mutawif>();
    const [mutawifId, setMutawifId] = useState<Array<number>>();

    const [tourLeader, setTourLeader] = useState<DataType.TourLeader>();
    const [tourLeaderId, setTourLeaderId] = useState<Array<number>>();
    //fetch on initial render and if data is null

    const [description, setDescription] = useState<string>();
    const [intrenation, setIntrenation] = useState<string>();
    const [itenerary, setItenerary] = useState<DataType.Itenerary>();

    useEffect(() => {
        if (!handlingSaudia) {
            setHandlingSaudia(Data.HandlingSaudia);
            setHandlingSaudiaId(Data.HandlingSaudia.map((_data) => _data.id));
        }

        if (!equipment) {
            setEquipment(Data.Equipment);
            setEquipmentId(Data.Equipment.map((_data) => _data.id));
        }

        if (!travelInsurance) {
            setTravelInsurance(Data.TravelInsurance);
            setTravelInsuranceId(Data.TravelInsurance.map((_data) => _data.id));
        }

        if (!manasik) {
            setManasik(Data.Manasik);
            setManasikId(Data.Manasik.map((_data) => _data.id));
        }

        if (!handlingDomestic) {
            setHandlingDomestic(Data.HandlingDomestic);
            setHandlingDomesticId(
                Data.HandlingDomestic.map((_data) => _data.id)
            );
        }

        if (!visa) {
            setVisa(Data.Visa);
            setVisaId(Data.Visa.map((_data) => _data.id));
        }

        if (!transport) {
            setTransport(Data.Transport);
            setTransportId(Data.Transport.map((_data) => _data.id));
        }

        if (!pilgrimage) {
            setPilgrimage(Data.Pilgrimage);
            setPilgrimageId(Data.Pilgrimage.map((_data) => _data.id));
        }

        if (!bulletTrain) {
            setBulletTrain(Data.BulletTrain);
            setBulletTrainId(Data.BulletTrain.map((_data) => _data.id));
        }

        if (!mutawif) {
            setMutawif(Data.Mutawif);
            setMutawifId(Data.Mutawif.map((_data) => _data.id));
        }

        if (!tourLeader) {
            setTourLeader(Data.TourLeader);
            setTourLeaderId(Data.TourLeader.map((_data) => _data.id));
        }

        if (!itenerary) {
            setItenerary(Data.Itenerary);
        }
    }, [
        handlingSaudia,
        equipment,
        travelInsurance,
        manasik,
        handlingDomestic,
        visa,
        transport,
        pilgrimage,
        bulletTrain,
        mutawif,
        tourLeader,
        itenerary,
    ]);

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
                    <PreviousIcon
                        onClick={() => {
                            openHandler();
                            prevHandler();
                        }}
                    ></PreviousIcon>
                    <CloseIcon onClick={openHandler}></CloseIcon>
                </div>
            </DialogHeader>
            <DialogBody className="space-y-4 pb-6">
                <SelectWithOutput
                    data={handlingSaudia ? handlingSaudia : []}
                    dataId={inputedData.handlingSaudia.id}
                    label="Handling Saudia"
                    placeHolder="Tanpa Jasa Handling"
                    price={inputedData.handlingSaudia.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            handlingSaudia: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={equipment ? equipment : []}
                    dataId={inputedData.equipment.id}
                    label="Perlengkapan"
                    placeHolder="Pilih Perlengkapan"
                    price={inputedData.equipment.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            equipment: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={travelInsurance ? travelInsurance : []}
                    dataId={inputedData.travelInsurance.id}
                    label="Asuransi Perjalanan"
                    placeHolder="Pilih Asuransi Perjalanan"
                    price={inputedData.travelInsurance.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            travelInsurance: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={manasik ? manasik : []}
                    dataId={inputedData.manasik.id}
                    label="Manasik"
                    placeHolder="Tanpa Jasa Manasik"
                    price={inputedData.manasik.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            manasik: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={handlingDomestic ? handlingDomestic : []}
                    dataId={inputedData.handlingDomestic.id}
                    label="Handling Domestik"
                    placeHolder="Tanpa Jasa Handling"
                    price={inputedData.handlingDomestic.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            handlingDomestic: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={visa ? visa : []}
                    dataId={inputedData.visa.id}
                    label="Visa"
                    placeHolder="Tanpa Visa"
                    price={inputedData.visa.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            visa: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={transport ? transport : []}
                    dataId={inputedData.transport.id}
                    label="Transportasi"
                    placeHolder="Tanpa Transportasi"
                    price={inputedData.transport.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            transport: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={pilgrimage ? pilgrimage : []}
                    dataId={inputedData.pilgrimage.id}
                    label="Ziarah Tambahan"
                    placeHolder="Tanpa Ziarah Tambahan"
                    price={inputedData.pilgrimage.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            pilgrimage: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={bulletTrain ? bulletTrain : []}
                    dataId={inputedData.bulletTrain.id}
                    label="Kereta Cepat"
                    placeHolder="Tanpa Kereta Cepat"
                    price={inputedData.bulletTrain.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            bulletTrain: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={mutawif ? mutawif : []}
                    dataId={inputedData.mutawif.id}
                    label="Mutawif"
                    placeHolder="Tanpa Jasa Mutawif"
                    price={inputedData.mutawif.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            mutawif: selectedData,
                        });
                    }}
                />
                <SelectWithOutput
                    data={tourLeader ? tourLeader : []}
                    dataId={inputedData.tourLeader.id}
                    label="Tour Leader"
                    placeHolder="Tanpa Tour Leader"
                    price={inputedData.tourLeader.price}
                    setInputedData={(selectedData) => {
                        setInputedData({
                            ...inputedData,
                            tourLeader: selectedData,
                        });
                    }}
                />

                <div>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 text-left font-medium"
                    >
                        Biaya Siskopatuh
                    </Typography>
                    <Input
                        value={formatCurrency(inputedData.siskopatuh)}
                        disabled
                    />
                </div>
                <div>
                    <CustomSelect
                        data={inputedData.itenerary.id.toString()}
                        defaultValue="0"
                        placeHolder="Pilih Itenerary"
                        label="Pilih Deskripsi, Syarat Ketentuan & Intenari Perjalanan"
                        list={itenerary?.map((_data) => {
                            return _data.name;
                        })}
                        valueList={itenerary?.map((_data) => {
                            return _data.id.toString();
                        })}
                        onChange={(value) => {
                            const selectedData = itenerary?.find(
                                (_data) => _data && Number(value) === _data.id
                            );

                            if (selectedData)
                                setInputedData({
                                    ...inputedData,
                                    itenerary: selectedData,
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
                        Deskripsi & Syarat Ketentuan
                    </Typography>
                    <Textarea
                        value={description}
                        onChange={(_e) => {
                            setDescription(_e.target.value);
                        }}
                        className="!border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-blue-gray-900 focus:!border-t-blue-gray-900 group-hover:!border-primary"
                        labelProps={{
                            className: "hidden",
                        }}
                    ></Textarea>
                </div>
                <div>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 text-left font-medium"
                    >
                        Intrenasi Perjalanan
                    </Typography>
                    <Textarea
                        value={intrenation}
                        onChange={(_e) => {
                            setDescription(_e.target.value);
                        }}
                        className="!border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-blue-gray-900 focus:!border-t-blue-gray-900 group-hover:!border-primary"
                        labelProps={{
                            className: "hidden",
                        }}
                    ></Textarea>
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
                    Submit
                </Button>
            </DialogFooter>
        </Dialog>
    );
}
