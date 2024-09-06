"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
    AnimationStore,
    createAnimationStore,
} from "@/stores/entryAnimationStore";

export type AnimationStoreApi = ReturnType<typeof createAnimationStore>;

export const AnimationStoreContext = createContext<
    AnimationStoreApi | undefined
>(undefined);

export interface AnimationStoreProviderProps {
    children: ReactNode;
}

export const AnimationStoreProvider = ({
    children,
}: AnimationStoreProviderProps) => {
    const storeRef = useRef<AnimationStoreApi>();
    if (!storeRef.current) {
        storeRef.current = createAnimationStore();
    }

    return (
        <AnimationStoreContext.Provider value={storeRef.current}>
            {children}
        </AnimationStoreContext.Provider>
    );
};

export const useAnimationStore = <T,>(
    selector: (store: AnimationStore) => T
): T => {
    const animationStoreContext = useContext(AnimationStoreContext);

    if (!animationStoreContext) {
        throw new Error(
            `useAnimationStore must be used within AnimationStoreProvider`
        );
    }

    return useStore(animationStoreContext, selector);
};
