import { writable } from "svelte/store";

export const projectBase4 = writable({
    name: "Project-Baseed 4",
    stage: {
        position: {
            x: "30%",
            width: "60%",
            height: "15%",
        },
        style: {
            gradient: ["#000000", "#000000"],
        },
    },
    zones: [
        {
            id: "zoneA",
            name: "Zone A",
            color: "#eb4034",
            position: {
                x: "24%",
                y: "10%",
                width: "25%",
                height: "50%",
            },
            rows: [
                {
                    name: "A",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 1}`,
                        status: "available",
                    })),
                },
                {
                    name: "B",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 1}`,
                        status: "available",
                    })),
                },
                {
                    name: "C",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 1}`,
                        status: "available",
                    })),
                },
                {
                    name: "D",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 1}`,
                        status: "available",
                    })),
                },
                {
                    name: "E",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 1}`,
                        status: "available",
                    })),
                },
            ],
        },
        {
            id: "zoneB",
            name: "Zone B",
            color: "#348ceb",
            position: {
                x: "50%",
                y: "10%",
                width: "25%",
                height: "50%",
            },
            rows: [
                {
                    name: "A",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 9}`,
                        status: "available",
                    })),
                },
                {
                    name: "B",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 9}`,
                        status: "available",
                    })),
                },
                {
                    name: "C",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 9}`,
                        status: "available",
                    })),
                },
                {
                    name: "D",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 9}`,
                        status: "available",
                    })),
                },
                {
                    name: "E",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 9}`,
                        status: "available",
                    })),
                },
            ],
        },
        {
            id: "zoneC",
            name: "Zone C",
            color: "#ebb134",
            position: {
                x: "76%",
                y: "10%",
                width: "25%",
                height: "50%",
            },
            rows: [
                {
                    name: "A",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 18}`,
                        status: "available",
                    })),
                },
                {
                    name: "B",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 18}`,
                        status: "available",
                    })),
                },
                {
                    name: "C",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 18}`,
                        status: "available",
                    })),
                },
                {
                    name: "D",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 18}`,
                        status: "available",
                    })),
                },
                {
                    name: "E",
                    seats: Array.from({ length: 8 }, (_, i) => ({
                        id: `${i + 18}`,
                        status: "available",
                    })),
                },
            ],
        }
    ],
    
});