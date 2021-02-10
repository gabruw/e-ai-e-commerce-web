//#region Imports

import MenuUI from 'containers/MenuUI';
import React from 'react';
import useCheckCredentials from 'utils/hooks/useCheckCredentials';

//#endregion

const RouterFilter = ({ children }) => {
    const { canEnter } = useCheckCredentials();

    return canEnter() ? <MenuUI>{children}</MenuUI> : children;
};

export default RouterFilter;
