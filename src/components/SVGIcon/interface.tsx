import { HTMLAttributes } from 'react';
import { FunctionComponent, SVGProps } from 'react';

export interface SvgIconProps extends HTMLAttributes<HTMLElement> {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    width?: number;
    height?: number;
    color?: string;

}
export interface SvgContainerProps {
    height?: number;
    width?: number;
    color?: string;

}
