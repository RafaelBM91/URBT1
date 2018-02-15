import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA,
    Input as NormalizeInput
} from 'normalized-styled-components';

import { ModalGeneric } from '../modal-generic/modal-generic';
import { ButtonCloseModal } from '../modal-generic/button-close-modal';
import { Component } from 'react';

interface Props {
    className?: any;
    changeModalRegister?: any;
}

interface State {
    nombre?: string;
    /** Opciones posibles
    *   1 ~>  Campo requerido.
    *   2 ~>  Por favor, introduzca al menos 2 caracteres.
    *   3 ~>  Por favor, ingrese solo letras.
    */
    typeErrorNombre?: number;
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
    reclave?: string;
    /** Opciones posibles
    *   1 ~>  Campo requerido.
    *   2 ~>  Por favor, introduzca al menos 6 caracteres.
    *   3 ~>    Las contraseñas no coinciden.
    */
    typeErrorReClave?: number;
}

const ComponentMainModalRegister = styled.div`
    display: block;
    width: 665px;
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

const ComponentBodyRegister = styled.div`
    /* b-register-body u-flex-wrap */
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 40px 20px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
`;

const ComponentRegisterRight = styled.div`
    padding-right: 50px;
    text-align: left;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;

    &::before {
        position: absolute;
        content: "";
        right: 0;
        bottom: 0;
        height: 80%;
        width: 1px;
        background: #bdbdbd;
    }
`;

const ComponentTitleRegister = styled.p`
    /* title-modal-login title-modal-login--green */
    text-align: left;
    font-size: 30px;
    color: #8cb420;
    font-family: gotham-medium,arial,sans-serif;
    margin: 20px 0;
    padding: 0;
    line-height: 1.5em;
    box-sizing: border-box;
    outline: 0!important;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    word-wrap: break-word;

`;

const ComponentRegistrerText = styled.p`
    /* a-register-text */
    text-align: left;
    padding: 0;
    margin: 0;
    line-height: 1.5em;
    box-sizing: border-box;
    outline: 0!important;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentFormRegister = styled.form`
    box-sizing: border-box;
    outline: 0!important;
    display: block;
    margin-top: 0em;
    text-align: left;
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

const ComponentInput = styled(NormalizeInput)`
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

const ComponentTermsRegister = styled.div`
    margin: 14px 0;
    line-height: 20px;
    box-sizing: border-box;
    outline: 0!important;
    display: block;
    text-align: left;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    color: #666;
`;

const ComponentTermsRegisterBlock = styled.span`
    display: block!important;
    box-sizing: border-box;
    outline: 0!important;
    line-height: 20px;
    text-align: left;
    word-wrap: break-word;
    font-family: gotham,arial;
    font-size: 14px;
    color: #666;
    text-size-adjust: 100%;
`;

const ComponentTermsRegisterLink = styled(NormalizedA)`
    color: #505050;
    font-weight: 700;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    cursor: pointer;
    line-height: 20px;
    text-align: left;
    word-wrap: break-word;
    font-family: gotham,arial;
    font-size: 14px;
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

const ComponentBtnSubmit = styled(NormalizeInput)`
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

const ComponentRegisterLeft = styled.div`
    padding-left: 40px;
    position: relative;
    width: 50%;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;

`;

const ComponentTermsRegisterLeft = styled.p`
    margin: 14px 0;
    line-height: 20px;
    padding: 0;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
    font-family: gotham,arial,'sans-serif';
    font-size: 14px;
    text-align: center;
    color: #666;
`;

const ComponentContainerBtnFacebook = styled.div`
    background: #3b5998;
    height: 40px;
    color: #fff;
    text-align: center;
    width: 100%;
    position: relative;
    display: block;
    margin-top: 20px;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 15px;
    box-sizing: border-box;
    outline: 0!important;
    word-wrap: break-word;
`;

const ComponentBtnFacebook = styled(NormalizedA)`
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

export class ComponentHeaderModalRegister extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            nombre: '',
            typeErrorNombre: 0,
            email: '',
            typeErrorEmail: 0,
            clave: '',
            reclave: '',
            typeErrorClave: 0
        };

        this.changeNombre = this.changeNombre.bind(this);
        this.blurNombre = this.blurNombre.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.blurEmail = this.blurEmail.bind(this);
        this.changeClave = this.changeClave.bind(this);
        this.blurClave = this.blurClave.bind(this);
        this.changeReClave = this.changeReClave.bind(this);
        this.blurReClave = this.blurReClave.bind(this);
        this.FormSubmitPreValidate = this.FormSubmitPreValidate.bind(this);
    }

    changeNombre (event: any) {
        let { value } = event.target;

        /**
         * Validacion del campo INPUT ~> NOMBRE
         */
        let typeErrorNombre = (value.length <= 0) ? 1 : ( !(/^[a-zA-Z\s]+$/.test(value)) ) ?
            3 : (value.length < 2) ? 2 : 0
        /**
         * Validacion del campo INPUT ~> NOMBRE
         */

        this.setState({ nombre: value, typeErrorNombre });
    }
    
    blurNombre (event: any) {
        let { value } = event.target;
        /**
         * Validacion del campo INPUT ~> NOMBRE
         */
        if (value.length <= 0)
            this.setState({ typeErrorNombre: 1 });
        /**
         * Validacion del campo INPUT ~> NOMBRE
         */
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
        let { reclave, typeErrorClave, typeErrorReClave } = this.state;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        typeErrorClave = (value.length <= 0) ? 1 : typeErrorClave;
        typeErrorReClave = (reclave.length <= 0) ? 1 : (value !== reclave) ? 2 : (reclave.length < 6) ? 6 : 0;
        /**
         * Validacion del campo INPUT ~> CLAVE
         */
        this.setState({ typeErrorClave, typeErrorReClave });
    }

    changeReClave (event: any) {
        let { value } = event.target;
        let { clave } = this.state;
        /**
         * Validacion del campo INPUT ~> RECLAVE
         */
        let typeErrorReClave = (value.length <= 0) ? 1 : (value !== clave) ? 2 : (value.length < 6) ? 3 : 0;
        /**
         * Validacion del campo INPUT ~> RECLAVE
         */
        this.setState({ reclave: value, typeErrorReClave });
    }

    blurReClave (event: any) {
        let { value } = event.target;
        let { clave } = this.state;
        /**
         * Validacion del campo INPUT ~> RECLAVE
         */
        let typeErrorReClave = (value.length <= 0) ? 1 : (value !== clave) ? 2 : (value.length < 6) ? 3 : 0;
        /**
         * Validacion del campo INPUT ~> RECLAVE
         */
        this.setState({ typeErrorReClave });
    }

    FormSubmitPreValidate (event: any) {
        let { nombre, typeErrorNombre, email, typeErrorEmail, clave, typeErrorClave, reclave, typeErrorReClave } = this.state;
        let TypeErrorSum = typeErrorNombre + typeErrorEmail + typeErrorClave + typeErrorReClave;
        /**
         * Validacion PRE-SUBMIT
         */
        if ( TypeErrorSum > 0 || nombre.length === 0 || email.length === 0 || clave.length === 0 || reclave.length === 0)
            event.preventDefault();
        /**
         * Validacion PRE-SUBMIT
         */
    }

    render() {
        let { nombre, typeErrorNombre, email, typeErrorEmail, clave, typeErrorClave, reclave, typeErrorReClave } = this.state;

        return(
            <ModalGeneric clickModal={this.props.changeModalRegister}>
                <ComponentMainModalRegister>

                    <ButtonCloseModal changeEvent={this.props.changeModalRegister}/>

                    <ComponentBodyRegister>

                        <ComponentRegisterRight>

                            <ComponentTitleRegister>Regístrate fácil</ComponentTitleRegister>
                            
                            <ComponentRegistrerText>Por favor, ingrese sus datos:</ComponentRegistrerText>
                            
                            <ComponentFormRegister onSubmit={this.FormSubmitPreValidate} action="#">




                                <ComponentContentInput>
                                    <ComponentInput
                                        showError={ (typeErrorNombre > 0) }
                                        onBlur={this.blurNombre}
                                        onChange={this.changeNombre}
                                        type="text" name="nombre"
                                        placeholder="Ingresa tu Nombre" maxlength="30" data-id="txtNombre" />
                                    <ComponentTagError show={ (typeErrorNombre === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorNombre === 2) }>
                                        Por favor, introduzca al menos 2 caracteres.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorNombre === 3) }>
                                        Por favor, ingrese solo letras.
                                    </ComponentTagError>
                                </ComponentContentInput>


                                <ComponentContentInput>
                                    <ComponentInput
                                        showError={ (typeErrorEmail > 0) }
                                        onChange={this.changeEmail}
                                        onBlur={this.blurEmail}
                                        type="text" name="email"
                                        placeholder="Ingresa tu Email" maxlength="50" data-id="txtEmail" />
                                    <ComponentTagError show={ (typeErrorEmail === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorEmail === 2) }>
                                        Por favor, introduce una dirección de correo electrónico válida.
                                    </ComponentTagError>
                                </ComponentContentInput>

                                <ComponentContentInput>
                                    <ComponentInput
                                        showError={ (typeErrorClave > 0) }
                                        onChange={this.changeClave}
                                        onBlur={this.blurClave}
                                        type="password" name="clave"
                                        placeholder="Contraseña" maxlength="50" data-id="txtPassword" />
                                    <ComponentTagError show={ (typeErrorClave === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorClave === 2) }>
                                        Por favor, introduzca al menos 6 caracteres.
                                    </ComponentTagError>
                                </ComponentContentInput>

                                <ComponentContentInput>
                                    <ComponentInput
                                        showError={ (typeErrorReClave > 0) }
                                        onChange={this.changeReClave}
                                        onBlur={this.blurReClave}
                                        type="password" name="confirm"
                                        placeholder="Repetir Contraseña" maxlength="50" data-id="txtConfirm" />
                                    <ComponentTagError show={ (typeErrorReClave === 1) }>
                                        Campo requerido.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorReClave === 2) }>
                                        Las contraseñas no coinciden.
                                    </ComponentTagError>
                                    <ComponentTagError show={ (typeErrorReClave === 3) }>
                                        Por favor, introduzca al menos 6 caracteres.
                                    </ComponentTagError>
                                </ComponentContentInput>

                                <input type="hidden" name="terms" value="true"/>
                                <input type="hidden" name="opt" value="true"/>

                                <ComponentTermsRegister>
                                    <ComponentTermsRegisterBlock>
                                        Al registrarme estoy de acuerdo con los&nbsp;
                                        <ComponentTermsRegisterLink
                                            href="http://centraldeayuda.urbania.pe/entries/20835232-Terminos-y-Condiciones">
                                            Términos y Condiciones y
                                        </ComponentTermsRegisterLink>
                                        <ComponentTermsRegisterLink
                                            href="http://centraldeayuda.urbania.pe/entries/20835232-Terminos-y-Condiciones">
                                            &nbsp;Políticas de Privacidad&nbsp;
                                        </ComponentTermsRegisterLink>
                                        de Urbania
                                    </ComponentTermsRegisterBlock>
                                </ComponentTermsRegister>

                                <ComponentContainerBtn>
                                    <ComponentBtnSubmit type="submit" value="Regístrate"/>
                                </ComponentContainerBtn>

                            </ComponentFormRegister>
                        
                        </ComponentRegisterRight>

                        <ComponentRegisterLeft>

                            <ComponentTermsRegisterLeft>
                                Ó Conéctate con Facebook
                            </ComponentTermsRegisterLeft>
                            <ComponentTermsRegisterLeft>
                                Al registrarme estoy de acuerdo con los&nbsp;
                                <ComponentTermsRegisterLink
                                    href="http://centraldeayuda.urbania.pe/entries/20835232-Terminos-y-Condiciones">
                                    Términos y Condiciones y
                                </ComponentTermsRegisterLink>
                                <ComponentTermsRegisterLink
                                    href="http://centraldeayuda.urbania.pe/entries/20835232-Terminos-y-Condiciones">
                                    &nbsp;Políticas de Privacidad&nbsp;
                                </ComponentTermsRegisterLink>
                                de Urbania
                            </ComponentTermsRegisterLeft>

                            <ComponentContainerBtnFacebook>
                                <ComponentBtnFacebook href="javascript:;" title="Facebook">
                                    <ComponentBtnFacebookImg
                                        src="https://cds.urbania.g3c.pe/atomic/img/icon_facebook.png?201802141511"/>
                                    <span>Ingresar con Facebook</span>
                                </ComponentBtnFacebook>
                            </ComponentContainerBtnFacebook>

                        </ComponentRegisterLeft>

                    </ComponentBodyRegister>

                </ComponentMainModalRegister>
            </ModalGeneric>
        )
    }
}



export const HeaderModalRegister = styled(ComponentHeaderModalRegister)`
`;
