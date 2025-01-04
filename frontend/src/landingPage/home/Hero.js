import './Hero.css';

function Hero() {
    const removeListItemDots = () => {
        const style = document.createElement('style');
        style.innerHTML = `
            ul {
                list-style-type: none;
                padding: 0;
            }
        `;
        document.head.appendChild(style);
    };

    removeListItemDots();
    return ( 
        <>
        <div className='container hero'>
            <div className='row mt-5'>
                <div className='col-12 col-md-8 text-center text-md-left'>
                    <h1>Hello</h1>
                    <h1>I'm Ashutosh Prajapati</h1>
                    <h3>A Student of <br></br> National Institute Of Technology Patna</h3>
                    <br/>
                    <ul>
                    <li>Proficient in Data Structrue and Algorithim<br/>
                    Competitive Programmer</li>
                    <li>Full Stack (MERN) Developer</li>
                    <li>Proficient in C, C++, JAVA, Python </li>
                    </ul>
                </div>
                <div className='col-12 col-md-8 text-center ashutosh'>
                    <img src='/media/images/ashu.png' alt="Ashutosh Prajapati"></img>
                </div>
            </div>
            <div className='row mt-5 signdiv'>
                <button className='sign'>SignUp</button>
                <h5 className='make'>I can make a Website Fastly using MONGO DB, EXPRESS JS, REACT JS, NODE JS</h5>
            </div>
            
        </div>
        </>
     );
}

export default Hero;
