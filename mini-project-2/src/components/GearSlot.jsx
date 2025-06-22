import React from "react";
import { Button, Image } from "react-bootstrap";

function GearSlot({ slot, onClick, item, onClear }) {
    const iconPath = `./icons/${slot ? slot.charAt(0).toUpperCase() + slot.slice(1) : ""}_slot.png`;
    const itemIcon = item?.icon ? `data:image/png;base64,${item.icon}` : null;

    return (
        <Button
            onClick={onClick}
            onContextMenu={(e) => {
                e.preventDefault();
                if (onClear) {
                    onClear(slot);
                }
            }}
            style={{ padding: 0, border: "0px", backgroundColor: "black" }}
        >
            <div style={{ position: "relative", width: "48px", height: "48px" }}>
                {/* Slot background image */}
                <Image src={iconPath} style={{ width: "48px", height: "48px" }} />

                {/* Gear item overlay icon */}
                {itemIcon && (
                    <Image
                        src={itemIcon}
                        alt={item.name}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            marginLeft: "3px",
                            width: "44px",
                            height: "44px",
                            objectFit: "contain",
                            pointerEvents: "none",
                        }}
                    />
                )}
            </div>
        </Button>
    );
}

export default GearSlot;
