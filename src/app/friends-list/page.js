// "use client";
// import React, { useEffect, useState } from "react";
// import LeftSideBar from "../components/LeftSideBar";
// import { FriendCardSkeleton, NoFriendsMessage } from "@/lib/Skeleten";
// import FriendRequest from "./FriendRequest";
// import FriendsSuggestion from "./FriendsSuggestion";
// // import { userFriendStore } from "@/store/userFriendsStore";
// // import toast from "react-hot-toast";
// ``

// const Page = () => {
//    const {followUser,loading,UnfollowUser,fetchFriendRequest,fetchFriendSuggestion,deleteUserFromRequest,fetchMutualFriends,friendRequest,friendSuggestion,mutualFriends} = useState()

//    useEffect(() => {
//        fetchFriendRequest(),
//        fetchFriendSuggestion()
//    },[])
   
//    const handleAction = async(action,userId) =>{
//     if(action === "confirm"){
//        toast.success("friend added successfully")
//         await followUser(userId);
//         fetchFriendRequest()
//         fetchFriendSuggestion()
//     } else if(action ==="delete"){
//       await UnfollowUser(userId);
//       fetchFriendRequest()
//       fetchFriendSuggestion()
//     } 
//    }
   
   
//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-[rgb(36,37,38)] ">
//       <LeftSideBar />
//       <main className="ml-0 md:ml-64 mt-16 p-6">
//         <h1 className="text-2xl font-bold mb-6">Friends Requests</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
//           {loading ? (
//             <FriendCardSkeleton />
//           ) : friendRequest.length === 0 ? (
//             <NoFriendsMessage
//               text="No Friend Requests"
//               description="Looks like you are all caught up! Why not explore and connect with new people?"
//             />
//           ) : (
//             friendRequest.map((friend) => <FriendRequest key={friend._id}  friend={friend} loading={loading} onAction={handleAction}  />)
//           )}
//         </div>

//         <h1 className="text-2xl font-bold mb-6">People you may know</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
//           {loading ? (
//             <FriendCardSkeleton />
//           ) : friendSuggestion.length === 0 ? (
//             <NoFriendsMessage
//               text="No Friend Suggestion"
//               description="Looks like you are all caught up! Why not explore and connect with new people?"
//             />
//           ) : (
//             friendSuggestion.map((friend) => (
//               <FriendsSuggestion key={friend._id}   friend={friend} loading={loading} onAction={handleAction} />
//             ))
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Page;



"use client";
import React, { useEffect, useState } from "react";
import LeftSideBar from "../components/LeftSideBar";
import { FriendCardSkeleton, NoFriendsMessage } from "@/lib/Skeleten";
import FriendRequest from "./FriendRequest";
import FriendsSuggestion from "./FriendsSuggestion";
// import toast from "react-hot-toast";

const Page = () => {
  // Initialize state variables
  const [friendRequest, setFriendRequest] = useState([]);
  const [friendSuggestion, setFriendSuggestion] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFriendRequest = async () => {
    // Simulate API call to fetch friend requests
    const requests = await fetchFriendRequestAPI();
    setFriendRequest(requests);
  };

  const fetchFriendSuggestion = async () => {
    // Simulate API call to fetch friend suggestions
    const suggestions = await fetchFriendSuggestionAPI();
    setFriendSuggestion(suggestions);
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([fetchFriendRequest(), fetchFriendSuggestion()])
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleAction = async (action, userId) => {
    if (action === "confirm") {
      toast.success("Friend added successfully");
      await followUser(userId);
      fetchFriendRequest();
      fetchFriendSuggestion();
    } else if (action === "delete") {
      await UnfollowUser(userId);
      fetchFriendRequest();
      fetchFriendSuggestion();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[rgb(36,37,38)]">
      <LeftSideBar />
      <main className="ml-0 md:ml-64 mt-16 p-6">
        <h1 className="text-2xl font-bold mb-6">Friends Requests</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <FriendCardSkeleton />
          ) : friendRequest.length === 0 ? (
            <NoFriendsMessage
              text="No Friend Requests"
              description="Looks like you are all caught up! Why not explore and connect with new people?"
            />
          ) : (
            friendRequest.map((friend) => (
              <FriendRequest key={friend._id} friend={friend} loading={loading} onAction={handleAction} />
            ))
          )}
        </div>

        <h1 className="text-2xl font-bold mb-6">People you may know</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <FriendCardSkeleton />
          ) : friendSuggestion.length === 0 ? (
            <NoFriendsMessage
              text="No Friend Suggestion"
              description="Looks like you are all caught up! Why not explore and connect with new people?"
            />
          ) : (
            friendSuggestion.map((friend) => (
              <FriendsSuggestion key={friend._id} friend={friend} loading={loading} onAction={handleAction} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;

// Mock API functions for demonstration
const fetchFriendRequestAPI = async () => {
  return []; // Replace with actual API call
};

const fetchFriendSuggestionAPI = async () => {
  return []; // Replace with actual API call
};