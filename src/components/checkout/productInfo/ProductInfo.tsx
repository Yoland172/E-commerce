import React, { useState } from 'react';
import styles from './ProductInfo.module.scss';
import Divider from '@components/ui/divider/Divider';
import { CartItem, PaymentsMethod } from '@lib/types/Types';
import ProductItem from './ProductItem/ProductItem';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Loader from '@components/ui/loader/Loader';
import PayPalIcon from '@components/ui/icon/paymentMethods/PayPalIcon';
import GooglePayIcon from '@components/ui/icon/paymentMethods/GooglePayIcon';
import ApplePayIcon from '@components/ui/icon/paymentMethods/ApplePayIcon';

interface PriceInfoProps {
    products: CartItem[];
    discountedTotal: number;
    expressPaymentAction: (paymentType: string) => void;
    paymentsMethod: PaymentsMethod;
    setPaymentsMethod: (paymentMethod:PaymentsMethod) => void;
}

const ProductInfo = ({
    products,
    discountedTotal,
    expressPaymentAction,
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
            <div className={styles.expressPaymentContainer}>
                <button
                    className={classNames(styles.paymentButton, styles.paypalTheme)}
                    value={'payPal'}
                    onClick={(e) => {
                        expressPaymentAction(PaymentsMethod.PayPal);
                        setPaymentsMethod(PaymentsMethod.PayPal);
                    }}
                    disabled={paymentsMethod === PaymentsMethod.PayPal}
                >
                    {paymentsMethod === PaymentsMethod.PayPal ? <Loader /> : <PayPalIcon width={50} height={20} />}
                </button>
                <button
                    className={classNames(styles.paymentButton, styles.googlePayTheme)}
                    onClick={(e) => {
                        expressPaymentAction(PaymentsMethod.GooglePay);
                        setPaymentsMethod(PaymentsMethod.GooglePay);
                    }}
                    disabled={paymentsMethod === PaymentsMethod.GooglePay}
                >
                    {paymentsMethod === PaymentsMethod.GooglePay ? <Loader /> : <GooglePayIcon width={50} height={20} />}
                </button>
                <button
                    className={classNames(styles.paymentButton, styles.applePayTheme)}
                    onClick={(e) => {
                        expressPaymentAction(PaymentsMethod.ApplePay);
                        setPaymentsMethod(PaymentsMethod.ApplePay);
                    }}
                    disabled={paymentsMethod === PaymentsMethod.ApplePay}
                >
                    {paymentsMethod === PaymentsMethod.ApplePay ? <Loader /> : <ApplePayIcon width={50} height={20} />}
                </button>
            </div>
        </div>
    );
};

export default ProductInfo;
