'use client'
import { PropsWithChildren } from 'react'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from 'react-hot-toast'
import LayoutCore from './LayoutCore'

const LayoutMain = ({ children }: PropsWithChildren) => {
    return (
        <main className="bg-slate-100 text-slate-700 min-h-screen text-sm">
            <div>
                <Toaster />
                <NextTopLoader height={2} />
                <LayoutCore>
                    {children}
                </LayoutCore>
            </div>
        </main>
    )
}

export default LayoutMain
