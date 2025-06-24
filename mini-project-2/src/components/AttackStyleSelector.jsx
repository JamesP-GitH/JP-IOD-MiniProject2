import React, { useContext } from "react";
import { GearContext } from "@/context/GearContext";
import AttackStyleCard from "./AttackStyleCard";

function AttackStyleSelector(onStyleChange) {
    const { gear } = useContext(GearContext);
    const weaponStyles = gear.weapon?.weapon?.stances || [];
    const weaponType = gear.weapon?.weapon?.weapon_type || "";
    console.log(weaponStyles);
    return (
        <>
            {weaponStyles.map((style, index) => (
                <AttackStyleCard key={index} styles={style} weaponType={weaponType} />
            ))}
        </>
    );
}

export default AttackStyleSelector;
