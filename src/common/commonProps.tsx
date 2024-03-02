import React from 'react';

export interface StylableProps {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    onClick?: (e: any) => void;
}

export interface WrapperProps extends StylableProps {
    children?: React.ReactNode | React.ReactNode[];
}