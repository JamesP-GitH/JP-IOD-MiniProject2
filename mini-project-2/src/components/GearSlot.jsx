import React from "react";
import { Button } from "react-bootstrap";

function GearSlot({ slot, onClick }) {
    return <Button onClick={onClick}>{slot}</Button>;
}

export default GearSlot;
