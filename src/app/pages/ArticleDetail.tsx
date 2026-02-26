// pages/ArticleDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../data/posts";
import Avatar from "../components/Avatar";

const ArticleDetail: React.FC = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(
    (p) => p.id === Number(id) && p.category === category
  );

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Article not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline text-sm mb-6"
          >
            ← Back
          </button>

          <div className="flex items-center gap-4 mb-6">
            <Avatar name={post.author} size={56} />
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {post.author}
              </h2>
              <p className="text-sm text-gray-500">
                {post.date}
              </p>
            </div>
          </div>

          {/* Optional Title (if you add it later in Post type) */}
          {/* <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1> */}
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none prose-gray">
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ArticleDetail;