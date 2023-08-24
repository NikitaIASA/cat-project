import { FC } from "react";

import "./VoteLog.scss";

interface VoteLogProps {
  time: string;
  imageId: string;
  action: string;
}

export const VoteLog: FC<VoteLogProps> = ({ time, imageId, action }) => {
  return (
    <div className="vote-log">
      <p className="vote-log__time">{time}</p>
      <p className="vote-log__text">
        Image ID: <span>{imageId}</span> was added to {action}s
      </p>
    </div>
  );
};
