import React, { Component } from "react";
import CompanySearch from "../companyStock/company_search";

class Stock extends Component {
    // constructor(props) {

    // }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2">
                    </div>
                    <div className="col-lg-6 col-md-6 textPtn">
                        <h1>The easiest way to buy and sell stocks.</h1>
                        <p>Stock analysis and screening tool for investors in India</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-10 col-md-10">
                            <CompanySearch></CompanySearch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Stock;