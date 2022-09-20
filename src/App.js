import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

function App() {
    return (
        <div className="App">
            <div className="avatar"></div>
            <div className="content">
                <h1>Hirniak Andrii</h1>
                <h2>Fullstack developer</h2>
                <p className="projects" onClick={() => openInNewTab("https://online-posts.herokuapp.com/")}>online-posts</p>
                <div className="buttons">
                    <button className="buttons__telegram" onClick={() => openInNewTab("https://t.me/HirniakAndrii")}>
                        <FontAwesomeIcon className="telegram-icon" icon={faTelegram} />
                        <p>Telegram</p>
                    </button>
                    <button className="buttons__linkedin" onClick={() => openInNewTab("https://www.linkedin.com/in/hirniak-andrii-498981234/")}>
                        <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </button>
                </div>
                <div className="context">
                    <h3>PROFESSIONAL SKILLS</h3>
                    <ul>
                        <li>Have an experience with: virtual machines, databases (PostgreSQL, MySQL,
                            SQLite, MongoDB), knowledge of SQL, data formats (json, csv, xml), Git,
                            GitHub/GitLab, HTML, CSS (SCSS/SASS), JavaScript, JavaScript OOP, Vue.js,
                            React.js, Node.js (express), Python, Python OOP, Django, Django ORM,
                            Docker, Linux, Windows, MacOS, etc.
                        </li>
                        <li>
                            Native Ukrainian and Russian languages, Upper-Intermediate level of English.
                        </li>
                        <li>Negotiations with customers via voice calls, chat and mail.</li>
                        <li>Control of workflow on tasks and projects, setting priorities.</li>
                        <li>User consulting.</li>
                        <li>Good communication skills</li>
                        <li>I can work with documentation.</li>
                        <li>Ability to clearly and competently formulate your opinion.</li>
                        <li>Read someone else’s code.</li>
                    </ul>
                    <h3>WORK EXPERIENCE</h3>
                    <p>Freelance 2021-2022, Comserve 2022 – until now</p>
                    <h3>EDUCATION</h3>
                    <p><span>University:</span> Ivano-Frankivsk National Technical University of Oil</p>
                    <p><span>Faculty:</span> Information Technology</p>
                    <p><span>Speciality:</span> Software engineering</p>
                    <h3>A LITTLE BIT ABOUT MYSELF</h3>
                    <p>I began my career in programming in 2020 with the study of Python. In half
                        an year I started to learn such frameworks as Django and Flask. After doing a
                        few projects on them, I started looking for a job at Freelance. As early as
                        2021, I started working at Freelance as a Python Developer and doing
                        projects on Django and Flask. At this time, I was interested in Frontend
                        technologies and I started to learn JavaScript, later Vue.js and React.js
                        frameworks. In 2022, I finished working at Freelance and got a job at
                        Comserve company as a JavaScript Developer, and I'm still working there, but
                        I'm always interested in new offers. 😀
                    </p>
                </div>
            </div>
            <footer>
                <p onClick={() => openInNewTab("https://www.linkedin.com/in/hirniak-andrii-498981234/")}>LinkedIn <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} /></p>
                <p onClick={() => openInNewTab("https://t.me/HirniakAndrii")}>Telegram <FontAwesomeIcon className="telegram-icon" icon={faTelegram} /></p>
                <p onClick={() => openInNewTab("https://github.com/Andriy9373")}>Github <FontAwesomeIcon className="telegram-icon" icon={faGithub} /></p>
            </footer>
        </div>
    );
}

export default App;