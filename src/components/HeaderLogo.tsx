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
        themeColor ? `text-${themeColor}` : `text-[${color}]`
      } text-2xl font-thin`}
    >
      Dribby
    </div>
  );
}

export default HeaderLogo;
