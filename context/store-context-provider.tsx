import React, { createContext, useState } from "react";

import { TimeEntryInterface } from "../components/interface";

interface StoreContextProps {
	timeEntries: [
		timeEntries: TimeEntryInterface[],
		setTimeEntries: Function
	]
}

interface StoreProviderProps {
	children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextProps>(null);

export const StoreProvider = ({ children }: StoreProviderProps) => {
	const store = {
		timeEntries: useState([]),
	};

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
};


