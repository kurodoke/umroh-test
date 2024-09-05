import { ThemeProvider as TailwindThemeProvider } from "@material-tailwind/react";
import React from "react";

const theme = {
    dialog: {
        styles: {
            base: {
                backdrop: {
                    position: "fixed overscroll-y-auto overflow-auto",
                },
            },
        },
    },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <TailwindThemeProvider value={theme}>{children}</TailwindThemeProvider>
    );
}
