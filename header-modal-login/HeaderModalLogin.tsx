import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA,
    Hr as NormalizedHr,
    Input as NormalizedInput
} from 'normalized-styled-components';

import { ModalGeneric } from '../modal-generic/modal-generic';
import { HeaderSessionLoader } from "../header-session/HeaderSessionLoader";
import { ButtonCloseModal } from '../modal-generic/button-close-modal';
import { ButtonFacebook } from "../modal-generic/ButtonFacebook";

interface Props {
    className?: any;
    ViewModalLogin?: any;
    changeModalsRegLog?: any;
    changeModalsLogRec?: any;
}

interface State {
    email?: string;
    /** Opciones posibles
    *   1 ~>  Campo requerido.
    *   2 ~>  Por favor, introduce una dirección de correo electrónico válida.
    */
    typeErrorEmail?: number;
    clave?: string;
    /** Opciones posibles
    *   1 ~>  Campo requerido.
    *   2 ~>  Por favor, introduzca al menos 6 caracteres.
    */
    typeErrorClave?: number;
}

const ComponentBodyLogin = styled.div`
    height: auto;
    text-align: center;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentFooterLogin = styled.div`
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

const ComponentFooterLoginLink = styled(NormalizedA)`
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

const ComponentContentFormLogin = styled.div`
    /* b-login-form */
    width: 75%;
    margin: auto;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentTitleLogin = styled.p`
    margin: 40px 0 20px;
    color: #8cb420;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 23px;
    padding: 0;
    line-height: 1.5em;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
`;

const ComponentFormRegister = styled.form`
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
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

const ComponentLoginDivision = styled.div`
    margin: 20px auto;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentLoginDivisionHr = styled(NormalizedHr)`
    margin: 0;
    width: 90px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentContainerBtnFacebook = styled.div`
    position: relative;
    display: block;
    margin-top: 20px;
`;

const ComponentRecoverPassword = styled(NormalizedA)`
    display: block;
    margin: 20px 0;
    color: #666;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    text-align: center;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
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

export class ComponentHeaderModalLogin extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            email: '',
            typeErrorEmail: 0,
            clave: '',
            typeErrorClave: 0,
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.blurEmail = this.blurEmail.bind(this);
        this.changeClave = this.changeClave.bind(this);
        this.blurClave = this.blurClave.bind(this);
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

    changeClave (event: any) {
        let { value } = event.target;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        let typeErrorClave = (value.length <= 0) ? 1 : (value.length < 6) ? 2 : 0;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        this.setState({ clave: value, typeErrorClave });
    }

    blurClave (event: any) {
        let { value } = event.target;
        let { typeErrorClave } = this.state;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        typeErrorClave = (value.length <= 0) ? 1 : typeErrorClave;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        this.setState({ typeErrorClave });
    }

    FormSubmitPreValidate (event: any) {
        let { email, typeErrorEmail, clave, typeErrorClave } = this.state;
        let TypeErrorSum = typeErrorEmail + typeErrorClave;
        /**
         * Validacion PRE-SUBMIT
         */
        if ( TypeErrorSum > 0 || email.length === 0 || clave.length === 0)
            event.preventDefault();
        /**
         * Validacion PRE-SUBMIT
         */
    }

    render() {
        let { email, typeErrorEmail, clave, typeErrorClave } = this.state;

        return(
            <ModalGeneric clickModal={this.props.ViewModalLogin}>
                <div className={this.props.className} >
                    {/* Loader */}
                    <HeaderSessionLoader Show={false} />
                    <ComponentBodyLogin>
                        <ButtonCloseModal changeEvent={this.props.ViewModalLogin}/>
                        {/* error de inicio de session */}
                        <ComponentErrorLogin show={false}>Correo o clave incorrecta.</ComponentErrorLogin>
                        <ComponentContentFormLogin>
                            <ComponentTitleLogin>Ingresa aquí</ComponentTitleLogin>
                            <ComponentFormRegister onSubmit={this.FormSubmitPreValidate} action="#">
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
                                <ComponentContentInput>
                                    <ComponentInput
                                        type="password"
                                        name="clave"
                                        showError={ (typeErrorClave > 0) }
                                        onChange={this.changeClave}
                                        onBlur={this.blurClave}
                                        value={clave}
                                        placeholder="Contraseña"
                                        maxlength="50"/>
                                    <ComponentTagError show={ (typeErrorClave === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorClave === 2) }>
                                        Por favor, introduzca al menos 6 caracteres.
                                    </ComponentTagError>
                                </ComponentContentInput>
                                <ComponentContainerBtn>
                                    <ComponentBtnSubmit type="submit" value="Iniciar sesión"/>
                                </ComponentContainerBtn>
                            </ComponentFormRegister>
                            <ComponentLoginDivision>
                                <ComponentLoginDivisionHr/>
                                <span>ó</span>
                                <ComponentLoginDivisionHr/>
                            </ComponentLoginDivision>
                            <ComponentContainerBtnFacebook>
                                <ButtonFacebook />
                            </ComponentContainerBtnFacebook>
                            <ComponentRecoverPassword href="javascript:;" onClick={this.props.changeModalsLogRec}>
                                ¿Olvidaste tu Contraseña?
                            </ComponentRecoverPassword>
                        </ComponentContentFormLogin>
                        <ComponentFooterLogin>
                            <span>
                                No tengo cuenta,&nbsp;
                            <ComponentFooterLoginLink href="javascript:;" onClick={this.props.changeModalsRegLog}>
                                deseo registrarme
                            </ComponentFooterLoginLink>
                            </span>
                        </ComponentFooterLogin>
                    </ComponentBodyLogin>
                </div>
            </ModalGeneric>
        )
    }
}

export const HeaderModalLogin = styled(ComponentHeaderModalLogin)`
    display: block;
    width: 300px;
    position: relative;
    word-wrap: break-word;
    overflow-x: hidden;
    max-height: 90%;
    height: auto;
    background-color: #fff;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
    box-sizing: border-box;
    outline: 0!important;
`;
