import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />

      <NavMenu>
        <a href=''>
          <img src='images/home-icon.svg' alt='' />
          <span>HOME</span>
        </a>
        <a href=''>
          <img src='images/search-icon.svg' alt='' />
          <span>SEARCH</span>
        </a>
        <a href=''>
          <img src='images/watchlist-icon.svg' alt='' />
          <span>WATCHLIST</span>
        </a>

        <a href=''>
          <img src='images/original-icon.svg' alt='' />
          <span>ORIGINALS</span>
        </a>
        <a href=''>
          <img src='images/movie-icon.svg' alt='' />
          <span>MOVIES</span>
        </a>
        <a href=''>
          <img src='images/series-icon.svg' alt='' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='images/prabhas.jpg' />
    </Nav>
  )
}

export default Header
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  width: 80px;
  padding: 0 36px;
  cursor: pointer;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  img {
    height: 18px;
    padding: 0px 2px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding: 0 12px;
    &:hover {
     span:after {
        transform: scaleX(1);
        opacity: 1;
      }
  }
  }
  span {
    font-size: 13px;
    letter-spacing: 1.42px;
    position: relative;
    
    &:after {
      content: '';
      height: 2px;
      background: white;
      position: absolute;
      opacity: 0;
      left: 0;
      right: 0;
      bottom: -6px;
      transform: scaleX(0);
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 50px;
  cursor: pointer;
`
