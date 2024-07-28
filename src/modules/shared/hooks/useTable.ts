import { ITableData, ITableModelAttr } from "@/main/interfaces/tableInterfaces";

export const useTable = <T extends unknown, M>(
  dataModel: M,
  tableData: T[],
  enableSection: boolean = false
) => {
  const getTableHeads = () => {
    const [values] = tableData;
    return Object.keys(values as object)
      .map((key) => getDataRowConfig(key))
      .filter((config) => config.show)
      .sort((a, b) => (a.order > b.order ? 1 : -1));
  };

  const getDataRowConfig = (field: string) => {
    const model = dataModel as unknown as Record<string, ITableModelAttr>;
    return model[field];
  };

  const configTableColumns = () => {
    return [...getTableHeads()]
      .filter((row) => row.show)
      .map((item, index) =>
        item?.width
          ? `${item.width}px`
          : enableSection && index === 0
          ? `45px`
          : `auto`
      )
      .join(" ");
  };

  const getTableValues = (data: ITableData) => {
    return Object.entries(data)
      .map(([key, data]) => ({
        key,
        value: data,
        config: getDataRowConfig(key),
      }))
      .filter((row) => row.config.show)
      .sort((a, b) => (a.config.order > b.config.order ? 1 : -1));
  };

  return {
    getTableHeads,
    getTableValues,
    getDataRowConfig,
    configTableColumns,
  };
};
