import React from "react";

export const Hero = () => (
	<div className="hero">
		<div className="booking">
			<h1>Book unique homes and experiences.</h1>

			<div className="input__where__container">
				<span className="span-block">Where</span>
				<input
					className="booking__input"
					type="text"
					autoFocus="autoFocus"
					autoComplete="off"
					autoCorrect="off"
					spellCheck="false"
					name="query"
					placeholder="Anywhere"
				/>
			</div>

			<div className="input__check__container">
				<span className="span-block">Check-in</span>
				<input
					className="booking__input input__check__container__item__left"
					type="text"
					name="checkout"
					placeholder="mm/dd/yyyy"
					readOnly="readOnly"
				/>
			</div>

			<div className="input__check__container">
				<span className="span-block">Checkout</span>
				<input
					className="booking__input input__check__container__item__right"
					type="text"
					name="checkout"
					placeholder="mm/dd/yyyy"
					readOnly="readOnly"
				/>
			</div>

			<div className="input__guest__container">
				<span className="span-block">Guests</span>
				<input
					className="booking__input"
					type="text"
					name="guest"
					placeholder="Guests"
					readOnly="readOnly"
				/>
			</div>

			<div>
				<div id="input__search__container">
					<button id="input__search__button" type="submit">
						<span>Search</span>
					</button>
				</div>
      </div>

		</div>
	</div>
);
