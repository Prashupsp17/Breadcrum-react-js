import React from 'react'
import {useLocation, Link } from 'react-router-dom'

const BreadCrumbs = () => {
   const {pathname} =  useLocation();
   console.log(pathname);
   const pathnames = pathname.split("/").filter((x)=> x);
   console.log(pathname);

   let breadcrumbPath = "";
  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        console.log(pathnames, breadcrumbPath);

        return isLast ? (
          <span key={breadcrumbPath}> / {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  )
}

export default BreadCrumbs