import { useState } from 'react';
import './App.css';

function App() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    const handleInputChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
            setError(null);
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    };

    function submitForm(answer) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer !== checkPalindrome(answer);
                if (shouldError) {
                    reject(new Error('Not Quite, Try again! 😔'));
                } else {
                    resolve();
                }
            }, 1000);
        });
    }

    function checkPalindrome(value) {
        return value.split('').reverse().join('');
    }

    return (
        <div className="App">
            <h2 className="header">Palindrome Checker</h2>

            {status === 'success' && <p className="success"> That's right! 🎉</p>}

            {error !== null && <p className="failed">{error.message}</p>}

            <form onSubmit={handleSubmit}>
                <label htmlFor="word">Enter word: </label>
                <input id="word" onChange={handleInputChange} disabled={status === 'submitting'} />
                <button className="submit-btn" disabled={answer.length === 0 || status === 'submitting'}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default App;
