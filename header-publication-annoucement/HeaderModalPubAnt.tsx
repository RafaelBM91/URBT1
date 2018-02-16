import * as React from 'react';
import styled from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA
} from 'normalized-styled-components';

import { ModalGeneric } from '../modal-generic/modal-generic';

interface Props {
    className?: any;
    changeModalRegister?: any;
}

interface State {}

export class ComponentHeaderModalRegister extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {};
    }
    render() {
        return(
            <ModalGeneric clickModal={this.props.changeModalRegister}>
                <h1>{'Register'}</h1>
            </ModalGeneric>
        )
    }
}

export const HeaderModalRegister = styled(ComponentHeaderModalRegister)`
`;
