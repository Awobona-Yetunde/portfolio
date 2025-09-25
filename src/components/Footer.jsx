import React from 'react';

const Footer = () => {
  return (
    <div className="items-center justify-center py-12 ">
      <hr className="w-[80%] mx-auto mb-4"></hr>
      <div className="flex justify-center gap-23 px-3">
        <p>&copy; 2025 Awobona Yetunde. All rights reserved</p>
        <nav className="flex gap-8">
          <a
            href="https://github.com/Awobona-Yetunde"
            target="_blanck"
            className="hover:text-purple-400"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yetunde-awobona-8883122a6/"
            target="_blanck"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
