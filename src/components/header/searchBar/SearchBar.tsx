import React, { useEffect, useState } from "react";
import classNames from "classnames";
import useDebounce from "@lib/hooks/useDebounce";
import styles from "./searchBar.module.scss";
import RecProductItem from "./recProductItem/RecProductItem";

interface SearchBarProps {
  searchAction: (serachProp: string) => void;
  recProducts: any[];
  clearRecProducts: () => void;
}

const SearchBar = ({
  searchAction,
  recProducts,
  clearRecProducts,
}: SearchBarProps) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSerachTerm = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSerachTerm) {
      searchAction(debouncedSerachTerm);
    }
  }, [debouncedSerachTerm]);

  useEffect(() => {
    if (!search) {
      clearRecProducts();
    }
  }, [search]);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <div
          className={classNames(
            styles.hide,
            recProducts.length > 0 && styles.recProductsContainer
          )}
        >
          {recProducts.length > 0 &&
            recProducts.map((el: any) => {
              return (
                <RecProductItem
                  id={el.id}
                  title={el.title}
                  thumbnail={el.thumbnail}
                  action={() => {
                    setSearch("");
                  }}
                />
              );
            })}
        </div>
      </div>
      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
