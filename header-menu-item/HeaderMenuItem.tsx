import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    A as NormalizedA
} from 'normalized-styled-components';

import { HeaderSubmenu } from "../header-submenu/HeaderSubmenu";

interface Props {
    className?: any;
    ListItems?: Array<any>;
    Detail?: any;
}

interface State {
    showSubMenu?: boolean;
}

interface ComponentLinkMenu {
    classAdd?: Array<string>;
}

const ComponentLinkMenu = styled(NormalizedA)`
    display: flex;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    color: #888;
    text-decoration: none;
    font-size: 17px;
    background-color: transparent;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
    cursor: pointer;

    ${(props: ComponentLinkMenu) => 
        (props.classAdd.length > 1) ?
            (props.classAdd[1] === 'e-menu-interbank') && css`
        color: #44aa5f!important;
        font-weight: 700;
        text-align: center;
        margin: 0px;
        max-width: 64px;
        line-height: 1;
        margin: auto;
        margin-top: 14px!important;
    ` : css`` }

    &::after {
        bottom: -1px;
        border-bottom: 10px solid #fff;
    }

    &::before {
        display: none;
        content: ' ';
        width: 0;
        height: 0;
        position: absolute;
        left: 50%;
        z-index: 1100;
        margin-left: -10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        bottom: 0px;
        border-bottom: 10px solid #dcddde
    }

`;

interface ComponenteArrowStatic {
    show?: boolean;
}

const ComponenteArrowStatic = styled.span`
    width: 0;
    height: 0;
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #4d4d4d;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: -45px;
    margin: auto;

    ${(props: ComponenteArrowStatic) => (!props.show) && css`
        display: none;
    `}
`;

export class ComponentHeaderMenuItem extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            showSubMenu: false
        };

        this.changeOverItemMenu = this.changeOverItemMenu.bind(this);
        this.changeLeaveItemMenu = this.changeLeaveItemMenu.bind(this);
    }

    changeOverItemMenu () {
        this.setState({ showSubMenu: true });
    }

    changeLeaveItemMenu () {
        this.setState({ showSubMenu: false });
    }

    render () {
        return (
            <li
                className={this.props.className}
                onMouseOver={this.changeOverItemMenu}
                onMouseLeave={this.changeLeaveItemMenu} >
                <ComponentLinkMenu classAdd={this.props.Detail.classAdd}>
                    { this.props.Detail.name }
                    <ComponenteArrowStatic
                        show={ (this.props.Detail.sub_menu.length > 0) } />
                </ComponentLinkMenu>
                
                {
                    (this.props.Detail.sub_menu.length > 0)
                    ?
                        <HeaderSubmenu
                            Submenu={this.props.Detail.sub_menu}
                            show={this.state.showSubMenu} />
                    :
                        ''
                }

            </li>
        );
    }
}

export const HeaderMenuItem = styled(ComponentHeaderMenuItem)`
    display: flex;
    position: relative;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    list-style: none;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;

    ${(props: Props) => 
        (props.Detail.classAdd.length > 0) ?
            (props.Detail.classAdd[0] === 'e-menu-interbank') && css`
        display: block!important;
    `: undefined }

    ${(props: Props) => /* si no tiene submeno no aplica el estilo */
        (props.Detail.sub_menu.length > 0) && css`
        &:hover > a::before {
            display: block;
        }

        &:hover > a::after {
            content: ' ';
            width: 0;
            height: 0;
            position: absolute;
            left: 50%;
            z-index: 1100;
            margin-left: -10px;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
    `}

    &:hover > a {
        color: #8cb420;
    }
`;