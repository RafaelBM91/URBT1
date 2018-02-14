import * as React from 'react';
import styled, { css } from 'styled-components';

import {
    A as NormalizedA
} from 'normalized-styled-components';

interface Props {
    className?: any;
    Submenu?: Array<any>;
    show?: boolean;
}

interface State {}

const ComponentItemSubmenu = styled.li`
    font-family: bariol-regular;
    -webkit-box-direction: normal;
    list-style: none;
    box-sizing: border-box;
    outline: 0!important;

    &:hover {
        background-color: #f0f0f0;
    }
`;

interface ComponentLinkSubmenu {
    className?: any;
}

const ComponentLinkSubmenu = styled(NormalizedA)`
    font-size: 16px;
    height: 40px;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding-left: 18px;
    display: flex;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    -webkit-box-align: center;
    align-items: center;
    color: #888;
    text-decoration: none;

    ${(props: ComponentLinkSubmenu) => (props.className === 'e-item--sub-interbank') && css`
        color: #009b3a;
    `}
`;

export class ComponentHeaderSubmenu extends React.Component<Props, State> {
    render () {
        return (
            <ul className={this.props.className}>
                {
                    this.props.Submenu.map((obj, id) =>
                        <ComponentItemSubmenu key={id}>
                            <ComponentLinkSubmenu
                                href={obj.url}
                                className={ obj.classAdd[0] } >{ obj.name }</ComponentLinkSubmenu>
                        </ComponentItemSubmenu>
                    )
                }
            </ul>
        );
    }
}

export const HeaderSubmenu = styled(ComponentHeaderSubmenu)`
    padding: 0;
    border: 1px solid #dcddde;
    z-index: 1000;
    position: absolute;
    top: 76px;
    left: -50%;
    margin: 0;
    list-style: none;
    background-color: #fff;
    width: 222px;
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-family: bariol-regular;

    ${(props: Props) => props.show && css`
        display: block !important;
    `}
`;