import RelatedCalculatorElement from "./RelatedCalculatorElement.js";

export default function RelatedCalculators({ contents }) {

    function addRelatedCalculatorElement(element, index) {
        if (index == 0) {
            return (
                <RelatedCalculatorElement
                    key={`relatedCalculator${index}`}
                    name={element[0]}
                    path={element[1]}
                    first={true}
                />
            );
        }
        return (
            <RelatedCalculatorElement
                key={`relatedCalculator${index}`}
                name={element[0]}
                path={element[1]}
            />
        );
    }

    return (
        <div className={"mt-[30px] "}>
            <div className={"font-bold mb-[14px] [@media(max-width:470px)]:mb-[8px] text-[#464143] text-[16px] [@media(min-width:1920px)]:text-[20px]"}>
                Related Calculators
            </div>

            <div className={"flex overflow-x-scroll -mx-[80px]"}>{/*overflow-x-scroll -mr-[80px]*/}
                {contents.map(addRelatedCalculatorElement)}
            </div>
        </div>
    );
}