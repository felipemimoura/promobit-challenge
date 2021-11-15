import styled from 'styled-components';
import { SvgContainerProps } from './interface';

export const SvgIconContainer = styled.div<SvgContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    svg {
      * {
        fill: ${({ color }) => color};
      }
    }
  }

  svg {
    height: ${({ height }) => (height ? `${height}rem` : 'auto')};
    width: ${({ width }) => (width ? `${width}rem` : 'auto')};
    * {
      transition: fill 0.2s linear;
      fill: ${props =>
    props.color
      ? `${props.color}`
      : '#FFF'};
    }
  }
`;
