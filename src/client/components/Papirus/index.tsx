interface Props {
  children: React.ReactElement,
  classNames?: string,
}

export default function Papirus(props: Props) {
  const { children, classNames } = props;

  return (
    <div className={`papirus ${classNames || ''}`}>
      {children}
    </div>
  )
}
