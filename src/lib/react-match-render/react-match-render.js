import React, { useState, useEffect } from 'react';

const ReactMatchRender = ({
    requirements,
    conditions,
    atLeastOne,
    children,
}) => {
    const [ shouldRender, setShouldRender ] = useState(false);

    useEffect(() => {
        let shouldRender;
        if (atLeastOne) {
            shouldRender = requirements.some((value, index) => value === conditions[index]);
        } else {
            shouldRender = requirements.every((value, index) => value === conditions[index]);
        }

        setShouldRender(shouldRender);
    }, [requirements, conditions, atLeastOne]);

    return (
        shouldRender ? children : null
    );
};

export default ReactMatchRender;
