/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useState } from "react";
import InputSlider from '../Components/Cagr/InputSlider.js';
import InfoBox from "../Components/Cagr/InfoBox.js";
import RelatedCalculators from "../Components/Cagr/RelatedCalculators.js";

import { VscCircleFilled } from "react-icons/vsc";
import ControlBox from "../Components/Cagr/ControlBox.js";


export default function Home() {

    const [basicSalary, setBasicSalary] = useState(10000);
    const [dearnessAllowance, setDearnessAllowance] = useState(70000);
    const [hraReceived, setHraReceived] = useState(10000);
    const [totalRent, setTotalRent] = useState(10000);

    const [exempted, setExempted] = useState(2000);
    const [taxable, setTaxable] = useState(8000);
    const [isMetro, setIsMetro] = useState(true);

    function calculate() {

        let a = (totalRent - (basicSalary + dearnessAllowance) * 0.1);
        let rate = isMetro ? 0.4 : 0.5;
        let b = (basicSalary + dearnessAllowance) * rate;
        let c = hraReceived;
        if (a < b && a < c) {
            setExempted(a);
            setTaxable(c - a);
        }
        else if (b < c && b < a) {
            setExempted(b);
            setTaxable(c - b);
        }
        else if (c < a && c < b) {
            setExempted(c);
            setTaxable(c - c);
        }
    }

    function handleClick(event) {
        setIsMetro(event.target.checked);
    }


    return (
        <div className="app-bg-container overflow-hidden">
            <Head>
                <title>HRA calculator</title>
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
                <meta name="description" content="HRA Calculator" />
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
                    "relative [@media(max-width:470px)]:px-[15px] [@media(max-width:1280px)]:px-[40px] xl:px-[80px] py-[50px] w-full overflow-x-hidden flex-col justify-between text-[#464143] font-['poppins'] leading-[20px] [@media(min-width:1920px)]:leading-[22px] "
                }
            >
                <div>
                    {/* Heading */}
                    <div
                        className={
                            "text-[#000000] text-[40px] mt-[50px] font-semibold text-center leading-tight  [@media(max-width:500px)]:text-[26px] [@media(max-width:1366px)]:text-[36px]  [@media(min-width:1920px)]:text-[60px] "
                        }>
                        <span className={"text-[#0161FF]"}>Housing Rent Allowance</span>{" "}Calculator
                    </div>
                    {/* Subheading */}
                    <p className={"text-[#464143] mt-[10px] text-center  [@media(max-width:300px)]:text-sm text-[14px] [@media(min-width:1920px)]:text-[18px] font-normal"}>
                        Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India. It is an allowance paid by the employer to the employee to cover their rental expenses for a house or apartment.
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
                            "lg:flex max-md:flex-col p-[30px] xl:w-[75%]  max-lg:space-y-7  border-2 border-white rounded-[30px] shadow-md shadow-[#505C6227] bg-white bg-opacity-40 backdrop-blur-[30px] [@media(max-width:400px)]:py-[20px] [@media(max-width:400px)]:px-[15px] "}
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
                                        {/*Basic Salary block*/}
                                        <div >Basic salary(p.a)</div>
                                        <InputSlider
                                            type="rupees"
                                            min={1000}
                                            max={1000000}
                                            step={1000}
                                            value={basicSalary}
                                            setValue={setBasicSalary}
                                        />
                                    </div>

                                    <div className=" mb-3">
                                        {/*Dearness Allowance block*/}
                                        <div >Dearness Allowance(p.a)</div>
                                        <InputSlider
                                            type="rupees"
                                            min={0}
                                            max={1000000}
                                            step={1000}
                                            value={dearnessAllowance}
                                            setValue={setDearnessAllowance}
                                        />
                                    </div>

                                    <div className=" mb-3">
                                        {/*Hra Received block*/}
                                        <div >HRA Received(p.a)</div>
                                        <InputSlider
                                            type="rupees"
                                            min={1000}
                                            max={1000000}
                                            step={1000}
                                            value={hraReceived}
                                            setValue={setHraReceived}
                                        />
                                    </div>

                                    <div className=" mb-3">
                                        {/*Total Rent paid  block*/}
                                        <div >Total Rent Paid(p.a)</div>
                                        <InputSlider
                                            type="rupees"
                                            min={1000}
                                            max={1000000}
                                            step={1000}
                                            value={totalRent}
                                            setValue={setTotalRent}
                                        />
                                    </div>

                                    <div className=" flex flex-row  mt-5">
                                        {/*Metro city Yes or No block*/}
                                        <div className=" text-[14px] w-[80%]">Are you working in a metro city?</div>

                                        <div className=" flex-row flex w-[40%] ml-4  ">
                                            <span className="text-[14px]">Yes</span>
                                            <div className=" mx-2">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input type="checkbox" className="sr-only peer" onChange={handleClick} />
                                                    <div className="w-[3rem] h-7 bg-[#0f0f0f27] rounded-full dark:top-[2px] border-[2px] shadow-xl border-solid dark:bg-[#4f4c4c27] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-blue-600  after:border-[2px] after:border-solid after:border-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all dark:border-white "></div>
                                                </label>
                                            </div>
                                            <span className="text-[14px] ">No</span>
                                        </div>
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

                            <div className={"flex flex-col items-center text-[#1B1C20]"}>

                                <div className={" font-semibold text-[36px] mt-4"}>
                                    {exempted.toLocaleString('en-In')}
                                </div>
                                <div className={"font-medium text-[14px] leading-[55px]"}>
                                    Exempted HRA
                                </div>

                            </div>

                            <div className={"flex flex-col font-bold my-4 items-center text-[#1B1C20]"}>
                                <div className=" font-semibold text-[36px]">
                                    {taxable.toLocaleString('en-In')}
                                </div>
                                <div className={"font-medium  text-[14px] leading-[55px]"}>
                                    Taxable HRA
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Side Pannel */}
                    <div className="xl:max-h-[504.4px] [@media(min-width:1920px)]:max-h-[512.8px]  xl:w-[23%] ">
                        <InfoBox
                            type="sidePannel"
                            contents={[
                                ["Housing Rent Allowance", "Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India."],
                                ["Find out how much tax I owe based on my HRA",
                                    "You can use the FundsIndia HRA calculator to calculate the taxable value."],
                                ["Find out how much I can save with HRA", "You can make use of the FundsIndia calculator to find out how much you can save from taxes with this deduction.                  "],
                                ["How to calculate HRA",
                                    <div key=''>
                                        <div>The exempt HRA amount is the minimum of the following three:
                                        </div>
                                        <div>a. Actual HRA received from the employer</div>
                                        <div>b. Rent paid minus 10% of the basic salary</div>
                                        <div>c. 50% of the basic salary if the employee resides in a Tier-1 city, or 40% of the basic salary if the employee resides in a Tier-2/Tier-3 city.</div>
                                    </div>],
                            ]}
                        />
                    </div>
                </div>

                {/* FAQ box */}
                <InfoBox
                    type="faq"
                    contents={[
                        ["What is HRA?",
                            <>
                                <div>Housing Rent Allowance (HRA) is a common component of the salary package provided to employees in India. It is an allowance paid by the employer to the employee to cover their rental expenses for a house or apartment.</div>

                            </>
                        ],
                        ["Why should I calculate my HRA exemption?",
                            <>
                                <div>By calculating the HRA exemption, you can reduce your taxable income and consequently, the amount of income tax you are required to pay. This can help you save money and manage your finances better.</div>
                                <br />
                                <div>It&#39;s also important to calculate HRA to ensure that you are claiming the correct amount of exemption, and not over or under claiming. Over claiming can result in a penalty and under claiming can lead to unnecessary tax liability.</div>

                            </>],
                        ["How does the HRA calculator work?",
                            <>
                                <div>It uses the following logic</div>
                                <br />
                                <div className="flex flex-row">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    Calculate the exempt HRA amount: The exempt HRA amount is the minimum of the following three:
                                </div>
                                <br />
                                <div className=" ml-4">
                                    <div >a. Actual HRA received from the employer</div>
                                    <br />
                                    <div >b. Rent paid minus 10% of the basic salary</div>
                                    <br />
                                    <div >c. 50% of the basic salary if the employee resides in a Tier-1 city, or 40% of the basic salary if the employee resides in a Tier-2/Tier-3 city.</div>
                                </div>
                                <br />
                                <div className="flex flex-row ">
                                    <VscCircleFilled className="  text-[#00DD6F] mt-[2px] mr-[2px] relative flex-shrink-0 " />
                                    The remaining amount is taxable: The remaining HRA amount, which is not exempt, is added to the employee’s income and is subject to tax.</div>

                            </>
                        ],
                        ["How to use HRA calculator?",
                            <>
                                <div>FundsIndia HRA calculator is an intuitive tool that calculates the HRA easily. Just plug in the basic salary, dearness allowance, HRA received and rent paid. The calculator will give you the exempted amount and taxable amount.</div>

                            </>
                        ]
                    ]}
                />



                {/* Related Calculators */}
                <RelatedCalculators
                    contents={[
                        // ["Income Tax Calculator", "/hra-calculator"],//same link
                        ["EPF Calculator", "/epf-calculator"],
                        // ["PPF Calculator", "/hra-calculator"],//same link
                        // ["SWP Calculator", "/hra-calculator"],//same link
                    ]}
                />
            </main >
        </div >
    );
}