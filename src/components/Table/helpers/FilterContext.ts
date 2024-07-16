import { createContext } from "react";

import type { IFilterContext } from "../types";

export const FilterContext = createContext<IFilterContext>({
	allowColumnFilter: false,
	filterSheetVisible: false,
	draggableRows: false,
	setFilterSheetVisible: () => null,
	toggleFilterSheetVisible: () => null,
});
