import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "@lib/types/Types";
import CancelCross from "@components/ui/icon/CancelCrossIcon";
import QunatityCounter from "@components/ui/qunatityCounter/QunatityCounter";
import styles from "./Cart.module.scss";

interface CartProps {
  id: number | null;
  products: CartItem[];
  total: number | null;
  discountedTotal: number | null;
  totalProducts: number | null;
  totalQuantity: number | null;
  isFetching: boolean;
  changeProductQuantity: (productId: number, quantity: number) => void;
  deleteItem: (productId: number) => void;
}

const Cart = ({
  products,
  totalProducts,
  discountedTotal,
  totalQuantity,
  total,
  isFetching,
  changeProductQuantity,
  deleteItem,
}: CartProps) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.whishlistContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.name}>Name</h2>
            <h2 className={styles.unit}>Unit Price</h2>
            <h2 className={styles.stock}>Stock status</h2>
            <h2 className={styles.action}>Actions</h2>
          </div>
          <div className={styles.sectionLine}></div>
          <div className={styles.whishlist}>
            {products.length > 0 &&
              products.map((el, index) => {
                if (el.quantity > 0) {
                  return (
                    <>
                      <div className={styles.whishlistItem} key={index}>
                        <div className={styles.deleteItemContainer}>
                          <button
                            onClick={() => {
                              deleteItem(el.id);
                            }}
                          >
                            <CancelCross width={25} height={25} />
                          </button>
                        </div>
                        <div className={styles.productPhotoContainer}>
                          <img src={el.thumbnail} alt="" />
                        </div>
                        <Link to={`/product/${el.id}`}>
                          <h3 className={styles.productName}>{el.title}</h3>
                        </Link>
                        <div className={styles.porductPriceContainer}>
                          <h4>{el.total.toFixed(2)}$</h4>
                          <h3 className={styles.porductPrice}>
                            {el.discountedTotal
                              ? el.discountedTotal.toFixed(2)
                              : el.discountedPrice?.toFixed(2)}
                            $
                          </h3>
                        </div>
                        <QunatityCounter
                          quantity={el.quantity}
                          isFetching={isFetching}
                          decrement={() => {
                            changeProductQuantity(el.id, el.quantity - 1);
                          }}
                          increment={() => {
                            changeProductQuantity(el.id, el.quantity + 1);
                          }}
                        />
                        <h3 className={styles.action}></h3>
                      </div>
                      <div className={styles.sectionLine}></div>
                    </>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <div className={styles.whishlistStatusCantainer}>
        <div className={styles.whishlistStatus}>
          <h1 className={styles.title}>Order info</h1>
          <div className={styles.sectionLine}></div>
          <div className={styles.whishlistStatusInfoContainer}>
            <div className={styles.whishlistStatusInfo}>
              <h2>
                Odrder: <span>{discountedTotal?.toFixed(2)}$</span>
              </h2>
              <h2>
                Total products: <span>{totalProducts}</span>
              </h2>
              <h2>
                Total quantity: <span>{totalQuantity}</span>
              </h2>
            </div>
            <Link to={"checkout"}>
              <button onClick={() => {}} className={styles.orderButton}>
                To order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
