import React from "react";

export interface FooterIconData {
  link: string;
  target?: string;
  children: React.ReactNode
}

const FooterIcon = ({ link, target, children }: FooterIconData) => {
  return (
    <a href={link} rel="noreferrer noopener" target={target}>
      {children}
    </a>
  );
};

export default FooterIcon;
