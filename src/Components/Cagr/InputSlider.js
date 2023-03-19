import styles from '../../styles/cagrInput.module.scss'
import { useState } from 'react';
export default function Input({ id, type = '', min = 0, max, step = 1, value, setValue }) {


    const [textValue, setTextValue] = useState(((type === 'rupees') ? '\u20B9' : '') + Number(value).toLocaleString("en-In") + ((type === 'percentage') ? '%' : ''));
    const [raiseMaxError, setRaiseMaxError] = useState(false);


    const handleSliderValue = (event) => {
        // const min = event.target.min;
        // const max = event.target.max;
        // const val = event.target.value;
        // event.currentTarget.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
        let tempValue = event.target.value;
        setValue(Number(tempValue));
        setTextValue(((type === 'rupees') ? '\u20B9' : '') + Number(tempValue).toLocaleString("en-In") + ((type === 'percentage') ? '%' : ''));
    }


    const addSymbol = (event) => {
        setRaiseMaxError(false);
        let tempValue = event.target.value;
        if (!(String(textValue).charAt(0) == '\u20B9')) {
            tempValue = ((type === 'rupees') ? '\u20B9' : '') + Number(tempValue).toLocaleString("en-In");
        }
        if (!(String(textValue).charAt(-1) == '%')) {
            tempValue += ((type === 'percentage') ? '%' : '');
        }
        setTextValue(tempValue);
    }

    const removeSymbol = (event) => {
        setTextValue(event.target.value.replace(/,|\u20B9|%/g, ''));
    }

    const handleTextValue = (event) => {

        let tempValue = event.target.value;
        if (event.target.value > max) {
            setRaiseMaxError(true);
        }
        else {
            setRaiseMaxError(false);
        }
        if ((!(isNaN(tempValue)) && tempValue >= 0 && tempValue <= max && tempValue != '.' && tempValue != '0.') || tempValue == '' || tempValue == '0') {

            if (tempValue == "") {
                tempValue = '0';
            }
            else if (tempValue.length == 2 && tempValue.charAt(0) == '0') {
                tempValue = tempValue.charAt(1);
            }
            if (!(type === 'percentage')) {
                setTextValue(Number(tempValue));
            }
            else {
                setTextValue(tempValue);
            }
            setValue(Number(tempValue));
        }

    };

    return (
        <div className={styles.inputBox}>
            <div className={' flex justify-between flex-warp items-center'}>
                <div className=' w-[58%]    '>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        id={id}
                        style={{ backgroundSize: (value < min) ? 0 : (((value - min) * 100) / (max - min)) + '% 100%' }}
                        onChange={handleSliderValue}
                    />
                </div>
                <div className=' w-[39%] lg:ml-[25px] ml-[10px] min-w-[150px] [@media(max-width:500px)]:min-w-[120px]  text-[#1B1C20] '>
                    <input
                        type="text"
                        value={textValue}
                        id={`${id}Label`}
                        min={min}
                        max={max}
                        onBlur={addSymbol}
                        onFocus={removeSymbol}
                        className={'h-[40px] w-full text-[#1B1C20] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center text-[14px] font-semibold [@media(min-width:1920px)]:text-[18px] '}
                        onChange={handleTextValue}
                    />
                </div>
            </div>
            {(value < min) ? <div className=' text-[#FF7D7D] text-sm font-normal -mt-[8px] -mb-[12px]'>Minimum value is {min.toLocaleString('en-In')}.</div> : (raiseMaxError) ? <div className=' text-[#FF7D7D] text-sm font-normal -mt-[8px] -mb-[12px]'>Maximum value is {max.toLocaleString('en-In')}.</div> : ''}
        </div>
    )
}