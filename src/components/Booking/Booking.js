import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Mutation } from "react-apollo";

import { CREATEBOOKING } from "../../mutations/CREATEBOOKING";
import "react-datepicker/dist/react-datepicker.css";

export const Booking = (props) => {
	const later = new Date().setDate(new Date().getDate() + 7);

	let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(later);
	const totalPrice = Math.round(
		(new Date(endDate).getTime() - new Date(startDate).getTime()) /
			(1000 * 60 * 60 * 24)
  );
  
	return (
		<>
			<Mutation
				mutation={CREATEBOOKING}
				onCompleted={(e) => {
					console.log(e.createBooking);
				}}
			>
				{(createBooking, { loading, error }) => {
					return (
						<>
							{loading && <p>Loading...</p>}
							{error && <p>error</p>}
							<form
								onSubmit={(e) => {
									e.preventDefault();
									createBooking({
										variables: {
											listing: props.id,
											data: {
												startDate: new Date(startDate).toISOString(),
												endDate: new Date(endDate).toISOString()
											}
										}
									});
								}}
							>
								<DatePicker
									selected={startDate}
									selectsStart
									startDate={startDate}
									endDate={endDate}
									minDate={new Date()}
									maxDate={new Date(later).setDate(
										new Date(later).getDate() - 1
									)}
									onChange={(e) => {
										setStartDate(new Date(startDate.setDate(e.getDate())));
									}}
								/>
								<DatePicker
									selected={endDate}
									selectsEnd
									startDate={startDate}
									endDate={endDate}
									minDate={new Date(startDate).setDate(
										new Date().getDate() + 1
									)}
									onChange={(e) => {
										endDate = new Date(endDate);
										setEndDate(new Date(endDate.setDate(e.getDate())));
									}}
								/>
								<button className="btn-form" type="submit">
									Submit
								</button>
							</form>
							{`Trip Price: ${totalPrice}$`}
						</>
					);
				}}
			</Mutation>
		</>
	);
};
