//#region Imports

import MenuUI from 'containers/MenuUI';
import React from 'react';
import useCheckCredentials from 'utils/hooks/useCheckCredentials';
import isOutRoute from 'utils/functions/isOutRoute';

//#endregion

const RouterFilter = ({ children }) => {
    const { canEnter } = useCheckCredentials();
    const isOut = isOutRoute();

    return canEnter() && !isOut ? <MenuUI>{children}</MenuUI> : children;
};

export default RouterFilter;
