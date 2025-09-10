"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    return (
        <header className="fixed top-0 left-0 right-0 z-20 bg-transparent">
            <div className="flex justify-between items-start max-w-screen-2xl mx-auto px-4 py-4 md:px-8 md:py-8">

                <div className="relative cursor-pointer" onClick={() => setOpen(v => !v)}>
                    <div
                        className={clsx(
                            "absolute inset-0 bg-gray-800 rounded-3xl overflow-hidden transition-all duration-800 ease-in-out",
                            open ? "w-56 h-54 md:h-58" : "w-14 h-11 md:w-32 md:h-12"
                        )}
                    >
                        <button
                            type="button"
                            aria-expanded={open}
                            aria-controls="nav-menu"
                            className="relative cursor-pointer uppercase tracking-wide px-4 md:px-5.5 pt-2.5 w-full flex items-center justify-between" tabIndex={-1}
                        >
                            <div className="flex items-center w-[115px] relative">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={clsx("text-white transition-all", open ? "opacity-0 delay-0 duration-100" : "duration-500 opacity-100 delay-500")}>
                                    <path d="M4 8H20C20.4142 8 20.75 8.33579 20.75 8.75C20.75 9.16421 20.4142 9.5 20 9.5H4C3.58579 9.5 3.25 9.16421 3.25 8.75C3.25 8.33579 3.58579 8 4 8Z" fill="currentColor" />
                                    <path d="M4 14.5H20C20.4142 14.5 20.75 14.8358 20.75 15.25C20.75 15.6642 20.4142 16 20 16H4C3.58579 16 3.25 15.6642 3.25 15.25C3.25 14.8358 3.58579 14.5 4 14.5Z" fill="currentColor" />
                                </svg>
                                <div className={clsx("h-[3px] bg-white rounded-full origin-right transition-all duration-800 absolute top-1/2 ease-in-out -translate-y-1/2 left-1", open ? "w-full" : "w-0")} />
                            </div>
                            <span
                                className={clsx(
                                    "text-white md:flex items-center font-semibold text-md md:text-lg transition-opacity duration-200",
                                    open ? "opacity-100 delay-200" : "opacity-0 md:opacity-100"
                                )}
                            >
                                MENU
                            </span>

                        </button>

                        <ul className="flex flex-col gap-1.5 md:gap-2 px-6 pt-4 relative z-30">
                            {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                                <li key={item} className="overflow-hidden group/item">
                                    <a href={`#${item.toLowerCase()}`} className="block relative h-6 uppercase font-semibold text-md md:text-lg" tabIndex={-1}>
                                        <span className="absolute uppercase text-white inset-0 flex translate-y-full transition-transform duration-400 ease-in-out group-hover/item:translate-y-0">
                                            {item}
                                        </span>
                                        <span className="absolute text-gray-400 uppercase inset-0 flex transition-transform duration-400 ease-in-out group-hover/item:-translate-y-full">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BRAND */}
                <div className="font-space font-bold pt-1.5 md:pt-2 text-2xl md:text-3xl text-gray-800">
                    Dmsrmdni
                </div>
            </div>

            {open && (
                <button
                    aria-label="Close menu overlay"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-20"
                />
            )}
        </header>
    );
}
