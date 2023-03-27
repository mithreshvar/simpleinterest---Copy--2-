export default function InputDisabled({ heading, value }) {


    return (
        <div className={' flex justify-between flex-warp'}>
            <div className=' w-[58%] self-center'>{heading}</div>
            <div className=" flex items-center justify-center bg-[#CCCCCC] w-[39%] lg:ml-[25px] ml-[10px] min-w-[150px] [@media(max-width:500px)]:min-w-[120px]  text-[#1B1C20] h-[40px] bg-opacity-[0.39] rounded-[100px] font-semibold  ">{value}</div>
        </div>
    );
}