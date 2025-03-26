import React from "react";
import appStore from "../../public/icons/app_store.avif"
import playStore from "../../public/icons/play_store.avif"


const Footer = () => (
    <div className="w-full">
        <div className="flex items-center margin-auto">
            <h3 className="font-extrabold text-[24px] tracking-[-0.6px] text-[#02060C]">For better experience,download the Swiggy app now</h3>
            <img className="flex-1 h-[64px] max-w-[208px]" src={appStore} alt="app store" />
            <img className="flex-1 h-[64px] max-w-[208px]" src={playStore} alt="play store" />
        </div>
        <div></div>
    </div>
)

export default Footer;