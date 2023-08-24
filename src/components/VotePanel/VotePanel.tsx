import { FC } from "react";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as Dislike } from "../../assets/dislike.svg";
import { ReactComponent as Favourite } from "../../assets/favourite.svg";

import "./VotePanel.scss";

interface VotePanelProps {
  handleVoteUp: () => void;
  handleVoteDown: () => void;
  handleAddFavourite: () => void;
}

export const VotePanel: FC<VotePanelProps> = ({
  handleVoteUp,
  handleVoteDown,
  handleAddFavourite,
}) => {
  return (
    <div className="vote-panel">
      <ul className="vote-panel__list">
        <li
          className="vote-panel__item"
          style={{ background: "#97EAB9" }}
          onClick={handleVoteUp}
        >
          <Like className="vote-panel__image" />
        </li>
        <li
          className="vote-panel__item"
          style={{ background: "#FF868E" }}
          onClick={handleVoteDown}
        >
          <Dislike className="vote-panel__image" />
        </li>
        <li
          className="vote-panel__item"
          style={{ background: "#FFD280" }}
          onClick={handleAddFavourite}
        >
          <Favourite className="vote-panel__image" />
        </li>
      </ul>
    </div>
  );
};
