export interface TokenomicsData {
  img: any;
  title: string;
  description: string;
  index?: number;
}

const Tokenomics = ({ img, title, description, index }: TokenomicsData) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 px-0">
      <div className="tokenomic-box container-fluid">
        <div className="d-flex align-items-center flex-lg-wrap">
          <div
            className={`tokenomic-icon tokenomic-icon-${
              index !== undefined && index + 1
            } flex-shrink-0 d-flex align-items-center justify-content-center`}
          >
            <img src={img} alt="tokenomic-team" />
          </div>
          <div className="flex-grow-1 d-flex flex-column w-lg-100">
            <h3 className="tokenomic-title">{title}</h3>
            <span className="tokenomic-description">{description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
