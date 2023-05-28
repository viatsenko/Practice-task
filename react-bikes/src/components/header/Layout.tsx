import React, {Fragment} from 'react';
import Header from "./Header";

type LayoutProps = {
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <Fragment>
            <Header/>
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Layout;
