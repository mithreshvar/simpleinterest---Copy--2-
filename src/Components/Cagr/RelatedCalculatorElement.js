import Link from "next/link";

export default function RelatedCalculatorElement({ name, path, first = false, last = false }) {
    let style = ' w-[208px] [@media(max-width:500px)]:w-[150px] h-[65px] [@media(max-width:500px)]:h-[50px] mb-[30px] mr-[20px] border-2 text-[18px] [@media(max-width:500px)]:text-[14px] font-semibold border-solid border-white shadow-md shadow-[#505C6227]  rounded-[15px] bg-[#EFFBF7] bg-opacity-80 backdrop-blur-[30px] text-center   flex items-center justify-center flex-shrink-0  [@media(min-width:500px)]:leading-[27px] leading-[18px] ';
    if (first) {
        style += ' ml-20 ';
    }
    if (last) {
        style += ' mr-[80px] ';
    }
    return (
        <div className={style}>
            <Link href={path} className={'text-[#00D382] font-bold '}>{name}</Link>
        </div>
    );
}