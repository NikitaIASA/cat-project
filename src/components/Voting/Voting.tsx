import { useState } from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Cats } from "../../api/dto/getRandomCat.dto";
import { useAddFavourite, useVoteCat } from "../../api/useRandomCat";
import { useQueryClient } from "@tanstack/react-query";
import VotePanel from "../VotePanel";
import VoteLog from "../VoteLog";

import "./Voting.scss";

interface VotingProps {
  data: Cats;
}

interface VoteMessageProps {
  time: string;
  imageId: string;
  action: string;
}

export const Voting: FC<VotingProps> = ({ data }) => {
  const voteMutation = useVoteCat();
  const addFavourite = useAddFavourite();
  const queryClient = useQueryClient();
  const [voteMessages, setVoteMessages] = useState<VoteMessageProps[]>([]);

  const handleVoteUp = () => {
    voteMutation.mutate({ imageId: data.id, value: 1 });
    queryClient.invalidateQueries(["getRandomCat"]);
    addVoteMessage("like");
  };

  const handleVoteDown = () => {
    voteMutation.mutate({ imageId: data.id, value: 0 });
    queryClient.invalidateQueries(["getRandomCat"]);
    addVoteMessage("dislike");
  };

  const handleAddFavourite = () => {
    addFavourite.mutate({imageId: data.id});
    queryClient.invalidateQueries(["getRandomCat"]);
    addVoteMessage("favourite");
  }

  const imageUrl = data.url;
  const parts = imageUrl.split("/");
  const codeWithExtension = parts[parts.length - 1]; 
    const code = codeWithExtension.split(".")[0];

  const addVoteMessage = (action: string) => {
    const newVoteMessage = {
      time: getCurrentTime(),
      imageId: code,
      action,
    };

    setVoteMessages((prevMessages) => {
      const updatedMessages = [newVoteMessage, ...prevMessages];
      if (updatedMessages.length > 4) {
        updatedMessages.pop();
      }
      return updatedMessages;
    });
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="voting">
      <div className="voting__navigation">
        <Link to="/">
          <svg
            className="voting__arrow-back"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1_85)">
              <path
                d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z"
                fill="#FF868E"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_85">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Link>
        <h2 className="voting__title">Voting</h2>
      </div>
      <div className="voting__container">
        <img className="voting__image" src={data?.url} alt="cat photo" />
        <VotePanel
          handleVoteUp={handleVoteUp}
          handleVoteDown={handleVoteDown}
          handleAddFavourite={handleAddFavourite}
        />
      </div>

      <div className="voting__votes">
        {voteMessages &&
          voteMessages.map((message) => (
            <VoteLog key={message.imageId} {...message} />
          ))}
      </div>
    </div>
  );
};
