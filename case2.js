const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 12,
    commentContent: "Hai Juga",
    replies: [
      {
        commentId: 121,
        commentContent: "Hai juga",
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

function countComments(arr, acc = []) {
  for (const o of arr) {
    acc.push(o.commentContent);
    if (o.hasOwnProperty("replies") && o.replies.length > 0) {
      acc = countComments(o.replies, acc);
    }
  }
  return acc;
}

console.log(countComments(comments).length);
