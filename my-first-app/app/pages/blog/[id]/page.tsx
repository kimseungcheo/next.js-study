"use client"; // ← 이거 꼭 맨 위에 추가!

import { useParams } from "next/navigation";

export default function BlogPost() {
    const params = useParams();
    return (
        <div>
            <h1>블로그 페이지입니다</h1>
            <p>블로그 ID: {params.id}</p>
        </div>
    )
}