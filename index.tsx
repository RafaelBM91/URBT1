import * as React from 'react';
import styled, { injectGlobal, css } from 'styled-components';

import { HeaderLogo } from "./header-logo/HeaderLogo";
import { HeaderPredictiveSearch } from "./header-predictive-search/HeaderPredictiveSearch";
import { HeaderMenuResponsive } from "./header-menu-responsive/HeaderMenuResponsive";
import { HeaderMenu } from "./header-menu/HeaderMenu";
import { HeaderSession } from "./header-session/HeaderSession";

import {
    Header as NormalizedHeader
} from 'normalized-styled-components';
import { lchmod } from 'fs';

interface Props {
    className?: any;
}

interface State {
    ResponsiveOpenSearch?: boolean;
    ResponsiveOpenMenu?: boolean;
} 

const ComponentBWrapHeader = styled.div`
    background-color: #fff;
    font-family: bariol-regular;
    border-bottom: 2px solid #8cb420;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 18px 0 22px;
    min-height: 78px;

    @media screen and (max-width: 1064px) {
        padding: 0 7px 0 11px;
    }

    @media screen and (max-width: 959px) {
        padding: 0;
        min-height: 60px;
        border-bottom: 1px solid #8cb420;
    }

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`;

const ComponentBSearch = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 510px;
    margin-right: 26px;
    position: relative;

    @media screen and (max-width: 959px) {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 0;
    }
`;

const ComponentBurgerButton = styled.span`
    display: none;
    font-size: 31px;
    color: #7b7b7b;
    cursor: pointer;
    position: absolute;
    @media screen and (max-width: 959px) {
        display: inline-block;
        left: 5px;
        top: 14px;
    }
`;

const ComponentBMenu = styled.div`
    /* .b-menu */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 1 700px;
    flex: 0 1 700px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;

    @media screen and (max-width: 959px) {
        display: none;
    }
`;

interface ComponentShadowHeader {
    open?: boolean;
}

const ComponentShadowHeader = styled.div`
    /* b-shadow-header js-shadow-header */
    z-index: 1000;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65,66,75,.4);
    box-sizing: border-box;
    outline: 0!important;

    transition: opacity 200ms ease-in-out;

    ${(p: ComponentShadowHeader) => p.open && css`
        @media screen and (max-width: 959px) {
            display: block;
        }
    `}
`;

export class ComponentHeader extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            ResponsiveOpenSearch: false,
            ResponsiveOpenMenu: false
        }

        this.changeOpenResponsiveSearch = this.changeOpenResponsiveSearch.bind(this);
        this.changeOpenResponsiveMenu = this.changeOpenResponsiveMenu.bind(this);
        this.clickShadowHeader = this.clickShadowHeader.bind(this);
    }

    changeOpenResponsiveSearch () {
        let { ResponsiveOpenSearch } = this.state;

        ResponsiveOpenSearch = !ResponsiveOpenSearch;

        this.setState({ ResponsiveOpenSearch });
    }

    changeOpenResponsiveMenu () {
        let { ResponsiveOpenMenu } = this.state;

        ResponsiveOpenMenu = !ResponsiveOpenMenu;

        this.setState({ ResponsiveOpenMenu });
    }

    clickShadowHeader () {
        let { ResponsiveOpenSearch } = this.state;

        if (ResponsiveOpenSearch) {
            this.changeOpenResponsiveSearch();
        } else {
            this.changeOpenResponsiveMenu();
        }
    }

    render() {
        return(
            <React.Fragment>
                <NormalizedHeader className={this.props.className} onKeyPress={() => { console.log('hola') }}>
                    <ComponentBWrapHeader>

                        <ComponentBSearch>
                            <ComponentBurgerButton onClick={this.changeOpenResponsiveMenu}>
                                <i className="fas fa-bars"></i>
                            </ComponentBurgerButton>
                            <HeaderLogo/>
                            <HeaderPredictiveSearch
                                changeOpenResponsiveSearch={this.changeOpenResponsiveSearch}
                                ResponsiveOpenSearch={this.state.ResponsiveOpenSearch} />
                        </ComponentBSearch>

                        <ComponentBMenu>
                            <HeaderMenu/>
                            <HeaderSession/>
                        </ComponentBMenu>

                    </ComponentBWrapHeader>
                </NormalizedHeader>

                <HeaderMenuResponsive
                    show={this.state.ResponsiveOpenMenu}
                    changeOpenResponsiveMenu={this.changeOpenResponsiveMenu} />

                <ComponentShadowHeader
                    open={this.state.ResponsiveOpenSearch || this.state.ResponsiveOpenMenu}
                    onClick={this.clickShadowHeader} />

            </React.Fragment>
        )
    }
}

export const Header = styled(ComponentHeader)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 60px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    box-sizing: border-box;
    outline: 0!important;
`;