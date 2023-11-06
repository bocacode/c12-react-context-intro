import { useContext } from 'react'

import { UserContext } from '../App'

export default function Footer() {
	const userInfo = useContext(UserContext)

	const today = new Date()
	const year = today.getFullYear()

	return (
		<footer>
			<small>id {userInfo._id} Copyright © {year} </small>
		</footer>
	)
}
