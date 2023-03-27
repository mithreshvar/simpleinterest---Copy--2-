import Head from "next/head";
import { useState, useEffect } from "react";
import LineChart from "../Components/RDLineChart.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
//import { PageSEO } from '@/components/SEO';

import InputSlider from "../Components/Cagr/InputSlider.js";
import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";

import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import Advertisement from "../Components/Cagr/Advertisement.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {

    let minInvestment = 1000;
    let maxInvestment = 10000000;
    let stepInvestment = 100;
    let minInterestRate = 1;
    let maxInterestRate = 15;
    let stepInterestRate = 0.1;
    let minTimePeriod = 1;
    let maxTimePeriod = 25;

    const [totalInvestment, setTotalInvestment] = useState(100000);
    const [dummyTotalInvestment, setDummyTotalInvestment] = useState(12000000);
    const [interestRate, setInterestRate] = useState(7);
    const [timePeriod, setTimePeriod] = useState(10);
    const [graphPoints, setGraphPoints] = useState([1246241, 2582035, 4013819, 5548489, 7193439, 8956593, 10846447, 12872103, 15043320, 17370560]);
    const [maturityValue, setMaturityValue] = useState(17370560);
    const [estReturns, setEstReturns] = useState(99596);

    useEffect(() => {
        calculateGraphPoints();
    }, [estReturns]);

    function calculate() {
        if (totalInvestment >= minInvestment &&
            interestRate >= minInterestRate &&
            timePeriod >= minTimePeriod) {
            let cumulativeTotalInvestment = totalInvestment * timePeriod * 12;
            let interestQuarterly = 0;
            let totalAmount = totalInvestment;
            for (let i = 1; i <= timePeriod * 12; i++) {
                interestQuarterly += (totalAmount * (1 / 12) * interestRate) / 100;
                if (i % 3 == 0) {
                    totalAmount += interestQuarterly;
                    interestQuarterly = 0;
                }
                totalAmount += totalInvestment;
            }
            totalAmount -= totalInvestment
            setDummyTotalInvestment(cumulativeTotalInvestment);
            setEstReturns((Math.round(totalAmount - cumulativeTotalInvestment)));
            setMaturityValue(Math.round(totalAmount));
            calculateGraphPoints();
        }
    }


    function calculateGraphPoints() {
        let points = [];
        let interestQuarterly = 0;
        let totalAmount = totalInvestment;

        for (let i = 1; i <= timePeriod * 12; i++) {

            interestQuarterly += (totalAmount * (1 / 12) * interestRate) / 100;
            if (i % 3 == 0) {
                totalAmount += interestQuarterly;
                interestQuarterly = 0;
            }
            if (i % 12 == 0) {
                points.push(totalAmount);
            }
            totalAmount += totalInvestment;
        }
        setGraphPoints(points);
    }

    return (
        <div className={"app—bg—container overflow—hidden"}>

            {/* <PageSEO title={'RD Calculator - Recurring Deposit Calculator Online - FundsIndia'}
            description={"Estimate the interest rate and maturity value of your recurring deposit by using our RD calculator online."} /> */}
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
                    <Heading blue={"RD"} />

                    <Subheading>
                        {/* leading 18 ensures line spacing of 18px because leading includes the height of characters too  */}
                        RD stands for Recurring Deposit. It is a type of savings account where the depositor makes regular fixed deposits over a specified period of time, usually ranging from 6 months to 10 years. The depositor is required to make a fixed deposit each month, and in return, the bank pays a higher interest rate on the deposit as compared to a regular savings account.
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
                                    <div>Total investment</div>
                                    <InputSlider
                                        id='totalInvestment'
                                        type='rupees'
                                        value={totalInvestment}
                                        setValue={setTotalInvestment}
                                        min={minInvestment}
                                        max={maxInvestment}
                                        step={stepInvestment}
                                    />
                                </div>

                                <div>
                                    <div>Interest rate</div>
                                    <InputSlider
                                        id='interestRate'
                                        type="percentage"
                                        value={interestRate}
                                        setValue={setInterestRate}
                                        min={minInterestRate}
                                        max={maxInterestRate}
                                        step={stepInterestRate}
                                    />
                                </div>

                                <div>
                                    <div>Time Period (Yrs)</div>
                                    <InputSlider
                                        id='timePeriod'
                                        value={timePeriod}
                                        setValue={setTimePeriod}
                                        min={minTimePeriod}
                                        max={maxTimePeriod}
                                    />
                                </div>
                            </InputBoxWrapper>
                        </Calculator>


                        {/* Total Chart Container*/}
                        <div className={"lg:w-[50%]"}>

                            {/* Charts/Graph */}
                            <div className={" relative object-right-top [@media(min-width:200px)]:h-auto md:w-[100%]"}>
                                <LineChart key='' points={graphPoints} />
                            </div>


                            <div className={"flex-col "}>
                                {/*CARG output*/}
                                <ChartFooterElement
                                    label={"Total Investment"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {dummyTotalInvestment.toLocaleString("en-In")}</>}
                                />

                                <ChartFooterElement
                                    label={"Estimated returns"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {(maturityValue - dummyTotalInvestment).toLocaleString("en-In")}</>}
                                />
                                <ChartFooterElement
                                    label={"Maturity Value"}
                                    value={<><span className="font-['Rubik']">{'\u20B9'}</span> {(maturityValue).toLocaleString("en-In")}</>}
                                    last={true}
                                />
                            </div>

                        </div>
                    </CalculatorWrapper>


                    {/* Side Panel */}
                    <div className="xl:max-h-[369.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                        <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Recurring  Deposit",
                                    'It is a type of savings account where the depositor makes regular fixed deposits over a specified period of time. The interest rate offered on recurring deposits is generally higher than that offered on savings accounts but lower than the interest rate offered on fixed deposits.'
                                ],
                                [
                                    "Find out how much I can earn with RD",
                                    'You can use the FundsIndia RD calculator to calculate your RD returns in a matter of seconds.'
                                ],
                                [
                                    "Tax Implications on RD",
                                    'The interest earned on a Recurring Deposit (RD) is taxable. The rate of tax depends on the individual\'s tax slab.'
                                ],
                                [
                                    "Premature withdrawal implications",
                                    'Premature withdrawal leads to loss of interest and a penalty will be imposed. The penalty rate varies from partner to partner.'
                                ],
                            ]}
                        />
                    </div>

                </CalculatorAndSidePannel>

                <Advertisement heading={"Book Your Deposit Today!"} content={"Attractive interest rates | Automatic renewal option | Flexible placements and renewals"} path={"/rd-calculator"} />
                {/* FAQ Panel */}
                <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            'What is Recurring  Deposit?',
                            'It is a type of savings account where the depositor makes regular fixed deposits over a specified period of time, usually ranging from 6 months to 10 years. The depositor is required to make a fixed deposit each month, and in return, the bank pays a higher interest rate on the deposit as compared to a regular savings account. The interest rate offered on recurring deposits is generally higher than that offered on savings accounts but lower than the interest rate offered on fixed deposits.'
                        ],
                        [
                            'What is the lock-in period of RD investment?',
                            'The lock-in period of an RD is usually the same as the deposit period, which can range from 6 months to 10 years. '
                        ],
                        [
                            'What is the minimum investment to book an RD?',
                            'The minimum investment of RDs  varies from one bank to another.'
                        ],
                        [
                            'What are the tax implications of an RD investment?',
                            'The interest earned on a Recurring Deposit (RD) is taxable. The rate of tax depends on the individual\'s tax slab, and the interest earned is added to the individual\'s total taxable income. Additionally, TDS (Tax Deducted at Source) is applicable on RD interest if the interest earned in a financial year is more than INR 40,000 for an individual or INR 50,000 for a Hindu Undivided Family (HUF). In such cases, TDS will be deducted at the rate of 10% before crediting the interest to the account.'
                        ],
                        [
                            'How can you use the RD calculator?',
                            'This calculator is very intuitive as it only takes the amount you are investing, the tenure and interest rate and can give you the earnings at the time of maturity and also year on year growth via a graph.'
                        ],
                        [
                            'How does the RD calculator work?',
                            <>
                                <div>It uses the following logic</div>
                                <div className='font-semibold my-[10px]'>A = (MI * ((1+r/400)^quarters - 1))/(1 - (1+r/400)^(-1/3))<br /> Where, <br /> A 	= Total amount by the end of the period <br /> MI 	= Monthly recurring deposit amount <br /> r 	= Annual rate of interest <br /> quarters = number of quarters in the mentioned period <br /> </div>
                            </>
                        ],
                        [
                            'What happens if I break my RD?',
                            "Breaking of RD is withdrawing the deposit before maturity. This is not advisable as it leads to loss of interest and a penalty will be imposed. The penalty rate varies from partner to partner. Please read all documents carefully before investing."
                        ],

                    ]}
                />

                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        ["NSC Calculator", "/nsc-calculator"],
                        // ["Mutual Funds Calculator", "/rd-calculator"],//same page
                        ["FD Calculator", "/fd-calculator"],
                        // ["NPS Calculator", "/rd-calculator"],//same page
                    ]}
                />


            </main >
        </div >
    );
}
