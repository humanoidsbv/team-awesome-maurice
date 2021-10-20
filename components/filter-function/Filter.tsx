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
    <Styled.FilterSelect name="clients" onChange={handleChange}>
      <Styled.FilterOption value="">All clients</Styled.FilterOption>
      {clients.map((client) => (
        <Styled.FilterOption value={client.name} key={client.id}>
          {client.name}
        </Styled.FilterOption>
      ))}
    </Styled.FilterSelect>
  );
};

export default Filter;
