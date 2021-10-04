import React from 'react';

interface Props {
  classNames?: string;
  icon: JSX.Element;
}

export default function Icon(props: Props) {
  const { classNames, icon } = props;

  return (
    <div className={classNames}>
      {icon}
    </div>
  );
}
