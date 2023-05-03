import { observer } from "mobx-react";
import React from "react";
import Athlete from "./Athlete";
import TradeForm from "./TradeForm";

const lebronJames = new Athlete("Lebron Janmes", 37);
const stephCurry = new Athlete("Steph Curry", 28);

const Roster = () => {
	return (
		<table>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Teams</th>
				<th>Trade Form</th>
				<th>Birthday</th>
			</tr>
			{[lebronJames, stephCurry].map((athlete) => {
				return (
					<tr key={athlete.name}>
						<td>{athlete.name}</td>
						<td>{athlete.age}</td>
						<td>{athlete.teamHistory}</td>
						<td>
							<TradeForm athlete={athlete} />
						</td>
						<td>
							<button
								type="button"
								style={{ width: "100%" }}
								onClick={() => athlete.wishHappyBirthday()}
							>
								Wish happy birthday
							</button>
						</td>
					</tr>
				);
			})}
		</table>
	);
};

// observer - this component is listening into some state values from "observable" state (in Athlete.ts) & it should update whenever those values ("name", "age") will be updated.
export default observer(Roster);
