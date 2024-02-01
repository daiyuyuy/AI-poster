import {decrUserTotalRemain} from "@/lib/membership/checkStatus";


export async function GET(request: Request) {
    return {image_url: "https://www.bingimagecreator.net/christmas-style.webp"}
}

export async function POST(request: Request) {
    const formData = await request.formData();
    // Process the form data as needed
    console.log('Received formData:', formData.get("userId"));

    const res = "success"
    if (res === "success")
    {
        decrUserTotalRemain(formData.get("userId"))
        return Response.json({msg: "success", image_url: "https://www.bingimagecreator.net/christmas-style.webp"});
    } else {
        return Response.json({msg: "failed", image_url: "https://www.bingimagecreator.net/christmas-style.webp"});
    }
}

