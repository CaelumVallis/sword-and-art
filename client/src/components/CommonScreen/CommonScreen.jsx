import "./CommonScreen.scss";
import { BackArrowBtn } from "../shared/BackArrowBtn/BackArrowBtn";
import { PlayerCard } from "../shared/PlayerCard/PlayerCard";
import { LevelCard } from "../shared/LevelCard/LevelCard";
import { GameSlotCard } from "../shared/GameSlotCard/GameSlotCard";

export const CommonScreen = () => {
  const CLASSNAME_PREFIX = "common-screen";
  const RESOURCE_PREFIX = "resource";
  const CITY_PREFIX = "city";
  const POINT_PREFIX = "point";
  const OPPONENTCARD_PREFIX = "opponent-card";

  const currentTurn = "6";
  const currentTime = "01:05";

  const playerCards = [1, 1, 1, 1, 1];
  const gameSlots = [1, 1, 1, 1, 1, 1];
  const levelCard = [1, 2, 3];
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
  const cityArmor = {
    variable: "88",
    complete: "100",
  };

  return (
    <div className={CLASSNAME_PREFIX}>
      <div className={`${CLASSNAME_PREFIX}-top-block`}>
        <button className="science-screen-button"></button>
        <div className="player-cards">
          {playerCards.map(() => (
            <PlayerCard />
          ))}
        </div>
        <button className="detailed-screen-button"></button>
      </div>
      <div className={`${CLASSNAME_PREFIX}-middle-block`}>
        <div className={`${RESOURCE_PREFIX}-block`}>
          <span className={`${RESOURCE_PREFIX}-gold`}>
            Золото: {resources.gold}
          </span>
          <span className={`${RESOURCE_PREFIX}-crystal`}>
            Кристаллы: {resources.crystal}
          </span>
          <span className={`${RESOURCE_PREFIX}-gas`}>Газ: {resources.gas}</span>
          <span className={`${RESOURCE_PREFIX}-oil`}>
            Нефть: {resources.oil}
          </span>
          <span className={`${RESOURCE_PREFIX}-plasma`}>
            Плазма: {resources.plasma}
          </span>
          <span className={`${RESOURCE_PREFIX}-uranus`}>
            Уран: {resources.uranus}
          </span>
        </div>
        <div className={`${CITY_PREFIX}-block`}>
          <span className={`${CITY_PREFIX}-armor`}>
            Прочность: {cityArmor.variable}/{cityArmor.complete}
          </span>
          <div className={`${CITY_PREFIX}-level`}>
            {levelCard.map(() => (
              <LevelCard />
            ))}
          </div>
        </div>
        <div className={`${POINT_PREFIX}-block`}>
          <span className={`${POINT_PREFIX}-culture`}>
            Культура: {point.culture}
          </span>
          <span className={`${POINT_PREFIX}-science`}>
            Наука: {point.science}
          </span>
          <span className={`${POINT_PREFIX}-yellow-token`}>
            Желтых жетонов: {point.yellowToken}
          </span>
          <span className={`${POINT_PREFIX}-orange-token`}>
            Оранжевых жетонов: {point.orangeToken}
          </span>
          <span className={`${POINT_PREFIX}-red-token`}>
            Красных жетонов: {point.redToken}
          </span>
        </div>
      </div>
      <div className={`${CLASSNAME_PREFIX}-bottom-block`}>
        <div className={`${OPPONENTCARD_PREFIX}-left`}>
          <span>Прочность: 88/100</span>
        </div>
        <div className="info-per-turn">
          <span className="turn-number">Ход: {currentTurn}</span>
          <span className="timer-pre-turn">Время: {currentTime}</span>
          <button className="turn-end"></button>
        </div>
        <div className={`${OPPONENTCARD_PREFIX}-right`}>
          <span>Прочность: 88/100</span>
        </div>
      </div>
      <div className={`${CLASSNAME_PREFIX}-description-block`}>
        <BackArrowBtn />
        <div className="top-description-block">
          <div className="card-description">АФАФАФА КАДЫРОВ ДЫРОВ ЧУШКА</div>
          <div className="sell-build-buttons">
            <button className="sell-button">Продать</button>
            <button className="build-button">Построить</button>
          </div>
        </div>
        <div className="building-slots">
          {gameSlots.map(() => (
            <GameSlotCard />
          ))}
        </div>
      </div>
    </div>
  );
};
