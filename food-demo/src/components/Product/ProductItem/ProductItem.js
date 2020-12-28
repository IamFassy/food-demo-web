import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addQuantity, addToCart, subtractQuantity } from 'reduxclasses/ActionCreators/ProductActionCreator';
import './ProductItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductItem = ({ item, dispatch, product, addedItems }) => {


    const handleClick = (id) => {
        dispatch(addToCart(id))
    }

    const handleAddQuantity = (id) => {
        dispatch(addQuantity(id));
    }

    const handleRemoveQuantity = (id) => {
        dispatch(subtractQuantity(id));
    }

    return (
        <div className="product-item">
            <div className="product-item-container">
                <div className={item.inStock ? "product-item-container__top" : "product-item-container__top-inactive"} >

                    <img src={item.img} className="product-item-container__top-image" style={{ opacity: item.inStock ? 1 : 0.5 }} />
                    {!item.inStock &&
                        <div className="product-item-container__top-stock">
                            <span>OUT OF STOCK</span>
                        </div>}


                </div>
                <div className="product-item-container__bottom">
                    <h5>
                        {item.name}
                    </h5>
                    <span>{item.quantity}</span>
                    <Row style={{ alignItems: "center" }}>
                        <Col lg="7">
                            <h5>
                                {'\u20B9'}  {item.price}
                            </h5>
                        </Col>
                        {item.inStock && (item === undefined || item.addedQuantity === 0 || addedItems.length === 0) && <Col lg="5" className="product-item-container__bottom-button">
                            <button type="button" onClick={() => handleClick(item.itemId)} style={{ outline: "none" }} className="product-item-container__bottom-button-count"  >
                                ADD
                            </button>

                        </Col>}
                        {item.inStock && item?.addedQuantity > 0 &&
                            <Col lg="5" className="product-item-container__bottom-button">
                                <Row style={{ justifyContent: "space-between" }}>
                                    <button type="button" onClick={() => handleRemoveQuantity(item.itemId)} style={{ outline: "none" }} className="product-item-container__bottom-button-count"  >
                                        <FontAwesomeIcon icon="minus" size={16} color="#CE2E35" />
                                    </button>
                                    <span>
                                        {item.addedQuantity}
                                    </span>
                                    <button type="button" onClick={() => handleAddQuantity(item.itemId)} style={{ outline: "none" }} className="product-item-container__bottom-button-count"  >
                                        <FontAwesomeIcon icon="plus" size={16} color="#CE2E35" />
                                    </button>
                                </Row>

                            </Col>}
                        {!item.inStock &&
                            <Col>
                                <span className="product-item-container__bottom-notify">NOTIFY ME</span>
                            </Col>}

                    </Row>

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product,
        items: state.product.items,
        addedItems: state.product.addedItems,
    }
}

export default connect(mapStateToProps)(ProductItem)
