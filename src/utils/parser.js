import Papa from "papaparse";

const parser = (data) =>
  Papa.parse(data, { delimiter: ",", header: true }).data;

export default parser;
