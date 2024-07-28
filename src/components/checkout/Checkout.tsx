import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './Checkout.module.scss';
import { useForm } from 'react-hook-form';
import { CartItem, PaymentsMethod } from '@lib/types/Types';
import ProductInfo from './productInfo/ProductInfo';
import UserInfoForm from './orderForms/UserInfoForm';
import ShippiningForm from './orderForms/ShippiningForm';
import PaymentForm from './orderForms/PaymentForm';
import JSONFile from '../../assets/CountryCodesWithFlagsSVG.json';
import PopUp from '@components/ui/PopUp/PopUp';
import SuccesPayment from './SuccesPayment/SuccesPayment';

interface CheckoutProps {
    products: CartItem[];
    discountedTotal: number;
}

interface CheckoutInputs {
    firstName?: string;
    lastName?: string;
    countryCode?: string;
    phoneNumber?: string;
    email?: string;
    country: string;
    city: string;
    street: string;
    houseNum: string;
    zipCode: string;
    cardNum: string;
    expDate: string;
    CVV?: string;
}

const Checkout = ({ products, discountedTotal }: CheckoutProps) => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm<CheckoutInputs>({});

    const [activePopUp, setActivePopUp] = useState<boolean>(false);
    const [paymentsMethod, setPaymentsMethod] = useState<PaymentsMethod>(PaymentsMethod.CreditCard);

    const handelSetIsExpressPayment = (paymentsMethod: PaymentsMethod) => {
        setPaymentsMethod(paymentsMethod);
        setTimeout(() => setPaymentsMethod(PaymentsMethod.CreditCard), 3000);
    };

    const onSubmit = (data: any, paymentType: string) => {
        console.log(data);
        setActivePopUp(true);
        console.log(paymentType);
    };

    const onFormSubmit = (paymentType: string) => {
        handleSubmit((data, e) => onSubmit(data, paymentType))();
    };

    useEffect(() => {
        if (paymentsMethod != PaymentsMethod.CreditCard) {
            onFormSubmit(paymentsMethod);
        }
    }, [paymentsMethod]);

    //<handel for imputs
    const formatCardInput = (event: ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        value = value
            .replace(/\s+/g, '')
            .replace(/(.{4})/g, '$1 ')
            .trim();
        setValue('cardNum', value, { shouldValidate: true });
    };

    const formatExpirationDate = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newValue = value.replace(/[^0-9]/g, '');
        if (newValue.length === 2 && value.length === 2) {
            setValue('expDate', `${newValue}/`, { shouldValidate: true });
        } else if (newValue.length <= 2) {
            setValue('expDate', newValue, { shouldValidate: true });
        } else {
            setValue('expDate', value, { shouldValidate: true });
        }
    };

    //handel for imputs>

    return (
        <form
            className={styles.container}
            onSubmit={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onFormSubmit(PaymentsMethod.CreditCard);
            }}
        >
            <div className={styles.infoContainer}>
                <UserInfoForm register={register} errors={errors} control={control} />
                <ShippiningForm register={register} errors={errors} />
                <PaymentForm
                    register={register}
                    errors={errors}
                    expDataOnChangeAction={formatExpirationDate}
                    cardNumOnChangeAction={formatCardInput}
                    paymentsMethod={paymentsMethod}
                />
            </div>
            <ProductInfo
                products={products}
                discountedTotal={discountedTotal}
                setPaymentsMethod={handelSetIsExpressPayment}
                paymentsMethod={paymentsMethod}
            />

            <PopUp active={activePopUp} setActive={setActivePopUp} closeByClickOutside={false}>
                <SuccesPayment
                    closeWindow={() => {
                        setActivePopUp(false);
                    }}
                />
            </PopUp>
        </form>
    );
};

export default Checkout;
