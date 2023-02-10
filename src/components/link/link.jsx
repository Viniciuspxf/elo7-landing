import './link.css';

export default function Link( {url, children} ) {
    return (
            <a className='link' href={url}>{children} »</a>
    );
}