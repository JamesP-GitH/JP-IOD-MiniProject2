import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import ItemCard from "./ItemCard";

function ItemList({ items, slot, loading, error, onItemClick }) {
    if (!slot) {
        return <p>Select a gear slot to see items.</p>;
    }
    if (loading) {
        return <p>Loading items...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    if (items.length === 0) {
        return <p>No items found for this slot.</p>;
    }

    return (
        <Container className="justify-content-center">
            <h5>{slot} items</h5>
            <ListGroup>
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} onClick={() => onItemClick(item)} />
                ))}
            </ListGroup>
        </Container>
    );
}

export default ItemList;
