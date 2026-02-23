// import User from "../models/User.js";
// import asyncHandler from "../utils/asyncHandler.js";
// import ApiResponse from "../utils/ApiResponse.js";

// // ------------------ SEARCH USERS ------------------
// export const searchUsers = asyncHandler(async (req, res) => {
//   const q = (req.query.q || req.query.query || "").trim();
//   if (!q) {
//     return res.status(400).json({ message: "Query parameter is required" });
//   }

//   const regex = new RegExp(q, "i");
//   const users = await User.find(
//     { $or: [{ email: regex }, { name: regex }] },
//     "_id name email"
//   )
//     .limit(30)
//     .lean();

//   return res.status(200).json(new ApiResponse(200, "Users found", users));
// });