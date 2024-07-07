import React, { useEffect, useState } from "react";
import useDebounce from "@lib/hooks/useDebounce";
import {RecProductItem as RecProductItemType} from "@lib/types/Types";
import styles from "./SearchBar.module.scss";
import RecProductItem from "./recProductItem/RecProductItem";

interface SearchBarProps {
  searchAction: (serachProp: string) => void;
  recProducts: RecProductItemType[];
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
        {recProducts.length > 0 && (
          <div className={styles.recProductsContainer}>
            {recProducts.map((el) => {
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
        )}
      </div>

      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
