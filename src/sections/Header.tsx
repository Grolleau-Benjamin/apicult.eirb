import { useState } from "react";
import x256_logo from "../assets/logos/x256/apiculteirb.png";

export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 md:py-4">
                <a href="#" className="flex items-center gap-3">
                    <img
                        src={x256_logo}
                        alt="Logo Apicult'eirb"
                        className="h-10 w-10 rounded-md object-contain md:h-12 md:w-12"
                    />
                    <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
                        Apicult&apos;eirb
                    </h1>
                </a>

                <nav className="hidden md:flex gap-2 lg:gap-6 text-sm lg:text-lg font-medium">
                    <a
                        href="#association"
                        className="rounded-lg px-3 py-2 underline hover:bg-primary transition-colors"
                    >
                        L&apos;association
                    </a>
                    <a
                        href="#actu"
                        className="rounded-lg px-3 py-2 underline hover:bg-primary transition-colors"
                    >
                        L&apos;actualité
                    </a>
                </nav>

                <button
                    type="button"
                    className="md:hidden inline-flex flex-col items-center justify-center rounded-md p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                    aria-label="Ouvrir le menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <span
                        className={`block h-0.5 w-6 bg-black transform transition duration-300 ${open ? "translate-y-1.5 rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black my-1 transform transition duration-300 ${open ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-black transform transition duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""
                            }`}
                    />
                </button>
            </div>

            <div
                className={`md:hidden border-t border-black/10 bg-white/95 backdrop-blur-sm transition-[max-height] duration-300 overflow-hidden ${open ? "max-h-40" : "max-h-0"
                    }`}
            >
                <nav className="mx-auto w-full max-w-5xl px-4 py-2 flex flex-col gap-1 text-base">
                    <a
                        href="#association"
                        className="rounded-lg px-3 py-2 hover:bg-primary transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        L&apos;association
                    </a>
                    <a
                        href="#actu"
                        className="rounded-lg px-3 py-2 hover:bg-primary transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        L&apos;actualité
                    </a>
                </nav>
            </div>
        </header>
    );
};