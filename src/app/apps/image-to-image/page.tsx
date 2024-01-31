import Img2img from "@/app/apps/image-to-image/img2img";
import Container from "@/app/apps/navbarLogin";
import { getCurrentUser } from "@/lib/session";
import { UserInfo } from "@/types/user";

export default async function Home() {
    const user = (await getCurrentUser()) as UserInfo;
    // 需要登录
    if (!user.username) {
        redirect('/login')
    }

    return (
        <>
            <Img2img/>
        </>
    );
}

