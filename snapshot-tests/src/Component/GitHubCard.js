import Card from 'react-bootstrap/Card'
import  PretendMe  from './PretendMe.webp'

function GitHubCard () {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant='top ' src='{PretendMe}' alt='Famouse Female Scientist' />
                <Card.Body>
                    <Card.Title> Gia Madonna </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'> Rookie Software Developer </Card.Subtitle>
                    <Card.Text>
                        Hi! My name is Gia Madonna and I am pursuing a career in Software 
                        Development. Currently a cook at Chili's, I am looking to set off 
                        in an expanding job force such as coding to provide financial stability
                        for my future life. 
                    </Card.Text>
                    <Card.Link href='https://github.com/GiaMadonna1'> Find me on Github Here! </Card.Link>
                </Card.Body>
        </Card>
    );
}

export default GitHubCard