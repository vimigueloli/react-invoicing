import React, { useState } from "react";
import * as G from "globalStyles";

interface StoreInfoProps {
    name: string;
    web_link: string;
    address1: string;
    address2: string;
    postal: string;
}

export default function StoreData() {
    const [companyInfo, setCompanyInfo] = useState<StoreInfoProps>({
        name: "Metaware Labs",
        web_link: "www.metawarelabs.com",
        address1: "123 Yonge Street",
        address2: "Toronto, ON, Canada",
        postal: "M5S 1B6",
    });
    return (
        <>
            <G.Line align="end" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="end" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="end" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="end" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
            <G.Line align="end" top="2px" bottom="2px">
                <G.Input
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
            </G.Line>
        </>
    );
}
