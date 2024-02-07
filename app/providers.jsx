// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";


export function Providers({ children }) {
    return (
        <SessionProvider>
        <NextUIProvider>
            <NextThemesProvider enableSystem={true} attribute='class'>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
        </SessionProvider>
    )
}


