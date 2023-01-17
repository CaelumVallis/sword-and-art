import "./DetailedScreen.scss";
import { BackArrowBtn } from "../shared/BackArrowBtn/BackArrowBtn";
import { GameSlotCard } from "../shared/GameSlotCard/GameSlotCard";
import { LevelCard } from "../shared/LevelCard/LevelCard";
import { TechnologyCard } from "../shared/TechnologyCard/TechnologyCard";

export const DetailedScreen = () => {
  const CLASSNAME_PREFIX = "detailed-screen";
  const CARD_PREFIX = "card";
  const RESOURCE_PREFIX = "resource";
  const POINT_PREFIX = "point";
  const CARDTECHNOLOGY_PREFIX = "card-technology";

  const gameSlots = [1, 1, 1, 1, 1, 1];
  const levelCard = [1, 2, 3];
  const technologies = {
    topRow: [1, 1, 1, 1, 1, 1],
    bottomRow: [1, 1, 1, 1, 1, 1],
  };

  const resources = {
    gold: "6",
    crystal: "2",
    gas: "1",
    oil: "1",
    plasma: "1",
    uranus: "1",
  };
  const point = {
    culture: "10",
    science: "8",
    yellowToken: "5",
    orangeToken: "5",
    redToken: "5",
  };

  return (
    <div className={CLASSNAME_PREFIX}>
      <div className={`${CLASSNAME_PREFIX}-card-block`}>
        <div className={`${CARD_PREFIX}-resource-economic`}>
          <div className={`${CARD_PREFIX}-resource`}>
            {gameSlots.map(() => (
              <GameSlotCard />
            ))}
          </div>
          <div className={`${CARD_PREFIX}-economic`}>
            {gameSlots.map(() => (
              <GameSlotCard />
            ))}
          </div>
        </div>
        <div className={`${CARD_PREFIX}-culture-science`}>
          <div className={`${CARD_PREFIX}-culture`}>
            {gameSlots.map(() => (
              <GameSlotCard />
            ))}
          </div>
          <div className={`${CARD_PREFIX}-science`}>
            {gameSlots.map(() => (
              <GameSlotCard />
            ))}
          </div>
        </div>
        <div className={`${CARD_PREFIX}-resources-military-point`}>
          <div className={`${RESOURCE_PREFIX}-block`}>
            <div>
              <span className={`${RESOURCE_PREFIX}-gold`}>
                Золото: {resources.gold}
              </span>
              <span className={`${RESOURCE_PREFIX}-crystal`}>
                Кристаллы: {resources.crystal}
              </span>
            </div>
            <div>
              <span className={`${RESOURCE_PREFIX}-gas`}>
                Газ: {resources.gas}
              </span>
              <span className={`${RESOURCE_PREFIX}-oil`}>
                Нефть: {resources.oil}
              </span>
            </div>
            <div>
              <span className={`${RESOURCE_PREFIX}-plasma`}>
                Плазма: {resources.plasma}
              </span>
              <span className={`${RESOURCE_PREFIX}-uranus`}>
                Уран: {resources.uranus}
              </span>
            </div>
          </div>
          <div className={`${CARD_PREFIX}-military`}>
            {gameSlots.map(() => (
              <GameSlotCard />
            ))}
          </div>
          <div className={`${POINT_PREFIX}-block`}>
            <span className={`${POINT_PREFIX}-culture`}>
              Культура: {point.culture}
            </span>
            <span className={`${POINT_PREFIX}-science`}>
              Наука: {point.science}
            </span>
            <div>
              <span className={`${POINT_PREFIX}-yellow-token`}>
                ЖЖ: {point.yellowToken}
              </span>
              <span className={`${POINT_PREFIX}-orange-token`}>
                ОЖ: {point.orangeToken}
              </span>
              <span className={`${POINT_PREFIX}-red-token`}>
                КЖ: {point.redToken}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${CLASSNAME_PREFIX}-science-block`}>
        <div className={`${CARDTECHNOLOGY_PREFIX}-top`}>
          {technologies.topRow.map(() => (
            <TechnologyCard />
          ))}
        </div>
        <div className={`${CARDTECHNOLOGY_PREFIX}-bottom`}>
          {technologies.bottomRow.map(() => (
            <TechnologyCard />
          ))}
        </div>
      </div>
      <div className={`${CLASSNAME_PREFIX}-level-block`}>
        <div className="back">
          <BackArrowBtn />
        </div>
        <div className="level">
          {levelCard.map(() => (
            <LevelCard />
          ))}
        </div>
      </div>
    </div>
  );
};
