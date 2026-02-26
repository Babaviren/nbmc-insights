import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { posts } from '../data/posts';
import { Post } from '../types/post';
import PostCard from './PostCard';
interface BlogLayoutProps {
  title: string;
  image: string;
  author: string;
  date: string;
  children: ReactNode;
  relatedPosts?: Array<{
    title: string;
    link: string;
  }>;
  // posts:Post[],
  category:string
}

export function BlogLayout({ title, image, author, date, children, relatedPosts,category }: BlogLayoutProps) {
    const filteredPosts = posts.filter(
    (post) => post.category === category
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No articles available.
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative h-96 bg-gray-900">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
    <div className=" bg-gray-50 flex flex-col items-center py-12 gap-8 px-4"> 

      
       {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} 
      </div>
      {/* <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </article> */}

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.link}
                  to={post.link}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500"
                >
                  <p className="font-medium text-gray-900 hover:text-blue-900 transition-colors">
                    {post.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
