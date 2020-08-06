import { createContext } from "react";

const ListContext = createContext();

export const ListProvider = ListContext.Provider;
export const ListConsumer = ListContext.Consumer;

export default ListContext;
