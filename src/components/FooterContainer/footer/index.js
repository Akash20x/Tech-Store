import React from 'react';
import { Column, Container, LastColumn, LastRow, LastTitle, Link, Row, Title, Wrapper } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Footer.LastRow = function FooterLastRow({ children, ...restProps }) {
    return <LastRow {...restProps}>{children}</LastRow>;
};
Footer.LastColumn = function FooterLastColumn({ children, ...restProps }) {
    return <LastColumn {...restProps}>{children}</LastColumn>;
};
Footer.LastTitle = function FooterLastTitle({ children, ...restProps }) {
    return <LastTitle {...restProps}>{children}</LastTitle>;
};
