import Image from "next/image";


export function Card1({text="", src="", alt="", isSelect = false}) {
    return (
        <div className="w-1/5 max-w-1/5 m-1">
            <div className="ant-col css-nllxry flex-1">
                <div className="ant-list-item">
                    <div className="cursor-pointer">
                        <Image className={isSelect?("w-full rounded-md border-4 border-indigo-700"):("w-full rounded-md border-4")} src={src} alt={alt} width="1000" height="1000" />
                        <p className="text-x text-center text-indigo-700 font-bold">{text}</p></div>
                </div>
            </div>
        </div>
    )
}
