import type { Meta, StoryObj } from "@storybook/react";

import type { ComponentProps, ComponentType } from "react";

import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
	component: DatePicker,
	title: "Components/Date Picker",
	args: {},
	argTypes: {
		// don't show JS/React specific props
		onChange: { table: { disable: true } },
	},
};
export default meta;

type DatePickerStoryArgs = ComponentProps<typeof DatePicker> & {
	header: string;
};
type Story = StoryObj<DatePickerStoryArgs>;

const Template: Story = {
	args: {
		header: "Date Picker Example",
	},
	render: ({ header = "Date Picker Example", ...rest }) => {
		// TODO: not sure how to deal with this
		// const [startDate, setStartDate] = useState(new Date());

		return (
			<main>
				<h1>{header}</h1>

				<DatePicker {...rest} />
			</main>
		);
	},
};

export const Basic = {
	...Template,
	name: "Basic usage",
	args: { header: "Basic usage" },
};

export const AsRTL: Story = {
	...Template,
	name: "As RTL",
	args: { header: "Date Picker when in RTL mode" },
	decorators: [
		(Story: ComponentType) => (
			<div dir="rtl">
				<Story />
			</div>
		),
	],
};

export const DarkMode: Story = {
	...Template,
	name: "Dark mode",
	args: { header: "Date Picker in dark mode" },
	decorators: [
		(Story: ComponentType) => (
			<div className="neo-global-colors neo-dark" style={{ padding: "2rem" }}>
				<Story />
			</div>
		),
	],
};
