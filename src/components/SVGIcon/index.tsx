import React from 'react';
import { SvgIconProps } from './interface';
import * as Styled from './styles';

const SvgIcon: React.FC<SvgIconProps> = ({ Icon, ...rest }) => {
    return (
        <Styled.SvgIconContainer {...rest}>
            <Icon />
        </Styled.SvgIconContainer>
    );
};

export default SvgIcon;
