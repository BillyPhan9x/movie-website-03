import { useEffect, useState } from "react";
import tmbdApi from "../../api/tmdbApi";

const Review = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const res = await tmbdApi.reviews(props.id);
      setReviews(res.data.results);
    };
    getImages();
  }, [props.id]);
  // console.log(reviews);
  return reviews.length > 0 ? (
    <div className="review-container">
      <h3>User Reviews</h3>
      <div className="list-reviews">
        {reviews.map((review, id) => (
          <div key={id} className="reviews">
            <div className="author-details">
              <div className="author-name">
                <p>{review.author}</p>
              </div>
              <div className="author-rating">
                {Object.keys(review.author_details)
                  .slice(3, 4)
                  .map((author, index) => (
                    <div key={index}>
                      {/* {console.log(review.author_details[author])} */}
                      <p>
                        Rate:{" "}
                        <span className="rating">
                          {review.author_details[author]
                            ? review.author_details[author]
                            : "-"}
                        </span>
                        <span>/10</span>
                      </p>
                    </div>
                  ))}
              </div>
            </div>
            <p className="author-review">{review.content}</p>

            <hr />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h3 className="no-review">No Reviews</h3>
  );
};

export default Review;
