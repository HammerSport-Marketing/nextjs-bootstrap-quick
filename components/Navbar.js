/** @format */

import React from 'react';
import styles from './Navbar.module.scss'
import {Search, Facebook, Instagram} from 'react-feather'
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Navbar() {
	return (
		<div>
			<nav class='navbar navbar-light bg-light '>
				<a className='navbar-brand' href='#'>
					Navbar
				</a>
				<form className='form-inline my-2 my-lg-0'>
					<div class='input-group mb-3 h-10'>
						<div class='input-group-prepend'>
							<button
								class='btn btn-outline-primary btn-sm py-0'
								type='button'
								id='button-addon1'>
								<Search />
                            </button>
						</div>
						<input
							type='text'
							class='form-control form-control-sm'
							placeholder=''
							aria-label='Example text with button addon'
                            aria-describedby='button-addon1'
						/>
                        </div>
                        <a href="https://www.facebook.com/HammerSportMarketing/">
                        <Facebook style={{color: "#3B5999"}}  className={styles.social} />
                    </a>
                    <a href="https://www.instagram.com/hammersport_marketing/">
                        <Instagram style={{color: "#E4405F"}} className="mb-3 mx-2 rounded-lg social"/>
                        </a>
				</form>
			</nav>
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<button
					className='navbar-toggler d-lg-none'
					type='button'
					data-toggle='collapse'
					data-target='#collapsibleNavId'
					aria-controls='collapsibleNavId'
					aria-expanded='false'
					aria-label='Toggle navigation'></button>
				<div className='collapse navbar-collapse' id='collapsibleNavId'>
					<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
						<li className='nav-item active'>
							<a className='nav-link' href='#'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Link
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='#'
								id='dropdownId'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Dropdown
							</a>
							<div className='dropdown-menu' aria-labelledby='dropdownId'>
								<a className='dropdown-item' href='#'>
									Action 1
								</a>
								<a className='dropdown-item' href='#'>
									Action 2
								</a>
							</div>
						</li>
					</ul>
					<button
						class='btn btn-outline-success text-sm py-1 px-2'
						type='button'>
						Main button
					</button>
					<button class='btn btn-sm btn-outline-secondary' type='button'>
						Smaller button
					</button>
				</div>
            </nav>
		</div>
	);
}

export default Navbar;
