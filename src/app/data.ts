//interface

export namespace DataInterface {
    export interface AirlineInterface {
        id: number;
        name: string;
        route: string;
        price: number;
    }
    export interface HotelInterface {
        id: number;
        name: string;
        priceDuo: number;
        priceTrio: number;
        priceQuad: number;
    }
    export interface InputHotelInterface {
        id: number;
        name: string;
        type: "" | "DUO" | "TRIO" | "QUAD" | string;
        price: number;
    }

    export interface StandardInterface {
        id: number;
        name: string;
        price: number;
    }

    export interface IteneraryInterface {
        id: number;
        name: string;
    }
}

//type of data
export namespace DataType {
    //data page 1
    export type MonthPeriod = Array<string>;
    export type DepartureFrom = Array<string>;
    export type DepartureTo = Array<string>;
    export type DaysPacket = Array<number>;
    export type ReturnFrom = Array<string>;
    export type ReturnTo = Array<string>;
    export type Airlines = Array<DataInterface.AirlineInterface>;
    export type Passenger = Array<number>;

    //data page 2
    export type Vendor = Array<string>;
    export type StarHotel = Array<number>;
    export type Hotel = Array<DataInterface.HotelInterface>;
    export type StayDuration = Array<number>;

    //data page 3
    export type Handling = Array<DataInterface.StandardInterface>;
    export type Equipment = Array<DataInterface.StandardInterface>;
    export type TravelInsurance = Array<DataInterface.StandardInterface>;
    export type Manasik = Array<DataInterface.StandardInterface>;
    export type Visa = Array<DataInterface.StandardInterface>;
    export type Transport = Array<DataInterface.StandardInterface>;
    export type Pilgrimage = Array<DataInterface.StandardInterface>;
    export type BulletTrain = Array<DataInterface.StandardInterface>;
    export type Mutawif = Array<DataInterface.StandardInterface>;
    export type TourLeader = Array<DataInterface.StandardInterface>;

    export type Itenerary = Array<DataInterface.IteneraryInterface>;
}

export namespace Data {
    //data month period
    export const MonthPeriod: DataType.MonthPeriod = [
        "01 SEPT 2024 - 30 OKT 2024",
        "01 NOV 2024 - 10 DES 2024",
        "11 DES 2024 - 11 JAN 2025",
        "11 JAN 2025 - 28 FEB 2025",
        "01 MAR 2025 - 21 MAR 2025",
        "22 MAR 2025 - 31 MAR 2025",
        "01 APR 2025 - 30 APR 2025",
    ];

    //data departure from
    export const DepartureFrom: DataType.DepartureFrom = [
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
    export const DepartureTo: DataType.DepartureTo = ["JEDDAH", "MADINAH"];

    //data packets of days
    export const DaysPacket: DataType.DaysPacket = [9, 12, 13, 16, 24, 30];

    //data return from
    export const ReturnFrom: DataType.ReturnFrom = ["JEDDAH", "MADINAH"];

    //data return to
    export const ReturnTo: DataType.ReturnTo = [
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

    //data airlines
    export const Airlines: DataType.Airlines = [
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

    //data passenger
    export const Passenger: DataType.Passenger = Array.from(
        { length: 45 },
        (_, index: number) => {
            return index + 1;
        }
    );

    //data vendor madinah
    export const VendorMadinah: DataType.Vendor = [
        "ROWA",
        "HEAVEN",
        "AREEJ TABAH",
        "DIYAR ALDIWANA",
        "AMNA GRUP",
        "LOCATEL",
        "ALBASITIAH",
        "MAYSAN GRUP",
    ];

    //data star hotel madinah
    export const StarHotelMadinah: DataType.StarHotel = [3, 4, 5];

    //data hotel madinah
    export const HotelMadinah: DataType.Hotel = [
        {
            id: 1,
            name: "SAMA AL MASI",
            priceDuo: 838500,
            priceTrio: 616333,
            priceQuad: 505250,
        },
        {
            id: 2,
            name: "JAWHARAT RASHEED",
            priceDuo: 774000,
            priceTrio: 573333,
            priceQuad: 473000,
        },
        {
            id: 3,
            name: "HAYAH PLAZA",
            priceDuo: 817000,
            priceTrio: 602000,
            priceQuad: 494500,
        },
        {
            id: 4,
            name: "AL MADINAH CONCORDE",
            priceDuo: 913750,
            priceTrio: 673667,
            priceQuad: 553625,
        },
        {
            id: 5,
            name: "RUA INTERNATIONAL",
            priceDuo: 924500,
            priceTrio: 680833,
            priceQuad: 559000,
        },
        {
            id: 6,
            name: "DAR AL NAEM",
            priceDuo: 956750,
            priceTrio: 702333,
            priceQuad: 575125,
        },
        {
            id: 7,
            name: "SAFWAT AL MADINAH",
            priceDuo: 1032000,
            priceTrio: 752500,
            priceQuad: 612750,
        },
        {
            id: 8,
            name: "GRAND PLAZA",
            priceDuo: 1053500,
            priceTrio: 802667,
            priceQuad: 666500,
        },
        {
            id: 9,
            name: "FRONT TAIBA",
            priceDuo: 1548000,
            priceTrio: 1211167,
            priceQuad: 1042750,
        },
        {
            id: 10,
            name: "AL AQEEQ",
            priceDuo: 1612500,
            priceTrio: 1247000,
            priceQuad: 1064250,
        },
        {
            id: 11,
            name: "AL HARAM DAR ELIMAN",
            priceDuo: 1784500,
            priceTrio: 1368833,
            priceQuad: 1268500,
        },
        {
            id: 12,
            name: "HILTON MADINAH",
            priceDuo: 3674350,
            priceTrio: 3167667,
            priceQuad: 2741250,
        },
    ];

    export const StayDurationMadinah: DataType.StayDuration = Array.from(
        { length: 16 },
        (_, index: number) => {
            return index + 1;
        }
    );

    //data vendor makkah
    export const VendorMakkah: DataType.Vendor = [
        "ROWA",
        "HEAVEN",
        "AREEJ TABAH",
        "DIYAR ALDIWANA",
        "AMNA GRUP",
        "LOCATEL",
        "ALBASITIAH",
        "MAYSAN GRUP",
    ];

    //data star hotel makkah
    export const StarHotelMakkah: DataType.StarHotel = [3, 4, 5];

    //data hotel makkah
    export const HotelMakkah: DataType.Hotel = [
        {
            id: 1,
            name: "SAMA AL MASI",
            priceDuo: 838500,
            priceTrio: 616333,
            priceQuad: 505250,
        },
        {
            id: 2,
            name: "JAWHARAT RASHEED",
            priceDuo: 774000,
            priceTrio: 573333,
            priceQuad: 473000,
        },
        {
            id: 3,
            name: "HAYAH PLAZA",
            priceDuo: 817000,
            priceTrio: 602000,
            priceQuad: 494500,
        },
        {
            id: 4,
            name: "AL MADINAH CONCORDE",
            priceDuo: 913750,
            priceTrio: 673667,
            priceQuad: 553625,
        },
        {
            id: 5,
            name: "RUA INTERNATIONAL",
            priceDuo: 924500,
            priceTrio: 680833,
            priceQuad: 559000,
        },
        {
            id: 6,
            name: "DAR AL NAEM",
            priceDuo: 956750,
            priceTrio: 702333,
            priceQuad: 575125,
        },
        {
            id: 7,
            name: "SAFWAT AL MADINAH",
            priceDuo: 1032000,
            priceTrio: 752500,
            priceQuad: 612750,
        },
        {
            id: 8,
            name: "GRAND PLAZA",
            priceDuo: 1053500,
            priceTrio: 802667,
            priceQuad: 666500,
        },
        {
            id: 9,
            name: "FRONT TAIBA",
            priceDuo: 1548000,
            priceTrio: 1211167,
            priceQuad: 1042750,
        },
        {
            id: 10,
            name: "AL AQEEQ",
            priceDuo: 1612500,
            priceTrio: 1247000,
            priceQuad: 1064250,
        },
        {
            id: 11,
            name: "AL HARAM DAR ELIMAN",
            priceDuo: 1784500,
            priceTrio: 1368833,
            priceQuad: 1268500,
        },
        {
            id: 12,
            name: "HILTON MADINAH",
            priceDuo: 3674350,
            priceTrio: 3167667,
            priceQuad: 2741250,
        },
        {
            id: 13,
            name: "AKABER AL HIJRAH",
            priceDuo: 537500,
            priceTrio: 415667,
            priceQuad: 365500,
        },
        {
            id: 14,
            name: "SNOOD AJYAD",
            priceDuo: 903000,
            priceTrio: 659333,
            priceQuad: 537500,
        },
        {
            id: 15,
            name: "GRAND AL MASSA",
            priceDuo: 1053500,
            priceTrio: 774000,
            priceQuad: 634250,
        },
        {
            id: 16,
            name: "RAYYANA AJYAD",
            priceDuo: 1419000,
            priceTrio: 960333,
            priceQuad: 827750,
        },
        {
            id: 17,
            name: "MARRIOT JABAL OMAR",
            priceDuo: 1419000,
            priceTrio: 1089333,
            priceQuad: 924500,
        },
        {
            id: 18,
            name: "MAKAREM AJYAD",
            priceDuo: 1419000,
            priceTrio: 1132333,
            priceQuad: 989000,
        },
        {
            id: 19,
            name: "SOFWAH DURRAR AL EIMAN",
            priceDuo: 2107000,
            priceTrio: 1662667,
            priceQuad: 1424375,
        },
        {
            id: 20,
            name: "PULLMAN ZAM ZAM",
            priceDuo: 2322000,
            priceTrio: 1755833,
            priceQuad: 1558750,
        },
        {
            id: 21,
            name: "HYAT REGENCY MAKKAH",
            priceDuo: 2472500,
            priceTrio: 2078333,
            priceQuad: 1881250,
        },
    ];

    //duration in makkah
    export const StayDurationMakkah: DataType.StayDuration = Array.from(
        { length: 16 },
        (_, index: number) => {
            return index + 1;
        }
    );

    export const HandlingSaudia: DataType.Handling = [
        { id: 0, name: "TIDAK", price: 0 },
        { id: 1, name: "HANDLING PP SAUDI", price: 1290000 },
    ];

    export const Equipment: DataType.Equipment = [
        { id: 0, name: "TIDAK", price: 0 },
        { id: 1, name: "FULL PAKET KOPER", price: 1000000 },
        { id: 2, name: "AKSESORIS", price: 350000 },
    ];

    export const TravelInsurance: DataType.TravelInsurance = [
        { id: 0, name: "TIDAK", price: 0 },
        { id: 1, name: "ASURANSI PERJALANAN UMROH", price: 100000 },
    ];

    export const Manasik: DataType.Manasik = [
        { id: 0, name: "TANPA MANASIK", price: 0 },
        { id: 1, name: "MANASIK DI HOTEL", price: 250000 },
        { id: 2, name: "MANASIK DI ONLINE", price: 150000 },
    ];

    export const HandlingDomestic: DataType.Handling = [
        { id: 0, name: "TANPA HANDLING DOMESTIK", price: 0 },
        { id: 1, name: "NASI BOX & BAGASI", price: 250000 },
        { id: 2, name: "ZUKAVIA & BAGASI", price: 350000 },
        { id: 3, name: "BAGASI ONLY", price: 150000 },
    ];

    export const Visa: DataType.Visa = [
        { id: 0, name: "TANPA VISA", price: 0 },
        { id: 1, name: "VISA ONLY", price: 2106000 },
        { id: 2, name: "VISA & BUS (35)", price: 2184000 },
        { id: 3, name: "VISA & BUS THAIF (35)", price: 2324400 },
        { id: 4, name: "VISA BUS 1", price: 15444000 },
        { id: 5, name: "VISA BUS 2", price: 8626800 },
        { id: 6, name: "VISA BUS 3", price: 6349200 },
        { id: 7, name: "VISA BUS 4", price: 5210400 },
        { id: 8, name: "VISA BUS 5", price: 4524000 },
        { id: 9, name: "VISA BUS 6", price: 4071600 },
        { id: 10, name: "VISA BUS 7", price: 3744000 },
        { id: 11, name: "VISA BUS 8", price: 3494400 },
        { id: 12, name: "VISA BUS 9", price: 3307200 },
        { id: 13, name: "VISA BUS 10", price: 3166800 },
        { id: 14, name: "VISA BUS 11", price: 3042000 },
        { id: 15, name: "VISA BUS 12", price: 2932800 },
        { id: 16, name: "VISA BUS 13", price: 2839200 },
        { id: 17, name: "VISA BUS 14", price: 2776800 },
        { id: 18, name: "VISA BUS 15", price: 2698800 },
        { id: 19, name: "VISA BUS 16", price: 2652000 },
        { id: 20, name: "VISA BUS 17", price: 2589600 },
        { id: 21, name: "VISA BUS 18", price: 2558400 },
        { id: 22, name: "VISA BUS 19", price: 2511600 },
        { id: 23, name: "VISA BUS 20", price: 2480400 },
        { id: 24, name: "VISA BUS 21", price: 2449200 },
        { id: 25, name: "VISA BUS 22", price: 2418000 },
        { id: 26, name: "VISA BUS 23", price: 2386800 },
        { id: 27, name: "VISA BUS 24", price: 2355600 },
        { id: 28, name: "VISA BUS 25", price: 2340000 },
        { id: 29, name: "VISA BUS 26", price: 2324400 },
        { id: 30, name: "VISA BUS 27", price: 2293200 },
        { id: 31, name: "VISA BUS 28", price: 2277600 },
        { id: 32, name: "VISA BUS 29", price: 2262000 },
        { id: 33, name: "VISA BUS 30", price: 2246400 },
        { id: 34, name: "VISA BUS 31", price: 2230800 },
        { id: 35, name: "VISA BUS 32", price: 2215200 },
        { id: 36, name: "VISA BUS 33", price: 2215200 },
        { id: 37, name: "VISA BUS 34", price: 2199600 },
        { id: 38, name: "VISA BUS 35", price: 2184000 },
        { id: 39, name: "VISA BUS + THAIF 1", price: 20888400 },
        { id: 40, name: "VISA BUS + THAIF 2", price: 11341200 },
        { id: 41, name: "VISA BUS + THAIF 3", price: 8143200 },
        { id: 42, name: "VISA BUS + THAIF 4", price: 6552000 },
        { id: 43, name: "VISA BUS + THAIF 5", price: 5600400 },
        { id: 44, name: "VISA BUS + THAIF 6", price: 4960800 },
        { id: 45, name: "VISA BUS + THAIF 7", price: 4508400 },
        { id: 46, name: "VISA BUS + THAIF 8", price: 4165200 },
        { id: 47, name: "VISA BUS + THAIF 9", price: 3900000 },
    ];

    export const Mutawif: DataType.Mutawif = [
        { id: 0, name: "TANPA MUTAWIF", price: 0 },
        { id: 1, name: "UMROH SAJA", price: 2150000 },
        { id: 2, name: "2 HARI", price: 4300000 },
        { id: 3, name: "3 HARI", price: 6450000 },
        { id: 4, name: "4 HARI", price: 8600000 },
        { id: 5, name: "5 HARI", price: 10750000 },
        { id: 6, name: "6 HARI", price: 12900000 },
        { id: 7, name: "7 HARI", price: 15050000 },
        { id: 8, name: "8 HARI", price: 17200000 },
        { id: 9, name: "9 HARI", price: 19350000 },
        { id: 10, name: "10 HARI", price: 21500000 },
        { id: 11, name: "11 HARI", price: 23650000 },
        { id: 12, name: "12 HARI", price: 25800000 },
        { id: 13, name: "13 HARI", price: 27950000 },
        { id: 14, name: "14 HARI", price: 30100000 },
        { id: 15, name: "15 HARI", price: 32250000 },
        { id: 16, name: "16 HARI", price: 34400000 },
    ];

    export const Transport: DataType.Transport = [
        { id: 0, name: "TANPA TRANSPORT", price: 0 },
        { id: 1, name: "HIACE JED MED", price: 2795000 },
        { id: 2, name: "HIACE MED ZIARAH", price: 1290000 },
        { id: 3, name: "HIACE MED MAK", price: 2795000 },
        { id: 4, name: "HIACE MAK ZIARAH", price: 1720000 },
        { id: 5, name: "HIACE MAK JED", price: 1935000 },
        { id: 6, name: "HIACE THAIF", price: 3440000 },
        { id: 7, name: "GMC JED MED", price: 5160000 },
        { id: 8, name: "GMC MED ZIARAH", price: 2042500 },
        { id: 9, name: "GMC MED MAK", price: 5160000 },
        { id: 10, name: "GMC MAK ZIARAH", price: 2257500 },
        { id: 11, name: "GMC MAK JED", price: 2472500 },
        { id: 12, name: "GMC THAIF", price: 4085000 },
        { id: 13, name: "SEDAN JED MED", price: 2150000 },
        { id: 14, name: "SEDAN MED ZIARAH", price: 1075000 },
        { id: 15, name: "SEDAN MED MAK", price: 2150000 },
        { id: 16, name: "SEDAN MAK ZIARAH", price: 1612500 },
        { id: 17, name: "SEDAN MAK JED", price: 1397500 },
        { id: 18, name: "SEDAN THAIF", price: 2064000 },
    ];

    export const Pilgrimage: DataType.Pilgrimage = [
        { id: 0, name: "TANPA ZIARAH TAMBAHAN", price: 0 },
        { id: 1, name: "1D MESIR", price: 2262000 },
        { id: 2, name: "2D1N MESIR *3", price: 3276000 },
        { id: 3, name: "2D1N MESIR *4", price: 3510000 },
        { id: 4, name: "2D1N MESIR *5", price: 3978000 },
        { id: 5, name: "3D2N MESIR *3", price: 3588000 },
        { id: 6, name: "3D2N MESIR *4", price: 3978000 },
    ];

    export const BulletTrain: DataType.BulletTrain = [
        { id: 0, name: "TANPA KERETA", price: 0 },
        { id: 1, name: "KERETA CEPAT MAKKAH-MADINAH", price: 500000 },
    ];

    export const TourLeader: DataType.TourLeader = [
        { id: 0, name: "TANPA TOUR LEADER", price: 0 },
        { id: 1, name: "DENGAN TOUR LEADER", price: 757000 },
    ];

    export const Itenerary: DataType.Itenerary = [
        { id: 1, name: "UMROH 12 HARI - 5 MEKKAH, 5 MADDINAH" },
    ];
}
