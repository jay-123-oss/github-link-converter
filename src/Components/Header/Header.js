import React from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

function Header() {
  return (
    <div className="Header">
      <Link
        color="inherit"
        href="https://github.com/martink-rsa/github-link-converter"
        target="_blank"
        rel="noopener"
      >
        <IconButton color="primary" aria-label="add to shopping cart">
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
