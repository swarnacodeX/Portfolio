import React from "react";

import "./Skills.css";
const SkillContainer2 = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title1'>Technical Skills</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>JAVA</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>CSS-Tailwind CSS</h3>
							<span className='skills__level'>Indermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Javascript-React JS,Express JS</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>C++</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
				</div>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>SQl-MySQl</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>SpringBoot</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>MySQL Workbench</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					
					
				</div>
			</div>
		</div>
	);
};


export default SkillContainer2;