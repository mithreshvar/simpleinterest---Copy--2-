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
import LineChart from "../Components/Cagr/LineChartCagr.js";
import FDDoughnutChart from "../Components/FDDoughnutChart.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {
    const [totalInvestment, setTotalInvestment] = useState(100000);
    const [interestRate, setInterestRate] = useState(7);
    const [timePeriod, setTimePeriod] = useState(10);

    const minTotalInvestment = 1000;
    const maxTotalInvestment = 100000000;
    const stepTotalInvestment = 100;

    const minInterestRate = 1;
    const maxInterestRate = 15;
    const stepInterestRate = 0.1;

    const minTimePeriod = 1;
    const maxTimePeriod = 25;

    {/* Display variables */ }
    const [maturityValue, setMaturityValue] = useState(196715);
    const [estReturns, setEstReturns] = useState(96715);
    const [dummyTotalInvestment, setDummyTotalInvestment] = useState(100000);


    const [isLineChart, setCheck] = useState(true);
    const [graphPoints, setGraphPoints] = useState([
        100000, 107000, 114490, 122504, 131080, 140255, 150073, 160578, 171819, 183846, 196715
    ]);

    function calculate() {
        if (
            totalInvestment >= minTotalInvestment &&
            interestRate >= minInterestRate &&
            timePeriod >= minTimePeriod
        ) {
            let cumulativeAmount = (totalInvestment);
            for (let i = 1; i <= timePeriod; i++) {
                cumulativeAmount += Number(((cumulativeAmount * interestRate) / 100));
            }
            let dummyest = (Math.round(cumulativeAmount - totalInvestment));
            setDummyTotalInvestment(totalInvestment);
            setEstReturns(dummyest);
            setMaturityValue(Math.round(cumulativeAmount));
            calculateGraphPoints();
        }
    }

    function calculateGraphPoints() {
        let points = [];
        let cumulativeAmount = (totalInvestment);
        for (let i = 1; i <= timePeriod; i++) {
            points.push(cumulativeAmount); //[100000, 107000, 114490]
            cumulativeAmount += Number((cumulativeAmount * interestRate) / 100);
        }
        points.push(cumulativeAmount);
        setGraphPoints(points);
    }

    return (
        <div className={"app—bg—container overflow—hidden"}>
            {/* <PageSEO title={'FD Calculator | Fixed Deposit Calculator Online - FundsIndia'}
            description={"FundsIndia's Fixed Deposit Calculator assists you in determining your FD interest rates and maturity amount online to easily plan your investment."} /> */}
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
                    <Heading blue={"FD"} />

                    {/* Subheading */}
                    <Subheading>
                        Fixed deposit (FD) is a type of savings account that pays a fixed rate
                        of interest for a specified period of time. It is a safe and secure
                        investment option for those looking to save and grow their money.
                        Fixed deposits are a popular investment option in India due to their
                        stability and the guaranteed returns. They are suitable for
                        individuals looking for a low-risk investment option and for those
                        seeking to park their funds for a short or medium-term.
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
                                        id="totalInvestment"
                                        type="rupees"
                                        min={minTotalInvestment}
                                        max={maxTotalInvestment}
                                        step={stepTotalInvestment}
                                        value={totalInvestment}
                                        setValue={setTotalInvestment}
                                    />
                                </div>

                                <div>
                                    {/*Final investment block*/}
                                    <div>Interest rate</div>
                                    <InputSlider
                                        id="finalInvestment"
                                        type="percentage"
                                        min={minInterestRate}
                                        max={maxInterestRate}
                                        step={stepInterestRate}
                                        value={interestRate}
                                        setValue={setInterestRate}
                                    />
                                </div>

                                <div>
                                    {/*Duration of investment block*/}
                                    <div>Time Period (Yrs)</div>
                                    <InputSlider
                                        id="years"
                                        min={minTimePeriod}
                                        max={maxTimePeriod}
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
                            <div className={" relative object-right-top"}>
                                {isLineChart ? (
                                    <>
                                        <LineChart points={graphPoints} />

                                    </>
                                ) : (
                                    <>
                                        <FDDoughnutChart
                                            totalInterest={estReturns}
                                            investmentAmount={totalInvestment}
                                            maturityValue={maturityValue}
                                        />

                                    </>
                                )}
                            </div>

                            {/* Output box */}
                            <div className={"flex-col "}>
                                {/*FD output*/}
                                <ChartFooterElement
                                    label={"Total Investment"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {dummyTotalInvestment.toLocaleString("en-In")}</>}
                                />

                                <ChartFooterElement
                                    label={"Absolute Returns"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {estReturns.toLocaleString("en-In")}</>}
                                />

                                <ChartFooterElement
                                    label={"Maturity Value"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {maturityValue.toLocaleString("en-In")}</>}
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
                                    "Fixed Deposit",
                                    "Fixed deposit (FD) is a type of savings account that pays a fixed rate of interest for a specified period of time. They are suitable for individuals looking for a low-risk investment option.",
                                ],
                                [
                                    "Find out how much I can earn with FD",
                                    "Your FD returns depend on the interest rate offered by the bank or company and how long you plan to leave the deposit in.",
                                ],
                                [
                                    "Tax Implications on FD",
                                    "The interest earned on fixed deposits (FDs)is taxable and the rate of tax depends on the individual\'s tax slab. The interest earned on an FD is added to the individual\'s total taxable income and is taxed as per their applicable tax slab.",
                                ],
                                [
                                    "Premature withdrawal implications",
                                    "Premature withdrawal leads to loss of interest and a penalty will be imposed. The penalty rate varies from partner to partner.",
                                ],
                            ]}
                        />
                    </div>
                </CalculatorAndSidePannel>

                <Advertisement heading={"Book Your Deposit Today!"} content={"Attractive interest rates | Automatic renewal option | Flexible placements and renewals"} path={"/fd-calculator"} />

                {/* FAQ box */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is Fixed Deposit?",
                            "Fixed deposit (FD) is a type of savings account that pays a fixed rate of interest for a specified period of time. It is a safe and secure investment option for those looking to save and grow their money. It is a popular investment option in India due to their stability and the guaranteed returns. They are suitable for individuals looking for a low-risk investment option.",
                        ],
                        [
                            "What is the lock-in period of FD investment?",
                            "FDs offered on FundsIndia have a typical lock-in period starting from 12 Months all the way up to 5 Years. It varies from partner to partner",
                        ],
                        [
                            "What is the minimum investment to book an FD?",
                            "The minimum investment of FDs varies from one partner to another. It starts from 5000 rupees.",
                        ],
                        [
                            "What are the tax implications of an FD investment?",
                            "The interest earned on fixed deposits (FDs)is taxable and the rate of tax depends on the individual\'s tax slab. The interest earned on an FD is added to the individual\'s total taxable income and is taxed as per their applicable tax slab. Additionally, TDS (Tax Deducted at Source) is applicable on fixed deposit interest if the interest earned in a financial year is more than INR 40,000 for an individual or INR 50,000 for a Hindu Undivided Family (HUF). In such cases, TDS will be deducted at the rate of 10% before crediting the interest to the account.",
                        ],
                        [
                            "How can you use the FD calculator?",
                            "This calculator is very intuitive as it only takes the amount you are investing, the tenure and interest rate and can give you the earnings at the time of maturity and also year on year growth via a graph.",
                        ],
                        [
                            "How does the FD calculator work?",
                            <div className=" space-y-[8px] " key={'cagrFormula'}>
                                <div className="mb-[10px]">It uses the following logic</div>

                                <div className={"font-semibold flex items-center "}>
                                    The fixed deposit calculator for simple interest FD– M = P + (P * r * t/100),
                                </div>
                                <div className={"font-semibold"}>
                                    <div>Where:</div>
                                    <div>P is the principal amount that you deposit.</div>
                                    <div>r is the rate of interest per annum.</div>
                                    <div>t is the tenure in years.</div>
                                </div>
                            </div>,
                        ],
                        [
                            "What happens if I break my FD?",
                            "Breaking of FD means to withdraw the deposit before maturity. This is not advisable as it leads to loss of interest and a penalty will be imposed. The penalty rate varies from partner to partner. Please read all documents carefully before investing.",
                        ],
                    ]}
                />

                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["Compound Interest Calculator", "/compound-interest-calculator"],
                        ["Simple Interest Calculator", "/simple-interest-calculator"],
                        ["SSY Calculator", "/ssy-calculator"],
                        ["Gratuity Calculator", "/gratuity-calculator"],
                    ]}
                />
            </main>
        </div>
    );
}
