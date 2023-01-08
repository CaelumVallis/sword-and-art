import "./ScienceScreen.scss";
import { BackArrowBtn } from "../shared/BackArrowBtn/BackArrowBtn";
import { TechnologyCard } from "../shared/TechnologyCard/TechnologyCard";

export const ScienceScreen = () => {
  const CLASSNAME_PREFIX = "science-screen";
  const CARDTECHNOLOGY_PREFIX = "card-technology";

  const turnsToAchieveLeft = "5";
  const pointsInTurn = "15";

  const technologies = {
    topRow: [1,1,1,1],
    middleRow: [1,1,1,1],
    bottomRow: [1,1,1,1]
  }

  return (
    <div className={CLASSNAME_PREFIX}>
      <div className="science-top-block">
        <BackArrowBtn />
        <span className={`${CLASSNAME_PREFIX}-title`}>
          Ходов осталось: {turnsToAchieveLeft}
        </span>
      </div>
      <div className={`${CARDTECHNOLOGY_PREFIX}`}>
        <div className={`${CARDTECHNOLOGY_PREFIX}-left`}>
          <TechnologyCard />
        </div>
        <div className={`${CARDTECHNOLOGY_PREFIX}-right`}>
          <div className={`${CARDTECHNOLOGY_PREFIX}-top-active`}>
            {technologies.topRow.map(() => <TechnologyCard />)}
          </div>
          <div className={`${CARDTECHNOLOGY_PREFIX}-middle-active`}>
          {technologies.middleRow.map(() => <TechnologyCard />)}
          </div>
          <div className={`${CARDTECHNOLOGY_PREFIX}-bottom-active`}>
          {technologies.bottomRow.map(() => <TechnologyCard />)}
          </div>
        </div>
      </div>
      <div>
        <span className={`${CLASSNAME_PREFIX}-subtitle`}>
          Науки в ход: {pointsInTurn}
        </span>
      </div>
    </div>
  );
};
