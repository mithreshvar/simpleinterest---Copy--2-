/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useEffect, useState } from "react";
//import { PageSEO } from '@/components/SEO';

import Heading from "../Components/Cagr/Heading.js";
import Subheading from "../Components/Cagr/Subheading.js";
import CalculatorAndSidePannel from "../Components/Cagr/CalculatorAndSidePannel.js";
import CalculatorWrapper from "../Components/Cagr/CalculatorWrapper.js";
import Calculator from "../Components/Cagr/Calculator.js";
import InputBoxWrapper from "../Components/Cagr/InputBoxWrapper.js";
import InputSlider from '../Components/Cagr/InputSlider.js';

import ChartFooterElement from "../Components/Cagr/ChartFooterElement.js";
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";
import Dropdown from "../Components/Cagr/Dropdown.js";
import style from '../styles/cagrInput.module.scss';


export default function Home() {

  let minAmount = 1000;
  let maxAmount = 5000;
  let stepAmount = 1000;
  let minAge = 18;
  let maxAge = 39;

  const [age, setAge] = useState(18);

  const [pensionAmount, setPensionAmount] = useState(1000);

  const [year, setYear] = useState("Half-Yearly");
  const [yearString, setYearString] = useState("Half-Yearly");

  const [Investment, setInvestment] = useState(248);
  const [Duration, setDuration] = useState(42);
  const [TotalAmount, setTotalAmount] = useState(20832);


  function calculate() {
    if (pensionAmount >= minAmount && age >= minAge) {
      setDuration(60 - age);
      setYearString(year);
      let time = 60 - age;
      if (year == "Monthly") {
        let monthly = [
          [42, 84, 126, 168, 210],
          [46, 92, 138, 183, 228],
          [50, 100, 150, 198, 248],
          [54, 108, 162, 215, 269],
          [59, 117, 177, 234, 292],
          [64, 127, 192, 254, 318],
          [70, 139, 208, 277, 346],
          [76, 151, 226, 301, 376],
          [82, 164, 246, 327, 409],
          [90, 178, 268, 356, 446],
          [97, 194, 292, 388, 485],
          [106, 212, 318, 423, 529],
          [116, 231, 347, 462, 577],
          [126, 252, 379, 504, 630],
          [138, 276, 414, 551, 689],
          [151, 302, 453, 602, 752],
          [165, 330, 495, 659, 824],
          [181, 362, 543, 722, 902],
          [198, 396, 594, 792, 990],
          [218, 436, 654, 870, 1087],
          [240, 480, 720, 957, 1196],
          [264, 528, 792, 1054, 1318]
        ];
        let row = age - 18, col = (pensionAmount / 1000) - 1;
        let answer = monthly[row][col];
        setInvestment(answer);
        setTotalAmount(12 * answer * time);

      }
      else if (year == "Quarterly") {
        let quarterly = [
          [125, 250, 376, 501, 626],
          [137, 274, 411, 545, 679],
          [149, 298, 447, 590, 739],
          [161, 322, 483, 641, 802],
          [176, 349, 527, 697, 870],
          [191, 378, 572, 757, 948],
          [209, 414, 620, 826, 1031],
          [226, 450, 674, 897, 1121],
          [244, 489, 733, 975, 1219],
          [268, 530, 799, 1061, 1329],
          [289, 578, 870, 1156, 1445],
          [316, 632, 948, 1261, 1577],
          [346, 688, 1034, 1377, 1720],
          [376, 751, 1129, 1502, 1878],
          [411, 823, 1234, 1642, 2053],
          [450, 900, 1350, 1794, 2241],
          [492, 983, 1475, 1964, 2456],
          [539, 1079, 1618, 2152, 2688],
          [590, 1180, 1770, 2360, 2950],
          [650, 1299, 1949, 2593, 3239],
          [715, 1430, 2146, 2852, 3564],
          [787, 1574, 2360, 3141, 3928]
        ];

        let row = age - 18, col = (pensionAmount / 1000) - 1;
        let answer = quarterly[row][col];
        setInvestment(answer);
        setTotalAmount(3 * answer * time);

      }
      else {
        let halfly = [
          [248, 496, 744, 991, 1239],
          [271, 543, 814, 1080, 1346],
          [295, 590, 885, 1169, 1464],
          [319, 637, 956, 1269, 1588],
          [348, 690, 1046, 1381, 1723],
          [378, 749, 1133, 1499, 1877],
          [413, 820, 1228, 1635, 2042],
          [449, 891, 1334, 1776, 2219],
          [484, 968, 1452, 1930, 2414],
          [531, 1050, 1582, 2101, 2632],
          [572, 1145, 1723, 2290, 2862],
          [626, 1251, 1877, 2496, 3122],
          [685, 1363, 2048, 2727, 3405],
          [744, 1487, 2237, 2974, 3718],
          [814, 1629, 2443, 3252, 4066],
          [891, 1782, 2673, 3553, 4438],
          [974, 1948, 2921, 3889, 4863],
          [1068, 2136, 3205, 4261, 5323],
          [1169, 2337, 3506, 4674, 5843],
          [1287, 2573, 3860, 5134, 6415],
          [1416, 2833, 4249, 5648, 7058],
          [1558, 3116, 4674, 6220, 7778]
        ];
        let row = age - 18, col = (pensionAmount / 1000) - 1;
        if (pensionAmount < 1000) setInvestment(0);
        else {
          let answer = halfly[row][col];
          setInvestment(answer);
          setTotalAmount(2 * answer * time);
        }
      }
    }
  }

  return (
    <div className='app-bg-contanier overflow-hidden'>
      {/* <PageSEO title={'Atal Pension Yojana (APY) Calculator Online - FundsIndia'}
      description={"Atal Pension Yojana (APY) Calculator is an online tool that enables you to calculate the actual interest earned on an investment in the APY pension Scheme."} /> */}
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
        <div >
          {/* Heading */}
          <Heading blue={"APY"} />
          {/* Subheading */}
          <Subheading>
            The Atal Pension Yojana (APY) is a pension scheme launched by the Indian government in 2015. It is a voluntary, contributory pension scheme aimed at providing a guaranteed pension to individuals in the unorganized sector, such as self-employed individuals, small business owners, and agricultural workers, who do not have access to a formal pension system.
          </Subheading>

        </div>


        <CalculatorAndSidePannel>
          {/* Calculator and graph (WRAPPER) */}
          <CalculatorWrapper>
            {/* Calculator */}
            <Calculator calculate={calculate}>
              {/* Input box wrapper */}
              <InputBoxWrapper>

                {/* Input box */}

                <Dropdown
                  heading={"Payment Frequency"}
                  options={["Monthly", "Quarterly", "Half-Yearly"]}
                  value={year}
                  setValue={setYear}
                />

                <div>
                  {/* {/age block/} */}
                  <div>Desired Monthly Pension</div>
                  <InputSlider
                    type="rupees"
                    min={minAmount}
                    max={maxAmount}
                    step={stepAmount}
                    value={pensionAmount}
                    setValue={setPensionAmount}
                  />
                </div>

                <div>
                  {/* {/age block/} */}
                  <div >Joining age (Years)</div>
                  <InputSlider
                    type="years"
                    min={minAge}
                    max={maxAge}
                    value={age}
                    setValue={setAge}
                  />
                </div>
              </InputBoxWrapper>
            </Calculator>

            {/* Output Container */}

            <div className={"lg:w-[50%] self-center [@media(min-width:1920px)]:font-medium  "}>

              <ChartFooterElement
                label={yearString + " Investment"}
                value={'\u20B9 ' +Investment.toLocaleString("en-In")}
              />

              <ChartFooterElement
                label={"Investment Duration"}
                value={Duration.toLocaleString("en-In") + " Years"}
              />

              <ChartFooterElement
                label={"Total Amount"}
                value={'\u20B9 ' +TotalAmount.toLocaleString("en-In")}
                last={true}
              />

            </div>

          </CalculatorWrapper>


          {/* Side Pannel */}
          <div className="xl:max-h-[361.2px] [@media(min-width:1920px)]:max-h-[375.2px] xl:w-[23%] ">
            <InfoBox
              type="sidePannel"
              contents={[
                ["Atal Pension Yojna", "Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015"],
                ["Find out how much I can earn with APY", "APY provides an assured pension of your choice from 1000,2000,3000,4000 or 5000 rupees. You can use the FundsIndia APY calculator to find out how much you can earn."],
                ["Maturity", "APY matures when the depositor attains the age of 60."],
                ["Premature withdrawal implications",
                  <div key=''>
                    <div className="mb-2"> There are two options.</div>
                    <div className="mb-2">a) Exit due to specified illness – Exit before 60 years of age may be permitted only in exceptional circumstances such as due to specified illness of the Subscriber and the accumulated corpus (Subscriber contribution, Government Contribution and the returns thereon) in the Subscriber&#39;s account will be returned to the Subscriber.
                    </div>
                    <div>b) Voluntary exit - In case a Subscriber chooses to voluntarily exit from APY before attaining 60 years of age, he/she will be refunded only the contributions made by him/her to APY alongwith the returns thereon</div>
                  </div>
                ],
              ]}
            />
          </div>
        </CalculatorAndSidePannel>

        {/* FAQ box */}
        <InfoBox
          type="faq"
          contents={[
            ["What is APY?", "Atal Pension Yojana (APY) is a government-backed pension scheme in India launched in 2015. It aims to provide a regular and guaranteed pension to workers in the unorganized sector who do not have access to any formal retirement scheme. Under the scheme, subscribers can receive a fixed pension amount per month, depending on their contribution amount and age at the time of joining."],
            ["Why should I calculate my APY returns?", "Calculating the Atal Pension Yojana (APY) can help you understand the amount of pension you may receive under the scheme, based on your contribution and age. By calculating your APY, you can determine the amount you need to contribute regularly to receive the desired pension amount. This can help you plan your finances better and ensure that you have a regular stream of income during your retirement."],
            ["How to use FundsIndia APY Calculator?", "FundsIndia APY Calculator does not require any technical knowledge to operate. Just plug in your desired monthly pension and your joining age. The calculator then displays how much you have to contribute, tenure and your total corpus at end of maturity."],
            ["When does APY mature?", "APY matures when the depositor attains the age of 60."],
            ["Can we choose our preferred amount of pension? ", "Under the scheme, subscribers can receive a fixed minimum pension of Rs. 1000, Rs. 2000, Rs. 3000, Rs. 4000, or Rs. 5000 per month, depending on their contribution amount and age at the time of joining."],
            ["Who can open an APY account?", "An Atal Pension Yojana (APY) account can be opened by any Indian citizen between the ages of 18 and 40 years. The subscriber should have a valid mobile number and savings bank account, which will be linked to the APY account for making contributions and receiving the pension."],
          ]}
        />

        {/* Related Calculators */}
        <RelatedCalculators
          contents={[
            ["EPF Calculator", "/epf-calculator"],
            //["PPF Calculator", "/apy-calculator"],//same page
            //["NPS Calculator", "/apy-calculator"],//same page
            ["Retirement Calculator", "/retirement-calculator"],
          ]}
        />
      </main>
    </div>
  );
}