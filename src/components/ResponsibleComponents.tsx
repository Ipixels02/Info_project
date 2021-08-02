import {useMediaQuery} from 'react-responsive'
import React, {FC} from 'react';

interface responsibleComponents {
    children: any
};

export const Desktop: FC<responsibleComponents> = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992})
    return isDesktop ? children : null
}
export const Tablet: FC<responsibleComponents> = ({children}) => {
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 991})
    return isTablet ? children : null
}
export const Mobile: FC<responsibleComponents> = ({children}) => {
    const isMobile = useMediaQuery({maxWidth: 767})
    return isMobile ? children : null
}