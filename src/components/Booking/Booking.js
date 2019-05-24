import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { Mutation } from "react-apollo";
import { addDays, differenceInDays, format, max } from "date-fns";

import { CREATEBOOKING } from "../../mutations/CREATEBOOKING";
import "react-datepicker/dist/react-datepicker.css";
import { GET_LISTING } from "../../queries/GET_LISTING";

export const Booking = (props) => {
	const { bookings } = props;

	let [startDate, setStartDate] = useState(new Date());
	const later = addDays(startDate, 7);
	let [endDate, setEndDate] = useState(later);
	const tripPrice = differenceInDays(endDate, startDate) * props.price;
	let endDateArr = [];
	bookings.forEach((booking) => {
		endDateArr.push(booking.endDate);
	});
	let [newestDate, setNewestDate] = useState(max(...endDateArr))
	// let newestDate = max(...endDateArr);
	let [endDate2, setEndDate2] = useState(addDays(new Date(newestDate), 7))

	return (
		<>
			<Mutation
				mutation={CREATEBOOKING}
				onCompleted={(e) => {
					console.log(e.createBooking);
				}}
				refetchQueries={[
					{
						query: GET_LISTING,
						variables: {
							id: props.id
						}
					}
				]}
			>
				{(createBooking, { loading, error }) => {
					if (bookings.length === 0) {
						return (
							<React.Fragment>
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
										selected={newestDate}
										selectsStart
										startDate={newestDate}
										endDate={endDate}
										minDate={new Date()}
										maxDate={new Date(later).setDate(
											new Date(later).getDate() - 1
										)}
										onChange={(e) => {
											setStartDate(new Date(e));
										}}
										showDisabledMonthNavigation
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
										showDisabledMonthNavigation
									/>
									<button className="btn-form" type="submit">
										Submit
									</button>
								</form>
								{`Trip Price: ${tripPrice}$`}
							</React.Fragment>
						);
					} else if (bookings.length > 0) {
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
										selected={newestDate}
										selectsStart
										startDate={new Date(newestDate)}
										endDate={endDate2}
										minDate={new Date(newestDate)}
										maxDate={endDate2}
										onChange={(e) => {
											setNewestDate(new Date(e));
										}}
										showDisabledMonthNavigation
									/>
									<DatePicker
										selected={endDate2}
										selectsEnd
										startDate={newestDate}
										endDate={endDate2}
										minDate={addDays(new Date(newestDate), 1)}
										onChange={(e) => {
											setEndDate2(e);
										}}
										showDisabledMonthNavigation
									/>
									<button className="btn-form" type="submit">
										Submit
									</button>
								</form>
								{`Trip Price: ${tripPrice}$`}
								<h4>
									{bookings.map((booking) => {
										return `Booked from ${format(
											booking.startDate,
											"MM/DD/YYYY"
										)} to ${format(booking.endDate, "MM/DD/YYYY")} \n`
									})}
								</h4>
							</>
						);
					}
				}}
			</Mutation>
		</>
	);
};
