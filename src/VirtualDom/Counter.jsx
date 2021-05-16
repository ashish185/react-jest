import React,{useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Virtual Dom Concept</p>
            <p>This is Count</p>
            <p>:{count}</p>
            <button onClick={() => setCount(count+1)}>Click me</button>
        </div>
    );
};

export default Counter;