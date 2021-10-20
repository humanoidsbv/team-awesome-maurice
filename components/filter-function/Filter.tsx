import React from "react";

import * as Styled from "./Filter.styled";
import { ClientInterface } from "../../types/form-interfaces";

export interface FilterProps {
  setActiveFilter?: (filter: string) => void;
  clients: ClientInterface[];
}

const Filter = ({ clients, setActiveFilter }: FilterProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveFilter(event.target.value);
  };

  return (
    <Styled.FilterSelectGroup name="clients" onChange={handleChange}>
      <Styled.FilterSelectOption value="">All clients</Styled.FilterSelectOption>
      {clients.map((client) => (
        <Styled.FilterSelectOption value={client.name} key={client.id}>
          {client.name}
        </Styled.FilterSelectOption>
      ))}
    </Styled.FilterSelectGroup>
  );
};

export default Filter;
