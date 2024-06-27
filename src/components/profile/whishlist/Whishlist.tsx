import React from "react";
import styles from "./wishlist.module.scss";
import { CartItem, extractedProductsList } from "../../../types/types";
import CancelCross from "../../ui/icon/CancelCross";
import { Link } from "react-router-dom";
import MinimalisticArrowLeft from "../../ui/icon/MinimalisticArrowLeft";
import MinimalisticArrowRight from "../../ui/icon/MinimalisticArrowRight";

interface WishlistProp {
  id: number | null;
  products: CartItem[];
  total: number | null;
  discountedTotal: number | null;
  totalProducts: number | null;
  totalQuantity: number | null;
  isFetching: boolean;
  deleleteCart: (index: number) => void;
  increaseProductQuantity: (changeQuantity:extractedProductsList[]) => void;
}

const extractIdAndQuantity = (
  products: CartItem[],
  productId: number,
  quantity: number
) => {
  const extratedArray = products.map((product) => {
    return {
      id: product.id,
      quantity: product.quantity,
    };
  });
  const findedElIndex = extratedArray.findIndex((el) => el.id === productId);
  extratedArray[findedElIndex].quantity = quantity;
  console.log(extratedArray);
  return extratedArray;
}
const Wishlist = ({
  products,
  deleleteCart,
  totalProducts,
  discountedTotal,
  totalQuantity,
  total,
  isFetching,
  increaseProductQuantity,
}: WishlistProp) => {
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
                return (
                  <>
                    <div className={styles.whishlistItem} key={index}>
                      <div className={styles.deleteItemContainer}>
                        <button
                          onClick={() => {
                            deleleteCart(index);
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
                          {el.discountedTotal? el.discountedTotal.toFixed(2) : el.discountedPrice?.toFixed(2)}$
                        </h3>
                      </div>
                      <div className={styles.quantityContainer}>
                        <button
                          onClick={() => {
                            increaseProductQuantity(extractIdAndQuantity(products,el.id,el.quantity-1));
                          }}
                          disabled={isFetching || el.quantity < 2}
                        >
                          <MinimalisticArrowLeft width={25} height={25} />
                        </button>
                        <h3 className={styles.productStock}>{el.quantity}</h3>{" "}
                        <button
                          onClick={() => {
                             increaseProductQuantity(extractIdAndQuantity(products,el.id,el.quantity+1));
                          }}
                          disabled={isFetching}
                        >
                          <MinimalisticArrowRight width={25} height={25} />
                        </button>
                      </div>
                      <h3 className={styles.action}></h3>
                    </div>
                    <div className={styles.sectionLine}></div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.whishlistStatusCantainer}>
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
          <div className={styles.shippining}>
            <h2>shippining contianer...</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
