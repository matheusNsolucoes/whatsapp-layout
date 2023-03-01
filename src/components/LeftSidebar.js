import React, { Component, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TbQrcode } from 'react-icons/tb';
import { isMobileOnly } from 'react-device-detect';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import * as FeatherIcon from 'react-feather';

import AppMenu from './AppMenu';
import profilePic from '../assets/images/users/avatar-7.jpg';
import QRCodeModal from './QRCodeModal';
import { useModalContext } from '../modal.context';
import { ListInstance } from '../services/api';
import ListItem from './ListItem';
import defaultPic from '../assets/images/defaultPic.jpg';
import { useCookies } from 'react-cookie';

/**
 * User Widget
 */
const UserProfile = () => {
    const [allIns, setIns] = useState([]); // instância ou "ID" dos usuários
    const [cookies, setCookie] = useCookies('[userIns]');

    const {
        modalState: { visible },
        openModal,
    } = useModalContext();

    useEffect(() => {
        // lista as instâncias do usuário dono do token requerido do localStorage
        const listIns = async () => {
            let data = await ListInstance({
                userToken: localStorage.getItem('userToken'),
            });
            setIns(data.data);
        };
        listIns();
    }, []);

    const setCurrentKey = (instance) => {
        localStorage.setItem('userIns', instance);
        window.location = `/${instance}/dashboard`
    };

    return (
        <React.Fragment>
            {visible && <QRCodeModal />}
            <div className="media user-profile mt-2 mb-2">
                <img src={profilePic} className="avatar-sm rounded-circle mr-2" alt="Shreyu" />
                <img src={profilePic} className="avatar-xs rounded-circle mr-2" alt="Shreyu" />

                <UncontrolledDropdown className="align-self-center profile-dropdown-menu">
                    <DropdownToggle
                        data-toggle="dropdown"
                        tag="button"
                        className="btn btn-link p-0 dropdown-toggle mr-0">
                        <div className="media-body" style={{ marginRight: '30px' }}>
                            <h6 className="pro-user-name mt-0 mb-0">Shreyu N</h6>
                            <span className="pro-user-desc">Administrator</span>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu
                        center
                        className="topbar-dropdown-menu profile-dropdown-items"
                        style={{ minWidth: '20rem', padding: '6px' }}>
                        <h6>Suas Instâncias: </h6>
                        <DropdownItem divider />
                        {allIns.map((instance, index) => {
                            return (
                                <ListItem
                                    key={index} // Gera uma lista para todos os usuários que resultaram da busca, renderizando o componente ListItem para cada um.
                                    name={instance}
                                    image={defaultPic}
                                    onClick={() => setCurrentKey(instance)}
                                />
                            );
                        })}
                    </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown className="align-self-center profile-dropdown-menu">
                    <DropdownToggle data-toggle="dropdown" tag="button" className="btn btn p-0 dropdown-toggle mr-0">
                        <FeatherIcon.ChevronDown />
                    </DropdownToggle>
                    <DropdownMenu right className="topbar-dropdown-menu profile-dropdown-items">
                        <Link to="/" className="dropdown-item notify-item">
                            <FeatherIcon.User className="icon-dual icon-xs mr-2" />
                            <span>Minha Conta</span>
                        </Link>
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => openModal()}
                            className="dropdown-item notify-item">
                            <TbQrcode className="icon-dual icon-xs mr-2" />
                            <span>QR Code</span>
                        </div>
                        <Link to="/" className="dropdown-item notify-item">
                            <FeatherIcon.Settings className="icon-dual icon-xs mr-2" />
                            <span>Configurações</span>
                        </Link>
                        <Link to="/" className="dropdown-item notify-item">
                            <FeatherIcon.HelpCircle className="icon-dual icon-xs mr-2" />
                            <span>Suporte</span>
                        </Link>
                        <Link to="/" className="dropdown-item notify-item">
                            <FeatherIcon.Lock className="icon-dual icon-xs mr-2" />
                            <span>Tela de bloqueio</span>
                        </Link>
                        <DropdownItem divider />
                        <Link to="/account/logout" className="dropdown-item notify-item">
                            <FeatherIcon.LogOut className="icon-dual icon-xs mr-2" />
                            <span>Sair</span>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        </React.Fragment>
    );
};

/**
 * Sidenav
 */
const SideNav = () => {
    return (
        <div className="sidebar-content">
            <div id="sidebar-menu">
                <AppMenu />
            </div>
        </div>
    );
};

class LeftSidebar extends Component {
    menuNodeRef;

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleOtherClick = this.handleOtherClick.bind(this);
    }

    /**
     * Bind event
     */
    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Bind event
     */
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleOtherClick, false);
    };

    /**
     * Handle the click anywhere in doc
     */
    handleOtherClick = (e) => {
        if (this.menuNodeRef.contains(e.target)) return;
        // else hide the menubar
        if (document.body && isMobileOnly) {
            document.body.classList.remove('sidebar-enable');
        }
    };

    /**
     * Handle click
     * @param {*} e
     * @param {*} item
     */
    handleClick(e) {
        console.log(e);
    }

    render() {
        const isCondensed = this.props.isCondensed || false;

        return (
            <React.Fragment>
                <div className="left-side-menu" ref={(node) => (this.menuNodeRef = node)}>
                    <UserProfile />
                    {!isCondensed && (
                        <PerfectScrollbar>
                            <SideNav />
                        </PerfectScrollbar>
                    )}
                    {isCondensed && <SideNav />}
                </div>
            </React.Fragment>
        );
    }
}

export default connect()(LeftSidebar);
