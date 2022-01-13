export interface RoadMapPhaseData {
  title: string;
  season: string;
  items: RoadMapPhaseItemData[];
}

export interface RoadMapPhaseItemData {
  completed: boolean;
  label: string;
}

const RoadmapPhase = ({ title, season, items }: RoadMapPhaseData) => {
  return (
    <div className="col-12 col-md-6 col-xxl-3 px-0">
      <div className="phase-box">
        <div className="container d-flex flex-column">
          <h3 className="phase-title text-lg-center">{title}</h3>
          <label className="phase-season text-lg-center">{season}</label>
          <ul className="list-unstyled">
            {items.map((item, index) => (
              <li key={index}>
                <i
                  className={`bi bi-check ${
                    item.completed ? "visible" : "invisible"
                  }`}
                />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPhase;
