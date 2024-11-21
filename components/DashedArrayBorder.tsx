export const DashedArrayBorder = () => (
  <ul className="flex gap-1.5">
    {new Array(80).fill(null).map((el, index) => (
      <li key={`${el + index}`}>
        <div className="w-[1px] h-[1px] bg-foreground truncate" />
      </li>
    ))}
  </ul>
);
