import React from "react";

const Post = ({ content }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
        <img className="w-full" src={`http://localhost:8001/${content.imgUrl}`} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{content.title}</div>
        <p className="text-gray-700 text-base">{content.desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{content.category}</span>
      </div>
      <div className="w-full px-6 pt-2 pb-2">
        <button className="inline-block bg-secondary rounded-xl w-full px-5 py-3 text-sm font-semibold text-white mr-2 mb-2">Donate</button>
      </div>
    </div>
  );
};

export default Post;
