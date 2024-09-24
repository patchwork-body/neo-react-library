import { InclusiveDates } from "inclusive-dates/dist/components/inclusive-dates";

// Importing a theme is optional.
import "inclusive-dates/dist/themes/light.css";

customElements.define("inclusive-dates", InclusiveDates);

declare global {
	export namespace JSX {
		interface IntrinsicElements {
			"inclusive-dates": LocalJSX.InclusiveDates &
				JSXBase.HTMLAttributes<HTMLInclusiveDatesElement>;
			"inclusive-dates-calendar": LocalJSX.InclusiveDatesCalendar &
				JSXBase.HTMLAttributes<HTMLInclusiveDatesCalendarElement>;
			"inclusive-dates-modal": LocalJSX.InclusiveDatesModal &
				JSXBase.HTMLAttributes<HTMLInclusiveDatesModalElement>;
		}
	}
}
