export interface BlogData {
  title: string;
  link: string;
  date: string;
  img: any;
}

const Blog = ({ title, link, date, img }: BlogData) => {
  return (
    <div className="blog-box container">
      <a href={link} rel="noreferrer noopener" target="_blank">
        <div className="d-flex flex-column">
          <img src={img} alt="blog-1" />
          <span>{date}</span>
          <p>{title}</p>
        </div>
      </a>
    </div>
  );
};

export default Blog;
