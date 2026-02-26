// components/PostCard.tsx
import React from "react";
import { Post } from "../types/post";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";
// import SentimentBadge from "./SentimentBadge";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/${post.category}/${post.id}`);
  };

  return (
    <div className="bg-white max-w-4xl mx-auto w-full p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar name={post.author} size={44} />
          <div>
            <h3 className="text-base font-semibold text-gray-900 leading-5">
              {post.author}
            </h3>
            <p className="text-sm text-gray-500">
              {post.date}
            </p>
          </div>
        </div>

        {/* {post.sentiment && (
          <SentimentBadge sentiment={post.sentiment} />
        )} */}
      </div>

      <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-4 whitespace-pre-line">
        {post.content}
      </p>

      <div className="flex items-center justify-between">
        {post.rating !== undefined && (
          <Rating rating={post.rating} />
        )}

        <button
          onClick={handleReadMore}
          className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer hover:scale-110 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default PostCard;