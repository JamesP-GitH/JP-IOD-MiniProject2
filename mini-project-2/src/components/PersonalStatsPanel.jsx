import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import PrayerSelector from "./PrayerSelector";

function PersonalStatsPanel({ onStatsChange, onPrayersChange }) {
    const [stats, setStats] = useState({
        attackLevel: 99,
        strengthLevel: 99,
        defenseLevel: 9,
        rangedLevel: 99,
        magicLevel: 99,
        prayerLevel: 99,
        useSpecialAttack: false,
    });

    function updateStat(field, value) {
        const val = Number(value);
        if (!isNaN(val)) {
            const newStats = { ...stats, [field]: val };
            setStats(newStats);
            onStatsChange && onStatsChange(newStats);
        }
    }

    function toggleSpecialAttack() {
        const newStats = { ...stats, useSpecialAttack: !stats.useSpecialAttack };
        setStats(newStats);
        onStatsChange && onStatsChange(newStats);
    }

    function handlePrayersChange(activePrayers) {
        onPrayersChange && onPrayersChange(activePrayers);
    }

    return (
        <Card className="p-3 mb-3">
            <Card.Title>Personal Stats</Card.Title>
            <Form>
                <Row>
                    <Col xs={6} className="mb-2">
                        <Form.Group controlId="attackLevel">
                            <Form.Label>Attack Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.attackLevel}
                                onChange={(e) => updateStat("attackLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="mb-2">
                        <Form.Group controlId="strengthLevel">
                            <Form.Label>Strength Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.strengthLevel}
                                onChange={(e) => updateStat("strengthLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="mb-2">
                        <Form.Group controlId="defenseLevel">
                            <Form.Label>Defense Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.defenseLevel}
                                onChange={(e) => updateStat("defenseLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="mb-2">
                        <Form.Group controlId="rangedLevel">
                            <Form.Label>Ranged Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.rangedLevel}
                                onChange={(e) => updateStat("rangedLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} className="mb-2">
                        <Form.Group controlId="magicLevel">
                            <Form.Label>Magic Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.magicLevel}
                                onChange={(e) => updateStat("magicLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="mb-2 d-flex align-items-center">
                        <Form.Check
                            type="checkbox"
                            label="Use Special Attack"
                            checked={stats.useSpecialAttack}
                            onChange={toggleSpecialAttack}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="mt-3">
                        <Form.Group controlId="prayerLevel">
                            <Form.Label>Prayer Level</Form.Label>
                            <Form.Control
                                type="number"
                                min={1}
                                max={99}
                                value={stats.prayerLevel}
                                onChange={(e) => updateStat("prayerLevel", e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            <hr />

            <Card.Title className="mt-3 mb-3">Prayers</Card.Title>
            <PrayerSelector onPrayersChange={handlePrayersChange} />
        </Card>
    );
}

export default PersonalStatsPanel;
