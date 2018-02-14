import * as React from 'react';
import styled, { css } from 'styled-components';

import { HeaderMenuItem } from "../header-menu-item/HeaderMenuItem";
import DataMenu from "./menu.config";

interface Props {
    className?: any;
}

interface State {}

export class ComponentHeaderMenu extends React.Component<Props, State> {
    render () {
        return (
            <ul className={this.props.className}>
                {
                    DataMenu.map((obj, id) => {
                        return (
                            <HeaderMenuItem
                                key={id}
                                Detail={obj} />
                        )
                    })
                }
            </ul>
        );
    }
}

export const HeaderMenu = styled(ComponentHeaderMenu)`
    flex: 0 1 530px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    -webkit-box-flex: 0;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
`;