/* eslint-disable jsx-a11y/img-redundant-alt */
import ImageInput from "components/ImageInput";
import { numberMask } from "masks";
import ProductsDescription from "components/ProductsDescription";
import { useState } from "react";
import * as G from "globalStyles";
import * as S from "./styles";
import ClientData from "components/ClientData";
import StoreData from "components/StoreData";
import CurrencySelect from "components/CurrencySelect";

export default function App() {
    const logo = require("assets/logo.png");
    const [logoRemoved, setLogoRemoved] = useState(false);
    const [invoiceId, setInvoiceId] = useState(10);
    const [printMode, setPrintMode] = useState(false);
    const [currency, setCurrency] = useState("$");
    const [Image, setImage] = useState<any>(null);

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
        <>
            <G.Line width="100vw" justify="centers">
                <S.Centered style={{ width: "800px" }} id="invoice">
                    {
                        // * header
                        <>
                            <G.Line color="#357EBD" bottom="1em" height="2.2em">
                                <G.Text color="#fff">INVOICE</G.Text>
                            </G.Line>
                            <G.Line
                                justify="space-between"
                                align="flex-start"
                                left="1em"
                                right="1em"
                                bottom="2em"
                            >
                                <G.Text weight="bold" color="#313233">
                                    <label>Invoice #</label>
                                    <G.Input
                                        weight="bold"
                                        type="text"
                                        value={invoiceId}
                                        onChange={(e) =>
                                            setInvoiceId(
                                                Number(
                                                    numberMask(e.target.value)
                                                )
                                            )
                                        }
                                    />
                                </G.Text>
                                <div>
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
                                    <G.Line justify="flex-end">
                                        {!printMode && (
                                            <>
                                                <S.ClickableText right="4px">
                                                    <ImageInput
                                                        setPicture={setImage}
                                                    >
                                                        Eedit Logo
                                                    </ImageInput>
                                                </S.ClickableText>
                                                <S.ClickableText
                                                    onClick={() =>
                                                        setLogoRemoved(
                                                            !logoRemoved
                                                        )
                                                    }
                                                    id="remove_logo"
                                                >
                                                    {logoRemoved
                                                        ? "Show"
                                                        : "Hide"}{" "}
                                                    logo
                                                </S.ClickableText>
                                            </>
                                        )}
                                    </G.Line>
                                </div>
                            </G.Line>
                            <S.Separator />
                        </>
                    }
                    {
                        // * costumer and company info
                        <G.Line
                            justify="space-between"
                            top="2px"
                            align="flex-start"
                            bottom="2px"
                            left="1em"
                            right="1em"
                            //  "row infos"
                        >
                            <div>
                                <ClientData />
                            </div>
                            <div>
                                <StoreData />
                            </div>
                        </G.Line>
                    }
                    {
                        // * currency select
                        <>
                            {!printMode && (
                                <div>
                                    <CurrencySelect
                                        items={currencyOptions}
                                        onChange={setCurrency}
                                        initialValue={5}
                                    />
                                </div>
                            )}
                            <S.Separator />
                        </>
                    }
                    {
                        // * products list with totals
                        <ProductsDescription
                            print={printMode}
                            currency={currency}
                        />
                    }
                    {
                        // * print control line
                        <G.Line
                            noPrint
                            top="1em"
                            height="2.6em"
                            justify="start"
                        >
                            {printMode && (
                                <G.Line right="4px">
                                    <G.Button onClick={() => window.print()}>
                                        Print
                                    </G.Button>
                                </G.Line>
                            )}
                            <G.Line right="4px">
                                <G.Button>Reset</G.Button>
                            </G.Line>
                            <G.Line right="4px">
                                <G.Button
                                    onClick={() => setPrintMode(!printMode)}
                                >
                                    Turn{printMode ? "Off" : "On"} PrintMode
                                </G.Button>
                            </G.Line>
                        </G.Line>
                    }
                </S.Centered>
            </G.Line>
            {
                // * original creators
                !printMode && (
                    <G.Line justify="center" top="1em" noPrint>
                        <G.Text size="xx-small">
                            <a href="https://jasdeep.ca/?utm_source=angular_invoicing">
                                Jasdeep Singh
                            </a>
                            {" & "}
                            <a href="https://github.com/manpreetrules">
                                Manpreet Singh
                            </a>{" "}
                            Made with ❤️ in Toronto by{" "}
                            <a href="https://metawarelabs.com/?utm_source=angular_invoicing">
                                Metaware Labs Inc.{" "}
                            </a>
                        </G.Text>
                    </G.Line>
                )
            }
        </>
    );
}
