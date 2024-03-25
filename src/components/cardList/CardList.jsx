


import React from 'react';
import Pagination from '../pagination/Pagination';
import Filter from '../Filter/Filter';
import dynamic from 'next/dynamic';

const containerStyle = "overflow-auto";
const titleStyle = "mt-10 mb-10 text-xl font-bold sm:flex justify-between overflow-hidden";
const cardListContainerStyle = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6";

const Card = dynamic(() => import('../card/Card'), { ssr: false });

const CardList = () => {
  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>
        Recent Posts
        <Filter />
      </h1>
      <div className={cardListContainerStyle}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
