import React, { useState } from 'react';
import styles from './ProductInfo.module.scss';
import Divider from '@components/ui/divider/Divider';
import { CartItem, PaymentsMethod } from '@lib/types/Types';
import ProductItem from './ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import PaymentButtonGroup from './PaymentButtonGroup/PaymentButtonGroup';

interface PriceInfoProps {
    products: CartItem[];
    discountedTotal: number;
    paymentsMethod: PaymentsMethod;
    setPaymentsMethod: (paymentMethod: PaymentsMethod) => void;
}

const ProductInfo = ({
    products,
    discountedTotal,
    setPaymentsMethod,
    paymentsMethod,
}: PriceInfoProps) => {
    return (
        <div className={styles.cartInfoContainer}>
            <div className={styles.productContianer}>
                {products.length > 0 &&
                    products.map((el, index) => {
                        return (
                            <>
                                <Link to={`/product/${el.id}`}>
                                    <ProductItem
                                        img={el.thumbnail}
                                        title={el.title}
                                        quantity={el.quantity}
                                        key={el.id}
                                    />
                                </Link>
                                {index !== products.length - 1 && <Divider />}
                            </>
                        );
                    })}
            </div>
            <Divider />
            <div className={styles.priceInfoContainer}>
                <div className={styles.priceInfo}>
                    <h2>Price for products</h2>
                    <h3>{discountedTotal}</h3>
                </div>
                <div className={styles.priceInfo}>
                    <h2>Shipining</h2>
                    <h3>--</h3>
                </div>
            </div>
            <Divider />
            <div className={styles.submitContainer}>
                <div className={styles.priceInfo}>
                    <h2>Total</h2>
                    <h3>{discountedTotal}</h3>
                </div>
                <button className={styles.submitButton} type='submit'>
                    Buy
                </button>
            </div>
            <div className={styles.textContainer}>
                <h2>or buy with</h2>
            </div>
            <PaymentButtonGroup
                paymentsMethod={paymentsMethod}
                setPaymentsMethod={setPaymentsMethod}
            />
        </div>
    );
};

export default ProductInfo;
