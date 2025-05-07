const Register = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Register</h2>
      <input placeholder="first name" /><br />
      <input placeholder="last name" /><br />
      <input placeholder="email" /><br />
      <input type="password" placeholder="password" /><br />
      <input type="password" placeholder="confirm password" /><br />
      <p>Already have account? <Link to="/login">login here</Link></p>
      <button onClick={() => navigate('/login')}>Register</button>
    </div>
  );
};
export default Register;