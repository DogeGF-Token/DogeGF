import React from "react";

export interface SectionData {
  label: string;
  title: string;
  children?: React.ReactNode;
  classes: string;
}

const Section = ({ label, title, children, classes }: SectionData) => {
  return (
    <div className={classes}>
      <label className="section-label">{label}</label>
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
