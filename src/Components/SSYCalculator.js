import ControlBox from "./SSYControlBox.js";

export default function Calculator({ children, calculate }) {


    return (
        <div className={"text-left text-[16px] font-medium lg:w-[50%] "}>
            {children}

            {/* Control Box */}
            <ControlBox calculate={calculate} />
        </div>
    );
}