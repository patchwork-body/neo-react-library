import { useState } from "react";

import "./InclusiveDates";
import "./DatePicker.css";

export interface DatePickerProps {
	value?: Date;
	format?: "YYYYMMDD" | "mm / dd / yyyy" | "MM/DD/YYYY" | string;

	onChange?: (date: null | Date) => void;

	// translations
	label?: string;
}

export const DatePicker = ({
	value = new Date(),
	// format = "mm / dd / yyyy",
	label = "Date",

	onChange = () => {
		throw new Error("onChange not implemented");
	},
}: DatePickerProps) => {
	const [date, setDate] = useState<null | Date>(value);

	return (
		<div className="neo-datepicker-root temp">
			{/* <ReactDatePicker
				aria-label={label}
				selected={date}
				showIcon
				icon="neo-icon-calendar"
				onChange={(date) => {
					setDate(date);
					onChange(date);
				}}
			/> */}
			<inclusive-dates id="datepicker" locale="en-US" label="ping" range />
		</div>
	);
};
