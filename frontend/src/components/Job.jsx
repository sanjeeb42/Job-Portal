import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
        <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className=" border-gray-400 rounded-full" size="icon">
          <Bookmark />
        </Button>
        </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6 border-gray-300" variant="outline"  size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/dkZ18lo742IM19jY4my0sf1XytKeaf3SDRsQhH57drw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus inventore quisquam est dolorum. Inventore illum quibusdam culpa adipisci. Nostrum, sequi!</p>
      </div>
      <div className="flex item-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4 ">
        <Button variant="outline" className="rounded-xl">Details</Button>
        <Button variant="otline" className="bg-[#7209b7] text-[#ffffff] rounded-xl">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
