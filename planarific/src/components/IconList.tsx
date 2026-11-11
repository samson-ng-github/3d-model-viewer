import { Icon } from './Icon';
import type { ClickCoordsType } from '../types';

type IconListProps = {
  wireframeIcon: string;
  wireframe: boolean;
  toggleWireframe: () => void;
  resetIcon: string;
  resetCamera: () => void;
  coordinateIcon: string;
  clickCoords: ClickCoordsType;
  resetClickCoords: () => void;
};

export const IconList = (props: IconListProps) => {
  const {
    wireframeIcon,
    wireframe,
    toggleWireframe,
    resetIcon,
    resetCamera,
    coordinateIcon,
    clickCoords,
    resetClickCoords,
  } = props;
  return (
    <div id="icon-list">
      <Icon src={resetIcon} onClick={resetCamera} />
      <Icon
        src={wireframeIcon}
        colorDependent={wireframe}
        onClick={toggleWireframe}
      />
      <Icon
        src={coordinateIcon}
        colorDependent={clickCoords !== null}
        onClick={resetClickCoords}
      />
      {clickCoords ? (
        <div className="coordinates">{clickCoords[0].toFixed(2)}</div>
      ) : null}
      {clickCoords ? (
        <div className="coordinates">{clickCoords[1].toFixed(2)}</div>
      ) : null}
      {clickCoords ? (
        <div className="coordinates">{clickCoords[2].toFixed(2)}</div>
      ) : null}
      {clickCoords ? null : (
        <div className="coordinates">Click model to see coordinates</div>
      )}
    </div>
  );
};
