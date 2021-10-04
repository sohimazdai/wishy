import React from 'react';
import { Link } from 'react-router-dom';

export type BreadCrumb = {
  title: string,
  path: string,
};

interface Props {
  items: BreadCrumb[]
}

export default function BreadCrumbs(props: Props) {
  const { items } = props;

  return (
    <div className="breadcrumbs">
      {items.map((dc) => (
        <Link className="breadcrumbs_item" to={dc.path}>{dc.title}</Link>
      ))}
    </div>
  );
}
