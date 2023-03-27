/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
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
import InfoBox from "../Components/Cagr/InfoBox.js";
import Dropdown from "../Components/Cagr/Dropdown.js";
import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import InputDisabled from "../Components/Cagr/InputDisabled.js";
import Table from "../Components/Cagr/Table.js";
import Advertisement from "../Components/Cagr/Advertisement.js";

import DoughnutChart from "../Components/Cagr/DoughnutChartNsc.js";
import InputSlider from "../Components/Cagr/InputSlider.js";
import UnorderedList from "../Components/Cagr/UnorderedList.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import style from '../styles/cagrInput.module.scss';

export default function Home() {
  const [totalInvestment, setTotalInvestment] = useState(2500000);
  const [compoundingFrequency, setCompoundingFrequency] = useState("Yearly");

  const minTotalInvestment = 1000;
  const maxTotalInvestment = 10000000;
  const stepTotalInvestment = 1000;

  const [invested, setInvested] = useState(2500000);
  const [totalInterest, setTotalInterest] = useState(1006379);
  const [totalAmount, setTotalAmount] = useState(3506379);

  let principle = 2500000;

  let annualIntrestRate = 7;
  let tempCompoundingFrequency = 2;
  let timePeriod = 5;

  function calculate() {
    if (totalInvestment >= minTotalInvestment) {
      tempCompoundingFrequency = compoundingFrequency === "Yearly" ? 1 : 2;
      principle = totalInvestment;

      let maturity = Math.round(
        principle *
        Math.pow(
          1 + annualIntrestRate / (100 * tempCompoundingFrequency),
          timePeriod * tempCompoundingFrequency
        )
      );

      setInvested(principle);
      setTotalAmount(maturity);
      setTotalInterest(maturity - principle);
    }
  }

  return (
    <div className={"app—bg—container overflow—hidden"}>
      {/* <PageSEO title={'National Savings Certificate (NSC) Calculator Online - FundsIndia'}
            description={"NSC Investment Calculator - Use FundsIndia NSC calculator to calculate the maturity amount and interest earned for your NSC investment."} /> */}
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
          <Heading blue={"National Savings Certificate"} />

          {/* Subheading */}
          <Subheading>
            National Savings Certificate (NSC) is a savings scheme offered by
            the Government of India that is aimed at encouraging small savings
            among Indian citizens. NSC is a fixed income investment that offers
            a guaranteed return on investment.
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
                    min={minTotalInvestment}
                    max={maxTotalInvestment}
                    step={stepTotalInvestment}
                    value={totalInvestment}
                    setValue={setTotalInvestment}
                  />
                </div>

                <InputDisabled heading={"Current interest rate"} value={"7%"} />
                <InputDisabled heading={"Time Period (Yrs)"} value={"5 Yrs"} />

                <Dropdown
                  heading={"Compounding Frequency"}
                  options={["Half-Yearly", "Yearly"]}
                  value={compoundingFrequency}
                  setValue={setCompoundingFrequency}
                />
              </InputBoxWrapper>
            </Calculator>

            {/* Charts/Graph wrapper */}
            <div className={"lg:w-[50%]"}>
              {/* Charts/Graph */}
              <div className={" relative object-right-top"}>
                <DoughnutChart
                  invested={invested}
                  totalInterest={totalInterest}
                  dependency={totalAmount}
                />
              </div>

              {/* Output box */}
              <div className={"flex-col "}>
                {/*CARG output*/}
                <ChartFooterElement
                  id={"invested"}
                  label={"Invested"}
                  value={<><span className="font-['Rubik']">{'\u20B9 '}</span>{invested.toLocaleString("en-In")}</>}
                />

                <ChartFooterElement
                  id={"totalInterest"}
                  label={"Total Interest"}
                  value={<><span className="font-['Rubik']">{'\u20B9 '}</span>{totalInterest.toLocaleString("en-In")}</>}
                />

                <ChartFooterElement
                  id={"totalAmount"}
                  label={"Total Amount"}
                  value={<><span className="font-['Rubik']">{'\u20B9 '}</span>{totalAmount.toLocaleString("en-In")}</>}
                  last={true}
                />
              </div>
            </div>
          </CalculatorWrapper>

          {/* Side Pannel */}
          <div className="xl:max-h-[401.2px] [@media(min-width:1920px)]:max-h-[407.2px] xl:w-[23%] ">
            <InfoBox
              type={"sidePannel"}
              contents={[
                [
                  "National Savings Certificate",
                  "National Savings Certificate (NSC) is a savings scheme offered by the Government of India that is aimed at encouraging small savings among Indian citizens.",
                ],
                [
                  "Maturity",
                  "NSC VIII issues mature at the completion of 5th year of deposit.",
                ],
                [
                  "Lock-in period of NSC",
                  "NSC cannot be withdrawn before maturity. Only in case of death of the account holder, withdrawal is allowed.",
                ],
                [
                  "Interest rates",
                  <Table
                    heading={["Date Range", "Interest Rate (% per annum)"]}
                    content={[
                      ["01-Jan-2023 to 31-Mar-2023", "7.0%"],
                      ["01-Oct-2022 to 31-Dec-2022", "6.8%"],
                      ["01-Jul-2022 to 30-Sep-2022", "6.8%"],
                      ["01-Apr-2022 to 30-Jun-2022", "6.8%"],
                      ["01-Jan-2022 to 31-Mar-2022", "6.8%"],
                      ["01-Oct-2021 to 31-Dec-2021", "6.8%"],
                      ["01-Jul-2021 to 30-Sep-2021", "6.8%"],
                      ["01-Apr-2021 to 30-Jun-2021", "6.8%"],
                      ["01-Jan-2021 to 31-Mar-2021", "6.8%"],
                      ["01-Oct-2020 to 31-Dec-2020", "6.8%"],
                      ["01-Jul-2020 to 30-Sep-2020", "6.8%"],
                      ["01-Apr-2020 to 30-Sep-2020", "6.8%"],
                      ["01-Oct-2019 to 31-Mar-2020", "7.9%"],
                      ["01-Jul-2019 to 30-Sep-2019", "7.9%"],
                      ["01-Jan-2019 to 30-Jun-2019", "8.0%"],
                      ["01-Oct-2018 to 31-Dec-2018", "8.0%"],
                      ["01-Jan-2018 to 30-Sep-2018", "7.6%"],
                      ["01-Jul-2017 to 31-Dec-2017", "7.8%"],
                      ["01-Apr-2017 to 30-Jun-2017", "7.9%"],
                      ["01-Oct-2016 to 31-Mar-2017", "8.0%"],
                      ["01-Apr-2016 to 30-Sep-2016", "8.1%"],
                      ["01-Apr-2013 to 31-Mar-2016", "8.5%"],
                    ]}
                  />,
                ],
                [
                  "Tax implications",
                  "NSC qualifies for tax benefits under Section 80C.The interest earned on NSC investments is taxable.Refer FAQs for more information.",
                ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        <Advertisement heading={"Book Your Deposit Today!"} content={"Attractive interest rates | Automatic renewal option | Flexible placements and renewals"} path={"/nsc-calculator"} />
        {/* FAQ box */}
        <InfoBox
          type={"faq"}
          contents={[
            [
              "What is NSC?",
              "National Savings Certificate (NSC) is a savings scheme offered by the Government of India that is aimed at encouraging small savings among Indian citizens. NSC is a fixed income investment that offers a guaranteed return on investment.",
            ],
            [
              "When does the investment mature?",
              "NSC VIII issues mature at the completion of 5th year of deposit.",
            ],
            [
              "How does the NSC calculator work?",
              <>
                <div className=" space-y-2">
                  <div>It uses the following logic</div>
                  <div className="font-semibold space-y-2">
                    <div>A = P * (1 + (r / (100 * f))) ^ (n * f)</div>
                    <div>
                      <div>Where:</div>
                      <div>A = Maturity Value</div>
                      <div>P = Principal Amount or Total Investment</div>
                      <div>r = Annual Interest Rate</div>
                      <div>n = Time Period in Years</div>
                      <div>f = Compounding Frequency per year</div>
                    </div>

                    <div>
                      <div>The interest earned can be calculated as:</div>
                      <div>I = A - P</div>
                    </div>
                  </div>
                </div>
              </>,
            ],
            [
              "Why should I use FundsIndia NSC Calculator?",
              "FundsIndia NSC Calculator is an intuitive and easy to use application that can save the time of manually calculating NSC returns which is a fairly complicated calculation. It can visualise the interest with principal amount in an easily understandable manner. FI NSC calculator is always up to date on interest rates so you can get accurate results.",
            ],
            [
              "What are the tax implications of NSC?",
              <UnorderedList
                content={[
                  "Tax benefits: NSC qualifies for tax benefits under Section 80C of the Income Tax Act, 1961. The investment made in NSC up to Rs.1.5 lakh in a financial year is eligible for tax deduction under Section 80C.",
                  "Interest income: The interest earned on NSC investments is taxable. However, it is not paid out annually but instead gets reinvested along with the principal amount, which qualifies for further tax deduction under Section 80C.",
                  "Taxation at maturity: At the time of maturity, the interest earned on NSC investments is added to the principal amount and the total amount is paid out. This payout amount is taxable in the year of maturity. The tax on the NSC investment is calculated as per the individual's tax slab rate.",
                  "TDS: TDS or tax deducted at source is not applicable for NSC investments.",
                ]}
              />,
            ],
            [
              "Is NSC safe?",
              "NSC is issued by the Government of India and is a part of its small savings schemes. It is backed by the sovereign guarantee, which means that the investment made in NSC is secure and safe. NSC investments have a maturity period of 5 years and come with no market risk, making it a low-risk investment option. The investment in NSC also qualifies for tax deduction under Section 80C of the Income Tax Act, 1961.",
            ],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["RD Calculator", "/rd-calculator"],
            ["FD Calculator", "/fd-calculator"],
            // ["NPS Calculator", "/nsc-calculator"],//same link
            ["Retirement Calculator", "/retirement-calculator"],

          ]}
        />
      </main>
    </div>
  );
}
