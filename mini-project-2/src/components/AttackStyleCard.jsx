import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

function AttackStyleCard({ styles, weaponType }) {
    const styleName = styles.combat_style ? styles.combat_style.charAt(0).toUpperCase() + styles.combat_style.slice(1) : "Unknown";

    const attackType = styles.attack_type ? styles.attack_type.charAt(0).toUpperCase() + styles.attack_type.slice(1) : "—";

    const attackStyle = styles.attack_style ? styles.attack_style.charAt(0).toUpperCase() + styles.attack_style.slice(1) : "—";

    console.log("attack" + attackStyle);

    return (
        <Card className="style-card mb-1" style={{ height: "42px" }}>
            <Card.Body className="py-2 px-3">
                <Row className="align-items-center">
                    <Col xs="auto">
                        {
                            <Image
                                src={`/icons/styles/CombatStyles_(${weaponType},_${styles.combat_style}).png`}
                                alt={""}
                                width={32}
                                height={32}
                                fluid
                            ></Image>
                        }
                    </Col>
                    <Col>
                        <Card.Title className="item-name fw-semibold mb-1" style={{ fontSize: "1.1vw" }}>
                            {styleName}
                        </Card.Title>
                        <Card.Subtitle className="item-meta text-muted small" style={{ fontSize: "1.1vw" }}>
                            {attackType}, {attackStyle}
                        </Card.Subtitle>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default AttackStyleCard;
