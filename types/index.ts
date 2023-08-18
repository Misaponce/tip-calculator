import { ChangeEvent } from 'react';

export interface CustomFormProps {
    label: string;
    type: string;
    value: number;
    placeHolder: string;
    formId?: string;
    formStyle?: string;
    inputError: boolean;
    errorMessage: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomButtonProps {
    text: string;
    value: number;
    classType?: string;
    onClick: (value: number) => void; //this prop expects value of type number on the function that will be called when the btn is clicked
}

export interface CustomInputProps {
    placeHolder: string;
    inputId:  string;
    value: number;
    type: string;
    inputError: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CustomDisplayProps {
    displayText: string;
    displayNum: number;
}