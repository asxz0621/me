import React from 'react';
import Headers from './template/components/Header/index'
import Banner from './template/components/Banner/index'
import Title from './template/components/Title/index'
import PostList from './template/components/List/PostList'
import  NewsList from './template/components/News/NewsList'
import  ItemList from './template/components/Item/ItemList'
import  Footers from './template/components/Footer/index'
/* /index/pic */
export default function Index() {
  return (
    <html lang="en">
    <head>
      <title>
        Demo
      </title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/css/index.css"/>
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="stylesheet" href="/css/base.css"/>
        <link rel="stylesheet" href="/css/common.css"/>
    </head>
    <body><Headers></Headers>
      <div id="root">
           
          <Banner></Banner>
          <Title title="Recommend Video"></Title>
          <PostList></PostList>
          <Title title="Focus news"></Title>
          <NewsList></NewsList>

          <Title title="More"></Title>
          <ItemList></ItemList>
          
        </div>
        <Footers></Footers>
    </body>
  </html>
  );
}
