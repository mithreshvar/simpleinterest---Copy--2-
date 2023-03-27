import Head from "next/head";

import { useState } from "react";

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
import CIDropDownInput from "../Components/CIDropDownInput";

import LineChart from "../Components/CILineChart.js";
import DoughnutChart from "../Components/CIDoughnutChart.js";
import { FaChartPie, FaChartLine } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import Dropdown from "../Components/Cagr/Dropdown.js";

export default function Home() {
  const [totalInvestment, settotalInvestment] = useState(100000);
  const [totalInvestmentString, setTotalInvestmentString] = useState("1,00,000");

  const [interestRate, setinterestRate] = useState(5);
  const [interestRateString, setInterestRateString] = useState("5");

  const [timePeriod, settimePeriod] = useState(5);
  const [timePeriodString, setTimePeriodString] = useState("5");

  const [compoundingFrequency, setcompoundingFrequency] = useState("Half-yearly");

  let compoundInterest = 0;

  const [output, setOutput] = useState(127628);
  const [totalAmount, settotalAmount] = useState(125000);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([100000, 105000, 110250, 115762, 121550, 127628]);

  function calculate() {
    if(totalInvestment>=1000&&interestRate>=1&&timePeriod>=1)
    {
    setTotalInvestmentString(totalInvestment.toLocaleString("en-In"));
    setTimePeriodString(timePeriod);
    setInterestRateString(interestRate);
    let compoundingFrequencyValue=1;

    if(compoundingFrequency==="Monthly"){
      compoundingFrequencyValue=12;
    }
    else if(compoundingFrequency==="Quaterly"){
      compoundingFrequencyValue=4;
    }
    else if(compoundingFrequency==="Half-yearly"){
      compoundingFrequencyValue=2;
    }
    else if(compoundingFrequency==="Annually"){
      compoundingFrequencyValue=1;
    }
    compoundInterest = Math.round(totalInvestment * Math.pow(1.0 + ((interestRate / 100.0) / compoundingFrequencyValue), compoundingFrequencyValue * timePeriod));
    if (compoundInterest === Infinity || isNaN(compoundInterest)) {
      setOutput(0);
    }
    else {
      setOutput(compoundInterest);
    }
    settotalAmount(compoundInterest + totalInvestment);

    calculateGraphPoints();
  }
  }


  function calculateGraphPoints() {
    let points = [];
    points.push(totalInvestment);
    let compoundingFrequencyValue=1;

    if(compoundingFrequency==="Monthly"){
      compoundingFrequencyValue=12;
    }
    else if(compoundingFrequency==="Quaterly"){
      compoundingFrequencyValue=4;
    }
    else if(compoundingFrequency==="Half-yearly"){
      compoundingFrequencyValue=2;
    }
    else if(compoundingFrequency==="Annually"){
      compoundingFrequencyValue=1;
    }

    for (let i = 1; i <= timePeriod; i++) {
      compoundInterest = Math.round(totalInvestment * Math.pow(1.0 + ((Number(interestRate) / 100.0) / compoundingFrequencyValue), compoundingFrequencyValue * i));
      console.log(compoundInterest);
      points.push(compoundInterest);
    }
    setGraphPoints(points);
  }

  return (
    <>
      <Head>
        <title>Compound Interest Calculator</title>
        <link rel="icon" href="https://www.fundsindia.com/static/favicons/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./*+-%(){}:[]?%27%22%2C|;display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Compound Interest Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background image */}
      <div
        className={
          "bg-bg_image w-full h-full bg-center bg-cover object-cover fixed"
        }
      />

      <main
        className={
          "relative [@media(max-width:1200px)]:p-5 [@media(min-width:1200px)]:p-20 w-full overflow-x-hidden flex-col justify-between text-[#464143] text-[14px] app-bg-container overflow-hidden font-['poppins']"
        }
      >
        <div>
          {/* Heading */}
          <Heading blue={"Compound Interest"} />
          {/* Subheading */}
          <Subheading>
            Compound interest is a financial concept that refers to the interest on a loan or deposit calculated based on both the initial principal amount and
            the accumulated interest from previous periods. In other words, the interest earned in a given period is added to the principal,
            and the total balance is used as the basis for calculating the interest in the next period. This process continues over time, causing the balance to grow at an exponential rate.
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
                    min={1000}
                    max={10000000}
                    step={100}
                    value={totalInvestment}
                    setValue={settotalInvestment}
                  />
                </div>


                <div>
                  {/*Interest rate block*/}
                  <div>Interest rate</div>
                  <InputSlider
                    id='finalInvestment'
                    type='percentage'
                    min={1}
                    max={50}
                    step={0.1}
                    value={interestRate}
                    setValue={setinterestRate}
                  />
                </div>

                <div>
                  {/*Time Period block*/}
                  <div>Time Period(Yrs)</div>
                  <InputSlider
                    id='timePeriod'
                    min={1}
                    max={30}
                    step={1}
                    value={timePeriod}
                    setValue={settimePeriod}
                  />
                </div>
                {/*Compounding frequency block*/}
                {/* <div className=" flex  justify-between flex-warp ">
                  
                  <div className="w-[58%]">Compounding frequency</div>
                  <CIDropDownInput value={compoundingFrequency} setValue={setcompoundingFrequency} />
                </div> */}
                <Dropdown
                     heading={"Compounding frequency"}
                     options={["Monthly","Quaterly","Half-yearly","Annually"]}
                     value={compoundingFrequency}
                     setValue={setcompoundingFrequency}
                />


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
                                            </span>{" "}at <span className={"font-semibold"}>{interestRateString}% </span> interest for a period of
                                            {" "}
                                            <span className={"font-semibold"}>
                                                {timePeriodString}
                                            </span>{" "}
                                            years,{" "}the compound interest earned will be{" "}
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
    <div className="xl:max-h-[437.2px] [@media(min-width:1920px)]:max-h-[385.2px]  xl:w-[23%] ">
                    <InfoBox
                            type={"sidePannel"}
                            contents={[
                                [
                                    "Compound Interest",
                                    "Compound interest is a financial concept that refers to the interest on a loan or deposit calculated based on both the initial principal amount and the accumulated interest from previous periods.",
                                ],
                                [
                                    "Uses of Compound Interest calculation",
                                    <>
                  Compound Interest is used in all these products which help you in the growth of your wealth
                  <ul>
                    <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] mt-[2px] relative flex-shrink-0 " />Safe Compounding Investments</li>
                    <ul>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0 " />Fixed Deposits</li>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0" />Public Provident Fund (PPF)</li>
                      <li className=" flex flex-row"><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0" />National Savings Scheme (NSC)</li>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0 " />Life Insurance Savings Plans</li>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0" />Debt Mutual Funds</li>
                      <li className=" flex flex-row"><VscCircleFilled className=" text-[#00DD6F]  ml-[15px] mt-[2px] relative flex-shrink-0" />Unit Linked Insurance Plans (ULIPs) with Debt Fund investment</li>
                    </ul>
                    <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] mt-[2px] relative flex-shrink-0" />Aggressive Compounding Investments</li>
                    <ul>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0 " />Equity Mutual Funds</li>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0" />Equity-Linked Savings Scheme (ELSS)</li>
                      <li className=" flex flex-row"><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0" />National Pension System (NPS)</li>
                      <li className=" flex flex-row "><VscCircleFilled className=" text-[#00DD6F] ml-[15px] mt-[2px] relative flex-shrink-0 " />Unit-Linked Insurance Plans (ULIPs) with Equity Fund investment</li>

                    </ul>

                  </ul>
                </>,
              ],
          ]}
        />
        </div>
          </CalculatorAndSidePannel>
          <InfoBox
                    type={"faq"}
                    contents={[
                        [
                            "What is Compound Interest?",
                            "Compound interest is a financial concept that refers to the interest on a loan or deposit calculated based on both the initial principal amount and the accumulated interest from previous periods. In other words, the interest earned in a given period is added to the principal, and the total balance is used as the basis for calculating the interest in the next period. This process continues over time, causing the balance to grow at an exponential rate.",
                        ],
                        [
                            "How to use the Compound Interest Calculator?",
                            "FundsIndia Compound Interest Calculator is very easy to use. Just plugin the principal amount, interest rate,compounding frequency, and tenure. The calculator will give you accurate results regardless of currency.",
                        ],
                        [
                            "How does the Compound Interest calculator work?",
                            <>
                            <div className="mb-[10px]">It uses the following logic</div>
            
                            <div className={"font-semibold flex items-center "}>
                              <div>Compound interest formula = </div>
                              <div className="flex items-center">
                                <div className="flex h-[42px] w-[8px] text-[39px] font-light items-center">
                                  [
                                </div>
            
                                <div className="flex items-center">
                                  <div className="flex   mr-[8px] ml-[2px]   h-[20px] w-[6px] text-[15px] font-light items-center">
                                    P
                                  </div>
            
                                  <div className="flex   mr-[6px] -ml-[6px]    h-[33px] w-[6px] text-[30px] font-light items-center">
                                    {'{'}
                                  </div>
            
                                  <div className="flex   mr-[8px] ml-[2px]   h-[20px] w-[1px] text-[20px] font-light items-center">
                                    1
                                  </div>
            
                                  <div className="flex   mr-[8px] ml-[1px]   h-[10px] w-[6px] text-[20px] font-light items-center">
                                    +
                                  </div>
            
                                  <div className="flex   mr-[8px] ml-[2px]   h-[20px] w-[6px] text-[25px] font-light items-center">
                                    (
                                  </div>
            
                                  <div className="flex-col  ">
                                    <div className=" h-[20px] w-[17px] ">R</div>
                                    <div className=" h-0 text-[50px] font-thin flex justify-center ml-[1px] pt-[1px]  items-center">
                                      -
                                    </div>
                                    <div className=" h-[20px] w-[19px] ">n</div>
                                  </div>
            
                                  <div className="flex   mr-[6px] -ml-[6px]    h-[33px] w-[10px] text-[30px] font-light items-center">
                                    )
                                  </div>
            
                                  <div className="flex   mr-[6px] -ml-[6px]    h-[33px] w-[6px] text-[30px] font-light items-center">
                                    {'}'}
                                  </div>
            
            
                                </div>
            
                                <div className=" flex-col justify-center -mt-[28px] mr-[3px] ">
                                  <div className=" text-[10px] h-[15px] flex justify-center">
                                    N
                                  </div>
                                </div>
            
                                <div className="flex h-[42px] w-[8px] -ml-[3px] text-[39px] font-light items-center">
                                  ]
                                </div>
            
            
            
            
                              </div>
                              <div className=" flex   mr-[8px] ml-[2px]   h-[20px] w-[6px] text-[25px] font-light items-center ">
                                <div className="flex   mr-[4px] ml-[6px]   h-[10px] w-[6px] text-[15px] font-light items-center">-</div>
                                <div className="flex   mr-[6px] ml-[1px]   h-[20px] w-[6px] text-[15px] font-light items-center">P</div>
                              </div>
                            </div>
                            <div className={"font-semibold"}>
                              <div>Where:</div>
                              <div>P = Principal amount</div>
                              <div>R = Rate of interest</div>
                              <div>n = Compounding frequency per year</div>
                              <div>N = Total compounding frequency for the entire period calculated as (n x T);n being the compounding frequency per annum and T being the time period in a number of years.</div>
                            </div>
                          </>,
                        ],
                        [
                          "Why should I use FundsIndia Compound Interest Calculator?",
                          "FundsIndia CI Calculator is an intuitive and easy to use application that can save the time of manually calculating Compound interest which is a rather complicated calculation. It can visualise the interest with principal amount in an easily understandable manner."
                        ],
                        
                    ]}
                />

        {/* Related Calculators */}
        <RelatedCalculators
                    contents={[
                        ["Simple Interest", "/compound-interest-calculator"],
                        ["FD Calculator", "/fd-calculator"],
                        //["SWP Calculator", "/simple-interest-calculator"],//same page
                        //["ELSS Calculator", "/simple-interest-calculator"],//same page
                    ]}
                />
      </main>
    </>
  );
}
