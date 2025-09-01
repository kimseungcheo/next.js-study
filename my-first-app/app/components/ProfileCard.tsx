"use client";

export default function ProfileCard({name, description}: {name:string, description:string}) {
    return (
        <div style={{border: "1px solid black", padding: "8px", borderRadius: "8px", maxWidth: "400px"}}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
}