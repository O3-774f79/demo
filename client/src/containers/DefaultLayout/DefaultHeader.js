import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge,Nav, NavItem, NavLink,Button } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
// import logo from '../../assets/img/brand/logo.svg'
import logo from '../../assets/img/brand/11.png'

import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        {/* <AppNavbarBrand
          full={{ src: logo, width: 70, height: 50, }}
        /> */}
        {/* <AppSidebarToggler className="d-md-down-none" display="lg" /> */}
        <h3>HRLeaderplanet</h3>
        {/* <img src={logo} width={70} height={50} /> */}
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <div style={{marginRight: 10,frontSize: 30}}>นาย สมชาย สามารถ</div>
        </Nav>
        {/* <div><Button block color="light"className="btn-pill">ออกจากระบบ</Button></div> */}
        {/* <AppAsideToggler className="d-md-down-none" /> */}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
