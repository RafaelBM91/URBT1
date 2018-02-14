import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    A as NormalizedA,
    Strong as NormalizedStrong
} from 'normalized-styled-components';

interface Props {
    className?: any;
    Detail?: any;
    TextSearch?: string;
    selectItem?: any;
    id?: number;
    ListOriginal?: Array<object>;
    ttCursor?: boolean;
}

const ComponentTTSuggestion = styled(NormalizedA)`
    box-sizing: border-box;
    outline: 0!important;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5em;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
    text-decoration: none;
    color: inherit;
`;

const ComponentTTHighlight = styled(NormalizedStrong)`
    font-weight: bolder;
    box-sizing: border-box;
    outline: 0!important;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5em;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
`;

export class ComponentHeaderPredictiveSearchItem extends React.Component<Props, {}> {
    constructor (props: Props) {
        super(props);

        this.StrongIce = this.StrongIce.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    StrongIce () {
        let { Detail, TextSearch } = this.props;
        Detail = Detail
        let init = [];
        let strg = [];

        while (true) {
            let index = Detail.toLowerCase().indexOf(TextSearch.toLowerCase());
            
            if (index === -1 || TextSearch.length === 0) break;

            init.push( Detail.substr(0, index) );
            strg.push( Detail.substr(index, TextSearch.length) );
            Detail = Detail.substr((index + TextSearch.length), Detail.length);
        }
        
        return (
            <span>
                {
                    strg.map((e, id) => {
                        return (
                            <span key={id}>
                                <span>{init[id]}</span>
                                <ComponentTTHighlight>{e}</ComponentTTHighlight>
                            </span>
                        )
                    })
                }
                {
                    Detail
                }
            </span>
        )
    }

    selectItem () {
        /**
         * Funcion foranea de la clase padre <HeaderPredictiveSearch/>
         */
        this.props.selectItem( this.props.ListOriginal[ this.props.id ] );
    }



    render() {
        return(
            <p className={this.props.className} onClick={this.selectItem}>
                <ComponentTTSuggestion href="#">
                    {
                        this.StrongIce()
                    }
                </ComponentTTSuggestion>
            </p>
        )
    }
}

export const HeaderPredictiveSearchItem = styled(ComponentHeaderPredictiveSearchItem)`
    /* tt-suggestion tt-selectable */
    border-top: 1px solid #d3d3d3;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin: 0px !important;
    line-height: 1.5em;
    box-sizing: border-box;
    outline: 0!important;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
    color: black;

    &:hover {
        background-color: #ea5a0b;
        color: white;
    }

    ${(props: Props) => props.ttCursor && css`
        background-color: #ea5a0b;
        color: white;
    `}
`;
