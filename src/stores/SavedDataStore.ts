import { AirlineInterface } from "@/app/data";
import { createStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface SavedDataInterface {
    monthPeriod: string;
    departureDate: Date | string;
    departureFrom: string;
    departureTo: string;
    daysPacket: number | string;
    returnDate: Date | string;
    returnFrom: string;
    returnTo: string;
    airline: AirlineInterface;
    passenger: number | string;
}

export interface SavedDataStore {
    data: SavedDataInterface[];
    setData: (newData: SavedDataInterface) => void;
}

export const createSavedDataStore = (initState: SavedDataInterface[]) => {
    return createStore<SavedDataStore>()(
        persist<SavedDataStore>(
            (set) => ({
                data: initState,
                setData: (newData: SavedDataInterface) =>
                    set((state) => ({
                        data: [...state.data, newData],
                    })),
            }),
            {
                name: "saved-data",
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    );
};
