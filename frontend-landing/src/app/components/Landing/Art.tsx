export interface ArtData {
  index: number;
  art: any;
  clickable: boolean;
  onClick: () => void;
}

const Art = ({ art, clickable, onClick, index }: ArtData) => {
  return (
    <>
      {clickable ? (
        <div
          className="col-3 px-0"
          data-bs-toggle="modal"
          data-bs-target="#artModal"
        >
          <div className="art-box" onClick={() => onClick()}>
            <img
              className="w-100 h-100"
              src={art.image.url}
              alt={`art-${index}`}
            />
          </div>
        </div>
      ) : (
        <div className="art-box">
          <img
            className="w-100 h-100"
            src={art.image.url}
            alt={`art-${index}`}
          />
        </div>
      )}
    </>
  );
};

export default Art;
