import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import FlashlightLoading from "./FlashlightLoading";

export function RouteTransition() {
    const [location] = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const visitedRoutesRef = useRef<Set<string>>(new Set([location]));
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }

        if (!visitedRoutesRef.current.has(location)) {
            visitedRoutesRef.current.add(location);
            setIsLoading(true);

            timerRef.current = window.setTimeout(() => {
                setIsLoading(false);
                timerRef.current = null;
            }, 1000);
        } else {
            setIsLoading(false);
        }

        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [location]);

    return isLoading ? <FlashlightLoading text="Loading your experience..." size={80} /> : null;
}
