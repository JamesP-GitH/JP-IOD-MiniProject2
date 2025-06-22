import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { GearContext } from "@/context/GearContext";

function GearStatsSummary() {
    const { gear } = useContext(GearContext);

    const initialStats = {
        attack_stab: 0,
        attack_slash: 0,
        attack_crush: 0,
        attack_magic: 0,
        attack_ranged: 0,
        defence_stab: 0,
        defence_slash: 0,
        defence_crush: 0,
        defence_magic: 0,
        defence_ranged: 0,
        melee_strength: 0,
        ranged_strength: 0,
        magic_damage: 0,
        prayer: 0,
        attack_speed: 0,
    };

    const totalStats = Object.values(gear).reduce(
        (accumulatedValue, item) => {
            const eq = item?.equipment;
            if (eq) {
                for (const key in initialStats) {
                    accumulatedValue[key] += eq[key] || 0;
                }
            }
            return accumulatedValue;
        },
        { ...initialStats }
    );

    function formatBonus(value) {
        return value !== undefined && value !== null ? (value >= 0 ? `+${value}` : `${value}`) : "—";
    }

    return (
        <div className="p-2 mx-4">
            <h5>Gear Stat Summary</h5>
            <Row className="small">
                <Col xs={12} md={2}>
                    <strong>Attack</strong>
                    <div>Stab: {formatBonus(totalStats.attack_stab)}</div>
                    <div>Slash: {formatBonus(totalStats.attack_slash)}</div>
                    <div>Crush: {formatBonus(totalStats.attack_crush)}</div>
                    <div>Magic: {formatBonus(totalStats.attack_magic)}</div>
                    <div>Ranged: {formatBonus(totalStats.attack_ranged)}</div>
                </Col>
                <Col xs={12} md={2}>
                    <strong>Defence</strong>
                    <div>Stab: {formatBonus(totalStats.defence_stab)}</div>
                    <div>Slash: {formatBonus(totalStats.defence_slash)}</div>
                    <div>Crush: {formatBonus(totalStats.defence_crush)}</div>
                    <div>Magic: {formatBonus(totalStats.defence_magic)}</div>
                    <div>Ranged: {formatBonus(totalStats.defence_ranged)}</div>
                </Col>
                <Col xs={12} md={2}>
                    <strong>Other</strong>
                    <div>Strength: {formatBonus(totalStats.melee_strength)}</div>
                    <div>Ranged Strength: {formatBonus(totalStats.ranged_strength)}</div>
                    <div>Magic Damage: {formatBonus(totalStats.magic_damage)}%</div>
                    <div>Prayer: {formatBonus(totalStats.prayer)}</div>
                    <div>Weight: {totalStats.weight?.toFixed(1)} kg</div>
                </Col>
            </Row>
        </div>
    );
}

export default GearStatsSummary;
