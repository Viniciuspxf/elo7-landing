import './link.css';

export default function Link( {url, children} ) {
    return (
        <div className='link'>
            <a href={url}>{children} »</a>
        </div>
    );
}