import * as React from 'react';
import styled, { css } from 'styled-components';

import {
    Img as NormalizedImg
} from 'normalized-styled-components';

interface Props {
    className?: any;
    Show: boolean;
}

interface State {}

const ComponentImageLoader = styled(NormalizedImg)`
    border-style: none;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
`;

export class ComponentHeaderSessionLoader extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {};
    }
    render() {
        return(
            <div className={this.props.className}>
                <NormalizedImg src="https://cds.urbania.g3c.pe/atomic/img/loader.gif?201802141511"/>
            </div>
        );
    }
}

export const HeaderSessionLoader = styled(ComponentHeaderSessionLoader)`
    display: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: hsla(0,0%,100%,.95);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-sizing: border-box;
    outline: 0!important;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;

    ${(props: Props) => props.Show && css`
        display: block;
    `}
`;
