import * as React from 'react';
import styled from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA
} from 'normalized-styled-components';

interface Props {
    className?: any;
    changeEvent?: any;
}

interface State {}

const ComponentLinkBtnClose = styled(NormalizedA)`
    text-decoration: none;
    color: #000;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
`;

const ComponentImgBtnClose = styled(NormalizedImg)`
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-family: Icons-webfont;
    font-size: inherit;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-decoration: inherit;
    text-transform: none;
    vertical-align: middle;
    width: 16px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-style: none;
    box-sizing: border-box;
    outline: 0!important;
    color: #000;
    word-wrap: break-word;
    text-align: center;

`;

export class ComponentButtonCloseModal extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {};
    }
    render() {
        return(
            <div className={this.props.className}>
                <ComponentLinkBtnClose href="javascript:;" tittle="Cerrar" onClick={this.props.changeEvent}>
                    <ComponentImgBtnClose src="https://cds.urbania.g3c.pe/atomic/img/icon-close.svg?201802141511"/>
                </ComponentLinkBtnClose>
            </div>
        )
    }
}

export const ButtonCloseModal = styled(ComponentButtonCloseModal)`
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
`;
