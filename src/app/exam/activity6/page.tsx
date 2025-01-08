/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client'

import axios from "axios"
import { useState, useEffect } from "react"

const Activity6 = () => {
 const [data, setData] = useState<any[]>([]);  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://random-data-api.com/api/v3/projects/4cd78355-9cc7-4749-aab5-5e8f64271cc8?api_key=hFD4QdeTGuZ_sahREesstA', {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setData(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">User Cards</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((user, index) => (
          <div key={index} className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={user.avatar} 
              alt={user.first_name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{user.first_name} {user.last_name}</h2>
              <p className="text-sm text-gray-600 mt-2">{user.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Activity6
