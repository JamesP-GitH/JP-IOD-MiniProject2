"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import GearSlot from "@/components/GearSlot";
import useGearItems from "@/hooks/useGearItems";
import ItemList from "@/components/ItemList";
import { useContext } from "react";
import { GearContext } from "@/context/GearContext";

function GearPlanner() {
    const [activeSlot, setActiveSlot] = useState(null);
    const { data, loading, error } = useGearItems(activeSlot);
    const { setGear } = useContext(GearContext);
    const items = data ? Object.entries(data).map(([id, item]) => ({ id, ...item })) : [];
    function handleItemSelect(item) {
        if (activeSlot) {
            setGear(activeSlot, item);
        }
    }

    return (
        <Container className="p-2">
            <Row className="mb-3">
                <Col>
                    <h4 className="">Gear Planner</h4>
                </Col>
            </Row>
            <Row className="p-1">
                <Col md={5}>
                    <Container className="">
                        {/* gear slots for selection, 5 rows like game*/}
                        <Row className="mb-3 justify-content-center">
                            {/* gear slots row 1 */}
                            <Col xs={4}>
                                <GearSlot slot="head" onClick={() => setActiveSlot("head")} />
                            </Col>
                        </Row>
                        <Row className="mb-3 justify-content-center">
                            {/* gear slots row 2 */}
                            <Col xs={4}>
                                <GearSlot slot="cape" onClick={() => setActiveSlot("cape")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="neck" onClick={() => setActiveSlot("neck")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="ammo" onClick={() => setActiveSlot("ammo")} />
                            </Col>
                        </Row>
                        <Row className="mb-3 justify-content-center">
                            {/* gear slots row 3 */}
                            <Col xs={4}>
                                <GearSlot slot="weapon" onClick={() => setActiveSlot("weapon")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="body" onClick={() => setActiveSlot("body")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="shield" onClick={() => setActiveSlot("shield")} />
                            </Col>
                        </Row>
                        <Row className="mb-3 justify-content-center">
                            {/* gear slots row 4 */}
                            <Col xs={4}>
                                <GearSlot slot="legs" onClick={() => setActiveSlot("legs")} />
                            </Col>
                        </Row>
                        <Row className="mb-3 justify-content-center">
                            {/* gear slots row 5 */}
                            <Col xs={4}>
                                <GearSlot slot="hands" onClick={() => setActiveSlot("hands")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="feet" onClick={() => setActiveSlot("feet")} />
                            </Col>
                            <Col xs={4}>
                                <GearSlot slot="ring" onClick={() => setActiveSlot("ring")} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col md={7}>
                    <ItemList slot={activeSlot} items={items || []} loading={loading} error={error} onItemClick={handleItemSelect} />
                </Col>{" "}
                {/*list of slot items to be selected from shown here in this col*/}
            </Row>
            <Row className="mt-4">placeholder</Row> {/*Bottom Row showing realtime updated stats*/}
        </Container>
    );
}

export default GearPlanner;
