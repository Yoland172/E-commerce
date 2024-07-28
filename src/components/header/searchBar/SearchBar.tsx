import React, { useEffect, useRef, useState } from "react";
import useDebounce from "@lib/hooks/useDebounce";
import { RecProductItem as RecProductItemType } from "@lib/types/Types";
import RecProductItem from "./recProductItem/RecProductItem";
import Divider from "@components/ui/divider/Divider";
import styles from "./SearchBar.module.scss";

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

  const searchInput = useRef(null);

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
          ref={searchInput}
        />
        {recProducts.length > 0 && (
          <div className={styles.recProductsContainer}>
            {recProducts.map((el, index) => {
              return (
                <>
                  <RecProductItem
                    id={el.id}
                    title={el.title}
                    thumbnail={el.thumbnail}
                    action={() => {
                      setSearch("");
                    }}
                  />
                  {index !== recProducts.length - 1 && (
                    <Divider/>
                  )}
                </>
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
