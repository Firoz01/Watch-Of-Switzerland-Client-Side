import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";


const colors = {
  orange: "#FFBA5A",
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
      <div className="container my-5">
          <h2 className='my-5 text-info'>Client Say About Us</h2>
      <div className="row  gx-3 gy-2">
          {reviews.map((review) => {
            return (
              <div className="col-6 col-md-3">
                <div class="card">
                  <h6 class="card-header d-flex justify-content-start text-secondary">
                    {review.user}
                  </h6>
                  <div class="card-body">
                    <h5 class="card-title">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => {
                          return <FaStar color={colors.orange} />;
                        })}
                    </h5>
                    <p class="card-text">{review.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Reviews;
