import React, { useContext, useEffect, useState } from "react";

import { getClients } from "../services/client-api";
import { getTimeEntries, createTimeEntry } from "../services/time-entries-api";
import { NotFoundError } from "../services/not-found-error";
import { StoreContext } from "../context/store-context-provider";
import AddIcon from "../components/add-icon/AddIconWrapper";
import Button from "../components/button/Button";
import EntryForm from "../components/entry-form/EntryForm";
import FetchErrorMessage from "../components/error-handling/ErrorMessage";
import Filter from "../components/filter-function/Filter";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import PageWrapper from "../components/page-wrapper/PageWrapper";
import Subheader from "../components/subheader/Subheader";
import TimeEntries from "../components/time-entries/TimeEntries";

export interface ErrorMessageProps {
  error: string;
  submessage: string;
  type: "error" | "empty";
}

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState("");
  const [clients, setClients] = useState([]);
  const [errorMessage, setErrorMessage] = useState<ErrorMessageProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timeEntries, setTimeEntries] = useContext(StoreContext).timeEntries;

  const filteredTimeEntries = timeEntries.filter((timeEntry) =>
    activeFilter === "" ? true : timeEntry.client === activeFilter,
  );

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const fetchClients = async () => {
    const response = await getClients();
    setClients(response);
  };

  const fetchTimeEntries = async () => {
    const response = await getTimeEntries();

    if (response instanceof NotFoundError) {
      setErrorMessage({
        error: "Oops... Something went wrong while loading your data 😭",
        submessage: "Please try again later, or contact your developer at developer@humanoids.nl",
        type: "error",
      });
      return;
    }

    if (response.length === 0) {
      setErrorMessage({
        error: "No entries have been found yet",
        submessage: "Enter your first Time Entry 🤓",
        type: "empty",
      });
    }
    setTimeEntries(response);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchTimeEntries();
    fetchClients();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const addNewTimeEntry = async (newTimeEntry: object) => {
    setIsLoading(true);
    await createTimeEntry(newTimeEntry);
    await fetchTimeEntries();
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      <Header />
      <Subheader description={`${timeEntries.length} entries`} title="Time entries" />
      <PageWrapper>
        {!isOpen && (
          <Button primary fullWidth isHiddenOnDesktop onClick={handleClick}>
            <AddIcon />
            New Time Entry
          </Button>
        )}
        <Filter clients={clients} setActiveFilter={setActiveFilter} />
        <EntryForm isOpen={isOpen} onClose={handleClick} onSubmit={addNewTimeEntry} />
        {isLoading && <Loading />}
        {!isLoading && timeEntries.length && (
          <TimeEntries
            fetchTimeEntries={fetchTimeEntries}
            filteredTimeEntries={filteredTimeEntries}
          />
        )}
        {!isLoading && !timeEntries.length && <FetchErrorMessage message={errorMessage} />}
      </PageWrapper>
    </>
  );
};

export default HomePage;
