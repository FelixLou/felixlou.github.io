import React from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const BlogImage: React.FC<BlogImageProps> = ({ 
  src, 
  alt, 
  caption, 
  className = '', 
  width, 
  height 
}) => {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-slate-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
