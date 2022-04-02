import React from 'react';

function DashboardPage() {
  const fullName = localStorage.getItem('fullName');
  const email = localStorage.getItem('email');
  return (

    <h1>
      {`Hello ${fullName} your email is ${email}. These are items around you! 🐼`}

    </h1>
  );
}

export default DashboardPage;
