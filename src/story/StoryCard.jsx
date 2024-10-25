import React from 'react';
import { Card, CardContent } from '@/components/ui/card'; // Verify these names
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'; // Verify these names
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StoryCard = ({ isAddStory, story }) => {
  const handleStoryClick = () => {
    // Define what happens on story click here if needed
  };

  return (
      <>
      <Card
      className="w-40 h-60 relative overflow-hidden group cursor-pointer rounded-xl"
      onClick={isAddStory ? undefined : handleStoryClick}
    >
      <CardContent className="p-0 h-full">
         {isAddStory ? (
             <Card
      className="w-40 h-60 relative overflow-hidden group cursor-pointer rounded-xl"
      onClick={isAddStory ? undefined : handleStoryClick}
    >
      <CardContent className="p-0 h-full">
         {isAddStory ? (
              <div className='w-full h-full  flex-col'>
                <div className='w-full h-full  relative  border-b'>

              <Avatar className="h-8 w-8 ">
                <AvatarImage />
                <p className='w-full h-full flex   justify-center items-center'>A</p>
              </Avatar>
              </div>
              <div className="h-1/4 w-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 "
                  onClick={() => fileInputRef.current.click()}
                >
                  <Plus className="h-5 w-5 text-white" />
                </Button>
                <p className="text-xs font-semibold mt-1">Create Story</p>
              </div>
              <input type="file" accept="image/*,video/*" className="hidden"
                          
              />
            </div>
         ):(
            <>
               {story?.mediaType === "image" ? (
                <img
                  src={story?.mediaUrl}
                  alt={story?.user?.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={story?.mediaUrl}
                  alt={story?.user?.username}
                  className="w-full h-full object-cover"
                />
              )}
                <div className="absolute top-2 left-2 ring-2 ring-blue-500 rounded-full ">
                <Avatar className="h-8 w-8 ">
                <AvatarImage />
              <AvatarFallback>A</AvatarFallback>
              </Avatar>
                </div>
                <div className='absolute  bottom-2 left-2 right-2  '>
                    <p className="text-white text-xs font-semibold  truncate">A</p>

                </div>
            </>
         )}
      </CardContent>
    </Card>
         ):(
            <>
            </>
         )}
      </CardContent>
    </Card></>
  );
};

export default StoryCard;
