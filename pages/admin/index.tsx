import type { NextPage } from "next";
import axios from 'axios';
import { useEffect } from "react";

const Admin: NextPage = () => {

  useEffect(() => {
    axios({
      url: '/api/article?limit=20&cursor=0'
    }).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      这是Admin
    </>
  );
};

export default Admin;