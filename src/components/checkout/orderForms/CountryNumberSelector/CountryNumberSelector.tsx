import React from "react";
import styles from "./CountryNumberSelector.module.scss";
import countryJSON from "../../../../assets/CountryCodesWithFlagsSVG.json";
import classNames from "classnames";
import Select, { GroupBase, StylesConfig } from "react-select";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface CountryNumberSelectorProps {
  error?: any;
  control: Control<any>;
}

interface CountryData {
  dial_code: string;
  img: string;
  name: string;
}

const CountryNumberSelector = ({
  error,
  control,
}: CountryNumberSelectorProps) => {
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      borderBottom: "1px solid #858585",
      padding: 8,
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
    }),

    control: () => ({
      width: 91,
      height: 31,
      color: "#1f1f1f",
      marginTop:-5
    }),
    singleValue: (provided: any, state: { isDisabled: boolean }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    dropdownIndicator: (base: any) => ({
      ...base,
      dispay: "none",
    }),
  };

  const options = countryJSON.map((el: CountryData) => ({
    value: el.dial_code,
    label: (
      <div className={styles.container} key={el.dial_code}>
        <img src={el.img} alt={`Flag of ${el.name}`} />
        <h3>{el.dial_code}</h3>
      </div>
    ),
  }));

  const defaultValue = options.find((el) => el.value === "+380");

  return (
    <div className={classNames(styles.wrapper, error && styles.error)}>
      <Controller
        name="countryCode"
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Select
            styles={customStyles}
            {...field}
            options={options}
            onChange={(value) => {
              field.onChange(value);
            }}
            defaultValue={defaultValue}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
          />
        )}
      />
    </div>
  );
};

export default CountryNumberSelector;
