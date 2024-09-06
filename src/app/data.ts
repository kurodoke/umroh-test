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
}
