import React, { useState } from "react";
import "./App.css";

export default function App() {
    const logo = require("assets/logo.png");
    const [logoRemoved, setLogoRemoved] = useState(false);
    const [currencySymbol, setCurrencySymbol] = useState("$");

    return (
        <>
            <div className="container" style={{ width: "800px" }} id="invoice">
                <div className="row">
                    <div className="col-xs-12 heading">INVOICE</div>
                </div>
                <div className="row branding">
                    <div className="col-xs-6">
                        <div className="invoice-number-container">
                            <label>Invoice #</label>
                            <input
                                type="text"
                                id="invoice-number"
                                ng-model="invoice.invoice_number"
                            />
                        </div>
                    </div>
                    <div className="col-xs-6 logo-container">
                        <input type="file" id="imgInp" />
                        {!logoRemoved && (
                            <img
                                id="company_logo"
                                alt="your image"
                                width="300"
                                src={logo}
                            />
                        )}
                        <div>
                            <div className="noPrint" ng-hide="printMode">
                                <a ng-click="editLogo()">Edit Logo</a>
                                <a ng-click="toggleLogo()" id="remove_logo">
                                    {logoRemoved ? "Show" : "Hide"} logo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row infos">
                    <div className="col-xs-6">
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.customer_info.name"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.customer_info.web_link"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.customer_info.address1"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.customer_info.address2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.customer_info.postal"
                            />
                        </div>
                        <div
                            className="input-container"
                            data-ng-hide="printMode"
                        >
                            <select
                                ng-model="currencySymbol"
                                ng-options="currency.symbol as currency.name for currency in availableCurrencies"
                            ></select>
                        </div>
                    </div>
                    <div className="col-xs-6 right">
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.company_info.name"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.company_info.web_link"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.company_info.address1"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.company_info.address2"
                            />
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                ng-model="invoice.company_info.postal"
                            />
                        </div>
                    </div>
                </div>
                <div className="items-table">
                    <div className="row header">
                        <div className="col-xs-1">&nbsp;</div>
                        <div className="col-xs-5">Description</div>
                        <div className="col-xs-2">Quantity</div>
                        <div className="col-xs-2">Cost {currencySymbol}</div>
                        <div className="col-xs-2 text-right">Total</div>
                    </div>
                    <div
                        className="row invoice-item"
                        ng-repeat="item in invoice.items"
                        ng-animate="'slide-down'"
                    >
                        <div className="col-xs-1 remove-item-container">
                            <a
                                ng-hide="printMode"
                                ng-click="removeItem(item)"
                                className="btn btn-danger"
                            >
                                [X]
                            </a>
                        </div>
                        <div className="col-xs-5 input-container">
                            <input
                                ng-model="item.description"
                                placeholder="Description"
                            />
                        </div>
                        <div className="col-xs-2 input-container">
                            <input
                                ng-model="item.qty"
                                value="1"
                                ng-required
                                ng-validate="integer"
                                placeholder="Quantity"
                            />
                        </div>
                        <div className="col-xs-2 input-container">
                            <input
                                ng-model="item.cost"
                                value="0.00"
                                ng-required
                                ng-validate="number"
                                placeholder="Cost"
                            />
                        </div>
                        <div className="col-xs-2 text-right input-container">
                            {156.0}
                        </div>
                    </div>
                    <div className="row invoice-item">
                        <div
                            className="col-xs-12 add-item-container"
                            ng-hide="printMode"
                        >
                            <a className="btn btn-primary" ng-click="addItem()">
                                [+]
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 text-right">Sub Total</div>
                        <div className="col-xs-2 text-right">{10}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 text-right">
                            Tax(%):{" "}
                            <input
                                ng-model="invoice.tax"
                                ng-validate="number"
                                style={{ width: "43px" }}
                            />
                        </div>
                        <div className="col-xs-2 text-right">{15}</div>
                    </div>
                    <div className="row">
                        <div className="col-xs-10 text-right">Grand Total:</div>
                        <div className="col-xs-2 text-right">{15}</div>
                    </div>
                </div>
                <div className="row noPrint actions">
                    <a
                        href="#"
                        className="btn btn-primary"
                        ng-show="printMode"
                        ng-click="printInfo()"
                    >
                        Print
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary"
                        ng-click="clearLocalStorage()"
                    >
                        Reset
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary"
                        ng-hide="printMode"
                        ng-click="printMode = true;"
                    >
                        Turn On Print Mode
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary"
                        ng-show="printMode"
                        ng-click="printMode = false;"
                    >
                        Turn Off Print Mode
                    </a>
                </div>
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
        </>
    );
}
