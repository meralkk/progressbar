import { Button, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './style.scss';

const Progressbar = () => {
    const [progress, setProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const handleIncrement = () => {
        if (progress < 100) {
            setProgress(prev => prev + 10);
            setErrorMessage('');
        } else {
            setErrorMessage('Value must be between 0 and 100.');
        }
    };

    const handleDecrement = () => {
        if (progress > 0) {
            setProgress(prev => prev - 10);
            setErrorMessage('');
        } else {
            setErrorMessage('Value must be between 0 and 100.');
        }
    };

    return (
        <div className="container">
            <h1>Progress Bar</h1>

                <div className="button-group">
                <Button className='minus' onClick={handleDecrement}>-</Button>
                <Button className='plus' onClick={handleIncrement}>+</Button>

                </div>

            <ProgressBar className='progressbar' variant='warning' animated now={progress} label={`${progress}%`} />

            <p>  {errorMessage && <p>{errorMessage}</p>}</p>
          
        </div>
    );
}

export default Progressbar;
