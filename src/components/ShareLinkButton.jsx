"use client";

import { useState } from "react";

export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);

        setClicked(true);
        setTimeout(() => setClicked(false), 1500);
    };

    return (
        <button
            onClick={handleClick}
            className="border px-2 py-1 text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
        >
            {clicked ? "Link copied!" : "Shared"}
        </button>
    );
}
