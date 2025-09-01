import ProfileCard from "@/app/components/ProfileCard"

export default function About() {
    return (
        <div>
            <h1>소개 페이지입니다.</h1>
            <ProfileCard name="김승철" description="안녕하세요, 김승철입니다. 저는 프론트엔드 개발자입니다"/>
            <br/>
            <ProfileCard name="승철" description="Next.js 개발 공부중입니다."/>
        </div>
    )
}