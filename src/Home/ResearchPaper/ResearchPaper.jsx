
import { Link } from 'react-router-dom';

const ResearchPaper = () => {
    return (
        <div className='lg:ms-12 my-4 ms-3'>
            <p className="my-4  text-2xl font-semibold text-blue">Research paper :</p>
            <h1 className='lg:text-2xl text-base font-semibold'><Link to='johnDoe'><span className='underline cursor-pointer'>The Impact of Mindfulness Meditation on Stress Reduction: A Harvard University Student Study</span></Link> -By John Doe.</h1>
        </div>
    );
};

export default ResearchPaper;