import { Autocomplete, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export function SingleValueFilter({ name, placeholder, label, options }) {
  const value = useSelector((state) => state.filters[name]);
  const dispatch = useDispatch();

  return (
    <div>
      {typeof value !== "string" && (
        <Typography variant="subtitle2">{label}</Typography>
      )}
      <Autocomplete
        size="small"
        options={options}
        getOptionLabel={(option) => (option === "" ? "" : option.label)}
        value={value}
        onChange={(_, newValue) => {
          dispatch({
            type: "UPDATE_FILTER",
            payload: {
              filterName: name,
              filterValue: newValue ?? "",
            },
          });
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            sx={{ minWidth: placeholder.length + 8 + "ch" }}
          />
        )}
      />
    </div>
  );
}
