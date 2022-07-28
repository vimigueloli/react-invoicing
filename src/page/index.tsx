/* eslint-disable jsx-a11y/img-redundant-alt */
import ImageInput from "components/ImageInput";
import { numberMask } from "components/masks";
import ProductsDescription from "components/ProductsDescription";
import { useEffect, useState } from "react";
import "./App.css";
import * as S from "./GlobalStyles";

export default function App() {
    const logo = require("assets/logo.png");
    const [logoRemoved, setLogoRemoved] = useState(false);
    const [invoiceId, setInvoiceId] = useState(10);
    const [printMode, setPrintMode] = useState(false);
    const [selected, setSelected] = useState(5);
    const [currency, setCurrency] = useState("$");
    const [Image, setImage] = useState<any>(null);
    const [costumerInfo, setCostumerInfo] = useState({
        name: "Mr. John Doe",
        web_link: "John Doe Designs Inc.",
        address1: "1 Infinite Loop",
        address2: "Cupertino, California, US",
        postal: "90210",
    });
    const [companyInfo, setCompanyInfo] = useState({
        name: "Mr. John Doe",
        web_link: "John Doe Designs Inc.",
        address1: "1 Infinite Loop",
        address2: "Cupertino, California, US",
        postal: "90210",
    });

    // ? currency types
    const currencyOptions = [
        {
            name: "British Pound (£)",
            symbol: "£",
        },
        {
            name: "Canadian Dollar ($)",
            symbol: "CAD $ ",
        },
        {
            name: "Euro (€)",
            symbol: "€",
        },
        {
            name: "Indian Rupee (₹)",
            symbol: "₹",
        },
        {
            name: "Norwegian krone (kr)",
            symbol: "kr ",
        },
        {
            name: "US Dollar ($)",
            symbol: "$",
        },
    ];

    return (
        <S.Centered>
            <div className="container" style={{ width: "800px" }} id="invoice">
                <S.Line color="#357EBD" bottom="1em" height="2.2em">
                    <S.Text color="#fff">INVOICE</S.Text>
                </S.Line>
                <S.Line
                    justify="space-between"
                    align="flex-start"
                    left="1em"
                    right="1em"
                    bottom="2em"
                >
                    <S.Text weight="bold" color="#313233">
                        <label>Invoice #</label>
                        <S.Input
                            weight="bold"
                            type="text"
                            value={invoiceId}
                            onChange={(e) =>
                                setInvoiceId(Number(numberMask(e.target.value)))
                            }
                        />
                    </S.Text>
                    <div className="col-xs-6 logo-container">
                        <S.Input type="file" id="imgInp" />
                        {!logoRemoved && (
                            <img
                                id="company_logo"
                                alt="your image"
                                width="300"
                                src={
                                    Image !== null
                                        ? URL.createObjectURL(Image)
                                        : logo
                                }
                            />
                        )}
                        <S.Line justify="flex-end">
                            {!printMode && (
                                <>
                                    <S.ClickableText
                                        ng-click="editLogo()"
                                        right="4px"
                                    >
                                        <ImageInput setPicture={setImage}>
                                            Eedit Logo
                                        </ImageInput>
                                    </S.ClickableText>
                                    <S.ClickableText
                                        onClick={() =>
                                            setLogoRemoved(!logoRemoved)
                                        }
                                        id="remove_logo"
                                    >
                                        {logoRemoved ? "Show" : "Hide"} logo
                                    </S.ClickableText>
                                </>
                            )}
                        </S.Line>
                    </div>
                </S.Line>
                <S.Separator />
                <S.Line
                    justify="space-between"
                    top="2px"
                    align="flex-start"
                    bottom="2px"
                    left="1em"
                    right="1em"
                    //  "row infos"
                >
                    <div>
                        {
                            // * client info
                            <>
                                <S.Line align="start" top="2px" bottom="2px">
                                    <S.Input
                                        width="300px"
                                        type="text"
                                        value={costumerInfo.name}
                                        onChange={(e) => {
                                            setCostumerInfo({
                                                ...costumerInfo,
                                                name: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="start" top="2px" bottom="2px">
                                    <S.Input
                                        width="300px"
                                        type="text"
                                        value={costumerInfo.web_link}
                                        onChange={(e) => {
                                            setCostumerInfo({
                                                ...costumerInfo,
                                                web_link: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="start" top="2px" bottom="2px">
                                    <S.Input
                                        width="300px"
                                        type="text"
                                        ng-model="invoice.customer_info.address1"
                                        value={costumerInfo.address1}
                                        onChange={(e) => {
                                            setCostumerInfo({
                                                ...costumerInfo,
                                                address1: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="start" top="2px" bottom="2px">
                                    <S.Input
                                        width="300px"
                                        type="text"
                                        value={costumerInfo.address2}
                                        onChange={(e) => {
                                            setCostumerInfo({
                                                ...costumerInfo,
                                                address2: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="start" top="2px" bottom="2px">
                                    <S.Input
                                        width="300px"
                                        type="text"
                                        ng-model="invoice.customer_info.postal"
                                        value={costumerInfo.postal}
                                        onChange={(e) => {
                                            setCostumerInfo({
                                                ...costumerInfo,
                                                postal: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                            </>
                        }
                    </div>
                    <div>
                        {
                            // * store info
                            <>
                                <S.Line align="end" top="2px" bottom="2px">
                                    <S.Input
                                        align="right"
                                        width="300px"
                                        type="text"
                                        ng-model="invoice.company_info.name"
                                        value={companyInfo.name}
                                        onChange={(e) => {
                                            setCompanyInfo({
                                                ...companyInfo,
                                                name: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="end" top="2px" bottom="2px">
                                    <S.Input
                                        align="right"
                                        width="300px"
                                        type="text"
                                        value={companyInfo.web_link}
                                        onChange={(e) => {
                                            setCompanyInfo({
                                                ...companyInfo,
                                                web_link: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="end" top="2px" bottom="2px">
                                    <S.Input
                                        align="right"
                                        width="300px"
                                        type="text"
                                        value={companyInfo.address1}
                                        onChange={(e) => {
                                            setCompanyInfo({
                                                ...companyInfo,
                                                address1: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="end" top="2px" bottom="2px">
                                    <S.Input
                                        align="right"
                                        width="300px"
                                        type="text"
                                        value={companyInfo.address2}
                                        onChange={(e) => {
                                            setCompanyInfo({
                                                ...companyInfo,
                                                address2: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                                <S.Line align="end" top="2px" bottom="2px">
                                    <S.Input
                                        align="right"
                                        width="300px"
                                        type="text"
                                        value={companyInfo.postal}
                                        onChange={(e) => {
                                            setCompanyInfo({
                                                ...companyInfo,
                                                postal: e.target.value,
                                            });
                                        }}
                                    />
                                </S.Line>
                            </>
                        }
                    </div>
                </S.Line>
                {!printMode && (
                    <div>
                        <div>
                            <S.Select
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                {currencyOptions.map((item, idx) => (
                                    <option
                                        key={idx}
                                        selected={selected === idx}
                                        value={item.symbol}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </S.Select>
                        </div>
                    </div>
                )}
                <S.Separator />
                <ProductsDescription print={printMode} currency={currency} />

                <S.Line height="2.6em" justify="start">
                    {printMode && (
                        <S.Line right="2px">
                            <S.Button>Print</S.Button>
                        </S.Line>
                    )}
                    <S.Line right="2px">
                        <S.Button>Reset</S.Button>
                    </S.Line>
                    <S.Line right="2px">
                        <S.Button onClick={() => setPrintMode(!printMode)}>
                            Turn{printMode ? "Off" : "On"} PrintMode
                        </S.Button>
                    </S.Line>
                </S.Line>
            </div>

            <div ng-hide="printMode" className="copy noPrint">
                <a href="https://jasdeep.ca/?utm_source=angular_invoicing">
                    Jasdeep Singh
                </a>{" "}
                &amp;
                <a href="https://github.com/manpreetrules">Manpreet Singh</a>
                Made with
                <span className="love">&#9829;</span> in Toronto by
                <a href="https://metawarelabs.com/?utm_source=angular_invoicing">
                    Metaware Labs Inc.
                </a>
            </div>
        </S.Centered>
    );
}
