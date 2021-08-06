import React from 'react';


var PropTypes = require('prop-types');

GetList.propTypes={
  countryList:PropTypes.array,
};
GetList.defaultProps= {
    countryList: [],
};
function GetList(props) 
{
    const {countryList}=props;
    return(
        <ol className="post-list">
            {countryList.map(post => (
                <li key={post.id}>{post.name} <ul></ul> Capital: {post.capital} <ul></ul> Flag : <img src={post.flag} alt="flag" height="25px" width="45px"></img> 
           <ul></ul>  Region: {post.region} <ul></ul> Sub-Region: {post.subregion}  <ul></ul> Population : {post.population} </li>
                
                
            ))}
           
            

        </ol>
    );
}
 export default GetList;