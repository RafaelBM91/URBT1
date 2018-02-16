import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface Props {
    className?: any;
    Show?: boolean;
    clickShadowHeader?: any;
}

export class ComponentHeaderShadow extends React.Component<Props, {}> {
    componentDidMount () {
        const element = document.getElementById('ShadowHeader');
        element.addEventListener('animationend', () => {
            let { Show } = this.props;
            element.style.display = (Show) ? 'block' : '';
        });
    }

    render () {
        return (
            <div
                id="ShadowHeader"
                className={this.props.className}
                onClick={this.props.clickShadowHeader}></div>
        );
    }
}

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const FadeOut = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`;

export const HeaderShadow = styled(ComponentHeaderShadow)`
    /* b-shadow-header js-shadow-header */
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65,66,75,.4);
    box-sizing: border-box;
    outline: 0!important;
    display: none;

    animation: ${FadeOut} .8s linear forwards;

    ${(props: Props) => props.Show && css`
        animation: ${FadeIn} 1.4s linear forwards;
        display: block;
    `}
`;