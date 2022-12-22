import React from "react";

const Layout = (props) => {
    const {children} = props;
    return (
        <div className="content">{children}</div>
    );
}

export default Layout;