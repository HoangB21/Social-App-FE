import React, { useEffect, useState } from "react";

const About = () => {
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function fetchAbout() {
            try {
                const res = await fetch("/api/about");
                if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`);

                const contentType = res.headers.get("content-type") || "";
                if (contentType.includes("application/json")) {
                    const json = await res.json();
                    // prefer a "message" field if present
                    const msg = json && typeof json === "object" && "message" in json ? json.message : JSON.stringify(json);
                    if (mounted) setMessage(String(msg));
                } else {
                    const text = await res.text();
                    if (mounted) setMessage(text);
                }
            } catch (err) {
                if (mounted) setError(err.message || "Unknown error");
            } finally {
                if (mounted) setLoading(false);
            }
        }

        fetchAbout();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>About</h1>

            {loading && <p>Loading...</p>}

            {!loading && error && (
                <p style={{ color: "red" }}>Error loading about: {error}</p>
            )}

            {!loading && !error && (
                <div>
                    <h2>Message from server</h2>
                    <p>{message}</p>
                </div>
            )}
        </div>
    );
};

export default About;