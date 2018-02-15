import * as React from 'react';
import styled, { css } from 'styled-components';
import {
    Img as NormalizedImg,
    A as NormalizedA
} from 'normalized-styled-components';
import axios from 'axios';

import { HeaderPredictiveSearchItems } from "../header-predictive-search-items/HeaderPredictiveSearchItems";

interface Props {
    className?: any;
    changeOpenSchadow?: any;
    ResponsiveOpenSearch?: boolean;
    changeOpenResponsiveSearch?: any;
}

interface State {
    VSearch: string;                        // ~> valor real del input
    SearchOriginal?: string;                // ~> valor original de la entrada en el input
    InputFocus: boolean;                    // ~> flag si tiene o no foco el input
    CloseListItemsNoResponsive?: boolean;   // ~> flag si o no se oculta la lista de coincidencias ante el evento blur en input
    ttCursor?: number;                      // ~> posicion del cursor ante la seleccion por arrow
    ListSuggestion?: Array<string>;         // ~> lista de coincidencis solo nombres para mostrar [string]
    ListOriginal?: Array<object>;           // ~> losta de coincidencias toda la informacion del back [object]
    LoadingInput?: boolean;                 // ~> flag show spinner
}

interface ComponentBSearchPredictive {
    open?: boolean;
}

const ComponentBSearchPredictive = styled.div`
    /* b-search-predictive js-wrapper-input-search */
    border: 1px solid #ccc;
    position: relative;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;

    @media screen and (max-width: 959px) {
        margin-left: 10px;
        border: none;
        margin: 0;
        background: #8ab31d;
        z-index: 1010;
        padding: 10px 0;
        border-radius: 0;
        position: fixed;
        top: 0;
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        right: -100%;
    }

    @media screen and (max-width: 959px) {
        ${(v: ComponentBSearchPredictive) => v.open && css`
            right: 0;
            width: 100%;
        `}
    }
`;

const ComponentTwitterTypeahead = styled.span`
    /* twitter-typeahead */
    position: relative;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;
`;

const ComponentESearchPredictive = styled.input`
    /* js-input-search e-search-predictive tt-input */
    position: relative;
    vertical-align: top;
    height: 38px;
    border: none;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 50px 0 10px;
    font-size: 13px !important;
    outline: none;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    background: 0;
    margin: 0;
    font: inherit;
    outline: 0!important;
    unicode-bidi: -webkit-isolate;
    -webkit-appearance: textfield;
    -webkit-rtl-ordering: logical;
    cursor: text;
    -webkit-box-direction: normal;

    @media screen and (max-width: 959px) {
        background-color: #fff;
        font-size: inherit !important;
        padding: 0 10px;
        border-left: 10px solid #8ab31d;
        border-right: 50px solid #8ab31d;
    }
`;

const ComponentIconSearch = styled.div`
    /* icon-search e-control-main e-search-control js-btn-search */
    color: #8cb420;
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 8px;
    z-index: 1;
    display: inline-block;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-decoration: inherit;
    text-transform: none;
    vertical-align: middle;
    box-sizing: border-box;
    outline: 0!important;
    -webkit-box-direction: normal;

    @media screen and (max-width: 959px) {
        z-index: 1010;
        right: 60px;
        top: 14px;
        font-size: 28px;
        display: none;
    }
`;

const ComponentPreSearch = styled.pre`
    /* style inline */
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-family: bariol-regular;
    font-size: 13px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    word-spacing: 0px;
    letter-spacing: 0px;
    text-indent: 0px;
    text-rendering: auto;
    text-transform: none;
    box-sizing: border-box;
    outline: 0!important;
    -webkit-box-direction: normal;
`;

const CompomentIconSearchResponsive = styled.div`
    display: none;
    font-size: 31px;
    color: #7b7b7b;
    right: 0;
    top: 14px;
    margin-right: 5px;
    cursor: pointer;
    position: absolute;
    @media screen and (max-width: 959px) {
        display: inline-block;
    }
`;

const ComponentIconCloseResponsive = styled.div`
    /* icon-close e-control-main js-search-close */
    color: #fff;
    position: absolute;
    right: 8px;
    top: 14px;
    display: none;
    font-size: 31px;
    color: #7b7b7b;
    cursor: pointer;

    @media screen and (max-width: 959px) {
        display: inline-block;
    }
`;

export class ComponentHeaderPredictiveSearch extends React.Component<Props, State> {
    constructor (props: Props) {
        super(props);

        this.state = {
            VSearch: '',
            SearchOriginal: '',
            InputFocus: false,
            CloseListItemsNoResponsive: false,
            ttCursor: -1,
            ListSuggestion: [],
            ListOriginal: [],
            LoadingInput: false
        };

        this.changeInputTextSearch = this.changeInputTextSearch.bind(this);
        this.changeFocusInputOn = this.changeFocusInputOn.bind(this);
        this.changeFocusInputOff = this.changeFocusInputOff.bind(this);
        this.SelectItem = this.SelectItem.bind(this);
        this.MouseOverListItems = this.MouseOverListItems.bind(this);
        this.MouseLeaveListItems = this.MouseLeaveListItems.bind(this);
        this.ClickIconSearch = this.ClickIconSearch.bind(this);
        this.KeyUpInputSearch = this.KeyUpInputSearch.bind(this);
    }

    changeInputTextSearch (event: any) {
        let { value } = event.target;
        this.setState({ VSearch: value, SearchOriginal: value, LoadingInput: true });

        axios.get('https://raw.githubusercontent.com/joseluisq/data-ubigeos-peru/master/json/provincias.json')
            .then(response => {
                let keys = Object.keys(response.data);
                let total = [];
                let ListSuggestion = [];
                let ListOriginal = [];

                keys.map((e) => {
                    response.data[e].map((c) => {
                        total.push(c)
                    })
                })
                
                total.filter(e => {
                    return e.buscador_ubigeo.indexOf(value) !== -1;
                } ).map(obj => {
                    ListSuggestion.push( obj.buscador_ubigeo );
                    ListOriginal.push( obj );
                })
                this.setState({ ListSuggestion: ListSuggestion.slice(0, 6), ListOriginal, LoadingInput: false, InputFocus: true });

                // TEST FOR SPINNER
                // setTimeout(() => {
                //     console.log('hola', this.state.LoadingInput)
                //     this.setState({ LoadingInput: false });
                // }, 5000)
            })
    }

    /**
     * blur ~> input
     */
    changeFocusInputOff () {
        if (this.state.CloseListItemsNoResponsive) { // si NO es responsive ok!
            this.setState({ InputFocus: false });
        }
    }

    /**
     * focus -> input
     */
    changeFocusInputOn () {
        this.setState({ InputFocus: true });
    }

    /**
     * evento ~> click selecciona item
     */
    SelectItem (obj: any) {
        /**
         * pendiente con la generacion de url
         */
        this.setState({ VSearch: '' });

        /**
         * cierra toda la formacion
         */
        if (this.props.ResponsiveOpenSearch) { // si es responsive ok!
            this.props.changeOpenResponsiveSearch();
        }
        
        alert('refesh - busqueda')
    }

    MouseOverListItems () {
        /**
         * actua sobre la lista de coincidencias
         * bloquea para cerrar la lista de coincidencias
         * en el evento ~> blur ~> input
         */
        this.setState({ CloseListItemsNoResponsive: false });
    }

    MouseLeaveListItems () {
        /**
         * actua sobre la lista de coincidencias
         * luz verde para cerrar la lista de coincidencias
         * despues de evento ~> blur ~> input
         */
        this.setState({ CloseListItemsNoResponsive: true });
    }

    ClickIconSearch () {
        alert('buscar..'); // click button search ~> crea url de consulta
    }

    KeyUpInputSearch (event: any) {
        let { ttCursor, ListSuggestion, VSearch, SearchOriginal } = this.state;
        let ptr = (ListSuggestion.length - 1);
        switch (event.keyCode) {
            case 13:
                alert('buscar..'); // press Enter ~> crea url de consulta
            break;
            case 27:
                this.setState({ InputFocus: false }); // press Esc ~> La ListItem se oculta
            break;
            /**
             * seleccion de valor por arrow
             */
            case 38: // press arrow up
                ttCursor--;
                if (ttCursor < -1) ttCursor = ptr;
                this.setState({ InputFocus: (VSearch.length > 2), ttCursor });
            break;
            case 40: // press arrow down
                ttCursor++;
                if (ttCursor > ptr) ttCursor = -1;
                this.setState({ InputFocus: (VSearch.length > 2), ttCursor });
            break;
        }

        /**
         * cambio de valor input por seleccion de arrow
         */
        if (ttCursor === -1) {
            this.setState({ VSearch: SearchOriginal });
        } else {
            if (ListSuggestion.length > 0 && ttCursor <= (ListSuggestion.length - 1) && VSearch.length > 2) {
                this.setState({ VSearch: ListSuggestion[ttCursor] });
            } else {
                this.setState({ ttCursor: -1 });
            }
        }
    }

    render() {
        return(
            <div className={this.props.className}> 
                <ComponentBSearchPredictive open={this.props.ResponsiveOpenSearch}>
                    <ComponentTwitterTypeahead>
                        <ComponentESearchPredictive
                            type="text"
                            placeholder="Buscar por distrito, descripción o código"
                            autoComplete="off"
                            onChange={this.changeInputTextSearch}
                            onFocus={this.changeFocusInputOn}
                            onBlur={this.changeFocusInputOff}
                            onKeyUp={this.KeyUpInputSearch}
                            value={this.state.VSearch} />
                        <ComponentPreSearch>{this.state.VSearch}</ComponentPreSearch>
                        <HeaderPredictiveSearchItems
                            TextSearch={this.state.VSearch}
                            ShowComponent={this.state.InputFocus && (this.state.VSearch.length > 2)}
                            SelectItem={this.SelectItem}
                            MouseOverListItems={this.MouseOverListItems}
                            MouseLeaveListItems={this.MouseLeaveListItems}
                            ListSuggestion={this.state.ListSuggestion}
                            ListOriginal={this.state.ListOriginal}
                            ttCursor={this.state.ttCursor} />
                    </ComponentTwitterTypeahead>
                    <ComponentIconCloseResponsive onClick={this.props.changeOpenResponsiveSearch}>
                        <i className="fas fa-times"></i>
                    </ComponentIconCloseResponsive>
                </ComponentBSearchPredictive>
                <CompomentIconSearchResponsive onClick={this.props.changeOpenResponsiveSearch}>
                    <i className="fas fa-search"></i>
                </CompomentIconSearchResponsive>
                <ComponentIconSearch onClick={this.ClickIconSearch}>
                    <i className={ !(this.state.LoadingInput) ? "fas fa-search" : "fas fa-spinner fa-pulse" }></i>
                </ComponentIconSearch>
            </div>
        )
    }
}

export const HeaderPredictiveSearch = styled(ComponentHeaderPredictiveSearch)`
    /* b-search-main */
    position: relative;
    width: 100%;
    margin-left: 33px;
    max-width: 330px;
    box-sizing: border-box;
    outline: 0!important;
    font-family: bariol-regular;
    -webkit-box-direction: normal;

    @media screen and (max-width: 959px) {
        position: absolute;
        top: 0;
        right: 0;
        max-width: 100%;
        margin: 0;
    }
`;
