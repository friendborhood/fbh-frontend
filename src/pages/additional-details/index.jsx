import React from 'react';

function additionalDetailsPage() {
  const fullName = localStorage.getItem('fullName');
  const email = localStorage.getItem('email');
  const id = localStorage.getItem('id');
  return (

    <h1>
      {`Hello ${fullName} your email is ${email}. These are items around you! 🐼 your id is ${id}`}
    </h1>
  );
}

export default additionalDetailsPage;
