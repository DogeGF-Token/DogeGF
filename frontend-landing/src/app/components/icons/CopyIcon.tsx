import { CopyImg } from "app/constants";

const CopyIcon = ({
  width,
  height,
  onClick,
  styles,
}: {
  width: number;
  height: number;
  onClick: () => void;
  styles: any;
}) => {
  return (
    <img
      src={CopyImg}
      alt="copy-icon"
      style={{ ...styles, width: `${width}px`, height: `${height}px` }}
      onClick={onClick}
    />
  );
};

export default CopyIcon;
