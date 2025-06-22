"use client";

import React, { useEffect, useReducer } from "react";

const initialState = {
    data: {},
    loading: true,
    error: null,
};

function dataReducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return { ...state, loading: true, error: null, data: {} };
        case "FETCH_SUCCESS":
            return { ...state, loading: false, data: action.payload };
        case "FETCH_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

function useGearItems(slot) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    useEffect(() => {
        if (!slot) return;

        const slotDataLocation = `/data/items-${slot}.json`;
        let ignore = false;

        dispatch({ type: "FETCH_START" });

        fetch(slotDataLocation)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${slot}`);
                }
                return response.json();
            })
            .then((json) => {
                if (!ignore) {
                    dispatch({ type: "FETCH_SUCCESS", payload: json });
                    console.log(`success: ${slot}`);
                }
            })
            .catch((error) => {
                if (!ignore) {
                    dispatch({ type: "FETCH_ERROR", payload: error.message });
                }
            });
        return () => {
            ignore = true;
        };
    }, [slot]);
    return state;
}

export default useGearItems;
