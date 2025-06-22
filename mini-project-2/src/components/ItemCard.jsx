import React from "react";
import { Card, Row, Col, ListGroup, Badge } from "react-bootstrap";

function formatBonus(value) {
    return value !== undefined && value !== null ? (value >= 0 ? `+${value}` : `${value}`) : "-";
}
function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
}
function formatUnderscoreString(str) {
    return str?.split("_").map(capitalize).join(" ");
}
function getFormattedStances(stances) {
    return stances?.map((s) => capitalize(s.combat_style)).join(", ") || "";
}

function ItemCard({ item, onClick }) {
    if (!item) return null;

    return (
        <Card className="" onClick={onClick}>
            <Card.Body>
                <Row>
                    <Col sm={2}>{<img src={`data:image/png;base64,${item.icon}`} alt={item.name} width={32} height={32}></img>}</Col>
                    <Col>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Subtitle>ID: {item.id ?? "N/A"}</Card.Subtitle>
                    </Col>
                </Row>

                <hr />

                <Row>
                    <Col>Members: {item.members ? "Yes" : "No"}</Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ItemCard;
