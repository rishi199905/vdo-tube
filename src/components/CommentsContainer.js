import React from "react";

const commentsData = [
  {
    name: "test1",
    text: "amazing video",
    replies: [],
  },
  {
    name: "test2",
    text: "i hate this",
    replies: [
      {
        name: "test3",
        text: "why so?",
        replies: [],
      },
      {
        name: "test4",
        text: "ya",
        replies: [
          {
            name: "test2",
            text: "JUST!!",
            replies: [
              {
                name: "test4",
                text: "Are you alrigth?",
                replies: [
                  {
                    name: "test2",
                    text: "Ask my therapist!",
                    replies: [
                      {
                        name: "test3",
                        text: "Damn Bro i feel you!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Test5",
                    text: "Video slaps!!!!!!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "test6",
    text: "First!!",
    replies: [],
  },
  {
    name: "test7",
    text: "Second!!",
    replies: [],
  },
  {
    name: "test8",
    text: "Stupid video!!",
    replies: [],
  },
  {
    name: "test9",
    text: "First ME!!!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};



const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
