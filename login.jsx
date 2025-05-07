import React, { useState } from 'react';

const LoginPage=()=> {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
   
    console.log('Name:', name);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login Page</h2>
      <input
        type="text"
        placeholder="Email"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSignIn} style={styles.button}>Sign In</button>
      <p style={styles.link}>Don't have an account? <a href="#">Create Account</a></p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 400,
    margin: '100px auto',
    padding: 20,
    border: '1px solid #ccc',
    borderRadius: 10,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  title: {
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 10,
    margin: '10px 0',
    fontSize: 16
  },
  button: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: 5,
    cursor: 'pointer'
  },
};
export default LoginPage;
