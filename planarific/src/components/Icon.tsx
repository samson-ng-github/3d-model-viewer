type IconProps = {
  src: string;
  colorDependent: boolean;
  onClick: () => void;
};

export const Icon = ({ src, colorDependent, onClick }: IconProps) => {
  return (
    <img
      className="icon"
      src={src}
      onClick={onClick}
      style={colorDependent ? { backgroundColor: '#e47f63' } : undefined}
    />
  );
}
