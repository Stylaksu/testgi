import React, { Component } from 'react';

export default ({ user, update, index }) => {
  return (
    <tr onClick={() => update({ active: index })}>
      <td>{user.candidateName}</td>
      <td>{user.candidateStatus}</td>
      <td>{user.candidateNeedOffer}</td>
    </tr>
  );
};