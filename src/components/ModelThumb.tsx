type ModelThumbProps = {
  description: string;
  blob: string;
  id: number;
  getNewModel: (url: string) => void;
};

export const ModelThumb = ({ description, blob, id, getNewModel }: ModelThumbProps) => {
  return (
    <li className="model-li">
      <p className="model-description">{description}</p>
      <img
        className="model-thumb"
        src={blob}
        onClick={() => {
          getNewModel('/v1/models/' + id);
        }}
      />
    </li>
  );
}
