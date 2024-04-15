function HeaderLogo({
  color,
  themeColor,
}: {
  color?: string;
  themeColor?: string;
}) {
  return (
    <div
      className={` font-pacifico ${
        themeColor ? "text-red-500" : "text-[var(--pppp)]"
      } text-2xl font-thin`}
      style={{ "--pppp": color }}
    >
      Dribby
    </div>
  );
}

export default HeaderLogo;
