import Head from "next/head";
import { useState } from "react";

import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import InputSlider from "../Components/Cagr/InputSlider.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import ChartToggle from "../Components/Cagr/ChartToggle.js";
import DoughnutChart from "../Components/Cagr/DoughnutChartStepUpSip.js";
import LineChart from "../Components/Cagr/LineChartStepUpSip.js";
import Advertisement from "../Components/Cagr/Advertisement.js";

import UnorderedList from "../Components/Cagr/UnorderedList.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";

export default function Home() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [stepUp, setStepUp] = useState(3.0);
  const [returnRate, setReturnRate] = useState(12.0);
  const [years, setYears] = useState(10);

  const [invested, setInvested] = useState(57319);
  const [estimatedReturn, setEstimatedReturn] = useState(1236823);
  const [totalValue, setTotalValue] = useState(1294142);

  const [isLineChart, setCheck] = useState(true);
  const [graphPoints, setGraphPoints] = useState([1161695.38, 1190918.6099999999, 1215874.46, 1236876.94, 1254211.47, 1268137.31, 1278889.83, 1286682.4000000001, 1291708.2500000002, 1294142.2300000002]);

  const minMonthlyInvestment = 500;
  const maxMonthlyInvestment = 100000;
  const stepMonthlyInvestment = 100;

  const minStepUp = 1;
  const maxStepUp = 5;

  const minReturnRate = 1;
  const maxReturnRate = 30;
  const stepReturnRate = 0.1;

  const minYears = 1;
  const maxYears = 40;


  function calculate() {
    if (
      monthlyInvestment >= minMonthlyInvestment &&
      stepUp >= minStepUp &&
      returnRate >= minReturnRate &&
      years >= minYears
    ) {
      let prevMonthlyInvestment = 0;
      let currentMonthlyInvestment = Number(monthlyInvestment);
      let additionalInvestmentThatYear =
        currentMonthlyInvestment - prevMonthlyInvestment;
      let totalInvestmentThisYear = currentMonthlyInvestment * returnRate;

      let ReturnsForEachInvestment = parseFloat(
        (
          additionalInvestmentThatYear *
          (((Math.pow(1.0 + returnRate / (12 * 100), years * 12) - 1) *
            (1 + returnRate / (12 * 100))) /
            (returnRate / (12 * 100)))
        ).toFixed(2)
      );

      let totalReturns = ReturnsForEachInvestment;


      let points = [];
      points.push(totalReturns);
      let investedAmount = currentMonthlyInvestment;
      // console.log(
      //   currentMonthlyInvestment,
      //   additionalInvestmentThatYear,
      //   totalInvestmentThisYear,
      //   ReturnsForEachInvestment
      // );
      for (let i = years - 1; i > 0; i--) {

        prevMonthlyInvestment = currentMonthlyInvestment;

        currentMonthlyInvestment = parseFloat(
          (monthlyInvestment * Math.pow(1 + stepUp / 100, years - i)).toFixed(3)
        );

        additionalInvestmentThatYear = parseFloat(
          (currentMonthlyInvestment - prevMonthlyInvestment).toFixed(3)
        );

        totalInvestmentThisYear = parseFloat(
          (currentMonthlyInvestment * returnRate).toFixed(2)
        );

        ReturnsForEachInvestment = parseFloat(
          (
            additionalInvestmentThatYear *
            (((Math.pow(1.0 + returnRate / (12 * 100), i * 12) - 1) *
              (1 + returnRate / (12 * 100))) /
              (returnRate / (12 * 100)))
          ).toFixed(2)
        );

        totalReturns += ReturnsForEachInvestment;
        investedAmount += currentMonthlyInvestment;
        points.push(totalReturns);

      }

      setInvested(Math.round(investedAmount));
      setEstimatedReturn(Math.round(totalReturns - investedAmount));
      setGraphPoints(points);
      setTotalValue(Math.round(totalReturns));
    }
  }


  return (
    <>
      <Head>
        <title>Step up SIP Calculator</title>
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
        <meta name="description" content="Step up SIP Calculator" />
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
          "relative [@media(max-width:400px)]:px-[16px] [@media(max-width:1280px)]:px-[40px] xl:px-[80px] pt-[108px] [@media(max-width:500px)]:pt-[80px] py-[50px] w-full overflow-x-hidden flex-col justify-between text-[#464143] font-['poppins'] leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
        }
      >
        <div>
          {/* Heading */}
          <Heading blue={"Step up SIP"} />

          {/* Subheading */}
          <Subheading>
            Step Up SIP (Systematic Investment Plan) is an investment strategy
            where the investor starts with a small investment amount and
            gradually increases the amount over time. Under this strategy, the
            investment amount is increased periodically. The idea behind a Step
            Up SIP is to enable investors to start with a small investment and
            gradually increase the amount as their income grows over time.
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
                  {/*Monthly Investment block*/}
                  <div>Monthly Investment</div>
                  <InputSlider
                    id="monthlyInvestment"
                    type="rupees"
                    min={minMonthlyInvestment}
                    max={maxMonthlyInvestment}
                    step={stepMonthlyInvestment}
                    value={monthlyInvestment}
                    setValue={setMonthlyInvestment}
                  />
                </div>

                <div>
                  {/*Annual step up block*/}
                  <div>Annual step up</div>
                  <InputSlider
                    id="stepUp"
                    type="percentage"
                    min={minStepUp}
                    max={maxStepUp}
                    value={stepUp}
                    setValue={setStepUp}
                  />
                </div>

                <div>
                  {/*Expected return rate block*/}
                  <div>Expected return rate(p.a)</div>
                  <InputSlider
                    id="returnRate"
                    type="percentage"
                    min={minReturnRate}
                    max={maxReturnRate}
                    step={stepReturnRate}
                    value={returnRate}
                    setValue={setReturnRate}
                  />
                </div>

                <div>
                  {/*Time period block*/}
                  <div>Time period (yr)</div>
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

            {/* Output wrapper */}
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
                    <DoughnutChart
                      investmentAmount={invested}
                      totalInterest={estimatedReturn}
                      dependency={totalValue}
                    />
                  </>
                )}
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <ChartFooterElement
                  id={"invested"}
                  label={"Invested Amount"}
                  value={invested.toLocaleString("en-In")}
                />

                <ChartFooterElement
                  id={"estimatedReturn"}
                  label={"Estimated Returns"}
                  value={estimatedReturn.toLocaleString("en-In")}
                />

                <ChartFooterElement
                  id={"totalValue"}
                  label={"Total Value"}
                  value={totalValue.toLocaleString("en-In")}
                  last={true}
                />
              </div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[449.2px]  [@media(min-width:1920px)]:max-h-[467.2px]  xl:w-[23%] ">
            <InfoBox
              type={"sidePannel"}
              contents={[
                [
                  "Step up SIP",
                  "Step Up SIP (Systematic Investment Plan) is an investment strategy where the investor starts with a small investment amount and gradually increases the amount over time.",
                ],
                [
                  "Why should I consider Step up SIP over traditional SIP?",
                  "Investors under the classic SIP model are not given the choice to increase their periodic contributions over the course of the investment. One must start a new SIP if they want to invest more money than they were able to do previously. This is a situation where Step-up SIP excels.",
                ],
                [
                  "Advantages of step up SIP",
                  <UnorderedList
                    key="Advantages of step up SIP"
                    content={[
                      "Increased savings",
                      "Flexibility",
                      "Power of compounding",
                      "Better long-term returns",
                      "Achieve long-term goals",
                    ]}
                  />,
                ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        <Advertisement heading={"Book Your Deposit Today!"} content={"Attractive interest rates | Automatic renewal option | Flexible placements and renewals"} path={"/step-up-sip-calculator"} />

        {/* FAQ box */}
        <InfoBox
          type={"faq"}
          contents={[
            [
              "What is Step up SIP?",
              "Step Up SIP (Systematic Investment Plan) is an investment strategy where the investor starts with a small investment amount and gradually increases the amount over time. Under this strategy, the investment amount is increased periodically, usually on an annual basis, by a fixed percentage or a pre-decided amount. The idea behind a Step Up SIP is to enable investors to start with a small investment and gradually increase the amount as their income grows over time. This strategy helps investors to make the most of their investments by putting in more money during the years when their income is higher and reducing the investment amount during years when their income is lower.",
            ],

            [
              "What are the advantages of step up SIP over normal SIP?",

              <UnorderedList
                key="bulletins"
                content={[
                  "Increased savings: With Step Up SIP, investors can start with a lower investment amount and gradually increase it over time. This helps them to save more money, especially during the years when their income is higher.",
                  "Flexibility: Step Up SIP allows investors to adjust their investment amount according to their financial situation. This flexibility makes it easier for investors to manage their investments and avoid financial strain.",
                  "Power of compounding: As the investment amount increases over time, the power of compounding comes into play, resulting in higher returns over the long term.",
                  "Better long-term returns: By investing more during the years when the income is higher, investors can potentially earn better long-term returns.",
                  "Achieve long-term goals: Step Up SIP can help investors achieve their long-term financial goals by enabling them to invest more when they have the ability to do so.",
                ]}
              />,
            ],
            [
              "How to use Step up SIP calculator?",
              "FundsIndia Step up SIP calculator is an intuitive tool that calculates your investment returns via Step up SIP easily. Just plug in the required fields and the calculator will output the value of your returns.",
            ],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            // ["Mutual Funds Calculator", "/step-up-sip-calculator"],//sameLink
            // ["ELSS Calculator", "/step-up-sip-calculator"],//sameLink
            // ["Compound Interest Calculator", "/compound-interest-calculator"],
            ["Simple Interest Calculator", "/simple-interest-calculator"],
          ]}
        />
      </main>
    </>
  );
}
