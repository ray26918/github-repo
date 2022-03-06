import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd'

export default function Header() {
    return(
			<div className="headers">
				<Link to='/'>
					Github Repository
				</Link>
			</div>
    )
}