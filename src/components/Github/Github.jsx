import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/nadeem222")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <>
      <div className="w-full flex p-4">
        <div className="w-1/4 rounded-xl">
          <img src={data.avatar_url} alt="" className="rounded-full w-52" />
          <p className="text-left font-bold pt-2">{data.name}</p>
          <p className="text-left ">{data.login}</p>
          <p className="text-left py-2 ">{data.bio}</p>
          <p className="flex items-center gap-x-2 pt-3">
            <span>
              <svg
                text="muted"
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                class="octicon octicon-people"
              >
                <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
              </svg>
            </span>
            Followers:
            <span className="font-bold">
                 {data.followers}
            </span>
          </p>
          <p className="text-left py-1 flex items-center gap-x-2">
            <span>
              <svg
                class="octicon octicon-organization"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path>
              </svg>
            </span>
            {data.company}
          </p>
          <p className="text-left py-1 flex items-center gap-x-2">
            <span>
              <svg
                class="octicon octicon-location"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
              </svg>
            </span>
            {data.location}
          </p>
          <p className="text-left  flex items-center gap-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                role="img"
                aria-labelledby="ag294bdosss1nl5xazh9mvajxo7ldnge"
                class="octicon"
              >
                <title id="ag294bdosss1nl5xazh9mvajxo7ldnge">X</title>
                <g clip-path="url(#clip0_1668_3024)">
                  <path
                    d="M9.52217 6.77143L15.4785 0H14.0671L8.89516 5.87954L4.76437 0H0L6.24656 8.8909L0 15.9918H1.41155L6.87321 9.78279L11.2356 15.9918H16L9.52183 6.77143H9.52217ZM7.58887 8.96923L6.95596 8.0839L1.92015 1.03921H4.0882L8.15216 6.7245L8.78507 7.60983L14.0677 14.9998H11.8997L7.58887 8.96957V8.96923Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1668_3024">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            @{data.twitter_username}
          </p>
        </div>
      </div>
    </>
  );
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/nadeem222')

    return response.json()
}
