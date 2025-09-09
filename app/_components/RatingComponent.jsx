'use client'
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useUserContext } from "./user/UserProvider";

export default function RatingComponent({id,orderId,customerId}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const {user} = useUserContext();
  const router = useRouter();
    const body = {
        comment:review,
        rating,
        orderId,
        ratingDate:new Date(),
    }
  const handleSubmit = async () => {
    try{
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/rating/createRating/${id}`,body,{withCredentials:true});
        toast.success('thank you for you feedback! keep shopping on my bazarr.')
        router.refresh();
    }catch(err){
        console.log(err);
    }
  };

  if(user?._id !== customerId ) return null;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
        backgroundColor: "#f5f5f5", // light gray background
        // minHeight: "100vh",
      }}
    >
      <Card
        sx={{ maxWidth: 800, width: "100%", borderRadius: 3, boxShadow: 3 }}
      >
        <CardContent sx={{ backgroundColor: "#fff" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Rate the product
            </Typography>
          </Box>

          {/* Rating stars */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Rating
              name="product-rating"
              value={rating}
              onChange={(_, newValue) => setRating(newValue)}
              size="large"
            />
          </Box>

          {/* Review text area */}
          <TextField
            label="Write your review"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            variant="outlined"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />

          {/* Submit button */}
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
            fullWidth
          >
            Submit Review
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
