/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import ControlBox from "../Components/Cagr/ControlBox";

import { VscCircleFilled } from "react-icons/vsc";



export default function Home() {

    const [currentCost, setCurrentCost] = useState(10000);
    const [rateInflation, setRateInflation] = useState(7);
    const [Duration, setDuration] = useState(10);


    const [currCost, setCurrCost] = useState(10000);
    const [costIncrease, setCostIncrease] = useState(9672);
    const [futureCost, setFutureCost] = useState(19672);

    function calculate() {

        let endcost = 0;
        let rate = rateInflation * 100;
        let infrate = 0;
        let cumminf = 0;
        let cost = 0;
        for (let i = 1; i <= Duration; i++) {
            if (i == 1) {
                cost = currentCost;
                infrate = cost * (1 + rate / 10000) - cost;
                cumminf = infrate;
                endcost = cost + infrate;

            }
            else {
                cost = endcost;
                infrate = (endcost * (1 + rate / 10000) - endcost);
                cumminf += infrate;
                endcost = cost + infrate;

            }

        }
        setCurrCost(currentCost);
        setFutureCost(Math.round(endcost));
        setCostIncrease(Math.round(cumminf));
    }


    return (
        <div className="app-bg-container overflow-hidden">
            <Head>
                <title>Inflation calculator Online - FundsIndia</title>
                <link rel="icon" href="https://www.fundsindia.com/static/favicons/favicon.ico" />
                {/* <link href="/dist/output.css" rel="stylesheet" > */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    as="font"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./*+-%(){}:[]?%27%22%2C|;display=swap"
                />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <meta name="description" content="Inflation Calculator" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:site_name" content="India's #1 Online Investment Platform for Mutual Funds, SIP, Stocks &amp; more| FundsIndia" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="FundsIndia" />
                <meta name="apple-mobile-web-app-title" content="FundsIndia" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="https://twitter.com/Twitter" />
                <meta name="description" content="Mutual fund enables you to multiply your wealth through smart investing. Mutual funds investment is simple and rewarding. Invest online in mutual funds with FundsIndia." />
                <meta property="og:url" content="https://www.fundsindia.com/mutual-funds#mfCalculator" />
                <meta property="og:description" content="Mutual fund enables you to multiply your wealth through smart investing. Mutual funds investment is simple and rewarding. Invest online in mutual funds with FundsIndia." />
                <meta property="og:title" content="Online Mutual Fund Investment | Best Mutual Funds in India" />
                <meta property="og:image" content="https://cdn.fundsindia.com/prelogin/undefined" />
                <meta name="twitter:title" content="Online Mutual Fund Investment | Best Mutual Funds in India" />
                <meta name="twitter:description" content="Mutual fund enables you to multiply your wealth through smart investing. Mutual funds investment is simple and rewarding. Invest online in mutual funds with FundsIndia." />
                <meta name="twitter:image" content="https://cdn.fundsindia.com/prelogin/undefined" />
                <link rel="canonical" href="https://www.fundsindia.com/mutual-funds#mfCalculator" />

            </Head>

            {/* Background image */}
            <div
                className={
                    "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
                }
            />

            <main
                className={
                    "relative [@media(max-width:470px)]:px-[20px] [@media(max-width:1280px)]:px-[40px] xl:px-[80px] py-[50px] w-full overflow-x-hidden flex-col justify-between text-[#464143] font-['poppins'] leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >
                <div>
                    {/* Heading */}
                    <div
                        className={
                            "text-[#000000] text-[40px] mt-[50px] font-semibold text-center leading-tight  [@media(max-width:500px)]:text-[26px] [@media(max-width:1366px)]:text-[36px]  [@media(min-width:1920px)]:text-[60px] "
                        }>
                        <span className={"text-[#0161FF]"}>Inflation</span>{" "}Calculator
                    </div>
                    {/* Subheading */}
                    <p className={"text-[#464143] mt-[10px] text-center  [@media(max-width:300px)]:text-sm text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal"}>
                        Inflation is the decrease of the purchasing power of money.
                    </p>
                </div>

                {/* Calculator and side pannel */}
                <div
                    className={
                        "xl:flex max-xl:flex-col flex-wrap w-full h-fit  mt-[50px] [@media(max-width:500px)]:mt-[30px]  justify-between "
                    }
                >
                    {/* Calculator and graph (WRAPPER) */}
                    <div
                        className={
                            "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] [@media(max-width:400px)]:py-[20px] [@media(max-width:400px)]:px-[15px]"}
                    >
                        {/* Calculator */}
                        <div className={"text-left text-lg lg:w-[50%] text-[14px]"}>
                            {/* Input box wrapper */}
                            <div
                                className={
                                    "flex-col justify-evenly font-medium text-[14px] [@media(min-width:1920px)]:text-[18px] max-sm:space-y-[12px]  xl:space-y-[20px] sm:space-y-[15px] text-[#1B1C20]"
                                }
                            >
                                {/* Input box */}
                                <div>

                                    <div className=" mb-3">
                                        {/* Current Cost */}
                                        <div >Current Cost</div>
                                        <InputSlider
                                            type="rupees"
                                            min={1000}
                                            max={10000000}
                                            step={100}
                                            value={currentCost}
                                            setValue={setCurrentCost}
                                        />
                                    </div>

                                    <div className=" mb-3">
                                        {/* Rate of Inflation */}
                                        <div >Rate of Inflation</div>
                                        <InputSlider
                                            type="percentage"
                                            min={1}
                                            max={50}
                                            step={0.1}
                                            value={rateInflation}
                                            setValue={setRateInflation}
                                        />
                                    </div>

                                    <div className=" mb-3">
                                        {/*Time period (years)*/}
                                        <div >Time period (years)</div>
                                        <InputSlider
                                            type="years"
                                            min={1}
                                            max={30}
                                            step={1}
                                            value={Duration}
                                            setValue={setDuration}
                                        />
                                    </div>

                                </div>

                                {/* Control Box Wrapper */}
                                <ControlBox calculate={calculate} />
                            </div>
                        </div>

                        {/* vertical line */}
                        <div
                            className={
                                " -my-4 mx-[20px] w-0  max-lg:h-0 max-lg:w-auto max-lg:-mx-2   rounded-[50px] border-[1px] border-solid border-[#707070] opacity-10"
                            }
                        ></div>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%] self-center"}>
                            {/* Toggle Button */}

                            <div className={"flex flex-col items-center text-[#464143]"}>

                                <div className={" font-semibold text-[36px] mt-4"}>
                                    {currCost.toLocaleString('en-In')}
                                </div>
                                <div className={"font-semibold text-[14px] leading-[55px]"}>
                                    Current Cost
                                </div>

                            </div>

                            <div className={"flex flex-col font-bold my-4 items-center text-[#464143]"}>
                                <div className=" font-semibold text-[36px]">
                                    {costIncrease.toLocaleString('en-In')}
                                </div>
                                <div className={"font-semibold text-[14px] leading-[55px]"}>
                                    Cost Increase
                                </div>
                            </div>
                            <div className={"flex flex-col font-bold mt-4 items-center text-[#464143]"}>
                                <div className=" font-semibold text-[36px]">
                                    {futureCost.toLocaleString('en-In')}
                                </div>
                                <div className={"font-semibold  text-[14px] leading-[55px]"}>
                                    Future Cost
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Side Pannel */}
                    <div className="xl:max-h-[367.2px] [@media(min-width:1920px)]:max-h-[377.2px]  xl:w-[23%] ">
                        <InfoBox
                            type="sidePannel"
                            contents={[
                                ["Inflation", "Inflation refers to the phenomenon of a sustained increase in the overall price level of goods and services in an economy, which causes a reduction in the purchasing power of money."],
                                ["How does it affect me?",
                                    "The amount of money you have now will buy you fewer products and services by the end of the year, making you spend more for the same thing or buy less of the item."],
                                ["How to combat inflation?", "To combat inflation as a consumer, one can compare prices, cut expenses, invest wisely, save more, shop smart, and avoid excessive debt."]
                            ]}
                        />
                    </div>
                </div>

                {/* FAQ box */}
                <InfoBox
                    type="faq"
                    contents={[
                        ["What is Inflation?",
                            <>
                                <div>Inflation refers to the phenomenon of a sustained increase in the overall price level of goods and services in an economy, which causes a reduction in the purchasing power of money over time. This can occur due to various factors, including an increase in the money supply, a rise in demand, or a decrease in the supply of goods and services.</div>

                            </>
                        ],
                        ["Why should I calculate inflation?",
                            <>
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    Calculating inflation can help you understand how much things cost and how that changes over time, which can be useful when planning a budget or deciding how to spend your money.
                                </div>
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    It can also help you figure out how much you need to save to achieve your financial goals, such as buying a car or a house, and how much those things will cost in the future.
                                </div>
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    By accounting for inflation, you can compare the value of money across different time periods and get a better sense of how much things actually cost relative to each other. This can help you make better purchasing decisions and avoid overpaying for things.
                                </div>
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    If you’re interested in investing, calculating inflation can be helpful because it allows you to determine the real return on an investment, which is the return adjusted for inflation. This can give you a better idea of whether an investment is worth it and how much you can expect to earn over time.
                                </div>
                            </>],
                        ["How does the Inflation calculator work?",
                            <>
                                <div>FundsIndia inflation calculator uses the Consumer Price Index (CPI) data from the Reserve Bank of India (RBI) to calculate inflation rates. The CPI is a measure of the average change over time in the prices of goods and services consumed by households.</div>
                            </>
                        ],
                        ["How to use Inflation calculator?",
                            <>
                                <div>FundsIndia Inflation calculator is an intuitive tool that calculates the inflation easily by just plugging in the current cost, rate of inflation and time period in years. The calculator will give you the cost increase and total future cost.</div>
                            </>
                        ]
                    ]}
                />



                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        // ["Income Tax Calculator", "/inflation-calculator"],
                        // ["Mutual Funds Calculator", "/inflation-calculator"],
                        ["Retirement Calculator", "/retirement-calculator"],
                        // ["ELSS Calculator", "/inflation-calculator"]
                    ]}
                />
            </main >
        </div >
    );
}