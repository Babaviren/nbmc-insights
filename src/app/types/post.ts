// types/post.ts
// types/post.ts
export interface Post {
  id: number;
  category: string;
  author: string;
  date: string;
  content: string;
  rating?: number; // 0–5
  sentiment?: "positive" | "neutral" | "negative";
}