import Head from "next/head";

import { useState } from "react";

import LineChart from "../Components/SILineChart.js";
import DoughnutChart from "../Components/SIDoughnutChart.js";

import ChartToggle from "../Components/Cagr/ChartToggle.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";


import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import InputSlider from "../Components/Cagr/InputSlider.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';





export default function Home() {

    let minTotalInvestment = 1000;
    let maxTotalInvestment = 10000000;
    let stepTotalInvestment = 100;
    let minInterestRate = 1;
    let maxInterestRate = 50;
    let stepInterestRate = 0.1;
    let minTimePeriod = 1;
    let maxTimePeriod = 30;
    let stepTimePeriod = 1;

    const [totalInvestment, setTotalInvestment] = useState(100000);
    const [totalInvestmentString, setTotalInvestmentString] = useState("1,00,000");
    const [interestRate, setInterestRate] = useState(5);
    const [interestRateString, setInterestRateString] = useState("5");
    const [timePeriod, setTimePeriod] = useState(5);
    const [timePeriodString, setTimePeriodString] = useState("5");

    let simpleInterest = 0;
    const [output, setOutput] = useState(25000);

    const [totalAmount, setTotalAmount] = useState(125000);

    const [isLineChart, setCheck] = useState(true);
    const [graphPoints, setGraphPoints] = useState([100000, 105000, 110000, 115000, 120000, 125000]);

    function calculate() {
        if (minTotalInvestment <= totalInvestment &&
            minInterestRate <= interestRate &&
            minTimePeriod <= timePeriod) {
            setTotalInvestmentString(totalInvestment.toLocaleString("en-In"));
            setTimePeriodString(timePeriod);
            setInterestRateString(interestRate);

            simpleInterest = Math.round((totalInvestment * interestRate * timePeriod) / 100);
            if (simpleInterest === Infinity || isNaN(simpleInterest)) {
                setOutput(0);
            }
            else {
                setOutput(simpleInterest);
            }
            setTotalAmount(simpleInterest + totalInvestment);

            calculateGraphPoints();
        }
    }


    function calculateGraphPoints() {
        let points = [];
        points.push(totalInvestment);
        for (let i = 1; i <= timePeriod; i++) {
            
            points.push(totalInvestment+Math.ceil(totalInvestment * interestRate * i) / 100);
            console.log(points[i]);
        }
        setGraphPoints(points);
    }

    return (
        <div className={"app—bg—container overflow—hidden "}>
            {/* <PageSEO title={'Simple Interest Calculator Online - FundsIndia'}
            description={"FundsIndia's simple interest calculator helps you to calculate the interest earned or paid on a particular amount of principal during a specific time period."} /> */}
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
                className={style.main +
                    " relative overflow-hidden [@media(max-width:400px)]:px-[16px] [@media(max-width:1280px)]:px-[40px] xl:px-[12%] sm:px-[7%] pt-[108px] [@media(max-width:500px)]:pt-[80px] py-[50px] w-full flex-col justify-between text-[#464143]   leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >
                <div className={style.leftBgLine1} data-aos="fade-right" data-aos-delay="300"></div>
                <div className={style.rightBgLine2} data-aos="fade-right" data-aos-delay="300"></div>
                <div>
                    {/* Heading */}
                    <Heading blue={"Simple Interest"} />
                    {/* Subheading */}
                    <Subheading>
                        Simple interest is a method of calculating interest over a deposit for a definite period of time. FundsIndia Simple Interest Calculator
                        can be used to calculate your returns or the interest you owe.
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
                                    {/*Total investment block*/}
                                    <div>Total investment</div>
                                    <InputSlider
                                        id='initialInvestment'
                                        type='rupees'
                                        min={minTotalInvestment}
                                        max={maxTotalInvestment}
                                        step={stepTotalInvestment}
                                        value={totalInvestment}
                                        setValue={setTotalInvestment}
                                    />
                                </div>


                                <div>
                                    {/*Interest rate block*/}
                                    <div>Interest rate (p.a.)</div>
                                    <InputSlider
                                        id='finalInvestment'
                                        type='percentage'
                                        min={minInterestRate}
                                        max={maxInterestRate}
                                        step={stepInterestRate}
                                        value={interestRate}
                                        setValue={setInterestRate}
                                    />
                                </div>

                                <div>
                                    {/*Time Period block*/}
                                    <div>Time Period (Yrs)</div>
                                    <InputSlider
                                        id='timePeriod'
                                        min={minTimePeriod}
                                        max={maxTimePeriod}
                                        step={stepTimePeriod}
                                        value={timePeriod}
                                        setValue={setTimePeriod}
                                    />
                                </div>
                            </InputBoxWrapper>
                        </Calculator>

                        {/* Charts/Graph wrapper */}
                        <div className={"lg:w-[50%]"}>
                            {/* Toggle Button */}
                            <ChartToggle isLineChart={isLineChart} setCheck={setCheck} />

                            {/* Charts/Graph */}
                            <div className={" relative object-right-top "}>
                                {isLineChart ? (
                                    <>
                                        <LineChart key='' points={graphPoints} />
                                        <div className={"mb-3 text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal "}>
                                            For an investment of {" "}
                                            <span className={"font-semibold"}>
                                                Rs.{totalInvestmentString}
                                            </span>{" "}at <span className={"font-semibold"}>{interestRateString}% </span>simple interest for a period of
                                            {" "}
                                            <span className={"font-semibold"}>
                                                {timePeriodString}
                                            </span>{" "}
                                            years,{" "}the simple interest earned will be{" "}
                                            <span className={"font-semibold"}>
                                                Rs.{output.toLocaleString("en-In")}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <DoughnutChart
                                            totalInterestAmount={output} totalInvestmentAmount={totalInvestment} dependency={output}
                                        />
                                        <div>
                                            <ChartFooterElement
                                                id={"totalInvestmentString"}
                                                label={"Principal"}
                                                value={'\u20B9 ' + totalInvestmentString.toLocaleString('en-In')}
                                            />
                                            <ChartFooterElement
                                                id={"output"}
                                                label={"Total Interest"}
                                                value={'\u20B9 ' + output.toLocaleString("en-In")}
                                            />
                                            <ChartFooterElement
                                                id={"totalAmount"}
                                                label={"Total Amount"}
                                                value={'\u20B9 ' + totalAmount.toLocaleString("en-In")}
                                                last={true}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </CalculatorWrapper>

                    {/* Side Pannel */}
                    <div className="xl:max-h-[369.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Simple Interest",
                                    "Simple interest is a method of calculating the interest on a loan or deposit. It is calculated as the product of the principal amount, interest rate, and time period.",
                                ],
                                [
                                    "Uses of Simple Interest",
                                    "Simple interest can be used in a variety of scenarios, such as when borrowing money, investing money, saving money in deposits. ",
                                ],
                                [
                                    "Calculating simple interest",
                                    <>
                                        Simple interest is calculated as follows
                                        <br />
                                        <b>I=P*R*T
                                            <br />
                                            Where:<br />
                                            I = Interest<br />
                                            P = Principal (the initial amount)<br />
                                            R = Interest Rate (as a decimal)<br />
                                            T = Time Period (in years)<br />
                                        </b>
                                    </>,
                                ],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                <Advertisement heading={"Book Your Deposit Today!"} content={"Attractive interest rates | Automatic renewal option | Flexible placements and renewals"} path={"/simple-interest-calculator"} />
                {/* FAQ box */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is Simple Interest?",
                            "Simple interest is a method of calculating the interest on a loan or deposit. It is calculated as the product of the principal amount, interest rate, and time period.",
                        ],
                        [
                            "When can this calculator be used?",
                            "Calculating simple interest can be beneficial in a variety of scenarios, such as when borrowing money, investing money, saving money, or carrying a balance on a credit card. By calculating the amount of interest involved, you can make more informed financial decisions and better understand the actual cost or benefit of different financial transactions. FundsIndia SI Calculator can be used in all these situations for an accurate calculation.",
                        ],
                        [
                            "How can you use the Simple Interest Calculator?",
                            "FundsIndia Simple Interest Calculator is very easy to use. Just plugin the principal amount, interest rate, and tenure. The calculator will give you accurate results regardless of currency.",
                        ],
                        [
                            "How does the Simple Interest calculator work?",
                            <>
                                <div>It uses the following logic</div>
                                <b>
                                    I = P * R * T<br /> Where: <br />I = Interest <br /> P = Principal (the initial amount)<br /> R = Interest Rate (as a decimal) <br />T = Time Period (in years)
                                </b>
                            </>,
                        ],
                        [
                            "Why should I use FundsIndia Simple Interest Calculator?",
                            "FundsIndia SI Calculator is an intuitive and easy to use application that can save the time of manually calculating simple interest. It can visualise the interest with principal amount in an easily understandable manner.",
                        ],
                    ]}
                />

                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        // ["Compound Interest Calculator", "/compound-interest-calculator"],
                        ["FD Calculator", "/fd-calculator"],
                        // ["SWP Calculator", "/simple-interest-calculator"],//same page
                        // ["ELSS Calculator", "/simple-interest-calculator"],//same page
                    ]}
                />
            </main>
        </div>
    );
}
