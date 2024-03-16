import React from 'react'
import SingleReview from '../review/SingleReview';
import newRequest from '../../utils/newRequest';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

const Reviews = ({gigId}) => {

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });
  console.log("review data")
  console.log(data)


  const mutation = useMutation({
    mutationFn: (review) => {
      console.log(review)
      return newRequest.post("/reviews", {review});
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
  };
  
  

  return (
    
    <div>
      <div name='review'>
        <h2  className='font-amaze font-semibold text-[#365486] text-[18px] py-4'>Reviews</h2>
        <div name='reviewall' className='flex flex-col gap-3'>
        {isLoading ? "loading" : error ? "Something went wrong!" : data.map((review) => 
        <SingleReview key={review._id} review={review}/>)}
        <div name="add">
        <h3>Add a review</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="write your opinion" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type='submit'>Send</button>
        </form>
      </div>
        </div>
        </div>
      </div>
    
  )
}

export default Reviews
