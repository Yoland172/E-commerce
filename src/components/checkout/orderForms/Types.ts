import { ChangeEvent } from "react";

export interface InputFieldItem {
    containerClassName: any;
    title: string;
    inputProps: {
        type: string;
        placeholder: string;
        registerReq: any;
        error: any;
        maxLength?: number;
        disabled?:boolean
        action?:(event: ChangeEvent<HTMLInputElement>) => void
    };
}