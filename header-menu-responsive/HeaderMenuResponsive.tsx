import * as React from 'react';
import styled, { css } from 'styled-components';

import {
    Img as NormalizedImg,
    A as NormalizedA,
    Hr as NormalizedHr,
    Nav as NormalizedNav
} from 'normalized-styled-components';

import { Component } from 'react';

interface Props {
    className?: any;
    show?: boolean;
    changeOpenResponsiveMenu?: any;
}

interface State {}

const ComponentLogoContent = styled.div`
    /* b-logo-content */
    margin: 31px 18px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    box-sizing: border-box;
    outline: 0!important;
`;

const ComponetLinkLogo = styled(NormalizedA)`
    display: inline-block;
    color: #000;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    font-family: sans-serif;
`;

const ComponentImgLogo = styled(NormalizedImg)`
    width: 54px;
    border-style: none;
    box-sizing: border-box;
    outline: 0!important;
    color: #000;
    font-family: sans-serif;
`;

const ComponentControlMain = styled.span`
    /* e-control-main icon-arrow-down js-shadow-header */

    /* transform: rotate(90deg); */
    color: #fff;
    font-size: 25px;
    margin-left: auto;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    display: block;
    font-family: Icons-webfont;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-decoration: inherit;
    text-transform: none;
    vertical-align: middle;
    box-sizing: border-box;
    outline: 0!important;
    background: transparent;
`;

const ComponentHr = styled(NormalizedHr)`
    width: 90%;
    border: 1px solid #484848;
    border-top: none;
    margin-top: 16px;
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    outline: 0!important;
    font-family: sans-serif;
`;

const ComponentContentItems = styled(NormalizedNav)`
    display: block;
    box-sizing: border-box;
    outline: 0!important;
    font-family: sans-serif;
`;

const ComponentMenuItems = styled.ul`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0!important;
    font-family: sans-serif;
`;

const ComponentItem = styled.li`
    font-family: gotham-medium,arial,sans-serif;
    font-size: 14px;
    list-style: none;
    box-sizing: border-box;
    outline: 0!important;

    &:hover {
        background-color: #4f4f4f;
    }
`;

interface ComponentLinkItem {
    interbank?: boolean;
}

const ComponentLinkItem = styled(NormalizedA)`
    display: block;
    padding: 11px 24px;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    box-sizing: border-box;
    outline: 0!important;
    font-family: gotham-medium,arial,sans-serif;
    font-size: 14px;

    ${(props: ComponentLinkItem) => props.interbank && css`
        color: #44aa5f;
    `}
`;

export class ComponentHeaderMenuResponsive extends React.Component<Props, State> {
    render () {
        return (
            <div className={this.props.className}>
                <ComponentLogoContent>
                    <ComponetLinkLogo href="/">
                        <ComponentImgLogo src="https://cds.urbania.g3c.pe/atomic/img/isotipo-urbania.svg?201802122208"/>
                    </ComponetLinkLogo>
                    <ComponentControlMain onClick={this.props.changeOpenResponsiveMenu}>
                        <i className="fas fa-angle-left"></i>
                    </ComponentControlMain>
                </ComponentLogoContent>
                <ComponentHr/>
                <ComponentContentItems>
                    <ComponentMenuItems>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/buscar/venta-de-propiedades">
                                Venta
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/buscar/alquiler-de-propiedades">
                                Alquiler
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/buscar/proyectos-propiedades">
                                Proyectos
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/credito-hipotecario-interbank" interbank={true}>
                                Zona Interbank
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/indice_m2">
                                Indice m2
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/cursohol">
                                Curso de Agentes Inmobiliarios
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="http://mediakit.urbania.pe/">
                                Publicidad
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/blog">
                                Blog
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/suscribete-al-boletin">
                                Suscripción al boletín
                            </ComponentLinkItem>
                        </ComponentItem>

                        <ComponentItem>
                            <ComponentLinkItem href="https://urbania.pe/revista-urbania-premium/">
                                Revista Urbania Premium
                            </ComponentLinkItem>
                        </ComponentItem>

                    </ComponentMenuItems>
                </ComponentContentItems>
            </div>
        );
    }
}

export const HeaderMenuResponsive = styled(ComponentHeaderMenuResponsive)`
    /* b-menu-left-main js-menu-left-main b-menu-left-main--open */
    overflow-x: hidden;
    overflow-y: auto;
    width: 282px;
    height: 100%;
    position: fixed;
    top: 0;
    left: -282px;
    z-index: 1100;
    background-image: url(https://cds.urbania.g3c.pe/atomic/img/background-header.jpg?v=27446f6);
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    box-sizing: border-box;
    outline: 0!important;

    ${(props: Props) => props.show && css`
        @media screen and (max-width: 959px) {
            left: 0;
        }
    `}
`;