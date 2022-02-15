import { Pagination } from "react-pagination-bar";
// import "react-pagination-bar/dist/index.css";
import { useState } from "react";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  { id: 4, title: "Post 4" },
  { id: 5, title: "Post 5" },
  { id: 6, title: "Post 6" },
  { id: 7, title: "Post 7" },
  { id: 8, title: "Post 8" },
  { id: 9, title: "Post 9" },
  { id: 10, title: "Post 10" },
  { id: 11, title: "Post 11" },
  { id: 12, title: "Post 12" },
];

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 0;

  return (
    <div className="paginate">
      {posts
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      <Pagination
        totalItems={500}
        itemsPerPage={10}
        onPageСhange={(pageNumber) => console.log(pageNumber)}
        startLabel={"<<"}
        endLabel={">>"}
        nextLabel={">"}
        prevLabel={"<"}
        pageNeighbours={2}
      />
      {/*       <Pagination
        initialPage={currentPage}
        itemsPerPage={pagePostsLimit}
        onPageСhange={(pageNumber) => setCurrentPage(pageNumber)}
        totalItems={posts.length}
        pageNeighbours={2}
      />
 */}{" "}
    </div>
  );
};
export default Paginate;
