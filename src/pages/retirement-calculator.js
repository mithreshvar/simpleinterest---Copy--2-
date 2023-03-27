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
import Advertisement from "../Components/Cagr/Advertisement.js";

import UnorderedList from "../Components/Cagr/UnorderedList.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";

export default function Home() {
  const [monthlyExpenditure, setMonthlyExpenditure] = useState(70000);
  const [age, setAge] = useState(30);
  const [postRetirement, setPostRetirement] = useState(8);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const [totalAmount, setTotalAmount] = useState("11,42,42,585");
  const [monthlySavings, setMonthlySavings] = useState("32,688");

  function calculate() {
    let cme = monthlyExpenditure; //Current monthly expenses
    let ca = age; //Current age
    let ra = 60; //Retirement age
    let lf = 80; //Expected life span
    //let ei = 0; //Existing investments
    let inf = 7; //Expected inflation
    let prr = postRetirement; //Post-retirement investment return
    let erc = expectedReturn; //Expected return

    let monthly_inflation = (Math.pow(1 + inf / 100, 1 / 12) - 1) * 100;
    let monthly_prr1 = (Math.pow(1 + ((prr / 100) * 3) / 12, 4) - 1) * 100;
    let monthly_prr = (Math.pow(1 + monthly_prr1 / 100, 1 / 12) - 1) * 100;

    let period_monthly_income_needed = lf - ra;
    let monthly_req_first_year_after_retirement =
      cme * Math.pow(1 + inf / 100, ra - ca);

    monthly_prr = monthly_prr / 100;
    monthly_inflation = monthly_inflation / 100;

    let a =
      (monthly_req_first_year_after_retirement * (1 + monthly_prr)) /
      (monthly_prr - monthly_inflation);

    let no_of_months = period_monthly_income_needed * 12;

    let b =
      1 - Math.pow((1 + monthly_inflation) / (1 + monthly_prr), no_of_months);

    let total_amount = a * b;
    total_amount = parseFloat(total_amount.toFixed(2));

    let period_create_retire_corpus = ra - ca;
    // let future_value_existing_invest = Math.round(
    //   ei * Math.pow(1 + erc / 100, period_create_retire_corpus)
    // );
    // let corpus_needs_build = parseFloat(
    //   (total_amount - future_value_existing_invest).toFixed(2)
    // );
    let monthly_savings = Math.round(
      (total_amount * (erc / 100)) /
      12 /
      (Math.pow(1 + erc / 100 / 12, period_create_retire_corpus * 12) - 1)
    );

    setTotalAmount(Math.round(total_amount).toLocaleString("en-In"));
    setMonthlySavings(monthly_savings.toLocaleString("en-In"));
  }

  return (
    <>
      <Head>
        <title>Retirement calculator</title>
        <link
          rel="icon"
          href="https://www.fundsindia.com/static/favicons/favicon.ico"
        />
        <link href="/dist/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          as="font"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&amp&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./*+-%(){}:[]?%27%22%2C|;display=swap"
        />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Retirement Calculator" />
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
          <Heading blue={"Retirement"} />

          {/* Subheading */}
          <Subheading>
            Saving for retirement is important because it provides financial
            security, helps you keep up with inflation, prepares you for a
            longer retirement and allows you to achieve your retirement goals.
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
                  {/*Age block*/}
                  <div>How old are you?</div>
                  <InputSlider
                    id="age"
                    min={18}
                    max={59}
                    value={age}
                    setValue={setAge}
                  />
                </div>

                <div>
                  {/*monthlyExpenditure block*/}
                  <div>How much do you spend per month</div>
                  <InputSlider
                    id="monthlyExpenditure"
                    type="rupees"
                    min={20000}
                    max={1000000}
                    step={1000}
                    value={monthlyExpenditure}
                    setValue={setMonthlyExpenditure}
                  />
                </div>

                <div>
                  {/*Post-retirement block*/}
                  <div>Post-retirement investment return</div>
                  <InputSlider
                    id="postRetirement"
                    type="percentage"
                    min={8}
                    max={15}
                    step={0.5}
                    value={postRetirement}
                    setValue={setPostRetirement}
                  />
                </div>

                <div>
                  {/*Expected return block*/}
                  <div>Expected return on investment</div>
                  <InputSlider
                    id="expectedReturn"
                    type="percentage"
                    min={8}
                    max={15}
                    step={0.5}
                    value={expectedReturn}
                    setValue={setExpectedReturn}
                  />
                </div>
              </InputBoxWrapper>
            </Calculator>

            {/* Output wrapper */}
            <div
              className={"lg:w-[50%] text-center self-center  space-y-[20px] "}
            >
              <div className="space-y-[10px]">
                <div className={"font-bold text-[36px] leading-[55px] "}>
                  {totalAmount}
                </div>
                <div className="font-semibold leading-[21px] ">
                  Amount required for retirement
                </div>
              </div>
              <div className="space-y-[10px]">
                <div className={"font-bold text-[36px] leading-[55px] "}>
                  {monthlySavings}
                </div>
                <div className="font-semibold leading-[21px] ">
                  Amount you need to save per month to retire
                </div>
              </div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[548.2px]  [@media(min-width:1920px)]:max-h-[557.2px]  xl:w-[23%] ">
            <InfoBox
              type={"sidePannel"}
              contents={[
                [
                  "Retirement Planning",
                  "Retirement planning is very important as it prepares you for a financially secure retirement with a regular income.",
                ],
                [
                  "How much would I need to lead a comfy life?",
                  "You can make use of the FundsIndia Retirement Calculator to find out how much you would need in order to live comfortably after retirement.",
                ],
                // [
                //   "Should I consider anything else other than savings?",
                //   "",
                // ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        <Advertisement heading={"Secure Your Golden Years!"} content={"Plan ahead and secure your financial future with NPS, the smart way to save for your retirement."} path={"/retirement-calculator"} />

        {/* FAQ box */}
        <InfoBox
          type={"faq"}
          contents={[
            [
              "What is Retirement Calculator?",
              "A retirement calculator is a tool that helps you estimate how much money you need to save for retirement based on your age,  savings, and other factors. It takes into account variables such as inflation, investment returns, and life expectancy to help you plan for a financially secure retirement.",
            ],

            [
              "Why should I use this calculator?",
              <>
                <div className="mb-1">
                  FundsIndia Retirement Calculator can help you plan your
                  retirement. This is important because,
                </div>
                <UnorderedList
                  content={[
                    "Financial planning: Knowing your retirement benefits can help you plan your finances for the future. You can determine how much money you need to save to reach your retirement goals and adjust your retirement planning accordingly.",
                    "Maximize benefits: By understanding your retirement benefits, you can take steps to maximize them, such as contributing more to a retirement savings plan or waiting until you are eligible for a higher benefit.",
                    "Avoid surprises: Calculating your retirement benefits can help you avoid surprises and unexpected changes to your retirement income. You can plan for expected expenses and make adjustments to your budget as needed.",
                    "Early retirement: If you are considering early retirement, calculating your retirement benefits can help you determine if you have enough savings to support your lifestyle until you are eligible for full retirement benefits.",
                    "Retirement lifestyle: Understanding your retirement benefits can help you plan your retirement lifestyle, such as where you will live and how you will spend your time.",
                  ]}
                />
              </>,
            ],
            [
              "How to use retirement calculator?",
              "FundsIndia retirement calculator is an intuitive tool that calculates the the amount needed for your retirement  easily. Just plug in the amount you spend monthly, your age, and how do you want your retired lifestyle to be along with how you want to build wealth.  The calculator will give you the amount required for retirement and the amount you need to save per month to afford that retirement lifestyle.",
            ],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["EPF Calculator", "/epf-calculator"],
            // ["PPF Calculator", "/retirement-calculator"], //same link
            // ["NPS Calculator", "/retirement-calculator"], //same link
            ["Gratuity Calculator", "/gratuity-calculator"],
          ]}
        />
      </main>
    </>
  );
}
