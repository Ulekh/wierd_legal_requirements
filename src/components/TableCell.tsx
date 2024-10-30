type TTableCellProps = {
  className?: string;
};

export default function TableCell({
  children,
  className,
}: React.PropsWithChildren<TTableCellProps>) {
  return (
    <span
      className={`${
        className || ""
      } flex-[1_1_100px] px-2 content-center min-h-6`}
    >
      {children}
    </span>
  );
}
