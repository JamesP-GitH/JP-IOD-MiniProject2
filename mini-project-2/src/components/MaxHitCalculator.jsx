import React from "react";
import PrayerBonuses from "./PrayerBonuses";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function MaxHitCalculator({
    strengthLevel = 99,
    rangedLevel = 99,
    magicLevel = 99,
    strengthBonus = 0,
    equipmentRangedBonus = 0,
    rangedStrengthBonus = 0,
    magicDamageBonus = 0,
    weaponType = "melee",
    activePrayers = [],
}) {
    const bonuses = PrayerBonuses(activePrayers);
    const styleBonus = 3; //placeholder
    const voidBonus = 1; //placeholder
    const specialBonus = 1; //placeholder
    const potionBonus = 0; //placeholder
    const gearBonus = 1; //placeholder
    const chaosGauntletBoost = 0 || 3; //placeholder

    const baseMaxMagicDamage = 1;
    const visibleBonuses = 1; //placeholder
    const shadowBonus = 1; //placeholder
    const salveBonus = 1; //placeholder
    const avariceBonus = 1; //placeholder
    const smokeBattlestaffBonus = 1; //placeholder
    const virtusRobesAncientBonus = 1; //placeholder
    const slayerBonus = 1; //placeholder
    const sceptreWildernessBonus = 1; //placeholder
    const accursedScepterSpecialBonus = 1; //placeholder
    const tomesBonus = 1; //placeholder
    const markOfDarknessBonus = 1; //placeholder
    const ahrimsDamnedBonus = 1; //placeholder
    const castleWarsBracletBonus = 1; //placeholder
    const charge = 0 || 10; //placeholder

    let effectiveLevel, baseDamage, maxHit, prayerBonus;

    switch (weaponType) {
        case "melee":
            prayerBonus = bonuses.strength || 1;
            effectiveLevel = Math.floor((Math.floor((strengthLevel + potionBonus) * prayerBonus) + styleBonus + 8) * voidBonus);
            baseDamage = Math.floor(0.5 + effectiveLevel * ((strengthBonus + 64) / 640));
            maxHit = Math.floor(baseDamage * specialBonus);
            break;
        case "ranged":
            prayerBonus = bonuses.ranged || 1;
            effectiveLevel = Math.floor((Math.floor((rangedLevel + potionBonus) * prayerBonus) + styleBonus + 8) * voidBonus);
            baseDamage = Math.floor(Math.floor(0.5 + (effectiveLevel * (rangedStrengthBonus + 64)) / 640) * gearBonus);
            maxHit = Math.floor(baseDamage * specialBonus);
            break;
        case "magic":
            prayerBonus = bonuses.magic || 1;
            const baseDamageModifier = Math.floor(Math.abs(baseMaxMagicDamage + chaosGauntletBoost + charge));
            const primaryMagicDamage = Math.floor(
                Math.abs(
                    baseDamageModifier *
                        (1 +
                            Math.min(1, (visibleBonuses - voidBonus) * shadowBonus) +
                            voidBonus +
                            salveBonus +
                            avariceBonus +
                            smokeBattlestaffBonus +
                            virtusRobesAncientBonus +
                            prayerBonus)
                )
            );
            const preHitRoll = Math.floor(
                Math.abs(
                    Math.abs(
                        Math.abs(Math.abs(primaryMagicDamage * (1 + slayerBonus)) * (1 + sceptreWildernessBonus)) *
                            (1 + accursedScepterSpecialBonus)
                    ) *
                        (1 + tomesBonus)
                )
            );
            const hitRoll = Math.floor(Math.abs(Math.max(1, getRandomInt(0, preHitRoll))));
            const postHitRoll = Math.floor(
                Math.abs(Math.abs(Math.abs(hitRoll * (1 + markOfDarknessBonus)) * (1 + ahrimsDamnedBonus)) * (1 + castleWarsBracletBonus))
            );
            maxHit = postHitRoll;
    }

    return <div>Max Hit: {maxHit}</div>;
}

export default MaxHitCalculator;
