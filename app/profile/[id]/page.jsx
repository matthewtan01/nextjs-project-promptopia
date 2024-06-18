"use client";

import { useSearchParams, useParams } from "next/navigation";
import Profile from "@components/Profile";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  const { id } = params;

  const [post, setPost] = useState([])
  const name = searchParams.get("name");
  const desc = `Welcome to ${name}'s personalized profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination.`
  
  useEffect(() => {
    const fetchPrompts= async () => {
      const response = await fetch(`/api/users/${id}/posts`)
      const data = await response.json();
      setPost(data);
    }
    fetchPrompts();
  }, [])
  return (
    <Profile
      name={name}
      desc={desc}
      data={post}
      handleEdit={() => {}}
      handleDelete={() => {}}
    />
  );
};

export default ProfilePage;


