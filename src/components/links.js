import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Links(props) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getLinks = () => {
    axios
      .get('https://econsult-api-lovat.now.sh/links')
      .then((response) => {
        setLinks(response.data['links']);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Links">
      {links.map((link, index) => {
        return (
          <div
            key={index}
            className="link fadeInUp"
            style={{animationDelay: `${0.5 + index * 0.1}s`}}
          >
            <h2 className="question">{link.linkabout}</h2>
            <a
              href="{link.link-value}"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.linkvalue}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Links;
