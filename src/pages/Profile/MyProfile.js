import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/authActions';

function MyProfile({ fetchUser, user, fetchUserError }) {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (fetchUserError) {
    return <p>Error: {fetchUserError}</p>;
  }
  console.log("user,",user)
  return (
    <div>
      {user ? (
        <div>
          <p>Username: {user?.user.firstName}</p>
          <p>Email: {user?.user?.email}</p>
          {/* Display any other user information */}
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  fetchUserError: state.fetchUserError,
});

export default connect(mapStateToProps, { fetchUser })(MyProfile);