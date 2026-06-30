export default function NewsCard({ title, excerpt, image, date }) {
  return (
    <article className="h-full flex flex-col bg-light rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {image && (
        <img src={image} alt="" className="w-full aspect-video object-cover object-center" loading="lazy" />
      )}
      <div className="p-6 flex flex-col flex-grow">
        {date && <time className="text-gray-500 text-sm block mb-3">{date}</time>}
        {title && <h3 className="text-lg font-bold text-navy mb-3 [&_a]:text-primary [&_a]:underline hover:[&_a]:text-secondary" dangerouslySetInnerHTML={{ __html: title }} />}
        {excerpt && <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line flex-grow [&_a]:text-primary [&_a]:underline hover:[&_a]:text-secondary" dangerouslySetInnerHTML={{ __html: excerpt }} />}
      </div>
    </article>
  );
}
