import style from "./about.module.scss"

const AboutContent = () => {
    return (
        <div id={style.about}>
            
            <h1>about</h1>

            <p>CLB An toàn thông tin - Khoa Công nghệ thông tin - Trường Đại học Khoa học Tự nhiên, ĐHQG - HCM</p>

            <h2>Link</h2>
            <div className={style.link}>
                <a href="mailto:compsec.club@fit.hcmus.edu.vn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                    compsec.club@fit.hcmus.edu.vn
                </a>
                <a href="https://www.facebook.com/hcmus.compsec.club">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    Computer Security Club - University of Science, VNU - HCM
                </a>
            </div>
        </div>
    )
}

export default AboutContent;