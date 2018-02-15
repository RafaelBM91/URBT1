import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

import { HeaderMenuItem } from "../header-menu-item/HeaderMenuItem";

const modalContainer = document.getElementById('modal-container');

interface Props {
    className?: any;
    clickModal?: any;
}

interface State {}

interface ComponentModalGeneric {
    el?: any;
}

const ComponentFoundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 2100;
    display: flex;
    right: 0;
    height: 100vh;
    width: 100vw;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    outline: 0!important;
    font-family: sans-serif;
`;

class ComponentModalGeneric extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.el = document.createElement('div');

        this.clickModal = this.clickModal.bind(this);
        this.KeyUpAllApp = this.KeyUpAllApp.bind(this);
    }

    componentDidMount () {
        modalContainer.appendChild(this.el);

        window.addEventListener('keyup', this.KeyUpAllApp, false);
    }

    componentWillUnmount() {
        modalContainer.removeChild(this.el);

        window.removeEventListener('keyup', this.KeyUpAllApp, false);
    }

    clickModal (event: any) {
        if (event.target.id === 'ParentControl--Flag') {
            this.props.clickModal();
        }
    }

    KeyUpAllApp (event: any) {
        if (event.keyCode === 27) {
            this.props.clickModal();
        }
    }

    render () {
        return ReactDOM.createPortal(
            <ComponentFoundContainer id="ParentControl--Flag" onClick={this.clickModal}>
                { this.props.children }
            </ComponentFoundContainer>,
            this.el,
          );
    }
}

export const ModalGeneric = styled(ComponentModalGeneric)``;