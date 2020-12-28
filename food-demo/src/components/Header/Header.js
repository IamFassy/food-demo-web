import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <header>
            <div className="header-container">
                <a className="header-container__link">
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon="shopping-cart" size={25} color="#000000" />
                            {props.count > 0 && <div className="header-container__link-count">
                                <span>{props.count}</span>
                            </div>}
                        </Col>
                        <Col>
                            <span className="header-container__link-title">CART</span>
                        </Col>

                    </Row>

                </a>

            </div>
        </header>

    )
}

const mapStateToProps = state => {
    return {
        count: state.product.count
    }
}

export default connect(mapStateToProps)(Header);
