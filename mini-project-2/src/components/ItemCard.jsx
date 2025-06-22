import React from "react";
import { Card, Row, Col, OverlayTrigger, Image } from "react-bootstrap";
import ItemTooltipCard from "./ItemTooltipCard";

function ItemCard({ item, onClick }) {
    if (!item) return null;

    return (
        <OverlayTrigger
            placement="left"
            delay={{ show: 200, hide: 100 }}
            overlay={ItemTooltipCard(item)}
            containerPadding={10}
            popperConfig={{
                modifiers: [{ name: "preventOverflow", options: { boundary: "viewport" } }],
            }}
        >
            <div>
                <Card className="item-card mb-1" onClick={onClick} style={{ height: "48px" }}>
                    <Card.Body className="py-2 px-3">
                        <Row className="align-items-center">
                            <Col xs="auto">
                                {<Image src={`data:image/png;base64,${item.icon}`} alt={item.name} width={32} height={32} fluid></Image>}
                            </Col>
                            <Col>
                                <Card.Title className="item-name fw-semibold mb-1" style={{ fontSize: "clamp(12px, 1.3vw, 36px)" }}>
                                    {item.name}
                                </Card.Title>
                                <Card.Subtitle className="item-meta text-muted small">
                                    ID: {item.id ?? "N/A"} | Members: {item.members ? "Yes" : "No"}
                                </Card.Subtitle>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </OverlayTrigger>
    );
}

export default ItemCard;
