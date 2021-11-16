import { HTMLAttributes } from "react";

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
    imageUrl: string
}

export interface HeroImageProps {
    title: string;
    description: string;
    imageUrl: string
}

