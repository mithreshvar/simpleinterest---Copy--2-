export default function CalculatorAndSidePannel({ children }) {

    let style = ` xl:flex max-xl:flex-col flex-wrap w-full h-fit  mt-[50px] [@media(max-width:600px)]:mt-[30px]  justify-between `;

    return (
        <div
            className={style}
        >
            {children}
        </div>
    );

}