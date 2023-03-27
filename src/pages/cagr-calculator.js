/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/jsx-key */

import Head from "next/head";
import { useState } from "react";
//import { PageSEO } from '@/components/SEO';

import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import ChartToggle from "../Components/Cagr/ChartToggle.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";

import InputSlider from "../Components/Cagr/InputSlider.js";
import UnorderedList from "../Components/Cagr/UnorderedList.js";
import LineChart from "../Components/Cagr/LineChartCagr.js";
import DoughnutChart from "../Components/Cagr/DoughnutChartCagr.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {
    const [initialAmount, setInitialAmount] = useState(100000);
    const [finalAmount, setFinalAmount] = useState(1000000);
    const [years, setYears] = useState(10);

    const minInitialAmount = 1000;
    const maxInitialAmount = 100000000;
    const stepInitialAmount = 1000;

    const minFinalAmount = 1000;
    const maxFinalAmount = 500000000;
    const stepFinalAmount = 1000;

    const minYears = 1;
    const maxYears = 40;

    let CAGR = 25.89;

    {
        /* Display variables */
    }
    const [invested, setInvested] = useState(100000);
    const [finalInvest, setFinalInvest] = useState(1000000);
    const [yearsString, setYearsString] = useState(10);

    const [gains, setGains] = useState("9,00,000");
    const [absoluteReturns, setAbsoluteReturns] = useState(900);
    const [output, setOutput] = useState("25.89");

    const [isLineChart, setCheck] = useState(true);
    const [graphPoints, setGraphPoints] = useState([
        100000, 125890, 158482.921, 199514.1492469, 251168.36248692241,
        316195.85153478663, 398058.9574971429, 501116.42159315315,
        630855.4631436205, 794183.9425515039, 1000000,
    ]);

    function calculate() {
        if (
            initialAmount >= minInitialAmount &&
            finalAmount >= minFinalAmount &&
            years >= minYears
        ) {
            setInvested(initialAmount);
            setFinalInvest(finalAmount);
            setYearsString(years);

            setGains((finalAmount - initialAmount).toLocaleString("en-In"));
            CAGR = (Math.pow(finalAmount / initialAmount, 1 / years) - 1) * 100;
            if (CAGR === Infinity || isNaN(CAGR)) {
                setOutput("-");
            } else {
                setOutput(CAGR.toFixed(2));
            }
            setAbsoluteReturns(
                Number(
                    Math.round(((finalAmount - initialAmount) * 100) / initialAmount)
                )
            );
            calculateGraphPoints();
        }
    }

    function calculateGraphPoints() {
        let points = [];
        let cumulativeAmount = initialAmount;
        for (let i = 0; i <= years; i++) {
            points.push(cumulativeAmount);
            cumulativeAmount = cumulativeAmount + (cumulativeAmount * CAGR) / 100;
        }
        setGraphPoints(points);
    }

    return (
        <div className={"app—bg—container overflow—hidden "}>
            {/* <PageSEO title={'CAGR Calculator - calculate the componded annual growth rate - FundsIndia'}
            description={"Calculate your investment's compound annual growth rate online with our new CAGR calculator over a specified period of time easily."} /> */}
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    rel="stylesheet"
                    as="font"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./*+-%(){}:[]?%27%22%2C|;display=swap"
                />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>

            {/* Background image */}
            <div
                className={
                    "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
                }
            />

            <main
                className={  style.main + 
                    " relative overflow-hidden [@media(max-width:400px)]:px-[16px] [@media(max-width:1280px)]:px-[40px] xl:px-[12%] sm:px-[7%] pt-[108px] [@media(max-width:500px)]:pt-[80px] py-[50px] w-full flex-col justify-between text-[#464143]   leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >
                <div className={style.leftBgLine1} data-aos="fade-right" data-aos-delay="300"></div>
                <div className={style.rightBgLine2} data-aos="fade-right" data-aos-delay="300"></div>
                <div>
                    {/* Heading */}
                    <Heading blue={"Compound Annual Growth Rate"} />

                    {/* Subheading */}
                    <Subheading>
                        CAGR stands for Compound Annual Growth Rate, which is a commonly
                        used financial metric to measure the average growth rate of an
                        investment over a specified period of time. It&#39;s calculated as the
                        average rate of return that would have to be compounded annually to
                        reach the final value from the initial value over the given time
                        period. CAGR is expressed as a percentage and it is useful in
                        comparing the growth of different investments. It provides a more
                        accurate picture of the growth of an investment than simple average
                        returns, as it takes into account the compounding effect of
                        reinvested returns.
                    </Subheading>
                </div>

                {/* Calculator and side pannel */}
                <CalculatorAndSidePannel>
                    {/* Calculator and graph (WRAPPER) */}
                    <CalculatorWrapper>
                        {/* Calculator */}
                        <Calculator calculate={calculate}>
                            {/* Input box wrapper */}
                            <InputBoxWrapper>
                                {/* Input box */}
                                <div>
                                    {/*Initial investment block*/}
                                    <div>Initial investment</div>
                                    <InputSlider
                                        id="initialInvestment"
                                        type="rupees"
                                        min={minInitialAmount}
                                        max={maxInitialAmount}
                                        step={stepInitialAmount}
                                        value={initialAmount}
                                        setValue={setInitialAmount}
                                    />
                                </div>

                                <div>
                                    {/*Final investment block*/}
                                    <div>Final investment</div>
                                    <InputSlider
                                        id="finalInvestment"
                                        type="rupees"
                                        min={minFinalAmount}
                                        max={maxFinalAmount}
                                        step={stepFinalAmount}
                                        value={finalAmount}
                                        setValue={setFinalAmount}
                                    />
                                </div>

                                <div>
                                    {/*Duration of investment block*/}
                                    <div>Duration of investment</div>
                                    <InputSlider
                                        id="years"
                                        min={minYears}
                                        max={maxYears}
                                        value={years}
                                        setValue={setYears}
                                    />
                                </div>
                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%]"}>
                            {/* Toggle Button */}
                            <ChartToggle isLineChart={isLineChart} setCheck={setCheck} />

                            {/* Charts/Graph */}
                            <div className={" relative object-right-top"}>
                                {isLineChart ? (
                                    <>
                                        <LineChart points={graphPoints} />
                                        <div
                                            className={
                                                "mb-3 text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal "
                                            }
                                        >
                                            {
                                                (invested < finalInvest) ?
                                                    <>
                                                        You have gained
                                                        <span className={"font-semibold"}> {'\u20B9 '}{(finalInvest - invested).toLocaleString('en-In')}</span>{" "}
                                                        over the period of <span className={"font-semibold"}>{yearsString}</span> years.
                                                    </>
                                                    : (invested === finalInvest) ?
                                                        <>
                                                            There is no growth observed from <span className={"font-semibold"}>{'\u20B9 '}{(invested).toLocaleString('en-In')}</span> in the <span className={"font-semibold"}>{yearsString}</span> year period.
                                                        </>
                                                        :
                                                        <>Your investment value has reduced by
                                                            <span className={"font-semibold"}> {'\u20B9 '}{(invested - finalInvest).toLocaleString('en-In')}</span>{" "}
                                                            over the period of <span className={"font-semibold"}>{yearsString}</span> years.
                                                        </>
                                            }
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <DoughnutChart
                                            initialInvestment={initialAmount}
                                            gains={finalAmount - initialAmount}
                                            dependency={output}
                                        />
                                        <div>
                                            <ChartFooterElement
                                                id={"invested"}
                                                label={"Invested"}
                                                value={'\u20B9 ' + invested.toLocaleString('en-In')}
                                            />
                                            <ChartFooterElement
                                                id={"gains"}
                                                label={"Gains"}
                                                value={'\u20B9 ' + gains}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Output box */}
                            <div className={"flex-col "}>
                                {/*CARG output*/}
                                <ChartFooterElement
                                    id={"CAGR_output"}
                                    label={"CAGR"}
                                    value={output + "%"}
                                />

                                <ChartFooterElement
                                    id={"absoluteReturns"}
                                    label={"Absolute Returns"}
                                    value={absoluteReturns + "%"}
                                    last={true}
                                />
                            </div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[369.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Compound Annual Growth Rate",
                                    "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period of time.",
                                ],
                                [
                                    "Uses of CAGR",
                                    "CAGR is the best formula for evaluating different investments' performance over time. Investors can compare the CAGR to determine how well one investment has performed against other investments.",
                                ],
                                [
                                    "How can CAGR  help me?",
                                    "CAGR lets you know the compounded returns you earn on an annual basis irrespective of the individual yearly performances of the fund. So you can compare the performance of different investments.",
                                ],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                <Advertisement heading={"Start Investing In A Jiffy!"} content={"Your gateway to wealth creation. Join the millions investing in Mutual Funds."} path={"/cagr-calculator"} />
                {/* FAQ box */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is CAGR?",
                            "CAGR stands for Compound Annual Growth Rate, which is a commonly used financial metric to measure the average growth rate of an investment over a specified period. It's calculated as the average rate of return that would have to be compounded annually to reach the final value from the initial value over the given period.",
                        ],
                        [
                            "Why should I calculate CAGR?",
                            "CAGR is expressed as a percentage and it is useful in comparing the growth of different investments. It provides a more accurate picture of the growth of an investment than simple average returns, as it takes into account the compounding effect of reinvested returns. CAGR provides a standardised way to compare the performance of different investments over the same time period, which makes it easier to determine which investments have performed better or worse.",
                        ],
                        [
                            "How does the calculator work?",
                            <div className=" space-y-[8px] " key={'cagrFormula'}>
                                <div className="mb-[10px]">It uses the following logic</div>

                                <div className={"font-semibold flex items-center "}>
                                    <div>CAGR = </div>
                                    <div className="flex items-center">
                                        <div className="flex h-[42px] w-[8px] text-[39px] font-extralight items-center">
                                            (
                                        </div>

                                        <div className="flex items-center">
                                            <div className="flex   mr-[8px] ml-[2px]   h-[33px] w-[6px] text-[30px] font-light items-center">
                                                (
                                            </div>

                                            <div className="flex-col mr-[7px] ml-[2px] ">
                                                <div className=" -mb-[10px]  ">Final Inv.</div>
                                                <div className=" rotate-90 w-0 text-[80px] [@media(min-width:1920px)]:text-[100px] ml-[32px] [@media(min-width:1920px)]:ml-[38px] font-thin flex justify-center   items-center">
                                                    |
                                                </div>
                                                <div className=" -mt-[9px] ">Initial Inv.</div>
                                            </div>

                                            <div className="flex   mr-[6px] -ml-[6px]    h-[33px] w-[6px] text-[30px] font-light items-center">
                                                )
                                            </div>
                                        </div>

                                        <div className=" flex-col justify-center -mt-[28px] mr-[3px] ">
                                            <div className=" text-[10px] h-[15px] flex justify-center">
                                                1
                                            </div>
                                            <div className=" h-0 font-light text-[15px] -mt-[8px] mb-[5px] flex justify-center">
                                                -
                                            </div>
                                            <div className=" text-[10px] h-[15px] flex justify-center">
                                                n
                                            </div>
                                        </div>

                                        <div>-1</div>

                                        <div className="flex h-[42px] w-[8px] -ml-[3px] text-[39px] font-extralight items-center">
                                            )
                                        </div>
                                    </div>
                                    <div className=" ml-[8px] ">
                                        <span className="font-normal">X</span> 100
                                    </div>
                                </div>
                                <div className={"font-semibold"}>
                                    <div>Where:</div>
                                    <div>Final Inv. = Final Investment</div>
                                    <div>Initial Inv. = Initial Investment</div>
                                    <div>N = Number of years</div>
                                </div>
                            </div>,
                        ],
                        [
                            "What are the advantages of calculating CAGR?",
                            <UnorderedList
                                key=''
                                content={[
                                    "Future projections: By using the CAGR of an investment, you can make projections about what the future value of your investment might be, based on past performance. This can help make investment decisions or set financial goals.",
                                    "Investment performance evaluation: CAGR helps you to evaluate the performance of your investment over a specified period. It provides a clear picture of the growth or decline of your investment, which can help you make informed decisions about your investments.",
                                    "Portfolio analysis: CAGR can be used to analyze the performance of your portfolio as a whole, which can help make adjustments to your investment strategy.",
                                ]}
                            />,
                        ],
                        [
                            "How to use CAGR calculator?",
                            "FundsIndia CAGR calculator is an intuitive tool that calculates the CAGR easily. Just plug in the Initial Investment, Final Investment values along with the duration of the investment and the FundsIndia Calculator will give you the accurate CAGR of your investment.",
                        ],
                    ]}
                />


                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["Compound Interest Calculator", "/compound-interest-calculator"],
                        ["Simple Interest Calculator", "/simple-interest-calculator"],
                        ["FD Calculator", "/fd-calculator"],
                        //["Mutual Funds Calculator", "/cagr-calculator"],//same page
                    ]}
                />

            </main>
        </div>
    );
}
