import React, { useState } from "react";
import * as G from "globalStyles";

interface StoreInfoProps {
    name: string;
    web_link: string;
    address1: string;
    address2: string;
    postal: string;
}

export default function ClientData() {
    const [costumerInfo, setCostumerInfo] = useState<StoreInfoProps>({
        name: "Mr. John Doe",
        web_link: "John Doe Designs Inc.",
        address1: "1 Infinite Loop",
        address2: "Cupertino, California, US",
        postal: "90210",
    });

    return (
        <>
            <G.Line align="start" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="start" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="start" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="start" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="start" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
        </>
    );
}
