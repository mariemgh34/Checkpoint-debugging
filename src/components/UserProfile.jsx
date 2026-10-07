function UserProfile({ user }) {
  return (
    <section className="card">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </section>
  );
}

export default UserProfile;