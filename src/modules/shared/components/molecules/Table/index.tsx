import React from "react";
import * as Styles from "./styles";
import { useTable } from "@/modules/shared/hooks/useTable";
import { ITableData } from "@/main/interfaces/tableInterfaces";

interface TableProps<T, M> {
  data: Array<T>;
  dataModel: M;
  enableSection: boolean;
}

const Table = <T extends unknown, M>(props: TableProps<T, M>) => {
  const { configTableColumns, getTableHeads, getTableValues } = useTable<T, M>(
    props.dataModel,
    props.data,
    props.enableSection
  );

  const setRowIndex = (rowIndex: number) =>
    props.enableSection ? rowIndex + 1 : rowIndex;

  return (
    <Styles.Container
      dataLength={props.data.length}
      columnWidth={configTableColumns()}
    >
      <Styles.Thead>
        {props.enableSection && (
          <Styles.Th rowIndex={0} isFixed>
            <input type="checkbox" name="" id="" />
          </Styles.Th>
        )}
        {getTableHeads()
          .concat([props.dataModel.actions])
          .map(
            (head, index) =>
              head && (
                <Styles.Th
                  key={index}
                  rowIndex={setRowIndex(index)}
                  isFixed={head.fixed}
                >
                  {head.label}
                </Styles.Th>
              )
          )}
      </Styles.Thead>
      {props.data.map((data, index) => (
        <Styles.Row key={index} className="row" style={{ gridRowStart: index }}>
          {props.enableSection && (
            <Styles.Td rowIndex={0} isFixed>
              <input type="checkbox" name="" id="" />
            </Styles.Td>
          )}

          {getTableValues(data as ITableData)
            .concat([
              {
                config: {
                  show: true,
                  ...props.dataModel.actions,
                },
                key: "actions",
                value: "string",
              },
            ])
            .map(
              (value, index) =>
                value.config.show && (
                  <Styles.Td
                    rowIndex={setRowIndex(index)}
                    isFixed={value.config.fixed}
                  >
                    {value.config?.render?.(value) ?? value.value}
                  </Styles.Td>
                )
            )}
        </Styles.Row>
      ))}
    </Styles.Container>
  );
};

export default Table;
