import { getCategories, httpMethods } from 'apimanager/Environment';
import NetworkManager from 'apimanager/NetworkManager';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getProducts } from 'reduxclasses/ActionCreators/ProductActionCreator';
import './Product.scss';
import ProductItem from './ProductItem/ProductItem';

const Product = (props) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        NetworkManager.request(getCategories, httpMethods.get)
            .then((res) => {
                console.log(res, "res");
                setLoading(false)
                if (res.status === 200) {
                    props.dispatch(getProducts(res.data[0].items))
                    setData(res.data)
                    setError(false)
                }
                else {
                    setError(true)
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }
    console.log(props.product, "props");

    return (
        <div className="product-container">
            {loading === true && <p>Loading...</p>}
            {error === true && <p>There was an error while loading.</p>}
            {loading === false && !error && data.length > 0 &&
                <div className="product-container__sub">
                    <h2>{data[0].category}</h2>
                    <Row className="product-container__sub-row">
                        {data[0].items !== undefined && data[0].items.map((item, index) => {
                            return (
                                <Col lg="4" md="4" sm="6" xs="12" style={{ width: "300px" }}>
                                    <ProductItem item={item} key={index} index={index} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        product: state.product
    }
}



export default connect(mapStateToProps)(Product);
