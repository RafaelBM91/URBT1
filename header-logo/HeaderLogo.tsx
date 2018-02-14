import * as React from 'react';
import styled from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA
} from 'normalized-styled-components';

interface Props {
    className?: any;
}

const ComponentELogo = styled(NormalizedImg)`
    width: 146px;
    border-style: none;
`;

export class ComponentHeaderLogo extends React.Component<Props, {}> {
    render() {
        return(
            <NormalizedA href="/" className={this.props.className}>
                <ComponentELogo src="https://cds.urbania.g3c.pe/atomic/img/logo-urbania.svg?201802051033"/>
            </NormalizedA>
        )
    }
}

export const HeaderLogo = styled(ComponentHeaderLogo)`
    display: inline-block;
    display: -ms-inline-grid;
    text-decoration: none;
    color: #000;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
`;
