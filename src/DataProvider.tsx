import { createContext, useState } from 'react';
import API from './Services/API';
import { useQuery } from 'react-query';


export interface ProviderProps {
    children: any
}
interface DataContextType {
    data?: Array<object>,
    loading: boolean
}
export const DataContext = createContext<DataContextType | undefined>(undefined);
export const DataProvider = (props: ProviderProps) => {
    const { children } = props;
    const [loading] = useState<boolean>(false);
    const { data } = useQuery(['getData'], () => API.getData());

    return (
        <DataContext.Provider
            value={{ data, loading }}
        >
            {children}
        </DataContext.Provider>
    )
}