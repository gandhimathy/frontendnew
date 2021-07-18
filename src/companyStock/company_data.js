import React, { Component, useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

class CompanyData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: "",
          suggestions: [],
          destinations: [],
          noSuggestions: false,
        }
    }
    render(){
        console.log(this.props.data);
        let company = this.props.data.length>0 ?(
            <>
                <div className="container py-2">
                    <div className="row">
                            <Container className="contain-class py-3">
                                 <Row>
                                    <Col>Market Cap <span><span> ₹{this.props.data[0].marketCap}</span></span></Col>
                                    <Col >Divident Yield <span> ₹{this.props.data[0].DividentYield}</span></Col>
                                    <Col>Debt Equity <span> ₹{this.props.data[0].DebtToEquity}</span></Col>
                                </Row>
                                <Row>
                                    <Col  md="4 ml-1">Current Prize <span> ₹{this.props.data[0].currentMarketPrice}</span></Col>
                                    <Col  md="3">ROCE <span> ₹{this.props.data[0].ROCE}</span></Col>
                                    <Col  md="3">Eps <span> {this.props.data[0].EPS}</span></Col>
                                </Row>
                                <Row>
                                    <Col >Stock P/E <span> ₹{this.props.data[0].stockPE}</span></Col>
                                    <Col >ROE <span> ₹{this.props.data[0].ROEpreviousAnnual}</span></Col>
                                    <Col >Reserves <span> ₹{this.props.data[0].reserves}</span></Col>
                                </Row>
                                <Row><Col md="4">Dept <span> ₹{this.props.data[0].Debt}</span></Col>
                                 </Row>
                            </Container>
                    </div>
                </div>
            </>
        ): null;
        return (
            < div className="company-data card">
                <div className="header">
                    {this.props.data[0].name} 
                </div>
                <div className="card-body">
                    {company}
                </div>
            </div>
        );
    }

}
export default CompanyData;