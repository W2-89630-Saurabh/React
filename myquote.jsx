
const MyQuotes = () => {
    const navigate = useNavigate();
    const [quotes, setQuotes] = useState([{ id: 1, text: 'Stay hungry, stay foolish', author: 'Steve Jobs' }]);
  
    return (
      <div>
        <Navbar />
        <h2>My Quotes</h2>
        <button onClick={() => navigate('/my-quotes/add')}>Add</button>
        {quotes.map(q => (
          <div key={q.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <p>{q.text}</p>
            <p>- {q.author}</p>
            <button>❌</button>
          </div>
        ))}
      </div>
    );
  };
  export default MyQuotes;