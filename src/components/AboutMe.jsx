import me from '../assets/img/me.jpeg';

export const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className='aboutme__img'>
                <img src={me} alt="me" />
            </div>

            <div className='aboutme__content'>
                <h1>Sobre Mi</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi perferendis nulla distinctio mollitia sequi repudiandae quidem aliquam sapiente similique explicabo accusantium perspiciatis optio totam blanditiis obcaecati ad recusandae, deleniti labore?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam quidem assumenda ipsam, corporis mollitia, labore exercitationem, cupiditate culpa enim placeat sed optio expedita perferendis odio! Laborum doloremque sapiente illum.</p>
                <p></p>
            </div>
        </div>
    );
}