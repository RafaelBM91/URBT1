import * as React from 'react';
import styled, { css } from 'styled-components';

import { HeaderPredictiveSearchItem } from "../header-predictive-search-item/HeaderPredictiveSearchItem";

interface Props {
    className?: any;
    TextSearch?: any;
    ShowComponent?: any;
    SelectItem?: any;
    MouseOverListItems?: any;
    MouseLeaveListItems?: any;
    ListSuggestion?: Array<any>;
    ListOriginal?: Array<any>;
    ttCursor?: number;
}

interface State {}

const ComponentTTDataset = styled.div`
    /* tt-dataset tt-dataset-engine */
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
`;

class ComponentHeaderPredictiveSearchItems extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {};
    }

    render () {
        return(
            <div
                onMouseOver={this.props.MouseOverListItems}
                onMouseLeave={this.props.MouseLeaveListItems}
                className={this.props.className} >
                <ComponentTTDataset>
                    {
                        this.props.ListSuggestion.map((v, id) =>
                            <HeaderPredictiveSearchItem
                                key={id}
                                Detail={v}
                                TextSearch={this.props.TextSearch}
                                id={id}
                                ListOriginal={this.props.ListOriginal}
                                selectItem={this.props.SelectItem}
                                ttCursor={ (id === this.props.ttCursor) } />
                        )
                    }
                </ComponentTTDataset>
            </div>
        )
    }
}

export const HeaderPredictiveSearchItems = styled(ComponentHeaderPredictiveSearchItems)`
    /* tt-menu tt-open */
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 100;
    display: block; /* depende de los resultados */
    border: 1px solid #d3d3d3;
    border-top: none;
    background: #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
    z-index: 400;
    width: 100%;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
    ${(props: Props) => !props.ShowComponent && css`
        display: none;
    `}

    @media screen and (max-width: 959px) {
        top: 48px!important;
    }
`;
