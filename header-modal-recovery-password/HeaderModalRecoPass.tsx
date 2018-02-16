import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA,
    Input as NormalizedInput
} from 'normalized-styled-components';

import { ModalGeneric } from '../modal-generic/modal-generic';
import { ButtonCloseModal } from '../modal-generic/button-close-modal';
import { HeaderSessionLoader } from "../header-session/HeaderSessionLoader";

interface Props {
    className?: any;
    ViewModalRecoPass?: any;
    changeModalsLogRec?: any;
}

interface State {
    email?: string;
    /** Opciones posibles
    *   1 ~>  Campo requerido.
    *   2 ~>  Por favor, introduce una dirección de correo electrónico válida.
    */
    typeErrorEmail?: number;
}

const ComponentBodyRecoPass = styled.div`
    box-sizing: border-box;
    outline: 0!important;
    font-family: gotham,arial,sans-serif;
    text-align: center;
    word-wrap: break-word;
`;

const ComponentTitleRecoPass = styled.p`
    font-family: gotham-medium,arial,sans-serif;
    font-size: 23px;
    margin: 20px 0;
    padding: 0;
    line-height: 1.5em;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
`;

const ComponentContentForm = styled.div`
    margin-top: 25px;
    margin-right: 35px;
    margin-bottom: 40px;
    margin-left: 35px;
    box-sizing: border-box;
    outline: 0!important;
    font-family: gotham,arial,sans-serif;
    text-align: center;
    word-wrap: break-word;
`;

const ComponentFormRecoPass = styled.form`
    box-sizing: border-box;
    outline: 0!important;
    font-family: gotham,arial,sans-serif;
    text-align: center;
    word-wrap: break-word;
`;

const ComponentContentInput = styled.div`
    position: relative;
    margin: 8px 0;
    box-sizing: border-box;
    outline: 0!important;
    display: block;
    text-align: left;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

interface ComponentInput {
    showError?: boolean;
}

const ComponentInput = styled(NormalizedInput)`
    width: 100%;
    height: 40px;
    padding: 12px;
    color: #646259;
    font-size: 15px;
    border: 1px solid #e2e2e2;
    background: 0;
    margin: 0;
    overflow: visible;
    font: inherit;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;

    ${(props: ComponentInput) => props.showError && css`
        background-color: #f2dede!important;
        border: 1px solid #eed3d7!important;
        border-top: 1px solid #eed3d7!important;
    `}
`;

interface ComponentTagError {
    show?: boolean;
}

const ComponentTagError = styled.div`
    display: none;
    color: #b94a4a;
    font-size: 12px;
    padding-bottom: 4px;
    text-align: left;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';

    ${(props: ComponentTagError) => props.show && css`
        display: block;
    `}
`;

const ComponentContainerBtn = styled.div`
    height: 40px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: relative;
    display: block;
    margin-top: 20px;
    font-family: gotham-medium,arial,sans-serif;
    background-color: #ea5a0b;
    font-size: 15px;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
`;

const ComponentBtnSubmit = styled(NormalizedInput)`
    border-radius: 2px;
    height: 40px;
    color: #fff;
    text-align: center;
    width: 100%;
    -webkit-appearance: button;
    cursor: pointer;
    border: 0;
    background: 0;
    padding: 0;
    margin: 0;
    overflow: visible;
    font: inherit;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
`;

const ComponentFooterRecoPass = styled.div`
    background-color: #efeeeb;
    padding: 16px 0;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
`;

const ComponentFooterRecoPassLink = styled(NormalizedA)`
    font-family: gotham-medium,arial,sans-serif;
    font-size: 14px;
    color: #8a8a8a;
    border-bottom: 1px solid #8a8a8a;
    text-decoration: none;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    text-align: center;
    cursor: pointer;
`;

interface ComponentErrorLogin {
    show?: boolean;
}

const ComponentErrorLogin = styled.div`
    display: none;
    background: #ffe5e5;
    text-align: center;
    padding: 15px;
    font-size: 14px;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    color: #666;

    ${(props: ComponentErrorLogin) => props.show && css`
        display: block;
    `}
`;

export class ComponentHeaderModalRecoPass extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            email: '',
            typeErrorEmail: 0
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.blurEmail = this.blurEmail.bind(this);
        this.FormSubmitPreValidate = this.FormSubmitPreValidate.bind(this);
    }

    changeEmail (event: any) {
        let { value } = event.target;
        /**
         * Validacion del campo INPUT ~> EMAIL
         */
        let test = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let typeErrorEmail = (value.length <= 0) ? 1 : ( !( test.test(value) ) ) ? 2 : 0;
        /**
         * Validacion del campo INPUT ~> EMAIL
         */
        this.setState({ email: value, typeErrorEmail });
    }

    blurEmail (event: any) {
        let { value } = event.target;
        /**
         * Validacion del campo INPUT ~> EMAIL
         */
        if (value.length <= 0)
            this.setState({ typeErrorEmail: 1 });
        /**
         * Validacion del campo INPUT ~> EMAIL
         */
    }

    FormSubmitPreValidate (event: any) {
        let { email, typeErrorEmail } = this.state;
        /**
         * Validacion PRE-SUBMIT
         */
        if ( typeErrorEmail > 0 || email.length === 0 )
            event.preventDefault();
        /**
         * Validacion PRE-SUBMIT
         */
    }

    render() {
        let { email, typeErrorEmail } = this.state;
        return(
            <ModalGeneric clickModal={this.props.ViewModalRecoPass}>
                <div className={this.props.className}>
                    <HeaderSessionLoader Show={false} />
                    <ButtonCloseModal changeEvent={this.props.ViewModalRecoPass} />
                    <ComponentErrorLogin show={false}>Correo o clave incorrecta.</ComponentErrorLogin>
                    <ComponentBodyRecoPass>
                        <ComponentTitleRecoPass>
                            Recuperar contraseña
                        </ComponentTitleRecoPass>
                        
                        <ComponentContentForm>
                            <ComponentFormRecoPass onSubmit={this.FormSubmitPreValidate} action="#">
                                <ComponentContentInput>
                                    <ComponentInput
                                        type="text"
                                        name="email"
                                        showError={ (typeErrorEmail > 0) }
                                        onChange={this.changeEmail}
                                        onBlur={this.blurEmail}
                                        value={email}
                                        placeholder="Ingresa tu Email"
                                        maxlength="100"/>
                                    <ComponentTagError show={ (typeErrorEmail === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorEmail === 2) }>
                                        Por favor, introduce una dirección de correo electrónico válida.
                                    </ComponentTagError>
                                </ComponentContentInput>
                                <ComponentContainerBtn>
                                    <ComponentBtnSubmit type="submit" value="Iniciar sesión"/>
                                </ComponentContainerBtn>
                            </ComponentFormRecoPass>
                        </ComponentContentForm>
                        
                        <ComponentFooterRecoPass>
                            <ComponentFooterRecoPassLink href="javascript:;" onClick={this.props.changeModalsLogRec}>
                                Regresar para iniciar sesión
                            </ComponentFooterRecoPassLink>
                        </ComponentFooterRecoPass>
                    </ComponentBodyRecoPass>
                </div>
            </ModalGeneric>
        )
    }
}

export const HeaderModalRecoPass = styled(ComponentHeaderModalRecoPass)`
    display: block;
    font-family: gotham,arial,sans-serif;
    text-align: center;
    overflow: auto;
    width: 350px;
    height: auto;
    position: relative;
    word-wrap: break-word;
    max-height: 90%;
    background-color: #fff;
    box-sizing: border-box;
    outline: 0!important;
`;
