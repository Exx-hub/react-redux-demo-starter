import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UserContainer({ fetchUsers, userData }) {
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	return userData.loading ? (
		<h2>LOADING...</h2>
	) : userData.error ? (
		<h2>{userData.error}</h2>
	) : (
		<div>
			<h2>USER LIST</h2>
			<div>
				{userData.users?.map((user, i) => (
					<p key={i}>{user.name}</p>
				))}
			</div>
		</div>
	);
}

const mapState = (state) => {
	return {
		userData: state.users,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchUsers: () => dispatch(fetchUsers()),
	};
};
export default connect(mapState, mapDispatch)(UserContainer);
