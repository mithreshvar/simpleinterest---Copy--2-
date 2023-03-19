export default function DropdownBox({ value, setValue }) {
  return (
    <>
      <div >
        <select
          value={value}
          onChange={(e) => { setValue(e.target.value); }}
          className={'w-full h-[40px] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] text-[#0161FF] rounded-[100px] text-center font-semibold [@media(max-width:500px)]:font-medium [@media(max-width:500px)]:text-[15px] '}>
          <option value="1" className=" text-[#1B1C20]">Monthly</option>
          <option value="2" className=" text-[#1B1C20]">Quarterly</option>
          <option value="3" className=" text-[#1B1C20]">Half-Yearly</option>

        </select>
      </div>


    </>
  );
}