import Img2img from "@/app/apps/image-to-image/img2img";
import Container from "@/app/apps/navbarLogin";
import { getCurrentUser } from "@/lib/session";
import { UserInfo } from "@/types/user";

export default async function Home() {

    return (
        <>
            <Img2img/>
        </>
    );
}

