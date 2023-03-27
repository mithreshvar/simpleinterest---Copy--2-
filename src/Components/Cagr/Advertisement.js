import Link from "next/link";

export default function Advertisement({ heading, content, path }) {

    return (
        <div className=" w-full p-[20px] [@media(max-width:580px)]:p-[15px] pb-[60px] [@media(max-width:580px)]:pb-[50px] h-[179px] [@media(max-width:580px)]:h-[201px] mt-[40px] mb-[68px] rounded-tl-[30px] rounded-br-[30px]  rounded-tr-[90px] rounded-bl-[90px] border-2 border-white shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px]   flex justify-center items-center ">
            <div className=" mt-[30px] [@media(max-width:580px)]:mt-[15px]" >
                <h2 className=" text-center leading-[50px] [@media(max-width:585px)]:leading-[30px] text-[#1B1C20] text-[40px] font-semibold [@media(max-width:585px)]:text-[26px] [@media(max-width:1366px)]:text-[36px] [@media(min-width:1920px)]:text-[60px] ">{heading}</h2>
                <p className=" text-[14px] text-center mt-[20px] [@media(max-width:585px)]:mt-[10px] [@media(min-width:1920px)]:text-[18px] [@media(max-width:585px)]:leading-[18px]  ">{content}</p>
            </div>


            <div
                className={
                    "absolute top-[122px] [@media(max-width:580px)]:top-[147px] mt-[30px] flex flex-warp justify-center  [@media(max-width:585px)]:mt-[25px] cursor-pointer "
                }
            >{/* Control Box Wrapper */}

                {/* Control boxes */}
                <div
                    className={
                        " border-[1px] border-dashed gap-3 border-[#00D382] p-[4px] rounded-[35px] [@media(max-width:585px)]:w-[227px] [@media(max-width:585px)]:h-[54px] w-[250px] h-[56px] [@media(min-width:1920px)]:w-[350px]  [@media(min-width:1920px)]:h-[66px] flex justify-center items-center  "
                    }
                >
                    <div
                        className={
                            "flex justify-center items-center text-[18px] text-white font-semibold rounded-[30px] [@media(max-width:585px)]:w-[220px] [@media(max-width:585px)]:h-[46px] w-[242px] h-[48px]  [@media(min-width:1920px)]:w-[342px]  [@media(min-width:1920px)]:h-[58px]  shadow-lg shadow-[#36b3665d] bg-[#00d382]"
                        }

                    >
                        <Link href={path} >Invest Now</Link>
                    </div>
                </div>
            </div>


        </div >
    );
}