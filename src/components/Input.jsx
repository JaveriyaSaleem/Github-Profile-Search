import React from 'react'
import Card from './Card'
import { useRef, useEffect, useState } from 'react'
import NotFound from './NotFound'


const Input = () => {
  // refs 
  let inputRef = useRef()

  // states 
  let [first, setfirst] = useState(null)
  const [repo, setRepo] = useState([])
  // effects 
  useEffect(() => {
    console.log("Repo", repo)
  }, [repo])
  let [profileFound, setProfileFound] = useState(true)
  useEffect(() => {
    console.log("Profile data updated:", first);
  }, [first]);
  // function for fetching api
  function getProfileData() {
    let user = inputRef.current
    // profile fetch 
    Promise.all([fetch(`https://api.github.com/users/${user.value}`), fetch(`https://api.github.com/users/${user.value}/repos`)])
      .then(([profileResponse, repoResponse]) => {
        if (!profileResponse.ok) {
          throw new Error("Profile fetch failed");
        }
        if (!repoResponse.ok) {
          throw new Error("Repos fetch failed");
        }
        return Promise.all([profileResponse.json(), repoResponse.json()])
      })
      .then(([profileData, repoData]) => {
        setfirst(profileData)
        setRepo(repoData)
        setProfileFound(true)
      })
      .catch(error => {
        console.error("Error fetching profile:", error)
        setProfileFound(false)
      });
    console.log(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (

    <div className='w-full flex flex-col items-center gap-3 pt-10 '>
      <div className='border rounded overflow-hidden grid grid-cols-12 text-center mx-2'>
        <input type="text" placeholder='Search a Github User' className='col-span-9 sm:col-span-10 py-2 px-2' ref={inputRef} />
        <button  className='px-2 bg-[#06B6D4] col-span-3 sm:col-span-2 text-white' onClick={getProfileData}>
          Search</button>

      </div>
      {profileFound && first ? (
        <Card
          src={first.avatar_url || "/vite.svg"}
          name={first.name || "N/A"}
          bio={first.bio || "N/A"}
          followers={first.followers || "0"}
          following={first.following || "0"}
          repos={first.public_repos || "0"}
          repo1={repo[0]?.name || 'N/A'}
          repo2={repo[1]?.name || 'N/A'}
          repo3={repo[2]?.name || 'N/A'}
          repo4={repo[3]?.name || 'N/A'}
          repo5={repo[4]?.name || 'N/A'}
        />
      ) : (!profileFound &&
        <NotFound />
      )}

    </div>

  )
}

export default Input
