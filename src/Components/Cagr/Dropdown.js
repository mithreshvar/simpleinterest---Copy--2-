import style from '../../styles/cagrInput.module.scss';
export default function Dropdown({ heading, options, value, setValue }) {

    function addOption(option) {
        return (
            <option value={option} className={'text-[#464143] font-["poppins"]'}>{option}</option>
        );
    }


    return (
        <div className="flex justify-between mt-3">
            <div className="w-[58%] self-center  ">{heading}</div>


            <div className="w-[39%]  lg:ml-[25px] ml-[10px] min-w-[150px] [@media(max-width:500px)]:min-w-[120px] " >
                <div className={style.inputBox} >
                    <select value={value} onChange={(e) => { setValue(e.target.value) }} className={'h-[40px] w-full text-[#0161FF] bg-[#DCE3EE]  border-2 border-solid border-[#C7CFDD] rounded-[100px] text-center font-semibold backdrop-blur-[30px] cursor-pointer  '}  >
                        {options.map(addOption)}
                    </select>
                </div>
            </div>
        </div >

    );
}