import React, { useState } from "react";

const specialPrayers = ["Chivalry", "Piety", "Rigour", "Augury"];

const defenseBasics = ["Thick Skin", "Rock Skin", "Steel Skin"];
const attackBasics = ["Clarity of Thought", "Improved Reflexes", "Incredible Reflexes"];
const strengthBasics = ["Burst of Strength", "Superhuman Strength", "Ultimate Strength"];
const rangedBasics = ["Sharp Eye", "Hawk Eye", "Eagle Eye", "Deadeye"];
const magicBasics = ["Mystic Will", "Mystic Lore", "Mystic Might", "Mystic Vigour"];

const allPrayers = [...specialPrayers, ...defenseBasics, ...attackBasics, ...strengthBasics, ...rangedBasics, ...magicBasics];

function PrayerSelector() {
    const [activePrayers, setActivePrayers] = useState([]);

    function togglePrayer(prayer) {
        setActivePrayers((current) => {
            const isActive = current.includes(prayer);

            // Special prayer toggled
            if (specialPrayers.includes(prayer)) {
                if (isActive) {
                    // Turning off special prayer — just remove it
                    return current.filter((p) => p !== prayer);
                } else {
                    // Turn on special prayer — clear everything else and activate this one
                    return [prayer];
                }
            }

            // If a special prayer is active, can't activate basics
            if (current.some((p) => specialPrayers.includes(p))) {
                // Ignore toggling basics while special is active
                return current;
            }

            // Determine which basic group this prayer belongs to
            let group = null;
            if (defenseBasics.includes(prayer)) group = "defense";
            else if (attackBasics.includes(prayer)) group = "attack";
            else if (strengthBasics.includes(prayer)) group = "strength";
            else if (rangedBasics.includes(prayer)) group = "ranged";
            else if (magicBasics.includes(prayer)) group = "magic";

            if (!group) return current; // Unknown prayer, no change

            if (isActive) {
                // Turning off prayer
                return current.filter((p) => p !== prayer);
            }

            // Turning on basic prayer:

            // If turning on ranged or magic basic, remove attack and strength basics
            if (group === "ranged" || group === "magic") {
                const filtered = current.filter(
                    (p) => !attackBasics.includes(p) && !strengthBasics.includes(p) && !rangedBasics.includes(p) && !magicBasics.includes(p)
                );

                return [...filtered, prayer];
            }

            // If turning on attack or strength basic, and ranged or magic basics active, remove them
            if (group === "attack" || group === "strength") {
                const filtered = current.filter((p) => !rangedBasics.includes(p) && !magicBasics.includes(p));

                // Remove other basics in the same group (only one per group)
                const final = filtered.filter((p) => {
                    if (group === "attack") return !attackBasics.includes(p);
                    if (group === "strength") return !strengthBasics.includes(p);
                    return true;
                });

                return [...final, prayer];
            }

            if (group === "defense") {
                // Remove other defense basics, add this one
                const filtered = current.filter((p) => !defenseBasics.includes(p));
                return [...filtered, prayer];
            }

            return current;
        });
    }

    return (
        <div
            className="prayers-grid"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
                width: "220px",
                margin: "auto",
                marginTop: "20px",
                justifyContent: "center",
            }}
        >
            {allPrayers.map((prayer) => (
                <button
                    key={prayer}
                    type="button"
                    onClick={() => togglePrayer(prayer)}
                    title={prayer}
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "6px",
                        border: activePrayers.includes(prayer) ? "2px solid #4caf50" : "2px solid transparent",
                        backgroundColor: activePrayers.includes(prayer) ? "#d4edda" : "#f0f0f0",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        userSelect: "none",
                    }}
                >
                    {/* placeholder replace with actual images or icons */}
                    {prayer
                        .split(" ")
                        .map((word) => word[0] + word[1])
                        .join("")}
                </button>
            ))}
        </div>
    );
}

export default PrayerSelector;
