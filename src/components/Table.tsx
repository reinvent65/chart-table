import { useCallback, useRef, useState, useContext, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { DataContext } from '../DataProvider';

const Table = () => {
    const gridRef = useRef<any>();
    const dataContext = useContext(DataContext);
    const rowData: Array<object> | undefined = dataContext?.data;
    const [columnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

    const sizeToFit = useCallback(() => {
        gridRef.current.api.sizeColumnsToFit();
    }, []);

    const onGridReady = useCallback(() => {
        sizeToFit()
    }, []);

    const defaultColDef = useMemo(() => {
        return {
          resizable: true,
        };
    }, []);

    return (
        <div className="ag-theme-alpine" style={{ width: '100%', height: 400 }}>
            <AgGridReact
                ref={gridRef}
                className="ag-grid ag-theme-alpine"
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}>
            </AgGridReact>
        </div>
    );
}

export default Table;