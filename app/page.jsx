"use client";

import styles from "./page.module.css"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Loading from "./loading"
import Users from "./components/Users";
import Usersearch from "./components/Usersearch";
const Home = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers()
  }, []);
  if (loading) {
    return <Loading />
  }

  return (
    <div >
      <h1>Welcome To Home</h1>
      <Usersearch searchResults={(results) => setUsers(results)} />
      <Users users={users} />
    </div>
  )
}

export default Home