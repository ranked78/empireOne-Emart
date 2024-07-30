import React from 'react';

const LogoutButton = () => {
  const handleLogout = async (event) => {
    event.preventDefault();

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    try {
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        credentials: 'same-origin', // include or same-origin??
      });

      if (response.ok) {
        // Redirect to the root path
        window.location.href = '/';
      } else {
        console.error('Logout failed with status:', response.status);
      }
    } catch (error) {
      console.error('An error occurred during logout', error);
    }
  };

  return (
    <button onClick={handleLogout} className="dropdown-link">
      Log Out
    </button>
  );
};

export default LogoutButton;
