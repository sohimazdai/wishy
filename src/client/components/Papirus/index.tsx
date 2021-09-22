interface Props {
  children: React.ReactElement,
}

export default function Papirus(props: Props) {
  const { children } = props;

  return (
    <div className="papirus">
      {children}
    </div>
  )
}
