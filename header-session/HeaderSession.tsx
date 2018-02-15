import * as React from 'react';
import styled, { css } from 'styled-components';

import {
    A as NormalizedA
} from 'normalized-styled-components';

import { HeaderModalRegister } from '../header-modal-register/HeaderModalRegister';

interface Props {
    className?: any;
}

interface State {
    ShowModalRegister?: boolean;
}

const ComponentLoginContent = styled.div`
    font-size: 16px;
    margin-top: 12px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    outline: 0!important;
    -webkit-box-direction: normal;
    font-family: bariol-regular;
`;

const ComponentRegister = styled(NormalizedA)`
    color: #ea5a0b;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    font-size: 16px;
    -webkit-box-direction: normal;
    font-family: bariol-regular;
`;

const ComponentGenericSpan = styled.span`
    color: #888;
    box-sizing: border-box;
    outline: 0!important;
    font-size: 16px;
    -webkit-box-direction: normal;
    font-family: bariol-regular;
`;

const ComponentLogin = styled(NormalizedA)`
    text-decoration: none;
    color: #888;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    font-size: 16px;
    -webkit-box-direction: normal;
    font-family: bariol-regular;
`;

const ComponentAddPost = styled(NormalizedA)`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    background: #8cb420;
    height: 38px;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    font-size: 15px;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0!important;
    cursor: pointer;
    -webkit-box-direction: normal;
    font-family: bariol-regular;
`;

export class ComponentHeaderSession extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            ShowModalRegister: false,
        };

        this.changeModalRegister = this.changeModalRegister.bind(this);
    }

    changeModalRegister () {
        let { ShowModalRegister } = this.state;
        this.setState({ ShowModalRegister: !ShowModalRegister });
    }

    render () {
        return (
            <div className={this.props.className}>
                <ComponentLoginContent>
                    <ComponentRegister href="javascript:;" onClick={this.changeModalRegister}>Regístrate</ComponentRegister>
                    <ComponentGenericSpan>&nbsp;ó&nbsp;</ComponentGenericSpan>
                    <ComponentLogin href="javascript:;">Ingresa</ComponentLogin>
                </ComponentLoginContent>
                <ComponentAddPost href="https://urbania.pe/publica-tu-aviso/">Publica tu inmueble</ComponentAddPost>

                {
                    this.state.ShowModalRegister ?
                        <HeaderModalRegister
                            changeModalRegister={this.changeModalRegister} /> :
                        null
                }

            </div>
        );
    }
}

export const HeaderSession = styled(ComponentHeaderSession)`
    display: flex;
    -webkit-box-flex: 0;
    flex: 0 0 130px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: 50px;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
`;