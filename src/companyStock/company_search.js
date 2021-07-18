import React, { Component, useState } from "react";
import Autosuggest from "react-autosuggest";
import { connect } from "react-redux";
import AutosuggestHighlightMatch from "autosuggest-highlight/match";
import AutosuggestHighlightParse from "autosuggest-highlight/parse";
import {
    getSuggestions,
  } from "../actions/StockAction";
  import config from "../Config";
  import axios from "axios";
  import CompanyData from "../companyStock/company_data";


const getSuggestionValue = (suggestion) => suggestion.name;

class CompanySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: "",
          suggestions: [],
          companyData: [],
          noSuggestions: false,
        }
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }
    getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        if (inputLength !== 0) {
          this.setState({ keyword: inputValue });
          console.log(inputValue);
          const data  = {
            keyword: inputValue,
          };
          axios
            .get(config.apiGateway.URL + "getSuggestions?keyword="+inputValue)
            .then((response) => {
                console.log(response.data);
                this.setState({
                    suggestions: response.data,
                });
            });
        //   this.props.getSuggestions(inputValue);
        }
    };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({ keyword: value });
        this.getSuggestions(value);
    };
    
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
            // noSuggestions: false
        });
    };
    suggesionChange(event) {
        console.log("checking");
        const myValue = event.value;
        console.log(myValue);
    }
    onSuggestionSelected(
        event,
        { suggestion}
      ) {
        this.setState({
          id: suggestion.id,
          keyword: suggestion.name,
        });
        const inputValue = {
            id: suggestion.id,
          };
        axios
        .post(config.apiGateway.URL + "getCompanyData",inputValue)
        .then((response) => {
            this.setState({
                companyData: response.data,
            });
        });
      }
    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue,
        });
      };
    renderSuggestion(suggestion, { query }) {
        // console.log({suggestion});
        const matches = AutosuggestHighlightMatch(suggestion.title, query);
        const parts = AutosuggestHighlightParse(suggestion.title, matches);
        return (
          <span>
            {parts.map((part, index) => {
              const className = part.highlight
                ? "react-autosuggest__suggestion-match"
                : null;
    
              return (
                <>
                  <span className={`${className} place_name `} key={index}>
                    {part.text}
                  </span>
                </>
              );
            })}
            <span className="place_dt">
              {suggestion.name}
            </span>
          </span>
        );
      }
    renderInputComponent = (inputProps) => (
    <div className="inputContainer">
        <i className="icomoon icon-search1"></i>
        <input {...inputProps} className="form-control search-input" />
    </div>
    );
    componentWillReceiveProps(nextProps) {
        if (nextProps.searchData !== this.props.searchData ) {
          console.log(nextProps.searchData);
          this.setState({
            noSuggestions: false,
            suggestions: nextProps.searchData,
          });
        }
    }
    render() {
        // const { value, suggestions } = this.state;
        const { value, suggestions, noSuggestions } = this.state;
    
        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: "Company Name",
            value,
            onChange: this.onChange,
          };

        return (
            <>
            < div className="search">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onFocusChange={() => this.suggesionChange}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={this.renderSuggestion}
                  inputProps={inputProps}
                  renderInputComponent={this.renderInputComponent}
                  renderSuggestionsContainer={this.renderSuggestionsContainer}
                  onSuggestionSelected={this.onSuggestionSelected}
                />
            </div>
            <div className="mt-3">
                {this.state.companyData.length > 0?
                <CompanyData data={this.state.companyData}></CompanyData>
                :''}  
            </div>
        </>
        )

    }
}
// const mapPropsToState = (state) => ({
//     searchData: state.stock.suggestions,
//   });
//   export default connect(mapPropsToState, {
//     getSuggestions,
//   })(CompanySearch);
  export default CompanySearch;