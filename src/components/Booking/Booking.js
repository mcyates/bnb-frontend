import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Mutation } from "react-apollo";
import { addDays, differenceInDays, format } from "date-fns";

import { CREATEBOOKING } from "../../mutations/CREATEBOOKING";
import "react-datepicker/dist/react-datepicker.css";

export const Booking = (props) => {
	const later = addDays(new Date(), 7);

	let [startDate, setStartDate] = useState(new Date());
	let [endDate, setEndDate] = useState(later);
	const tripPrice = differenceInDays(endDate, startDate) * props.price;
	const { booking } = props;
	return (
		<>
			<Mutation
				mutation={CREATEBOOKING}
				onCompleted={(e) => {
					console.log(e.createBooking);
				}}
			>
				{(createBooking, { loading, error }) => {
					if (props.booking === null) {
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
											setStartDate(new Date(e));
										}}
									/>
									<DatePicker
										selected={endDate}
										selectsEnd
										startDate={startDate}
										endDate={endDate}
										minDate={addDays(new Date(), 1)}
										onChange={(e) => {
											setEndDate(e);
										}}
									/>
									<button className="btn-form" type="submit">
										Submit
									</button>
								</form>
								{`Trip Price: ${tripPrice}$`}
							</>
						);
					} else if (props.booking !== null) {
						return (
							<div>
								<h4>{`Booked from ${format(
									booking.startDate,
									"MM/DD/YYYY"
								)} to ${format(booking.endDate, "MM/DD/YYYY")}`}</h4>
							</div>
						);
					}
				}}
			</Mutation>
		</>
	);
};
