import React from "react";
import "./Skills.css";
const SkillContainer1 = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Coursework/Others</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Data Analytics</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Backend Architecture</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Data Structures & Algorithms</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Project Management</h3>
							<span className='skills__level'>Intermediate</span>
						</div>
					</div>
				</div>
				<div className='skills__group'>
					{/* <div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>AI/ML</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div> */}
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>DBMS</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>AI/ML</h3>
							<span className='skills__level'>Basics</span>
						</div>
					</div>
					<div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>OOPS Concept</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div>
					{/* <div className='skills__data'>
						<i className='bx bx-badge-check'></i>
						<div>
							<h3 className='skills__name'>Data Structures</h3>
							<span className='skills__level'>Advanced</span>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default SkillContainer1;