import React from 'react';
import './App.css';

class Navbar extends React.Component {
  render() {
    const links = [
      {
        link: "/react-github-pages/#/Projects",
        label: "Projects"
      },
      {
        link: "/react-github-pages/#/CV",
        label: "CV"
      },
      {
        link: "/react-github-pages/#/About",
        label: "About"
      }
    ]
    return (
      <div className="navbar">
        <a href="/react-github-pages/#/" className="title-item title"><b>React-Github-Pages</b></a>
        <div>
        {
          links.map((page, i) => {
            return (<a href={page.link} className="bar-item button">{page.label}</a>)
          })
        }
        </div>
      </div>
    );
  }
}

export default Navbar;