import * as React from 'react';
import styled from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA
} from 'normalized-styled-components';

import { ModalGeneric } from '../modal-generic/modal-generic';

interface Props {
    className?: any;
    EventBtnFacebook?: any;
}

interface State {}

const ComponentBtnFacebookLink = styled(NormalizedA)`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 15px;
    word-wrap: break-word;
    cursor: pointer;
`;

const ComponentBtnFacebookImg = styled(NormalizedImg)`
    border-style: none;
    box-sizing: border-box;
    outline: 0!important;
    color: #fff;
    text-align: center;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 15px;
    word-wrap: break-word;
`;

export class ComponentButtonFacebook extends React.Component<Props, State> {
    render() {
        return(
            <div className={this.props.className}>
                <ComponentBtnFacebookLink
                    onClick={this.props.EventBtnFacebook}
                    href="javascript:;"
                    title="Facebook">
                    <ComponentBtnFacebookImg
                        src="https://cds.urbania.g3c.pe/atomic/img/icon_facebook.png?201802141511"/>
                    <span>Ingresar con Facebook</span>
                </ComponentBtnFacebookLink>
            </div>
        );
    }
}

export const ButtonFacebook = styled(ComponentButtonFacebook)`
    background: #3b5998;
    height: 40px;
    color: #fff;
    text-align: center;
    width: 100%;
    display: block;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 15px;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
`;
