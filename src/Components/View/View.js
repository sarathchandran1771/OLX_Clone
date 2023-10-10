import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/postContext';
import './View.css';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);
  console.log(postDetails);
  console.log(userDetails);
  useEffect(() => {
    const { userId } = postDetails;
    firebase
      .firestore()
      .collection('users')
      .where('id', '==', userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setUserDetails(doc.data());
        });
      });
  }, [postDetails, firebase]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.URL} alt="Post" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
