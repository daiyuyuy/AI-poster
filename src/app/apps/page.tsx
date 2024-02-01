import Img2img from "@/app/apps/image-to-image/img2img2";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";

export default async function Home() {
    const user = (await getCurrentUser()) as UserInfo;

    console.log("user: ", user)

    return (
        <>
            <Img2img userInfo={user} />
        </>
    );
}

