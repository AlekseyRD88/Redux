import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../index.scss';
import Pagination from './Pagination';
import User from './User';
import * as usersActions from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors';

class UsersList extends Component {
  getPagination = paginationData => {
    const start = this.props.currentPage * 3 - 3;
    const end = start + 3;
    return paginationData.slice(start, end);
  }
  render() {
    const { goPrev, goNext, currentPage, users } = this.props;
    return (
      <div>
        <Pagination goPrev={goPrev} goNext={goNext} currentPage={currentPage}
        totalItems={users.length} itemsPerPage={3}/>
      <ul className="users">
        {this.getPagination(users).map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
      </div>
    );
  }
};

const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext: usersActions.goNext,
  goPrev: usersActions.goPrev,
}

const connector = connect(mapState, mapDispatch);
const ConnectUsersList = connector(UsersList);

export default ConnectUsersList;